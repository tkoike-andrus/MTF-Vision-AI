-- Add gemini_api_key column to bot_configs for per-user Gemini API key storage
ALTER TABLE bot_configs ADD COLUMN IF NOT EXISTS gemini_api_key TEXT;
