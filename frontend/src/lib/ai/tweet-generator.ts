/**
 * Tweet Text Generator — Uses Gemini 2.5 Pro for natural Japanese tweet generation
 *
 * Two modes:
 *   "quick"  — 新規エントリー / 通常決済 / システムイベント: 140〜200文字
 *   "drama"  — 大勝ち / 大負け報告: 300〜500文字（ドラマ性・溜めのある語り）
 *
 * Actions:
 *   "BUY" / "SELL" / "EXIT"    — 取引イベント
 *   "START" / "STOP" / "ERROR" — システムイベント
 */

const TWEET_MODEL = "gemini-2.5-pro";

type TweetMode = "quick" | "drama";

type TweetAction = "BUY" | "SELL" | "EXIT" | "START" | "STOP" | "ERROR";

interface TradeInfo {
  action: TweetAction;
  symbol: string;
  confidence: number;
  reason: string;
  entryPrice?: number;
  exitPrice?: number;
  pnl?: number;
  side?: "BUY" | "SELL";
  holdDuration?: string;
}

/** Mode-specific generation parameters
 *  NOTE: maxOutputTokens must be high enough to cover Gemini 2.5 Pro's internal
 *  "thinking" tokens (which count against this limit) plus actual output.
 */
const MODE_CONFIG: Record<TweetMode, { temperature: number; maxOutputTokens: number; maxChars: number; minChars: number }> = {
  quick: { temperature: 0.8, maxOutputTokens: 4096, maxChars: 200, minChars: 100 },
  drama: { temperature: 1.0, maxOutputTokens: 8192, maxChars: 500, minChars: 280 },
};

/** Map action to label for {action} template variable */
const ACTION_LABELS: Record<TweetAction, string> = {
  BUY: "BUY（ロング）",
  SELL: "SELL（ショート）",
  EXIT: "EXIT（決済）",
  START: "START（Bot起動）",
  STOP: "STOP（Bot停止）",
  ERROR: "ERROR（エラー）",
};

/**
 * Build trade info text for the {trade_info} template variable
 */
function buildTradeInfoText(info: TradeInfo): string {
  const pair = info.symbol.replace("_", "/");
  const lines: string[] = [];

  switch (info.action) {
    case "BUY":
    case "SELL": {
      const direction = info.action === "BUY" ? "買い（ロング）" : "売り（ショート）";
      lines.push(`アクション: ${direction}エントリー`);
      lines.push(`通貨ペア: ${pair}`);
      if (info.entryPrice) lines.push(`エントリー価格: ${info.entryPrice}`);
      lines.push(`AI確信度: ${(info.confidence * 100).toFixed(0)}%`);
      lines.push(`根拠: ${info.reason.slice(0, 200)}`);
      break;
    }
    case "EXIT": {
      const direction = info.side === "BUY" ? "ロング" : "ショート";
      lines.push(`アクション: ${direction}ポジション決済`);
      lines.push(`通貨ペア: ${pair}`);
      if (info.entryPrice) lines.push(`エントリー: ${info.entryPrice}`);
      if (info.exitPrice) lines.push(`決済価格: ${info.exitPrice}`);
      if (info.pnl !== undefined) {
        const pnlStr = info.pnl >= 0 ? `+${info.pnl.toLocaleString()}` : info.pnl.toLocaleString();
        lines.push(`損益: ${pnlStr}円`);
        lines.push(`結果: ${info.pnl >= 0 ? "勝ち" : "負け"}`);
      }
      if (info.holdDuration) lines.push(`保有時間: ${info.holdDuration}`);
      lines.push(`根拠: ${info.reason.slice(0, 200)}`);
      break;
    }
    case "START":
      lines.push(`イベント: Bot起動`);
      lines.push(`通貨ペア: ${pair}`);
      lines.push(`詳細: ${info.reason}`);
      break;
    case "STOP":
      lines.push(`イベント: Bot停止`);
      lines.push(`通貨ペア: ${pair}`);
      lines.push(`詳細: ${info.reason}`);
      break;
    case "ERROR":
      lines.push(`イベント: システムエラー`);
      lines.push(`通貨ペア: ${pair}`);
      lines.push(`エラー内容: ${info.reason}`);
      break;
  }

  return lines.join("\n");
}

/**
 * Determine if this trade qualifies as a "big" trade
 */
export function isBigTrade(pnl: number | undefined, threshold: number): boolean {
  if (pnl === undefined) return false;
  return Math.abs(pnl) >= threshold;
}

/**
 * Generate tweet text using Gemini 2.5 Pro
 *
 * @param mode "quick" for entry/normal exit (140-200 chars), "drama" for big win/loss (300-500 chars)
 */
