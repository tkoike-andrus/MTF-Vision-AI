/**
 * System Common Prompt — appended to every user strategy prompt.
 * This is NOT editable by users. It enforces a standardized JSON output
 * format required for auto-trade execution.
 */

export const SYSTEM_TRADE_PROMPT = `
## 出力ルール（システム共通・編集不可）

以下のJSON形式で必ず出力してください。このルールはすべての戦略に共通です。

\`\`\`json
{
  "action": "BUY" | "SELL" | "HOLD" | "EXIT" | "WAIT",
  "confidence": 0.0〜1.0,
  "reason": "判断理由（1-2文）",
  "entry_price": 数値 or null,
  "stop_loss": 数値 or null,
  "take_profit": 数値 or null
}
\`\`\`

### actionの定義
- **BUY**: 新規買いエントリー（ポジションなし時のみ）
- **SELL**: 新規売りエントリー（ポジションなし時のみ）
- **HOLD**: 現在のポジションを維持（ポジション保有中のみ）。維持根拠をreasonに必ず記載すること。
- **EXIT**: 現在のポジションを決済（ポジション保有中のみ）。決済理由をreasonに必ず記載すること。
- **WAIT**: 何もしない（ポジションなし時のみ）

### 制約ルール
- confidence < 0.6 の場合: ポジションなし → WAIT、ポジション保有中 → HOLD
- ポジションなし時: BUY / SELL / WAIT のみ許可（HOLD / EXIT は禁止）
- ポジション保有中: HOLD / EXIT のみ許可（BUY / SELL / WAIT は禁止）
- entry_price / stop_loss / take_profit は BUY / SELL 時のみ設定（それ以外はnull）
- reason は日本語で記述すること
- reason には必ず「どの足種（M5/H1/H4/Daily）」の情報を根拠にしたかを明記すること（例：「H4の黄緑水平線に到達」「H1でピンクラインから反発」）
- 提供されたチャート画像に存在しない時間足（M15等）を根拠に含めないこと。分析は提供された画像の時間足のみを使用すること
`.trim();

/**
 * Build the full prompt by combining user strategy + system rules.
 * Position context is injected between the two.
 */
export function buildFullPrompt(
  userPrompt: string,
  positionContext: string | null
): string {
  const parts = [userPrompt];

  if (positionContext) {
    parts.push(positionContext);
  }

  parts.push(SYSTEM_TRADE_PROMPT);

  return parts.join("\n\n");
}

/**
 * Build position context string for injection into the prompt.
 */
export function buildPositionContext(
  position: "BUY" | "SELL" | null,
  entryPrice: number | null,
  entryAt: string | null
): string | null {
  if (!position) {
    return "【現在のポジション状態】\n- ステータス: ノーポジション";
  }

  const holdDuration = entryAt
    ? Math.floor((Date.now() - new Date(entryAt).getTime()) / 60000)
    : 0;
  const durationStr =
    holdDuration >= 60
      ? `${Math.floor(holdDuration / 60)}時間${holdDuration % 60}分`
      : `${holdDuration}分`;

  return [
    "【現在のポジション状態】",
    `- ステータス: ${position}保有中`,
    `- エントリー価格: ${entryPrice}`,
    `- 保有時間: ${durationStr}`,
  ].join("\n");
}
