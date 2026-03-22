/**
 * Convert JST datetime string to UTC ISO string
 * Handles format: "2026/03/02\n08:49:29" or "2026/03/02 08:49:29"
 */
export function jstToUtc(jstDateStr: string): string {
  // Normalize: replace newlines with space, trim
  const normalized = jstDateStr.replace(/\n/g, " ").trim();
  // Parse as JST (UTC+9)
  const date = new Date(normalized + "+09:00");
  return date.toISOString();
}

/**
 * Format a number as Japanese Yen
 */
export function formatJpy(amount: number): string {
  const prefix = amount >= 0 ? "+" : "";
  return `${prefix}${amount.toLocaleString("ja-JP")}円`;
}

/**
 * Format percentage
 */
export function formatPct(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`;
}
