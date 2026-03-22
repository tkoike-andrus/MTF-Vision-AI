-- 007: Add trade_type to distinguish auto vs manual trades
-- auto = bot-executed trades, manual = CSV/OCR uploaded discretionary trades

ALTER TABLE trades ADD COLUMN IF NOT EXISTS trade_type TEXT NOT NULL DEFAULT 'manual'
  CHECK (trade_type IN ('auto', 'manual'));

-- Add stop_loss_order_id to bot_states for tracking the protective stop order
ALTER TABLE bot_states ADD COLUMN IF NOT EXISTS stop_loss_order_id TEXT;
ALTER TABLE bot_states ADD COLUMN IF NOT EXISTS position_id TEXT;

-- Index for filtering by trade_type
CREATE INDEX IF NOT EXISTS idx_trades_trade_type ON trades (user_id, trade_type, exit_at_utc DESC);

-- Update trade_uploads source to support new source types
ALTER TABLE trade_uploads DROP CONSTRAINT IF EXISTS trade_uploads_source_check;
