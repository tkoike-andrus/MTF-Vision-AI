-- ============================================================
-- Add chart_image_folder to bot_configs
-- Stores the local folder path where MT5 EA saves chart screenshots
-- ============================================================

ALTER TABLE bot_configs
  ADD COLUMN IF NOT EXISTS chart_image_folder TEXT;

-- Also add notification_enabled boolean (separate from webhook URL)
ALTER TABLE bot_configs
  ADD COLUMN IF NOT EXISTS notification_enabled BOOLEAN NOT NULL DEFAULT false;

COMMENT ON COLUMN bot_configs.chart_image_folder IS 'Local folder path for MT5 chart screenshots (e.g. C:\Users\...\MQL5\Files\AATM_Charts)';
COMMENT ON COLUMN bot_configs.notification_enabled IS 'Whether Discord notifications are enabled (webhook URL managed in settings)';
