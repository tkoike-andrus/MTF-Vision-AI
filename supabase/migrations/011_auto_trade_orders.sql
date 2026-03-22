-- 011: Auto Trade Orders — track GMO order/position IDs for state management
-- Solves: manual close detection, HOLD/EXIT lifecycle tracking

CREATE TABLE IF NOT EXISTS auto_trade_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  signal_id UUID REFERENCES trade_signals(id) ON DELETE SET NULL,
  gmo_order_id TEXT,
  gmo_position_id TEXT,
  symbol TEXT NOT NULL,
  side TEXT NOT NULL CHECK (side IN ('BUY', 'SELL')),
  status TEXT NOT NULL DEFAULT 'OPEN' CHECK (status IN ('OPEN', 'CLOSED_AI', 'CLOSED_MANUAL', 'CLOSED_SL')),
  entry_price NUMERIC,
  exit_price NUMERIC,
  lot_size NUMERIC NOT NULL,
  pnl NUMERIC,
  opened_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  closed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_auto_trade_orders_user_status ON auto_trade_orders(user_id, status);
CREATE INDEX idx_auto_trade_orders_gmo_position ON auto_trade_orders(gmo_position_id);

-- RLS
ALTER TABLE auto_trade_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own orders"
  ON auto_trade_orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Service role full access on auto_trade_orders"
  ON auto_trade_orders FOR ALL
  USING (true)
  WITH CHECK (true);
