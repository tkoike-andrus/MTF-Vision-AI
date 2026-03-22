-- 009: Replace chart_image_url (single TEXT) with chart_images (JSONB array)
-- Stores all 4 MTF chart images as [{label, data_url}, ...]

ALTER TABLE trade_analyses ADD COLUMN IF NOT EXISTS chart_images JSONB;

-- Migrate existing data: convert single image to array format
UPDATE trade_analyses
SET chart_images = jsonb_build_array(
  jsonb_build_object('label', '5分足', 'data_url', chart_image_url)
)
WHERE chart_image_url IS NOT NULL AND chart_images IS NULL;

-- Drop the old column
ALTER TABLE trade_analyses DROP COLUMN IF EXISTS chart_image_url;
