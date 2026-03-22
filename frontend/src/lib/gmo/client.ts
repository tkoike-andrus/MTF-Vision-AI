import CryptoJS from "crypto-js";
import type { GmoApiResponse } from "./types";

const ENDPOINT = "https://forex-api.coin.z.com/private";

/**
 * Create HMAC-SHA256 signature for GMO API authentication
 * GET:  timestamp + method + path
 * POST: timestamp + method + path + body
 */
function createSignature(
  timestamp: string,
  method: string,
  path: string,
  secretKey: string,
  body?: string
): string {
  const text = timestamp + method + path + (body || "");
  return CryptoJS.HmacSHA256(text, secretKey).toString(CryptoJS.enc.Hex);
}

/**
 * Make an authenticated GET request to GMO Coin FX Private API
 */
export async function gmoGet(
  path: string,
  apiKey: string,
  apiSecret: string,
  params?: Record<string, string>
): Promise<GmoApiResponse> {
  const timestamp = String(Date.now());
  const method = "GET";
  const sign = createSignature(timestamp, method, path, apiSecret);

  const headers: Record<string, string> = {
    "API-KEY": apiKey,
    "API-TIMESTAMP": timestamp,
    "API-SIGN": sign,
  };

  const url = new URL(ENDPOINT + path);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const response = await fetch(url.toString(), { headers });

  if (!response.ok) {
    throw new Error(`GMO API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Make an authenticated POST request to GMO Coin FX Private API
 */
export async function gmoPost(
  path: string,
  apiKey: string,
  apiSecret: string,
  body: Record<string, unknown>
): Promise<GmoApiResponse> {
  const timestamp = String(Date.now());
  const method = "POST";
  const bodyStr = JSON.stringify(body);
  const sign = createSignature(timestamp, method, path, apiSecret, bodyStr);

  const headers: Record<string, string> = {
    "API-KEY": apiKey,
    "API-TIMESTAMP": timestamp,
    "API-SIGN": sign,
    "Content-Type": "application/json",
  };

  const response = await fetch(ENDPOINT + path, {
    method: "POST",
    headers,
    body: bodyStr,
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`GMO API POST error: ${response.status} ${errText}`);
  }

  return response.json();
}

// Backward compatibility alias
export const gmoRequest = gmoGet;
