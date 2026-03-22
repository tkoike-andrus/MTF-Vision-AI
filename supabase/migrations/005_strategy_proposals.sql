-- ============================================================
-- AATM v2.2 - Strategy Proposals + Settings Enhancement
-- ============================================================

-- Add user_id to strategies for custom user strategies
ALTER TABLE strategies ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;
ALTER TABLE strategies ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE strategies ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();

-- Update built-in strategies with actual prompt templates
-- (will be done via application code, not SQL)

-- Strategy modification proposals from AI diagnosis
CREATE TABLE IF NOT EXISTS strategy_proposals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  strategy_name TEXT NOT NULL,
  analysis_id UUID REFERENCES trade_analyses(id) ON DELETE SET NULL,
  original_prompt TEXT NOT NULL,
  proposed_prompt TEXT NOT NULL,
  change_summary TEXT NOT NULL,
  reason TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  reviewed_at TIMESTAMPTZ
);

-- Add Discord & X settings to profiles
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS discord_webhook_url TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS discord_user_id TEXT;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS x_enabled BOOLEAN NOT NULL DEFAULT false;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_strategy_proposals_user ON strategy_proposals(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_strategy_proposals_status ON strategy_proposals(status);
CREATE INDEX IF NOT EXISTS idx_strategies_user ON strategies(user_id);

-- RLS
ALTER TABLE strategy_proposals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own proposals" ON strategy_proposals FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Service role manages proposals" ON strategy_proposals FOR ALL USING (auth.role() = 'service_role');

-- Allow users to manage their own strategies
CREATE POLICY "Users read all strategies" ON strategies FOR SELECT USING (true);
CREATE POLICY "Users manage own strategies" ON strategies FOR ALL USING (user_id = auth.uid() OR is_builtin = true);
CREATE POLICY "Service role manages strategies" ON strategies FOR ALL USING (auth.role() = 'service_role');
ALTER TABLE strategies ENABLE ROW LEVEL SECURITY;
