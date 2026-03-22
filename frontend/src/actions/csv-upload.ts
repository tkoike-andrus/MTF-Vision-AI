"use server";

import { parseSbiCsv, isSbiCsv } from "@/lib/parsers/sbi-parser";
import type { ParsedTrade } from "@/lib/parsers/types";

export interface ParseResult {
  success: boolean;
  trades: ParsedTrade[];
  broker: string;
  error?: string;
}

export async function parseCSV(formData: FormData): Promise<ParseResult> {
  const file = formData.get("file") as File | null;
  if (!file) {
    return { success: false, trades: [], broker: "", error: "ファイルが選択されていません" };
  }

  try {
    const buffer = await file.arrayBuffer();

    // Try UTF-8 first, fallback to Shift-JIS
    let text: string;
    try {
      const utf8 = new TextDecoder("utf-8", { fatal: true });
      text = utf8.decode(buffer);
      // Strip BOM
      if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);
    } catch {
      const sjis = new TextDecoder("shift-jis");
      text = sjis.decode(buffer);
    }

    // Auto-detect broker
    if (isSbiCsv(text)) {
      const trades = parseSbiCsv(text);
      return { success: true, trades, broker: "SBI" };
    }

    return {
      success: false,
      trades: [],
      broker: "",
      error: "対応していないCSVフォーマットです。",
    };
  } catch (err) {
    return {
      success: false,
      trades: [],
      broker: "",
      error: `CSV解析エラー: ${err instanceof Error ? err.message : "不明なエラー"}`,
    };
  }
}
