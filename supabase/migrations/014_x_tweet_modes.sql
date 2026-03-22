-- Add drama tweet prompt and big trade threshold
ALTER TABLE bot_configs
  ADD COLUMN IF NOT EXISTS x_tweet_prompt_drama text,
  ADD COLUMN IF NOT EXISTS x_big_trade_threshold integer DEFAULT 10000;
