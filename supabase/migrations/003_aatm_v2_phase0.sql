-- AATM v2.1 Phase 0 Migration
-- Adds user profiles, trade uploads, trade analyses tables
-- Adds user_id to existing tables
-- Enables RLS on all tables

-- ============================================================
-- 1. New Tables
-- ============================================================

-- profiles: extends auth.users with app-specific settings
CREATE TABLE IF NOT EXISTS public.profiles (
  id                    UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name          TEXT,
  plan                  TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'standard', 'expert')),
  risk_config           JSONB DEFAULT '{"loss_tolerance": 3, "max_drawdown_pct": 5, "losing_streak_lock": 5}'::jsonb,
  ai_agent_type         TEXT CHECK (ai_agent_type IN ('guardian', 'assault', 'eclipse')),
  ai_agent_name         TEXT,
  api_key_enc           TEXT,  -- AES-256 encrypted GMO API key
  api_secret_enc        TEXT,  -- AES-256 encrypted GMO API secret
  onboarding_completed  BOOLEAN NOT NULL DEFAULT FALSE,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- trade_uploads: tracks CSV upload / API fetch sessions
CREATE TABLE IF NOT EXISTS public.trade_uploads (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  source      TEXT NOT NULL CHECK (source IN ('csv_sbi', 'api_gmo')),
  filename    TEXT,
  trade_count INTEGER NOT NULL DEFAULT 0,
  status      TEXT NOT NULL DEFAULT 'parsed' CHECK (status IN ('parsed', 'saved', 'analyzed')),
  uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- trade_analyses: AI diagnosis results
CREATE TABLE IF NOT EXISTS public.trade_analyses (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  upload_id       UUID REFERENCES trade_uploads(id),
  analysis_type   TEXT NOT NULL DEFAULT 'losing_pattern' CHECK (analysis_type IN ('losing_pattern', 'winning_pattern', 'vision_chart')),
  analysis_text   TEXT NOT NULL,
  patterns        JSONB,
  ai_model        TEXT NOT NULL,
  prompt_version  TEXT,
  token_count     INTEGER,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- 2. Modify Existing Tables (add user_id)
-- ============================================================

ALTER TABLE trades ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id);
ALTER TABLE trades ADD COLUMN IF NOT EXISTS upload_id UUID REFERENCES trade_uploads(id);
ALTER TABLE monthly_stats ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id);

-- Indexes for user_id lookups
CREATE INDEX IF NOT EXISTS idx_trades_user_id ON trades(user_id);
CREATE INDEX IF NOT EXISTS idx_trade_uploads_user_id ON trade_uploads(user_id);
CREATE INDEX IF NOT EXISTS idx_trade_analyses_user_id ON trade_analyses(user_id);
CREATE INDEX IF NOT EXISTS idx_monthly_stats_user_id ON monthly_stats(user_id);

-- ============================================================
-- 3. Row Level Security
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE trades ENABLE ROW LEVEL SECURITY;
ALTER TABLE trade_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE trade_uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE trade_analyses ENABLE ROW LEVEL SECURITY;
ALTER TABLE monthly_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE entry_reasons ENABLE ROW LEVEL SECURITY;

-- profiles: users see/edit only their own
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- trades: users see/edit only their own
CREATE POLICY "Users can view own trades" ON trades FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own trades" ON trades FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own trades" ON trades FOR UPDATE USING (auth.uid() = user_id);

-- trade_scores: via trade ownership
CREATE POLICY "Users can view own trade scores" ON trade_scores FOR SELECT
  USING (EXISTS (SELECT 1 FROM trades WHERE trades.id = trade_scores.trade_id AND trades.user_id = auth.uid()));
CREATE POLICY "Users can insert own trade scores" ON trade_scores FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM trades WHERE trades.id = trade_scores.trade_id AND trades.user_id = auth.uid()));

-- trade_uploads: users see only their own
CREATE POLICY "Users can view own uploads" ON trade_uploads FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own uploads" ON trade_uploads FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own uploads" ON trade_uploads FOR UPDATE USING (auth.uid() = user_id);

-- trade_analyses: users see only their own
CREATE POLICY "Users can view own analyses" ON trade_analyses FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own analyses" ON trade_analyses FOR INSERT WITH CHECK (auth.uid() = user_id);

-- monthly_stats: users see only their own
CREATE POLICY "Users can view own monthly stats" ON monthly_stats FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own monthly stats" ON monthly_stats FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own monthly stats" ON monthly_stats FOR UPDATE USING (auth.uid() = user_id);

-- entry_reasons: public read (reference data)
CREATE POLICY "Anyone can read entry reasons" ON entry_reasons FOR SELECT USING (true);

-- ============================================================
-- 4. Auto-create profile on user signup
-- ============================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id) VALUES (NEW.id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if any, then create
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
