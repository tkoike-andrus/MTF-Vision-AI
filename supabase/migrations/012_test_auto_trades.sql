-- =============================================
-- Test Auto-Trade Data for MTF Chart Plotting
-- USD_JPY: 12 trades (mix of BUY/SELL, win/loss)
-- Timestamps: 2026-03 (recent, within market_data range)
-- =============================================

-- Use the first user found (single-user app)
DO $$
DECLARE
  v_user_id UUID;
BEGIN
  SELECT id INTO v_user_id FROM auth.users LIMIT 1;
  IF v_user_id IS NULL THEN
    RAISE NOTICE 'No user found, skipping test data insert';
    RETURN;
  END IF;

  -- Insert test auto trades
  INSERT INTO trades (
    user_id, broker_trade_id, broker, pair, side,
    entry_price, exit_price, pnl, lot_size,
    entry_at_utc, exit_at_utc,
    trade_type, discipline_score, is_rule_compliant,
    created_at, updated_at
  ) VALUES
  -- Trade 1: BUY win (3/3 morning session)
  (v_user_id, 'AUTO-20260303-001', 'GMO_AUTO', 'USD_JPY', 'Buy',
   149.250, 149.520, 2700, 10000,
   '2026-03-03T00:30:00Z', '2026-03-03T03:15:00Z',
   'auto', 82, true, NOW(), NOW()),

  -- Trade 2: SELL win (3/4 Tokyo session)
  (v_user_id, 'AUTO-20260304-001', 'GMO_AUTO', 'USD_JPY', 'Sell',
   149.680, 149.410, 2700, 10000,
   '2026-03-04T01:00:00Z', '2026-03-04T04:30:00Z',
   'auto', 78, true, NOW(), NOW()),

  -- Trade 3: BUY loss (3/5 London open)
  (v_user_id, 'AUTO-20260305-001', 'GMO_AUTO', 'USD_JPY', 'Buy',
   149.500, 149.320, -1800, 10000,
   '2026-03-05T08:00:00Z', '2026-03-05T09:45:00Z',
   'auto', 75, true, NOW(), NOW()),

  -- Trade 4: SELL win (3/6 NY session)
  (v_user_id, 'AUTO-20260306-001', 'GMO_AUTO', 'USD_JPY', 'Sell',
   149.150, 148.880, 2700, 10000,
   '2026-03-06T13:30:00Z', '2026-03-06T16:00:00Z',
   'auto', 85, true, NOW(), NOW()),

  -- Trade 5: BUY loss (3/7 Asian session)
  (v_user_id, 'AUTO-20260307-001', 'GMO_AUTO', 'USD_JPY', 'Buy',
   148.950, 148.780, -1700, 10000,
   '2026-03-07T02:00:00Z', '2026-03-07T04:00:00Z',
   'auto', 72, true, NOW(), NOW()),

  -- Trade 6: SELL win big (3/10 trend day)
  (v_user_id, 'AUTO-20260310-001', 'GMO_AUTO', 'USD_JPY', 'Sell',
   148.600, 147.950, 6500, 10000,
   '2026-03-10T01:00:00Z', '2026-03-10T08:00:00Z',
   'auto', 90, true, NOW(), NOW()),

  -- Trade 7: BUY win (3/11 bounce)
  (v_user_id, 'AUTO-20260311-001', 'GMO_AUTO', 'USD_JPY', 'Buy',
   148.100, 148.450, 3500, 10000,
   '2026-03-11T05:00:00Z', '2026-03-11T09:30:00Z',
   'auto', 80, true, NOW(), NOW()),

  -- Trade 8: SELL loss (3/12 false breakout)
  (v_user_id, 'AUTO-20260312-001', 'GMO_AUTO', 'USD_JPY', 'Sell',
   148.500, 148.720, -2200, 10000,
   '2026-03-12T07:00:00Z', '2026-03-12T08:30:00Z',
   'auto', 68, false, NOW(), NOW()),

  -- Trade 9: BUY win (3/13 morning)
  (v_user_id, 'AUTO-20260313-001', 'GMO_AUTO', 'USD_JPY', 'Buy',
   148.350, 148.680, 3300, 10000,
   '2026-03-13T00:00:00Z', '2026-03-13T03:00:00Z',
   'auto', 83, true, NOW(), NOW()),

  -- Trade 10: SELL win (3/14 evening)
  (v_user_id, 'AUTO-20260314-001', 'GMO_AUTO', 'USD_JPY', 'Sell',
   148.900, 148.550, 3500, 10000,
   '2026-03-14T10:00:00Z', '2026-03-14T14:00:00Z',
   'auto', 87, true, NOW(), NOW()),

  -- Trade 11: BUY loss (3/15 choppy market)
  (v_user_id, 'AUTO-20260315-001', 'GMO_AUTO', 'USD_JPY', 'Buy',
   148.600, 148.430, -1700, 10000,
   '2026-03-15T03:00:00Z', '2026-03-15T05:30:00Z',
   'auto', 70, true, NOW(), NOW()),

  -- Trade 12: SELL win (3/16 weekend before)
  (v_user_id, 'AUTO-20260316-001', 'GMO_AUTO', 'USD_JPY', 'Sell',
   148.750, 148.380, 3700, 10000,
   '2026-03-16T06:00:00Z', '2026-03-16T11:00:00Z',
   'auto', 88, true, NOW(), NOW())

  ON CONFLICT (broker_trade_id, broker) DO NOTHING;

  RAISE NOTICE 'Inserted 12 test auto trades for user %', v_user_id;
END $$;
