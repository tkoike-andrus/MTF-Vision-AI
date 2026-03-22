"use client";

import { useState, useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid,
} from "recharts";
import { calculateStats, calculatePairStats } from "@/lib/stats/calculate-stats";
import type { Trade } from "@/lib/types/database";

type Period = "1W" | "1M" | "3M" | "6M" | "1Y" | "ALL";

const PERIODS: { label: string; value: Period }[] = [
  { label: "1週", value: "1W" },
  { label: "1ヶ月", value: "1M" },
  { label: "3ヶ月", value: "3M" },
  { label: "6ヶ月", value: "6M" },
  { label: "1年", value: "1Y" },
  { label: "全期間", value: "ALL" },
];

function filterByPeriod(trades: Trade[], period: Period): Trade[] {
  if (period === "ALL") return trades;
  const now = new Date();
  const cutoff = new Date();
  switch (period) {
    case "1W": cutoff.setDate(now.getDate() - 7); break;
    case "1M": cutoff.setMonth(now.getMonth() - 1); break;
    case "3M": cutoff.setMonth(now.getMonth() - 3); break;
    case "6M": cutoff.setMonth(now.getMonth() - 6); break;
    case "1Y": cutoff.setFullYear(now.getFullYear() - 1); break;
  }
  return trades.filter((t) => new Date(t.exit_at_utc) >= cutoff);
}

const DAY_LABELS = ["月", "火", "水", "木", "金", "土", "日"];

interface Props {
  trades: Trade[];
  isDarkMode: boolean;
}

