-- 008: Add chart_image_url to trade_analyses + auto-cleanup to keep max 10 per user
-- chart_image_url stores base64 data URL of the chart screenshot used for vision analysis
-- ALREADY EXECUTED

ALTER TABLE trade_analyses ADD COLUMN IF NOT EXISTS chart_image_url TEXT;

-- Function to keep only the latest 10 analyses per user (auto-cleanup)
CREATE OR REPLACE FUNCTION cleanup_old_trade_analyses()
RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM trade_analyses
  WHERE id IN (
    SELECT id FROM trade_analyses
    WHERE user_id = NEW.user_id
    ORDER BY created_at DESC
    OFFSET 10
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger: after insert, clean up old records
DROP TRIGGER IF EXISTS trg_cleanup_trade_analyses ON trade_analyses;
CREATE TRIGGER trg_cleanup_trade_analyses
  AFTER INSERT ON trade_analyses
  FOR EACH ROW
  EXECUTE FUNCTION cleanup_old_trade_analyses();
