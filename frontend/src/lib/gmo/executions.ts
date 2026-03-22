import { gmoRequest } from "./client";
import type { GmoExecution } from "./types";
import type { ParsedTrade } from "@/lib/parsers/types";

/**
 * Fetch executions from GMO Coin FX API and convert to ParsedTrade[]
 * Uses /v1/latestExecutions (symbol required) or /v1/executions (orderId/executionId required)
 */
export async function fetchGmoExecutions(
  apiKey: string,
  apiSecret: string,
  options?: { executionId?: string; orderId?: string; symbol?: string; count?: number }
): Promise<ParsedTrade[]> {
  let response;

  if (options?.orderId) {
    // Use /v1/executions with orderId for specific order
    response = await gmoRequest("/v1/executions", apiKey, apiSecret, {
      orderId: options.orderId,
    });
  } else if (options?.executionId) {
    // Use /v1/executions with executionId
    response = await gmoRequest("/v1/executions", apiKey, apiSecret, {
      executionId: options.executionId,
    });
  } else if (options?.symbol) {
    // Use /v1/latestExecutions with symbol (no orderId/executionId needed)
    const params: Record<string, string> = { symbol: options.symbol };
    if (options.count) params.count = String(options.count);
    response = await gmoRequest("/v1/latestExecutions", apiKey, apiSecret, params);
  } else {
    throw new Error("fetchGmoExecutions requires orderId, executionId, or symbol parameter");
  }

  if (response.status !== 0) {
    const msgs = (response as { messages?: Array<{ message_code: string; message_string: string }> }).messages;
    const detail = msgs?.map(m => `[${m.message_code}] ${m.message_string}`).join(", ") || "";
    throw new Error(`GMO API returned status ${response.status}${detail ? ` | ${detail}` : ""}`);
  }

  return matchExecutionsToTrades((response.data.list || []) as GmoExecution[]);
}

/**
 * Match OPEN/CLOSE executions by positionId to construct trades
 */
function matchExecutionsToTrades(executions: GmoExecution[]): ParsedTrade[] {
  // Group by positionId
  const byPosition = new Map<number, { open?: GmoExecution; close?: GmoExecution }>();

  for (const exec of executions) {
    const existing = byPosition.get(exec.positionId) || {};
    if (exec.settleType === "OPEN") {
      existing.open = exec;
    } else if (exec.settleType === "CLOSE") {
      existing.close = exec;
    }
    byPosition.set(exec.positionId, existing);
  }

  const trades: ParsedTrade[] = [];

  const entries = Array.from(byPosition.entries());
  for (let i = 0; i < entries.length; i++) {
    const [, positionPair] = entries[i];
    const { open, close } = positionPair;

    // Need at least a CLOSE to have P&L info
    if (!close) continue;

    const entryExec = open || close; // fallback to close if no open found
    const side: "Buy" | "Sell" = entryExec.side === "BUY" ? "Buy" : "Sell";

    trades.push({
      broker_trade_id: `GMO_${close.executionId}`,
      broker: "GMO",
      pair: close.symbol, // Already in USD_JPY format
      side,
      entry_price: open ? parseFloat(open.price) : parseFloat(close.price),
      exit_price: parseFloat(close.price),
      pnl: parseFloat(close.lossGain),
      lot_size: parseFloat(close.size),
      entry_at_utc: open ? open.timestamp : close.timestamp,
      exit_at_utc: close.timestamp,
    });
  }

  // Sort by exit time descending (newest first)
  trades.sort(
    (a, b) => new Date(b.exit_at_utc).getTime() - new Date(a.exit_at_utc).getTime()
  );

  return trades;
}
