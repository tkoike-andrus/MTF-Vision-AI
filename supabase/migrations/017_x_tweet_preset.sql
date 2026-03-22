-- Store which tweet preset style is selected (casual/pro/neta/dokuzetu)
ALTER TABLE bot_configs
  ADD COLUMN IF NOT EXISTS x_tweet_preset text DEFAULT 'casual';