export async function generateTweetText(
  geminiApiKey: string,
  promptTemplate: string,
  tradeInfo: TradeInfo,
  mode: TweetMode = "quick"
): Promise<string> {
  const modeConf = MODE_CONFIG[mode];
  const tradeInfoText = buildTradeInfoText(tradeInfo);

  // Replace all supported template variables
  const pair = tradeInfo.symbol.replace("_", "/");
  const actionLabel = ACTION_LABELS[tradeInfo.action] || tradeInfo.action;
  const pnlStr = tradeInfo.pnl !== undefined
    ? (tradeInfo.pnl >= 0 ? `+${tradeInfo.pnl.toLocaleString()}` : tradeInfo.pnl.toLocaleString())
    : "—";

  const fullPrompt = promptTemplate
    .replace(/\{trade_info\}/g, tradeInfoText)
    .replace(/\{pair\}/g, pair)
    .replace(/\{action\}/g, actionLabel)
    .replace(/\{last_reason\}/g, tradeInfo.reason.slice(0, 300))
    .replace(/\{pnl\}/g, pnlStr)
    .replace(/\{mode\}/g, mode);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${TWEET_MODEL}:generateContent?key=${geminiApiKey}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: fullPrompt }] }],
        generationConfig: {
          temperature: modeConf.temperature,
          maxOutputTokens: modeConf.maxOutputTokens,
        },
      }),
    });

    if (!res.ok) {
      const errBody = await res.text().catch(() => "");
      console.error("Gemini tweet generation failed:", res.status, errBody);
      return buildFallbackTweet(tradeInfo, mode);
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      console.error("Gemini returned empty text, candidates:", JSON.stringify(data.candidates?.slice(0, 1)));
      return buildFallbackTweet(tradeInfo, mode);
    }

    // Clean up: remove Gemini preamble (e.g. "承知いたしました。\n---\n"), quotes, trim
    let tweet = text.trim();
    // Strip preamble before a "---" separator (Gemini often adds explanatory text before the actual tweet)
    const separatorIdx = tweet.indexOf("---");
    if (separatorIdx !== -1 && separatorIdx < 200) {
      tweet = tweet.slice(separatorIdx + 3).trim();
    }
    tweet = tweet.replace(/^["'`「」]|["'`「」]$/g, "").trim();

    // Truncate if exceeds mode's max character limit
    if (tweet.length > modeConf.maxChars) {
      const truncated = tweet.slice(0, modeConf.maxChars);
      const lastBreak = Math.max(
        truncated.lastIndexOf("。"),
        truncated.lastIndexOf("！"),
        truncated.lastIndexOf("\n")
      );
      tweet = lastBreak > modeConf.minChars
        ? truncated.slice(0, lastBreak + 1)
        : truncated;
    }

    return tweet;
  } catch (err) {
    console.error("Tweet generation error:", err);
    return buildFallbackTweet(tradeInfo, mode);
  }
}

/**
 * Fallback tweet when Gemini fails
 */
function buildFallbackTweet(info: TradeInfo, mode: TweetMode): string {
  const pair = info.symbol.replace("_", "/");
  const tags = "\n#AI #自動売買 #MTF";

  switch (info.action) {
    case "BUY":
    case "SELL": {
      const emoji = info.action === "BUY" ? "🟢" : "🔴";
      const dir = info.action === "BUY" ? "ロング" : "ショート";
      const price = info.entryPrice ? ` @${info.entryPrice}` : "";
      return `${emoji} ${pair} ${dir}エントリー${price}\nAI確信度${(info.confidence * 100).toFixed(0)}%${tags}`;
    }
    case "EXIT": {
      const pnlStr = info.pnl !== undefined
        ? info.pnl >= 0 ? `+${info.pnl.toLocaleString()}円` : `${info.pnl.toLocaleString()}円`
        : "";
      if (mode === "drama" && info.pnl !== undefined) {
        const emoji = info.pnl >= 0 ? "🔥" : "😤";
        const feeling = info.pnl >= 0
          ? `${pair}で${pnlStr}の利確。根拠通りの展開だった。こういう日があるから続けられる。`
          : `${pair}で${pnlStr}。正直キツい。でもルール通りの損切り。これも経験。`;
        return `${emoji} ${feeling}${tags}`;
      }
      const emoji = info.pnl !== undefined && info.pnl >= 0 ? "💰" : "📉";
      return `${emoji} ${pair} 決済 ${pnlStr}${tags}`;
    }
    case "START":
      return `[報告] ${pair}の自動売買を起動しました。社長は黙って座っていてください。${tags}`;
    case "STOP":
      return `[報告] ${pair}の自動売買を停止しました。社長、余計なことをしないでください。${tags}`;
    case "ERROR":
      return `[報告] ${pair}｜${info.reason.slice(0, 100)}${tags}`;
    default:
      return `[報告] ${pair} ${info.reason.slice(0, 100)}${tags}`;
  }
}

export type { TradeInfo, TweetMode, TweetAction };
