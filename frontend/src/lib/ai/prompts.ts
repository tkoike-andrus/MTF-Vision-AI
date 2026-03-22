import type { TradeStats } from "@/lib/stats/calculate-stats";
import type { Trade } from "@/lib/types/database";

interface TradeSummary {
  stats: TradeStats;
  recentTrades: Trade[];
  losingStreaks: number[];
  winningStreaks: number[];
}

function buildTradeSummary(trades: Trade[]): TradeSummary {
  const sorted = [...trades].sort(
    (a, b) => new Date(a.exit_at_utc).getTime() - new Date(b.exit_at_utc).getTime()
  );

  // Calculate streaks
  const losingStreaks: number[] = [];
  const winningStreaks: number[] = [];
  let currentStreak = 0;
  let isWinning = true;

  for (const t of sorted) {
    const win = t.pnl > 0;
    if (win === isWinning) {
      currentStreak++;
    } else {
      if (currentStreak > 0) {
        (isWinning ? winningStreaks : losingStreaks).push(currentStreak);
      }
      isWinning = win;
      currentStreak = 1;
    }
  }
  if (currentStreak > 0) {
    (isWinning ? winningStreaks : losingStreaks).push(currentStreak);
  }

  // Import here would be circular, so inline basic stats
  const winning = sorted.filter((t) => t.pnl > 0);
  const losing = sorted.filter((t) => t.pnl < 0);
  const totalPnl = sorted.reduce((s, t) => s + t.pnl, 0);

  const stats: TradeStats = {
    total_trades: sorted.length,
    winning_trades: winning.length,
    losing_trades: losing.length,
    win_rate: sorted.length > 0 ? (winning.length / sorted.length) * 100 : 0,
    total_pnl: totalPnl,
    avg_pnl: sorted.length > 0 ? totalPnl / sorted.length : 0,
    max_profit: winning.length > 0 ? Math.max(...winning.map((t) => t.pnl)) : 0,
    max_loss: losing.length > 0 ? Math.min(...losing.map((t) => t.pnl)) : 0,
    max_drawdown: 0,
    profit_factor: 0,
    avg_discipline_score: null,
    mistake_trade_count: 0,
    rule_compliant_count: 0,
    rule_compliance_rate: 0,
  };

  return {
    stats,
    recentTrades: sorted.slice(-20),
    losingStreaks,
    winningStreaks,
  };
}

export function buildLosingPatternPrompt(trades: Trade[]): string {
  const { stats, recentTrades, losingStreaks } = buildTradeSummary(trades);

  const tradeLines = recentTrades
    .filter((t) => t.pnl < 0)
    .slice(-10)
    .map(
      (t) =>
        `${new Date(t.exit_at_utc).toLocaleString("ja-JP")} | ${t.pair} | ${t.side} | ${t.pnl.toLocaleString()}円`
    )
    .join("\n");

  return `あなたはFXトレーディング心理学の専門家です。日本のFX個人トレーダーの取引データを分析し、負け癖（行動パターン上の問題点）を診断してください。
**重要: JSON以外のテキストは一切出力しないでください。純粋なJSONオブジェクトのみを返してください。**

## トレーダーの統計情報
- 総トレード数: ${stats.total_trades}
- 勝率: ${stats.win_rate.toFixed(1)}%
- 総損益: ${stats.total_pnl.toLocaleString()}円
- 平均損益: ${Math.round(stats.avg_pnl).toLocaleString()}円
- 最大利益: ${stats.max_profit.toLocaleString()}円
- 最大損失: ${stats.max_loss.toLocaleString()}円
- 最長連敗: ${Math.max(...losingStreaks, 0)}回

## 直近の負けトレード
${tradeLines || "データなし"}

## 診断してほしい項目
1. **リベンジトレード**: 負け後すぐに大きなポジションを取る傾向
2. **FOMO**: 急騰/急落に飛び乗る傾向
3. **オーバートレード**: 取引回数が異常に多い時間帯
4. **損切り遅れ**: 平均損失が平均利益を大きく上回る
5. **時間帯の偏り**: 特定の不利な時間帯での取引
6. **通貨ペアの偏り**: 苦手なペアでの継続的な取引

## 出力フォーマット
以下のJSON形式で出力してください:
{
  "overall_assessment": "全体評価テキスト(200字程度)",
  "patterns": [
    {
      "pattern_type": "パターン名(revenge/fomo/overtrade/late_stoploss/bad_timing/wrong_pair)",
      "confidence": 0.0-1.0,
      "evidence": "根拠の説明",
      "suggestion": "具体的な改善提案"
    }
  ],
  "risk_score": 1-10,
  "action_plan": ["改善アクション1", "改善アクション2", "改善アクション3"]
}`;
}

