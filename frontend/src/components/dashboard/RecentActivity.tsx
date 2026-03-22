"use client";

import type { Trade } from "@/lib/types/database";
import type { TradeXp } from "@/lib/leveling/xp-calculator";

interface Props {
  trades: Trade[];
  tradeXps: TradeXp[];
  isDarkMode: boolean;
}

export default function RecentActivity({ trades, tradeXps, isDarkMode }: Props) {
  // Get last 10 trades (chronological, newest first)
  const sorted = [...trades]
    .sort((a, b) => new Date(b.exit_at_utc).getTime() - new Date(a.exit_at_utc).getTime())
    .slice(0, 10);

  const xpMap = new Map(tradeXps.map((x) => [x.tradeId, x]));

  const card = isDarkMode ? "bg-[#1a1e2a] border-gray-800" : "bg-white border-gray-200";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
  const textMuted = isDarkMode ? "text-gray-600" : "text-gray-400";

  return (
    <div className={`rounded-xl border ${card}`}>
      <div className={`px-4 py-2.5 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
        <h3 className={`text-xs font-bold ${textSub}`}>直近の取引</h3>
      </div>
      <div className="divide-y divide-gray-800/30 max-h-[320px] overflow-y-auto">
        {sorted.length === 0 ? (
          <div className="p-4 text-center">
            <p className={`text-xs ${textMuted}`}>取引データがありません</p>
          </div>
        ) : (
          sorted.map((trade) => {
            const xp = xpMap.get(trade.id);
            return (
              <div key={trade.id} className="px-4 py-2 flex items-center gap-3 text-xs">
                {/* Date */}
                <span className={`font-mono w-12 ${textMuted}`}>
                  {new Date(trade.exit_at_utc).toLocaleDateString("ja-JP", {
                    month: "numeric",
                    day: "numeric",
                  })}
                </span>

                {/* Pair + Side */}
                <span className={`font-bold w-16 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {trade.pair.replace("_", "/")}
                </span>
                <span className={`text-[10px] font-bold px-1 py-0.5 rounded ${
                  trade.side === "Buy"
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-red-500/15 text-red-400"
                }`}>
                  {trade.side === "Buy" ? "B" : "S"}
                </span>

                {/* Type badge */}
                {trade.trade_type === "auto" && (
                  <span className="text-[9px] font-bold px-1 py-0.5 rounded bg-amber-500/15 text-amber-400">
                    AUTO
                  </span>
                )}

                {/* P&L */}
                <span className={`font-mono font-bold flex-1 text-right ${
                  trade.pnl >= 0 ? "text-emerald-400" : "text-red-400"
                }`}>
                  {trade.pnl >= 0 ? "+" : ""}{trade.pnl.toLocaleString()}
                </span>

                {/* XP earned */}
                {xp && (
                  <span className="font-mono text-[10px] text-amber-400 w-12 text-right">
                    +{xp.totalXp}xp
                  </span>
                )}

                {/* Score */}
                {trade.discipline_score !== null && (
                  <span className={`font-mono text-[10px] w-8 text-right ${
                    trade.discipline_score >= 80 ? "text-emerald-400"
                    : trade.discipline_score >= 60 ? "text-yellow-400"
                    : "text-red-400"
                  }`}>
                    {trade.discipline_score}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
