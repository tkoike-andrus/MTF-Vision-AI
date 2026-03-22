import type { Trade } from "@/lib/types/database";

export interface TradeStats {
  total_trades: number;
  winning_trades: number;
  losing_trades: number;
  win_rate: number;
  total_pnl: number;
  avg_pnl: number;
  max_profit: number;
  max_loss: number;
  max_drawdown: number;
  profit_factor: number;
  avg_discipline_score: number | null;
  mistake_trade_count: number;
  rule_compliant_count: number;
  rule_compliance_rate: number;
}

export interface PairStats extends TradeStats {
  pair: string;
}

/**
 * Calculate comprehensive statistics from a list of trades
 */
export function calculateStats(trades: Trade[]): TradeStats {
  if (trades.length === 0) {
    return {
      total_trades: 0,
      winning_trades: 0,
      losing_trades: 0,
      win_rate: 0,
      total_pnl: 0,
      avg_pnl: 0,
      max_profit: 0,
      max_loss: 0,
      max_drawdown: 0,
      profit_factor: 0,
      avg_discipline_score: null,
      mistake_trade_count: 0,
      rule_compliant_count: 0,
      rule_compliance_rate: 0,
    };
  }

  const winning = trades.filter((t) => t.pnl > 0);
  const losing = trades.filter((t) => t.pnl < 0);

  const totalPnl = trades.reduce((sum, t) => sum + t.pnl, 0);
  const grossProfit = winning.reduce((sum, t) => sum + t.pnl, 0);
  const grossLoss = Math.abs(losing.reduce((sum, t) => sum + t.pnl, 0));

  // Max drawdown calculation
  let peak = 0;
  let maxDrawdown = 0;
  let cumulative = 0;
  // Sort by exit time for chronological order
  const sorted = [...trades].sort(
    (a, b) => new Date(a.exit_at_utc).getTime() - new Date(b.exit_at_utc).getTime()
  );
  for (const trade of sorted) {
    cumulative += trade.pnl;
    if (cumulative > peak) peak = cumulative;
    const drawdown = peak - cumulative;
    if (drawdown > maxDrawdown) maxDrawdown = drawdown;
  }

  // Discipline scores
  const scoredTrades = trades.filter((t) => t.discipline_score !== null);
  const avgScore =
    scoredTrades.length > 0
      ? scoredTrades.reduce((sum, t) => sum + (t.discipline_score || 0), 0) /
        scoredTrades.length
      : null;

  const mistakeCount = trades.filter(
    (t) => t.entry_reason?.is_mistake === true
  ).length;
  const compliantCount = trades.filter(
    (t) => t.is_rule_compliant === true
  ).length;

  return {
    total_trades: trades.length,
    winning_trades: winning.length,
    losing_trades: losing.length,
    win_rate: trades.length > 0 ? (winning.length / trades.length) * 100 : 0,
    total_pnl: totalPnl,
    avg_pnl: trades.length > 0 ? totalPnl / trades.length : 0,
    max_profit: winning.length > 0 ? Math.max(...winning.map((t) => t.pnl)) : 0,
    max_loss: losing.length > 0 ? Math.min(...losing.map((t) => t.pnl)) : 0,
    max_drawdown: maxDrawdown,
    profit_factor: grossLoss > 0 ? grossProfit / grossLoss : grossProfit > 0 ? Infinity : 0,
    avg_discipline_score: avgScore !== null ? Math.round(avgScore * 10) / 10 : null,
    mistake_trade_count: mistakeCount,
    rule_compliant_count: compliantCount,
    rule_compliance_rate:
      trades.length > 0 ? (compliantCount / trades.length) * 100 : 0,
  };
}

/**
 * Calculate per-pair statistics
 */
export function calculatePairStats(trades: Trade[]): PairStats[] {
  const pairs = Array.from(new Set(trades.map((t) => t.pair)));
  return pairs
    .map((pair) => ({
      pair,
      ...calculateStats(trades.filter((t) => t.pair === pair)),
    }))
    .sort((a, b) => b.total_trades - a.total_trades);
}
