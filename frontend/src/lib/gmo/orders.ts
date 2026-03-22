import { gmoPost, gmoGet } from "./client";
import type { GmoApiResponse } from "./types";

/**
 * Fetch current ticker price from GMO FX Public API (no auth needed)
 * BUY position → BID (売値=決済価格), SELL position → ASK (買値=決済価格)
 * No position → ASK (新規買い基準)
 */
export async function getTickerPrice(symbol: string, position?: "BUY" | "SELL" | null): Promise<number | null> {
  try {
    const res = await fetch(`https://forex-api.coin.z.com/public/v1/ticker?symbol=${symbol}`);
    const data = await res.json();
    if (data.status === 0 && data.data?.length > 0) {
      const ticker = data.data[0];
      if (position === "BUY") return parseFloat(ticker.bid);
      if (position === "SELL") return parseFloat(ticker.ask);
      return parseFloat(ticker.ask);
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Place a market order on GMO Coin FX
 */
export async function placeMarketOrder(
  apiKey: string,
  apiSecret: string,
  symbol: string,
  side: "BUY" | "SELL",
  size: number
): Promise<GmoApiResponse> {
  return gmoPost("/v1/order", apiKey, apiSecret, {
    symbol,
    side,
    executionType: "MARKET",
    size: String(size),
  });
}

/**
 * Place a stop-loss order (STOP) to protect a position.
 * Used immediately after entry to set a safety net.
 *
 * @param positionId - The position to protect
 * @param stopPrice  - The price at which to trigger the stop loss
 */
export async function placeStopLossOrder(
  apiKey: string,
  apiSecret: string,
  symbol: string,
  side: "BUY" | "SELL",
  size: number,
  positionId: number,
  stopPrice: number
): Promise<GmoApiResponse> {
  // Stop loss closes the position → opposite side
  // GMO FX closeOrder: size must NOT be at top level (ERR-5214)
  // GMO FX STOP order requires "stopPrice" (not "price") with executionType: "STOP" (ERR-5211)
  const closeSide = side === "BUY" ? "SELL" : "BUY";
  return gmoPost("/v1/closeOrder", apiKey, apiSecret, {
    symbol,
    side: closeSide,
    executionType: "STOP",
    stopPrice: String(stopPrice),
    settlePosition: [{ positionId, size: String(size) }],
  });
}

/**
 * Place a limit (take-profit) close order for a position.
 */
export async function placeTakeProfitOrder(
  apiKey: string,
  apiSecret: string,
  symbol: string,
  side: "BUY" | "SELL",
  size: number,
  positionId: number,
  limitPrice: number
): Promise<GmoApiResponse> {
  // GMO FX closeOrder: size must NOT be at top level (ERR-5214)
  // GMO FX LIMIT order requires "limitPrice" (not "price")
  const closeSide = side === "BUY" ? "SELL" : "BUY";
  return gmoPost("/v1/closeOrder", apiKey, apiSecret, {
    symbol,
    side: closeSide,
    executionType: "LIMIT",
    limitPrice: String(limitPrice),
    settlePosition: [{ positionId, size: String(size) }],
  });
}

/**
 * Close a specific position on GMO Coin FX (market order)
 */
export async function closePosition(
  apiKey: string,
  apiSecret: string,
  symbol: string,
  side: "BUY" | "SELL",
  size: number,
  positionId: number
): Promise<GmoApiResponse> {
  // GMO FX closeOrder: size must NOT be at top level (ERR-5214)
  const closeSide = side === "BUY" ? "SELL" : "BUY";
  return gmoPost("/v1/closeOrder", apiKey, apiSecret, {
    symbol,
    side: closeSide,
    executionType: "MARKET",
    settlePosition: [{ positionId, size: String(size) }],
  });
}

/**
 * Close all positions for a symbol (market order).
 * Fetches open positions first, then closes each individually via /v1/closeOrder.
 * (GMO FX API does not have /v1/closeBulkOrder endpoint)
 */
export async function closeAllPositions(
  apiKey: string,
  apiSecret: string,
  symbol: string,
  side: "BUY" | "SELL",
  size: number
): Promise<GmoApiResponse> {
  // Step 1: Get open positions to find positionId
  const positionsRes = await gmoGet("/v1/openPositions", apiKey, apiSecret, { symbol });
  const positions = (positionsRes.data?.list || []) as Array<{ positionId: number; side: string; size: string }>;

  // Filter to matching side positions
  const matching = positions.filter(p => p.side === side);

  if (matching.length === 0) {
    // No positions to close — return a synthetic success
    return { status: 0, data: { message: "No matching positions to close" }, responsetime: new Date().toISOString() };
  }

  // Step 2: Close via /v1/closeOrder (no top-level size)
  const closeSide = side === "BUY" ? "SELL" : "BUY";
  const settlePosition = matching.map(p => ({
    positionId: p.positionId,
    size: String(Math.min(Number(p.size), size)),
  }));

  return gmoPost("/v1/closeOrder", apiKey, apiSecret, {
    symbol,
    side: closeSide,
    executionType: "MARKET",
    settlePosition,
  });
}

/**
 * Get open positions from GMO Coin FX
 */
export async function getOpenPositions(
  apiKey: string,
  apiSecret: string,
  symbol?: string
): Promise<GmoApiResponse> {
  const params: Record<string, string> = {};
  if (symbol) params.symbol = symbol;
  return gmoGet("/v1/openPositions", apiKey, apiSecret, params);
}

/**
 * Get order info by orderId to check status
 * Status values: WAITING, ORDERED, MODIFYING, CANCELED, EXECUTED, EXPIRED
 */
export async function getOrderStatus(
  apiKey: string,
  apiSecret: string,
  orderId: string
): Promise<GmoApiResponse> {
  return gmoGet("/v1/orders", apiKey, apiSecret, { orderId });
}

/**
 * Get active (pending) orders
 */
export async function getActiveOrders(
  apiKey: string,
  apiSecret: string,
  symbol: string
): Promise<GmoApiResponse> {
  return gmoGet("/v1/activeOrders", apiKey, apiSecret, { symbol });
}

/**
 * Cancel an order
 */
export async function cancelOrder(
  apiKey: string,
  apiSecret: string,
  orderId: string
): Promise<GmoApiResponse> {
  return gmoPost("/v1/cancelOrders", apiKey, apiSecret, {
    orderIds: [orderId],
  });
}

/**
 * Get account margin info
 */
export async function getAccountMargin(
  apiKey: string,
  apiSecret: string
): Promise<GmoApiResponse> {
  return gmoGet("/v1/account/margin", apiKey, apiSecret);
}