export default function TradeStatsDashboard({ trades, isDarkMode }: Props) {
  const [period, setPeriod] = useState<Period>("ALL");

  const filtered = useMemo(() => filterByPeriod(trades, period), [trades, period]);
  const stats = useMemo(() => calculateStats(filtered), [filtered]);
  const pairStats = useMemo(() => calculatePairStats(filtered), [filtered]);

  // P&L distribution bins
  const pnlBins = useMemo(() => {
    const bins = [
      { label: "<-5k", min: -Infinity, max: -5000, count: 0 },
      { label: "-5k~-2k", min: -5000, max: -2000, count: 0 },
      { label: "-2k~0", min: -2000, max: 0, count: 0 },
      { label: "0~2k", min: 0, max: 2000, count: 0 },
      { label: "2k~5k", min: 2000, max: 5000, count: 0 },
      { label: ">5k", min: 5000, max: Infinity, count: 0 },
    ];
    for (const t of filtered) {
      const bin = bins.find((b) => t.pnl >= b.min && t.pnl < b.max);
      if (bin) bin.count++;
    }
    return bins;
  }, [filtered]);

  // Discipline score trend (chronological)
  const scoreTrend = useMemo(() => {
    return [...filtered]
      .filter((t) => t.discipline_score !== null)
      .sort((a, b) => new Date(a.exit_at_utc).getTime() - new Date(b.exit_at_utc).getTime())
      .map((t) => ({
        date: new Date(t.exit_at_utc).toLocaleDateString("ja-JP", { month: "numeric", day: "numeric" }),
        score: t.discipline_score,
      }));
  }, [filtered]);

  // Heatmap: day-of-week x hour
  const heatmap = useMemo(() => {
    const grid: { day: number; hour: number; totalPnl: number; count: number }[] = [];
    for (let d = 0; d < 7; d++) {
      for (let h = 0; h < 24; h++) {
        grid.push({ day: d, hour: h, totalPnl: 0, count: 0 });
      }
    }
    for (const t of filtered) {
      const dt = new Date(t.exit_at_utc);
      // Convert to JST
      const jst = new Date(dt.getTime() + 9 * 60 * 60 * 1000);
      let day = jst.getUTCDay() - 1; // Mon=0
      if (day < 0) day = 6;
      const hour = jst.getUTCHours();
      const cell = grid[day * 24 + hour];
      cell.totalPnl += t.pnl;
      cell.count++;
    }
    return grid;
  }, [filtered]);

  const heatmapMax = Math.max(1, ...heatmap.map((c) => Math.abs(c.count > 0 ? c.totalPnl / c.count : 0)));

  const card = isDarkMode ? "bg-[#1a1e2a] border border-gray-800 rounded-xl" : "bg-white border border-gray-200 rounded-xl";
  const textMain = isDarkMode ? "text-white" : "text-gray-900";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
  const textMuted = isDarkMode ? "text-gray-600" : "text-gray-400";

  return (
    <div className="space-y-4">
      {/* Period Filter */}
      <div className="flex items-center gap-1">
        {PERIODS.map((p) => (
          <button
            key={p.value}
            onClick={() => setPeriod(p.value)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              period === p.value
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : isDarkMode
                ? "text-gray-500 hover:text-gray-300 hover:bg-gray-800"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            }`}
          >
            {p.label}
          </button>
        ))}
        <span className={`ml-2 text-xs ${textMuted}`}>
          {filtered.length}件
        </span>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {[
          { label: "取引数", value: stats.total_trades, fmt: (v: number) => `${v}` },
          { label: "勝率", value: stats.win_rate, fmt: (v: number) => `${v.toFixed(1)}%`, color: stats.win_rate >= 50 ? "text-emerald-400" : "text-red-400" },
          { label: "合計損益", value: stats.total_pnl, fmt: (v: number) => `${v >= 0 ? "+" : ""}${v.toLocaleString()}`, color: stats.total_pnl >= 0 ? "text-emerald-400" : "text-red-400" },
          { label: "PF", value: stats.profit_factor, fmt: (v: number) => v === Infinity ? "∞" : v.toFixed(2) },
          { label: "最大DD", value: stats.max_drawdown, fmt: (v: number) => `-${v.toLocaleString()}`, color: "text-red-400" },
          { label: "規律スコア", value: stats.avg_discipline_score ?? 0, fmt: (v: number) => stats.avg_discipline_score !== null ? v.toFixed(1) : "-" },
        ].map((s) => (
          <div key={s.label} className={`${card} p-3`}>
            <p className={`text-[10px] font-bold uppercase tracking-wider ${textMuted}`}>{s.label}</p>
            <p className={`text-lg font-bold font-mono mt-1 ${s.color || textMain}`}>{s.fmt(s.value)}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Win Rate by Pair */}
        <div className={`${card} p-4`}>
          <h3 className={`text-xs font-bold mb-3 ${textSub}`}>ペア別勝率</h3>
          {pairStats.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={pairStats} layout="vertical">
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10, fill: isDarkMode ? "#6b7280" : "#9ca3af" }} />
                <YAxis type="category" dataKey="pair" width={65} tick={{ fontSize: 10, fill: isDarkMode ? "#d1d5db" : "#374151" }} tickFormatter={(v: string) => v.replace("_", "/")} />
                <Tooltip
                  contentStyle={{ background: isDarkMode ? "#1a1e2a" : "#fff", border: "1px solid #374151", borderRadius: 8, fontSize: 11 }}
                  formatter={(value) => [`${Number(value).toFixed(1)}%`, "勝率"]}
                />
                <Bar dataKey="win_rate" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className={`text-xs text-center py-8 ${textMuted}`}>データなし</p>
          )}
        </div>

        {/* P&L Distribution */}
        <div className={`${card} p-4`}>
          <h3 className={`text-xs font-bold mb-3 ${textSub}`}>損益分布</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={pnlBins}>
              <XAxis dataKey="label" tick={{ fontSize: 10, fill: isDarkMode ? "#6b7280" : "#9ca3af" }} />
              <YAxis tick={{ fontSize: 10, fill: isDarkMode ? "#6b7280" : "#9ca3af" }} />
              <Tooltip
                contentStyle={{ background: isDarkMode ? "#1a1e2a" : "#fff", border: "1px solid #374151", borderRadius: 8, fontSize: 11 }}
                formatter={(value) => [`${value}件`, "取引数"]}
              />
              <Bar dataKey="count" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Discipline Score Trend */}
        <div className={`${card} p-4`}>
          <h3 className={`text-xs font-bold mb-3 ${textSub}`}>規律スコア推移</h3>
          {scoreTrend.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={scoreTrend}>
                <CartesianGrid stroke={isDarkMode ? "#2b2b43" : "#f0f3fa"} />
                <XAxis dataKey="date" tick={{ fontSize: 9, fill: isDarkMode ? "#6b7280" : "#9ca3af" }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: isDarkMode ? "#6b7280" : "#9ca3af" }} />
                <Tooltip
                  contentStyle={{ background: isDarkMode ? "#1a1e2a" : "#fff", border: "1px solid #374151", borderRadius: 8, fontSize: 11 }}
                />
                <Line type="monotone" dataKey="score" stroke="#10b981" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className={`text-xs text-center py-8 ${textMuted}`}>スコアデータなし</p>
          )}
        </div>

        {/* Trading Heatmap */}
        <div className={`${card} p-4`}>
          <h3 className={`text-xs font-bold mb-3 ${textSub}`}>曜日 x 時間帯 収益ヒートマップ</h3>
          <div className="overflow-x-auto">
            <div className="min-w-[500px]">
              {/* Hour labels */}
              <div className="flex ml-8 mb-1">
                {Array.from({ length: 24 }, (_, h) => (
                  <div key={h} className={`flex-1 text-center text-[8px] ${textMuted}`}>
                    {h % 3 === 0 ? h : ""}
                  </div>
                ))}
              </div>
              {/* Grid rows */}
              {DAY_LABELS.map((dayLabel, d) => (
                <div key={d} className="flex items-center gap-1 mb-[2px]">
                  <span className={`w-7 text-[9px] text-right ${textSub}`}>{dayLabel}</span>
                  <div className="flex flex-1 gap-[1px]">
                    {Array.from({ length: 24 }, (_, h) => {
                      const cell = heatmap[d * 24 + h];
                      const avgPnl = cell.count > 0 ? cell.totalPnl / cell.count : 0;
                      const intensity = Math.min(1, Math.abs(avgPnl) / heatmapMax);
                      const bg = avgPnl >= 0
                        ? `rgba(16, 185, 129, ${0.15 + intensity * 0.6})`
                        : `rgba(239, 68, 68, ${0.15 + intensity * 0.6})`;

                      return (
                        <div
                          key={h}
                          className={`flex-1 h-5 rounded-[2px] ${cell.count === 0 ? (isDarkMode ? "bg-gray-800/30" : "bg-gray-100") : ""}`}
                          style={cell.count > 0 ? { background: bg } : undefined}
                          title={cell.count > 0 ? `${dayLabel} ${h}時: ${cell.count}件, 平均${avgPnl >= 0 ? "+" : ""}${Math.round(avgPnl)}円` : `${dayLabel} ${h}時: 取引なし`}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
