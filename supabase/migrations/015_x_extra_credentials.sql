-- Add remaining X API credential fields
ALTER TABLE bot_configs
  ADD COLUMN IF NOT EXISTS x_bearer_token text,
  ADD COLUMN IF NOT EXISTS x_client_id text,
  ADD COLUMN IF NOT EXISTS x_client_secret text;
