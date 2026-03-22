export type BrokerType = "SBI" | "GMO" | "OCR";

export interface ParsedTrade {
  broker_trade_id: string;
  broker: BrokerType;
  pair: string;
  side: "Buy" | "Sell";
  entry_price: number;
  exit_price: number;
  pnl: number;
  lot_size: number | null;
  entry_at_utc: string; // ISO 8601
  exit_at_utc: string; // ISO 8601
}