export function buildWinningPatternPrompt(trades: Trade[]): string {
  const { stats, recentTrades, winningStreaks } = buildTradeSummary(trades);

  const tradeLines = recentTrades
    .filter((t) => t.pnl > 0)
    .slice(-10)
    .map(
      (t) =>
        `${new Date(t.exit_at_utc).toLocaleString("ja-JP")} | ${t.pair} | ${t.side} | +${t.pnl.toLocaleString()}円`
    )
    .join("\n");

  return `あなたはFXトレーディング分析の専門家です。日本のFX個人トレーダーの取引データを分析し、勝ちパターン（強みとエッジ）を特定してください。
**重要: JSON以外のテキストは一切出力しないでください。純粋なJSONオブジェクトのみを返してください。**

## トレーダーの統計情報
- 総トレード数: ${stats.total_trades}
- 勝率: ${stats.win_rate.toFixed(1)}%
- 総損益: ${stats.total_pnl.toLocaleString()}円
- 平均損益: ${Math.round(stats.avg_pnl).toLocaleString()}円
- 最大利益: ${stats.max_profit.toLocaleString()}円
- 最長連勝: ${Math.max(...winningStreaks, 0)}回

## 直近の勝ちトレード
${tradeLines || "データなし"}

## 分析してほしい項目
1. **得意な通貨ペア**: どのペアで最も勝てているか
2. **得意な時間帯**: いつトレードすると勝ちやすいか
3. **得意な方向**: 買い/売りどちらが得意か
4. **勝ちパターンの共通要素**: 勝ちトレードに共通する特徴
5. **リスクリワード**: 勝ちトレードの平均利益と損切り幅の関係

## 出力フォーマット
以下のJSON形式で出力してください:
{
  "overall_assessment": "強みの全体評価テキスト(200字程度)",
  "patterns": [
    {
      "pattern_type": "パターン名(best_pair/best_time/best_direction/winning_setup/good_rr)",
      "confidence": 0.0-1.0,
      "evidence": "根拠の説明",
      "suggestion": "このエッジをさらに伸ばすための提案"
    }
  ],
  "edge_score": 1-10,
  "action_plan": ["エッジ強化アクション1", "エッジ強化アクション2", "エッジ強化アクション3"]
}`;
}

export function buildVisionChartPrompt(
  tradeInfo: { pair: string; side: string; entry_price: number; exit_price: number; pnl: number } | null,
  timeframes?: string[]
): string {
  const tradeSection = tradeInfo
    ? `## トレード情報
- 通貨ペア: ${tradeInfo.pair}
- 方向: ${tradeInfo.side}
- エントリー価格: ${tradeInfo.entry_price}
- エグジット価格: ${tradeInfo.exit_price}
- 損益: ${tradeInfo.pnl >= 0 ? "+" : ""}${tradeInfo.pnl.toLocaleString()}円`
    : "## 注意\nトレード情報は未指定です。チャート画像のみで現在の相場状況を分析してください。";

  const tfLabels = timeframes && timeframes.length > 0
    ? timeframes.join("、")
    : "複数の時間足";

  const mtfSection = timeframes && timeframes.length > 1
    ? `## マルチタイムフレーム（MTF）分析の指示
添付画像は${tfLabels}の${timeframes.length}枚のチャートです。順番に添付されています。
**必ず全ての時間足を確認し、MTFの視点で統合的に分析してください。**

### MTF分析のポイント:
- **上位足（日足・4時間足）**: 大局的なトレンド方向、主要なサポレジ
- **中位足（1時間足）**: エントリータイミング、チャートパターン
- **下位足（5分足）**: 直近の値動き、モメンタム、短期的なプライスアクション
- **各時間足の整合性**: 上位足と下位足でトレンドが一致しているか（MTF Confluence）
- **ダイバージェンス**: 時間足間でトレンドが乖離している場合、その意味と対処法`
    : "";

  const analysisItems = tradeInfo
    ? `1. **MTF統合分析**: 各時間足から読み取れるトレンドの方向性と整合性
2. エントリータイミングの評価（早すぎ/遅すぎ/適切）— 複数時間足の根拠付き
3. 上位足のサポート・レジスタンスとの位置関係
4. より良いエントリー/エグジットポイントの提案（どの時間足で判断すべきか）
5. チャートパターンの検出（各時間足ごと）`
    : `1. **MTF統合分析**: 各時間足のトレンド状態と整合性（Confluence有無）
2. 上位足の主要サポート・レジスタンスライン
3. 各時間足で注目すべきチャートパターン
4. MTFの観点から見たエントリーチャンスの有無と推奨方向
5. リスクポイント（上位足の節目、時間足間の不整合）`;

  return `あなたはFXマルチタイムフレーム（MTF）チャート分析の専門家です。添付された${tfLabels}のチャート画像を全て確認し、MTFの視点で統合的に分析してください。

**重要: JSON以外のテキストは一切出力しないでください。挨拶、承知しました、説明文などは不要です。純粋なJSONオブジェクトのみを返してください。**

${mtfSection}

${tradeSection}

## 分析してほしい項目
${analysisItems}

## 出力フォーマット
以下のJSON形式で出力してください:
{
  "chart_analysis": "MTF統合分析テキスト(400字程度、各時間足の所見と統合判断を具体的に)",
  "timeframe_analysis": {
    "daily": "日足の分析(トレンド、パターン、キーレベル)",
    "h4": "4時間足の分析",
    "h1": "1時間足の分析",
    "m5": "5分足の分析"
  },
  "mtf_confluence": "時間足間の整合性の評価（一致/乖離）",
  "trend": "uptrend/downtrend/range",
  "trend_strength": "strong/moderate/weak",
  ${tradeInfo ? `"timing_assessment": "early/late/good",
  "timing_detail": "タイミング評価の詳細説明（MTF根拠付き）",` : `"entry_opportunity": "buy/sell/wait",
  "entry_reasoning": "エントリー判断の根拠（MTF根拠付き）",`}
  "key_levels": {"support": [], "resistance": []},
  "improvement_suggestions": ["提案1", "提案2"],
  "patterns_detected": ["時間足: 検出されたチャートパターン"],
  "risk_note": "注意すべきリスク要因（MTF視点）"
}`;
}
