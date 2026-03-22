"use server";

import { createServiceRoleClient } from "@/lib/supabase/server";
import type { ParsedTrade } from "@/lib/parsers/types";

export interface SaveResult {
  success: boolean;
  saved_count: number;
  error?: string;
}

/**
 * Save parsed trades to the database.
 *
 * @param trades     - Array of parsed trades
 * @param userId     - User ID
 * @param source     - Upload source identifier
 * @param filename   - Optional filename for CSV uploads
 * @param tradeType  - "manual" (CSV/OCR/裁量) or "auto" (bot-executed)
 */
export async function saveTrades(
  trades: ParsedTrade[],
  userId: string,
  source: "csv_sbi" | "api_gmo" | "ocr" | "auto_bot",
  filename?: string,
  tradeType: "auto" | "manual" = "manual"
): Promise<SaveResult> {
  const supabase = createServiceRoleClient();

  try {
    // 1. Create upload record
    const { data: upload, error: uploadError } = await supabase
      .from("trade_uploads")
      .insert({
        user_id: userId,
        source,
        filename: filename || null,
        trade_count: trades.length,
        status: "saved",
      })
      .select("id")
      .single();

    if (uploadError) throw uploadError;

    // 2. Insert trades with upsert on broker_trade_id + broker
    const tradeRows = trades.map((t) => ({
      user_id: userId,
      upload_id: upload.id,
      broker_trade_id: t.broker_trade_id,
      broker: t.broker,
      pair: t.pair,
      side: t.side,
      entry_price: t.entry_price,
      exit_price: t.exit_price,
      pnl: t.pnl,
      lot_size: t.lot_size,
      entry_at_utc: t.entry_at_utc,
      exit_at_utc: t.exit_at_utc,
      trade_type: tradeType,
    }));

    const { error: tradesError } = await supabase
      .from("trades")
      .upsert(tradeRows, { onConflict: "broker_trade_id,broker" });

    if (tradesError) throw tradesError;

    return { success: true, saved_count: trades.length };
  } catch (err) {
    return {
      success: false,
      saved_count: 0,
      error: `保存エラー: ${err instanceof Error ? err.message : "不明なエラー"}`,
    };
  }
}
