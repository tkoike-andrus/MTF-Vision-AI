/**
 * Gemini Vision Engine — MTF Vision AI
 * Analyzes chart images with strategy prompts.
 * Supports model fallback: Gemini 2.5 Pro → Gemini 2.0 Flash
 */

const MODELS = [
  "gemini-3.1-pro-preview",
  "gemini-2.5-pro",
  "gemini-2.0-flash",
] as const;

export interface VisionAnalysisResult {
  action: "BUY" | "SELL" | "WAIT" | "HOLD" | "EXIT";
  confidence: number;
  reason: string;
  stop_loss: number | null;
  take_profit: number | null;
  entry_price: number | null;
  rawResponse: string;
  parsedJson: Record<string, unknown> | null;
  model: string;
}

interface GeminiPart {
  text?: string;
  inlineData?: {
    mimeType: string;
    data: string;
  };
}

/**
 * Analyze chart image(s) with Gemini Vision API
 * @param apiKey Gemini API key
 * @param prompt Strategy prompt text
 * @param chartImageBase64 Primary chart image (base64, optional)
 * @param additionalImages Additional chart images for MTF analysis (base64 array)
 * @param mimeType Image MIME type (default: image/png)
 */
export async function analyzeChart(
  apiKey: string,
  prompt: string,
  chartImageBase64?: string,
  additionalImages?: string[],
  mimeType: string = "image/png"
): Promise<VisionAnalysisResult> {
  let lastError: Error | null = null;

  // Build images array: if additionalImages provided, use that (it's the full MTF set)
  // Otherwise use single image if provided
  const images = additionalImages && additionalImages.length > 0
    ? additionalImages
    : chartImageBase64 ? [chartImageBase64] : [];

  for (const model of MODELS) {
    try {
      const result = await callGemini(apiKey, model, prompt, images, mimeType);
      return result;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      console.warn(`Gemini ${model} failed:`, lastError.message);

      // Retry on 404 (model not found), 429 (rate limit), 503 (service unavailable)
      if (lastError.message.includes("404") || lastError.message.includes("429") || lastError.message.includes("503")) {
        continue;
      }
      // For other errors, don't retry
      throw lastError;
    }
  }

  throw lastError || new Error("All Gemini models failed");
}

async function callGemini(
  apiKey: string,
  model: string,
  prompt: string,
  chartImages: string[] = [],
  mimeType: string = "image/png"
): Promise<VisionAnalysisResult> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const parts: GeminiPart[] = [{ text: prompt }];

  for (const img of chartImages) {
    parts.push({
      inlineData: {
        mimeType,
        data: img,
      },
    });
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts }],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 4096,
        responseMimeType: "application/json",
      },
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API ${response.status}: ${errText}`);
  }

  const data = await response.json();
  const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

  // Parse JSON from response
  let parsedJson: Record<string, unknown> | null = null;
  let action: VisionAnalysisResult["action"] = "WAIT";
  let confidence = 0;
  let reason = "";
  let stop_loss: number | null = null;
  let take_profit: number | null = null;
  let entry_price: number | null = null;

  try {
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      parsedJson = JSON.parse(jsonMatch[0]);

      // Extract common fields (handle both simple and detailed formats)
      if (parsedJson) {
        // Simple format: { action, confidence, reason }
        if (parsedJson.action) {
          action = String(parsedJson.action).replace(/\s/g, "").split("/")[0] as VisionAnalysisResult["action"];
        }
        if (parsedJson.confidence !== undefined) {
          confidence = Number(parsedJson.confidence);
        }
        if (parsedJson.reason) {
          reason = String(parsedJson.reason);
        }

        // Extract stop_loss / take_profit / entry_price
        if (parsedJson.stop_loss !== undefined && parsedJson.stop_loss !== null) {
          stop_loss = Number(parsedJson.stop_loss);
        }
        if (parsedJson.take_profit !== undefined && parsedJson.take_profit !== null) {
          take_profit = Number(parsedJson.take_profit);
        }
        if (parsedJson.entry_price !== undefined && parsedJson.entry_price !== null) {
          entry_price = Number(parsedJson.entry_price);
        }

        // Detailed format (PriceAction): { trade_setup: { action, reason }, confidence }
        const tradeSetup = parsedJson.trade_setup as Record<string, unknown> | undefined;
        if (tradeSetup) {
          if (tradeSetup.action) {
            action = String(tradeSetup.action).replace(/\s/g, "").split("/")[0] as VisionAnalysisResult["action"];
          }
          if (tradeSetup.reason) {
            reason = String(tradeSetup.reason);
          }
          if (tradeSetup.score !== undefined) {
            confidence = Number(tradeSetup.score) / 100;
          }
          // Also check trade_setup for SL/TP
          if (tradeSetup.stop_loss !== undefined && tradeSetup.stop_loss !== null && !stop_loss) {
            stop_loss = Number(tradeSetup.stop_loss);
          }
          if (tradeSetup.take_profit !== undefined && tradeSetup.take_profit !== null && !take_profit) {
            take_profit = Number(tradeSetup.take_profit);
          }
        }
      }
    }
  } catch {
    // JSON parsing failed, use raw text
    reason = responseText.slice(0, 500);
  }

  return {
    action,
    confidence,
    reason,
    stop_loss,
    take_profit,
    entry_price,
    rawResponse: responseText,
    parsedJson,
    model,
  };
}

/**
 * Summarize economic indicators using Gemini Flash
 */
export async function summarizeEconomicInfo(
  apiKey: string,
  rawIndicators: string
): Promise<string> {
  if (!rawIndicators || rawIndicators.trim() === "") {
    return "本日の重要経済指標はありません";
  }

  const prompt = `以下の経済指標データから、FXトレード（特にUSD/JPY）に大きな影響を与える★★★レベルの指標のみ抽出し、日本時間で簡潔にまとめてください。

${rawIndicators}

出力形式: 箇条書きで「[HH:MM] 指標名 - 影響度」のフォーマット。重要指標がない場合は「重要指標なし」と出力。`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 1024 },
    }),
  });

  if (!response.ok) return rawIndicators;

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || rawIndicators;
}
