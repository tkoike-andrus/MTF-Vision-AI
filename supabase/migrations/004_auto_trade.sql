-- ============================================================
-- AATM v2.1 - Auto Trade & MTF Vision AI tables
-- ============================================================

-- Bot configuration per user
CREATE TABLE IF NOT EXISTS bot_configs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  is_active BOOLEAN NOT NULL DEFAULT false,
  symbol TEXT NOT NULL DEFAULT 'USD_JPY',
  strategy_name TEXT NOT NULL DEFAULT 'PriceAction_logic',
  lot_size NUMERIC(10,2) NOT NULL DEFAULT 1,
  max_positions INTEGER NOT NULL DEFAULT 1,
  trade_start_hour INTEGER NOT NULL DEFAULT 8,   -- JST
  trade_end_hour INTEGER NOT NULL DEFAULT 15,    -- JST
  analysis_interval_min INTEGER NOT NULL DEFAULT 5,
  discord_webhook_url TEXT,
  discord_user_id TEXT,
  gmo_api_key_enc TEXT,
  gmo_api_secret_enc TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Bot state (position tracking)
CREATE TABLE IF NOT EXISTS bot_states (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  position TEXT CHECK (position IN ('BUY', 'SELL', NULL)),
  entry_price NUMERIC(20,6),
  entry_at TIMESTAMPTZ,
  last_analysis_at TIMESTAMPTZ,
  last_action TEXT,
  last_confidence NUMERIC(3,2),
  last_reason TEXT,
  last_business_date DATE,
  consecutive_losses INTEGER NOT NULL DEFAULT 0,
  daily_pnl NUMERIC(20,2) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- AI trading signals (every analysis result)
CREATE TABLE IF NOT EXISTS trade_signals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  symbol TEXT NOT NULL,
  strategy_name TEXT NOT NULL,
  action TEXT NOT NULL CHECK (action IN ('BUY', 'SELL', 'WAIT', 'HOLD', 'EXIT')),
  confidence NUMERIC(3,2) NOT NULL DEFAULT 0,
  reason TEXT,
  current_price NUMERIC(20,6),
  ai_model TEXT NOT NULL,
  ai_response_json JSONB,
  chart_image_url TEXT,
  position_status TEXT,
  executed BOOLEAN NOT NULL DEFAULT false,
  execution_result JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Strategy templates (user-customizable)
CREATE TABLE IF NOT EXISTS strategies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  description TEXT,
  prompt_template TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'custom',
  is_builtin BOOLEAN NOT NULL DEFAULT true,
  output_format TEXT NOT NULL DEFAULT 'simple', -- 'simple' or 'detailed'
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_trade_signals_user_created ON trade_signals(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_trade_signals_action ON trade_signals(action, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bot_configs_active ON bot_configs(is_active) WHERE is_active = true;

-- Insert built-in strategies
INSERT INTO strategies (name, display_name, description, category, prompt_template, output_format) VALUES
  ('PriceAction_logic', 'プライスアクション (水島流)', '波の起点を重視した構造分析。ピンク/黄緑ラインの反発・ブレイクを判定', 'advanced', '', 'detailed'),
  ('trend_follow', 'トレンドフォロー', 'パーフェクトオーダー＋ブレイクアウトの順張り', 'basic', '', 'simple'),
  ('reversal_logic', '逆張りカウンター', '平均回帰と反転の捕捉。壁での反発を狙う', 'basic', '', 'simple'),
  ('short_term_logic', '短期モメンタム', '15分足/1時間足のモメンタム追随＋利確重視', 'basic', '', 'simple'),
  ('line_logic', 'ライントレード', 'ユーザー描画ライン＋MA環境認識の統合分析', 'advanced', '', 'detailed')
ON CONFLICT (name) DO NOTHING;

-- RLS Policies
ALTER TABLE bot_configs ENABLE ROW LEVEL SECURITY;
ALTER TABLE bot_states ENABLE ROW LEVEL SECURITY;
ALTER TABLE trade_signals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own bot_configs" ON bot_configs FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own bot_states" ON bot_states FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own trade_signals" ON trade_signals FOR ALL USING (auth.uid() = user_id);

-- Service role can manage all (for API routes)
CREATE POLICY "Service role manages bot_configs" ON bot_configs FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role manages bot_states" ON bot_states FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role manages trade_signals" ON trade_signals FOR ALL USING (auth.role() = 'service_role');
