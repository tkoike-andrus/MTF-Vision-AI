import Papa from "papaparse";
import { cleanValue } from "./clean-value";
import { jstToUtc } from "@/lib/utils/date";
import type { ParsedTrade } from "./types";

interface SbiRow {
  [key: string]: string;
}

/**
 * Parse SBI FX Trade CSV into ParsedTrade[]
 * SBI CSV has multiline cells (newlines inside quoted fields).
 */
export function parseSbiCsv(csvText: string): ParsedTrade[] {
  const parsed = Papa.parse<SbiRow>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  if (parsed.errors.length > 0) {
    console.warn("SBI CSV parse warnings:", parsed.errors);
  }

  const rows = parsed.data;
  if (rows.length === 0) return [];

  // Normalize header keys (strip newlines and carriage returns)
  const normalizeKey = (key: string) => key.replace(/[\n\r]/g, "").trim();
  const getField = (row: SbiRow, ...candidates: string[]): string => {
    for (const key of Object.keys(row)) {
      const nk = normalizeKey(key);
      if (candidates.includes(nk)) return row[key] || "";
    }
    return "";
  };

  // Separate settlements (決済) and entries (新規)
  const settlements: SbiRow[] = [];
  const entries: SbiRow[] = [];

  for (const row of rows) {
    const type = getField(row, "新規決済");
    if (type.includes("決済")) {
      settlements.push(row);
    } else if (type.includes("新規")) {
      entries.push(row);
    }
  }

  const trades: ParsedTrade[] = [];

  for (const settlement of settlements) {
    const pair = getField(settlement, "通貨ペア").replace("/", "_");
    const side = getField(settlement, "売買");
    const orderId = getField(settlement, "注文番号");

    // Settlement price and quantity (multiline cell: "price\nqty")
    const priceQtyRaw = getField(settlement, "約定価格約定数量");
    const exitPrice = cleanValue(priceQtyRaw);
    const lotSize = cleanValue(priceQtyRaw.split("\n")[1]);

    // Target price for matching (multiline cell: "target_price\npips")
    const targetRaw = getField(settlement, "決済対象約定価格損益PIPS");
    const targetPrice = cleanValue(targetRaw);

    // P&L (multiline cell: "pnl\nswap")
    const pnlRaw = getField(settlement, "実現損益スワップポイント");
    const pnl = cleanValue(pnlRaw);

    // Settlement datetime (replace newline/CR with space for robust parsing)
    const exitDatetime = getField(settlement, "約定日時").replace(/[\n\r]/g, " ");

    // Match to entry by target price + pair
    const matchedEntry = entries.find((entry) => {
      const entryPair = getField(entry, "通貨ペア").replace("/", "_");
      const entryPriceQty = getField(entry, "約定価格約定数量");
      const entryPrice = cleanValue(entryPriceQty);
      return entryPair === pair && Math.abs(entryPrice - targetPrice) < 0.0001;
    });

    let entryPrice: number;
    let entryDatetime: string;

    if (matchedEntry) {
      const entryPriceQty = getField(matchedEntry, "約定価格約定数量");
      entryPrice = cleanValue(entryPriceQty);
      entryDatetime = getField(matchedEntry, "約定日時").replace(/[\n\r]/g, " ");
      // Remove matched entry to avoid duplicate matching
      const idx = entries.indexOf(matchedEntry);
      if (idx > -1) entries.splice(idx, 1);
    } else {
      // Fallback: use target price as entry price
      entryPrice = targetPrice;
      entryDatetime = exitDatetime;
    }

    const tradeSide: "Buy" | "Sell" = side.includes("買") ? "Sell" : "Buy";

    trades.push({
      broker_trade_id: orderId || `SBI_${Date.now()}_${trades.length}`,
      broker: "SBI",
      pair,
      side: tradeSide,
      entry_price: entryPrice,
      exit_price: exitPrice,
      pnl,
      lot_size: lotSize || null,
      entry_at_utc: jstToUtc(entryDatetime),
      exit_at_utc: jstToUtc(exitDatetime),
    });
  }

  return trades;
}

/**
 * Detect if CSV text is SBI format
 * Fixed: Headers contain internal newlines which split("\n") breaks.
 */
export function isSbiCsv(csvText: string): boolean {
  // Check first 2000 chars without splitting, which is more robust to internal newlines
  const head = csvText.slice(0, 2000);
  return (
    head.includes("注文番号") && 
    head.includes("約定日時") && 
    head.includes("通貨ペア")
  );
}