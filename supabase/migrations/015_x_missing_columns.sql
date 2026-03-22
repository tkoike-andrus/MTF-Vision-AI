-- Add missing X (Twitter) columns that were not included in 013
ALTER TABLE bot_configs
  ADD COLUMN IF NOT EXISTS x_bearer_token text,
  ADD COLUMN IF NOT EXISTS x_client_id text,
  ADD COLUMN IF NOT EXISTS x_client_secret text;
