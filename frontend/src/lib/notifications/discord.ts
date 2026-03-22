/**
 * Discord Webhook Notification System
 * Ported from AI-Trade discord_push.py
 */

interface DiscordEmbed {
  title: string;
  color: number;
  fields: { name: string; value: string; inline?: boolean | undefined }[];
  footer?: { text: string };
  timestamp?: string;
}

const COLOR_MAP: Record<string, number> = {
  BUY: 0x00ff00,   // Green
  SELL: 0xff0000,   // Red
  EXIT: 0xffa500,   // Orange
  HOLD: 0x3498db,   // Blue
  WAIT: 0x95a5a6,   // Gray
  INFO: 0x9b59b6,   // Purple
  ERROR: 0xe74c3c,  // Dark Red
};

/**
 * Send a message to Discord via webhook
 */
export async function sendDiscordMessage(
  webhookUrl: string,
  content: string,
  embed?: DiscordEmbed
): Promise<boolean> {
  if (!webhookUrl) return false;

  try {
    const payload: Record<string, unknown> = { content };
    if (embed) {
      payload.embeds = [embed];
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch (err) {
    console.error("Discord notification failed:", err);
    return false;
  }
}

/**
 * Create a trade signal embed
 */
export function createTradeEmbed(
  action: string,
  symbol: string,
  confidence: number,
  reason: string,
  positionStatus: string,
  price?: string,
  strategy?: string
): DiscordEmbed {
  const fields = [
    { name: "🎯 アクション", value: `**${action}**`, inline: true },
    { name: "💹 通貨ペア", value: symbol.replace("_", "/"), inline: true },
    { name: "📊 確信度", value: `${(confidence * 100).toFixed(0)}%`, inline: true },
  ];

  if (price) {
    fields.push({ name: "💰 現在レート", value: `¥${price}`, inline: true });
  }

  fields.push(
    { name: "📋 ポジション", value: positionStatus || "なし", inline: true },
    { name: "🧠 AIの根拠", value: reason.slice(0, 1000) || "—", inline: false }
  );

  if (strategy) {
    fields.push({ name: "📐 戦略", value: strategy, inline: true });
  }

  return {
    title: `📢 AATM シグナル: ${action}`,
    color: COLOR_MAP[action] || COLOR_MAP.INFO,
    fields,
    footer: { text: "AATM — Autonomous AI Trading Manager • MTF Vision AI" },
    timestamp: new Date().toISOString(),
  };
}

/**
 * Create a trade execution embed
 */
export function createExecutionEmbed(
  action: "ORDER_PLACED" | "POSITION_CLOSED" | "ORDER_FAILED",
  symbol: string,
  side: string,
  size: number,
  price?: string,
  pnl?: number,
  error?: string
): DiscordEmbed {
  const isSuccess = action !== "ORDER_FAILED";
  const titleMap = {
    ORDER_PLACED: "✅ 注文約定",
    POSITION_CLOSED: "🔄 ポジション決済",
    ORDER_FAILED: "❌ 注文失敗",
  };

  const fields = [
    { name: "方向", value: side, inline: true },
    { name: "通貨ペア", value: symbol.replace("_", "/"), inline: true },
    { name: "ロット", value: String(size), inline: true },
  ];

  if (price) {
    fields.push({ name: "価格", value: `¥${price}`, inline: true });
  }

  if (pnl !== undefined) {
    fields.push({
      name: "損益",
      value: `${pnl >= 0 ? "+" : ""}¥${pnl.toLocaleString()}`,
      inline: true,
    });
  }

  if (error) {
    fields.push({ name: "エラー", value: error, inline: false });
  }

  return {
    title: titleMap[action],
    color: isSuccess ? (pnl !== undefined && pnl >= 0 ? 0x00ff00 : 0xff0000) : 0xe74c3c,
    fields,
    footer: { text: "AATM Auto-Trade Engine" },
    timestamp: new Date().toISOString(),
  };
}

/**
 * Send bot status notification
 */
export async function sendBotStatusNotification(
  webhookUrl: string,
  userId: string | undefined,
  status: "started" | "stopped" | "error" | "heartbeat",
  message?: string
): Promise<boolean> {
  const statusEmoji = {
    started: "🟢",
    stopped: "🔴",
    error: "⚠️",
    heartbeat: "💓",
  };

  const statusText = {
    started: "Bot 起動",
    stopped: "Bot 停止",
    error: "エラー発生",
    heartbeat: "稼働確認",
  };

  const mention = userId ? `<@${userId}> ` : "";
  const content = `${mention}${statusEmoji[status]} **AATM ${statusText[status]}**`;

  const embed: DiscordEmbed = {
    title: `${statusEmoji[status]} ${statusText[status]}`,
    color: status === "error" ? COLOR_MAP.ERROR : COLOR_MAP.INFO,
    fields: [],
    footer: { text: "AATM — Autonomous AI Trading Manager" },
    timestamp: new Date().toISOString(),
  };

  if (message) {
    embed.fields.push({ name: "詳細", value: message });
  }

  return sendDiscordMessage(webhookUrl, content, embed);
}
