-- Add X (Twitter) API credentials and tweet prompt to bot_configs
ALTER TABLE bot_configs
  ADD COLUMN IF NOT EXISTS x_enabled boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS x_consumer_key text,
  ADD COLUMN IF NOT EXISTS x_consumer_secret text,
  ADD COLUMN IF NOT EXISTS x_access_token text,
  ADD COLUMN IF NOT EXISTS x_access_token_secret text,
  ADD COLUMN IF NOT EXISTS x_tweet_prompt text DEFAULT '以下のFX取引情報をもとに、Xに投稿する短い日本語ツイートを作成してください。
- 親しみやすく自然な口調で（AI感を出さない）
- 絵文字は1〜2個まで
- ハッシュタグは #FX自動売買 #AATM を末尾に付ける
- 140文字以内に収める

【取引情報】
{trade_info}';
