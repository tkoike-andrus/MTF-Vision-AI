/**
 * Clean a Japanese CSV value that may contain newlines, commas, dashes.
 * Port of Python base.py clean_val()
 */
export function cleanValue(val: string | null | undefined, toInt = false): number {
  if (!val || val === "-" || val.trim() === "") return 0;
  // Take first line only (SBI embeds multiline in cells)
  const s = val.split("\n")[0].replace(/,/g, "").trim();
  if (s === "-" || s === "") return 0;
  const f = parseFloat(s);
  if (isNaN(f)) return 0;
  return toInt ? Math.floor(f) : f;
}
