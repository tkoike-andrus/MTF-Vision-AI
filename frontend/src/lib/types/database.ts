export interface Profile {
  id: string;
  display_name: string | null;
  plan: "free" | "standard" | "expert";
  risk_config: RiskConfig;
  ai_agent_type: "guardian" | "assault" | "eclipse" | null;
  ai_agent_name: string | null;
  api_key_enc: string | null;
  api_secret_enc: string | null;
  onboarding_completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface RiskConfig {
  loss_tolerance: number;
  max_drawdown_pct: number;
  losing_streak_lock: number;
}

export interface EntryReason {
  id: string;
  code: string;
  label_ja: string;
  label_en: string;
  category: "technical" | "fundamental" | "emotional" | "custom";
  is_mistake: boolean;
  sort_order: number;
}

export interface Trade {
  id: string;
  user_id: string | null;
  upload_id: string | null;
  broker_trade_id: string;
  broker: string;
  pair: string;
  side: "Buy" | "Sell";
  entry_price: number;
  exit_price: number;
  pnl: number;
  lot_size: number | null;
  entry_at_utc: string;
  exit_at_utc: string;
  entry_reason_id: string | null;
  custom_reason: string | null;
  reason_note: string | null;
  discipline_score: number | null;
  is_rule_compliant: boolean | null;
  trade_type: "auto" | "manual";
  created_at: string;
  updated_at: string;
  // Joined data
  entry_reason?: EntryReason;
  trade_score?: TradeScore;
}

export interface TradeScore {
  id: string;
  trade_id: string;
  reason_validity: number;
  emotional_control: number;
  plan_adherence: number;
  risk_management: number;
  total_score: number;
  scored_at: string;
  scored_by: string;
}

export interface TradeUpload {
  id: string;
  user_id: string;
  source: "csv_sbi" | "api_gmo" | "ocr" | "auto_bot";
  filename: string | null;
  trade_count: number;
  status: "parsed" | "saved" | "analyzed";
  uploaded_at: string;
}

export interface TradeAnalysis {
  id: string;
  user_id: string;
  upload_id: string | null;
  analysis_type: "losing_pattern" | "winning_pattern" | "vision_chart";
  analysis_text: string;
  patterns: AnalysisPattern[] | null;
  ai_model: string;
  prompt_version: string | null;
  token_count: number | null;
  chart_images: { label: string; data_url: string }[] | null;
  created_at: string;
}

export interface AnalysisPattern {
  pattern_type: string;
  confidence: number;
  evidence: string;
  suggestion: string;
}

export interface MonthlyStats {
  id: string;
  user_id: string | null;
  month: string;
  pair: string | null;
  total_trades: number;
  winning_trades: number;
  losing_trades: number;
  total_pnl: number;
  avg_pnl: number;
  avg_discipline_score: number | null;
  mistake_trade_count: number;
  rule_compliant_count: number;
  rule_compliance_rate: number;
  reason_distribution: Record<string, number> | null;
  prev_month_compliance_rate: number | null;
}

export interface Strategy {
  id: string;
  name: string;
  display_name: string;
  description: string | null;
  prompt_template: string;
  category: string;
  is_builtin: boolean;
  is_active: boolean;
  output_format: "simple" | "detailed";
  user_id: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface StrategyProposal {
  id: string;
  user_id: string;
  strategy_name: string;
  analysis_id: string | null;
  original_prompt: string;
  proposed_prompt: string;
  change_summary: string;
  reason: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  reviewed_at: string | null;
}

export interface MarketData {
  id: string;
  pair: string;
  resolution: string;
  timestamp: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number | null;
}

export interface BotConfig {
  id: string;
  user_id: string;
  is_active: boolean;
  symbol: string;
  strategy_name: string;
  lot_size: number;
  max_positions: number;
  trade_start_hour: number;
  trade_end_hour: number;
  analysis_interval_min: number;
  discord_webhook_url: string | null;
  discord_user_id: string | null;
  gmo_api_key_enc: string | null;
  gmo_api_secret_enc: string | null;
  chart_image_folder: string | null;
  notification_enabled: boolean;
  // X (Twitter) posting
  x_enabled: boolean;
  x_bearer_token: string | null;
  x_consumer_key: string | null;
  x_consumer_secret: string | null;
  x_access_token: string | null;
  x_access_token_secret: string | null;
  x_client_id: string | null;
  x_client_secret: string | null;
  x_tweet_prompt: string | null;
  x_tweet_prompt_drama: string | null;
  x_tweet_preset: string;
  x_big_trade_threshold: number;
  created_at: string;
  updated_at: string;
}

export interface BotState {
  id: string;
  user_id: string;
  position: "BUY" | "SELL" | null;
  entry_price: number | null;
  entry_at: string | null;
  position_id: string | null;
  stop_loss_order_id: string | null;
  last_analysis_at: string | null;
  last_action: string | null;
  last_confidence: number | null;
  last_reason: string | null;
  last_business_date: string | null;
  consecutive_losses: number;
  daily_pnl: number;
  created_at: string;
  updated_at: string;
}

export interface TradeSignal {
  id: string;
  user_id: string;
  symbol: string;
  strategy_name: string;
  action: "BUY" | "SELL" | "WAIT" | "HOLD" | "EXIT";
  confidence: number;
  reason: string | null;
  current_price: number | null;
  ai_model: string;
  ai_response_json: Record<string, unknown> | null;
  chart_image_url: string | null;
  position_status: string | null;
  executed: boolean;
  execution_result: Record<string, unknown> | null;
  created_at: string;
}

export interface AutoTradeOrder {
  id: string;
  user_id: string;
  signal_id: string | null;
  gmo_order_id: string | null;
  gmo_position_id: string | null;
  symbol: string;
  side: "BUY" | "SELL";
  status: "OPEN" | "CLOSED_AI" | "CLOSED_MANUAL" | "CLOSED_SL";
  entry_price: number | null;
  exit_price: number | null;
  lot_size: number;
  pnl: number | null;
  opened_at: string;
  closed_at: string | null;
  created_at: string;
  updated_at: string;
}
