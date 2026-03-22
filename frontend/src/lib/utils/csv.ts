/**
 * Read a CSV file handling Japanese encodings (UTF-8, Shift-JIS, UTF-8 BOM)
 */
export async function readCsvFile(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  // Check for UTF-8 BOM
  const hasBom = bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf;

  // Try UTF-8 first
  const utf8 = new TextDecoder("utf-8", { fatal: true });
  try {
    const text = utf8.decode(buffer);
    return hasBom ? text.slice(1) : text;
  } catch {
    // Fall back to Shift-JIS
    const sjis = new TextDecoder("shift-jis");
    return sjis.decode(buffer);
  }
}
