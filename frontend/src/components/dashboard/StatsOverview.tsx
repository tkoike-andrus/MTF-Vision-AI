"use client";

import {
  TrendingUp,
  TrendingDown,
  Target,
  BarChart3,
  AlertTriangle,
  Shield,
} from "lucide-react";
import type { TradeStats } from "@/lib/stats/calculate-stats";
import { formatJpy, formatPct } from "@/lib/utils/date";

interface StatsOverviewProps {
  stats: TradeStats;
  isDarkMode: boolean;
}

export default function StatsOverview({ stats, isDarkMode }: StatsOverviewProps) {
  const cards = [
    {
      label: "総トレード数",
      value: stats.total_trades.toString(),
      sub: `${stats.winning_trades}勝 ${stats.losing_trades}敗`,
      icon: BarChart3,
      color: "blue",
    },
    {
      label: "勝率",
      value: formatPct(stats.win_rate),
      sub: stats.win_rate >= 50 ? "勝ち越し" : "負け越し",
      icon: Target,
      color: stats.win_rate >= 50 ? "emerald" : "red",
    },
    {
      label: "総損益",
      value: formatJpy(stats.total_pnl),
      sub: `平均 ${formatJpy(Math.round(stats.avg_pnl))}`,
      icon: stats.total_pnl >= 0 ? TrendingUp : TrendingDown,
      color: stats.total_pnl >= 0 ? "emerald" : "red",
    },
    {
      label: "プロフィットファクター",
      value:
        stats.profit_factor === Infinity
          ? "∞"
          : stats.profit_factor.toFixed(2),
      sub: stats.profit_factor >= 1 ? "利益優位" : "損失優位",
      icon: Shield,
      color: stats.profit_factor >= 1 ? "emerald" : "orange",
    },
    {
      label: "最大ドローダウン",
      value: formatJpy(-stats.max_drawdown),
      sub: `最大利益 ${formatJpy(stats.max_profit)}`,
      icon: AlertTriangle,
      color: "orange",
    },
    {
      label: "規律スコア",
      value:
        stats.avg_discipline_score !== null
          ? stats.avg_discipline_score.toFixed(1)
          : "-",
      sub:
        stats.avg_discipline_score !== null
          ? `コンプライアンス率 ${formatPct(stats.rule_compliance_rate)}`
          : "未評価",
      icon: Shield,
      color:
        stats.avg_discipline_score !== null && stats.avg_discipline_score >= 70
          ? "emerald"
          : "yellow",
    },
  ];

  const colorMap: Record<string, string> = {
    blue: "text-blue-400",
    emerald: "text-emerald-400",
    red: "text-red-400",
    orange: "text-orange-400",
    yellow: "text-yellow-400",
  };

  const bgColorMap: Record<string, string> = {
    blue: "bg-blue-500/10",
    emerald: "bg-emerald-500/10",
    red: "bg-red-500/10",
    orange: "bg-orange-500/10",
    yellow: "bg-yellow-500/10",
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className={`rounded-xl p-4 border transition-colors ${
              isDarkMode
                ? "bg-dark-card border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`p-1.5 rounded-lg ${bgColorMap[card.color]}`}>
                <Icon size={14} className={colorMap[card.color]} />
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {card.label}
              </span>
            </div>
            <p
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {card.value}
            </p>
            <p
              className={`text-xs mt-1 ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {card.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
}
