-- Ensure ALL X (Twitter) columns exist in bot_configs
-- This migration is idempotent (IF NOT EXISTS) and consolidates all X-related columns
ALTER TABLE bot_configs
  ADD COLUMN IF NOT EXISTS x_enabled boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS x_bearer_token text,
  ADD COLUMN IF NOT EXISTS x_consumer_key text,
  ADD COLUMN IF NOT EXISTS x_consumer_secret text,
  ADD COLUMN IF NOT EXISTS x_access_token text,
  ADD COLUMN IF NOT EXISTS x_access_token_secret text,
  ADD COLUMN IF NOT EXISTS x_client_id text,
  ADD COLUMN IF NOT EXISTS x_client_secret text,
  ADD COLUMN IF NOT EXISTS x_tweet_prompt text,
  ADD COLUMN IF NOT EXISTS x_tweet_prompt_drama text,
  ADD COLUMN IF NOT EXISTS x_big_trade_threshold integer DEFAULT 10000;
