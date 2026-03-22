"use client";

import type { PairStats } from "@/lib/stats/calculate-stats";
import { formatJpy, formatPct } from "@/lib/utils/date";

interface PairBreakdownProps {
  pairStats: PairStats[];
  isDarkMode: boolean;
}

export default function PairBreakdown({
  pairStats,
  isDarkMode,
}: PairBreakdownProps) {
  if (pairStats.length === 0) return null;

  return (
    <div
      className={`rounded-xl border overflow-hidden ${
        isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`px-4 py-3 border-b ${
          isDarkMode
            ? "bg-dark-header border-gray-800"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <h3
          className={`text-xs font-bold uppercase tracking-wider ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          通貨ペア別
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr
              className={
                isDarkMode
                  ? "bg-dark-header text-gray-400"
                  : "bg-gray-100 text-gray-600"
              }
            >
              <th className="text-left px-4 py-2 text-xs font-medium">ペア</th>
              <th className="text-right px-4 py-2 text-xs font-medium">
                トレード数
              </th>
              <th className="text-right px-4 py-2 text-xs font-medium">勝率</th>
              <th className="text-right px-4 py-2 text-xs font-medium">
                総損益
              </th>
              <th className="text-right px-4 py-2 text-xs font-medium">
                平均損益
              </th>
              <th className="text-right px-4 py-2 text-xs font-medium">PF</th>
            </tr>
          </thead>
          <tbody>
            {pairStats.map((ps) => (
              <tr
                key={ps.pair}
                className={`border-t transition-colors ${
                  isDarkMode
                    ? "border-gray-800 hover:bg-white/[0.02]"
                    : "border-gray-100 hover:bg-gray-50"
                }`}
              >
                <td
                  className={`px-4 py-2.5 font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {ps.pair.replace("_", " / ")}
                </td>
                <td
                  className={`text-right px-4 py-2.5 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {ps.total_trades}
                  <span className="text-xs text-gray-500 ml-1">
                    ({ps.winning_trades}W {ps.losing_trades}L)
                  </span>
                </td>
                <td
                  className={`text-right px-4 py-2.5 font-medium ${
                    ps.win_rate >= 50 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {formatPct(ps.win_rate)}
                </td>
                <td
                  className={`text-right px-4 py-2.5 font-medium ${
                    ps.total_pnl >= 0 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {formatJpy(ps.total_pnl)}
                </td>
                <td
                  className={`text-right px-4 py-2.5 ${
                    ps.avg_pnl >= 0 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {formatJpy(Math.round(ps.avg_pnl))}
                </td>
                <td
                  className={`text-right px-4 py-2.5 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {ps.profit_factor === Infinity
                    ? "∞"
                    : ps.profit_factor.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
