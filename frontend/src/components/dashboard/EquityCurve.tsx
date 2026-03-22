"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import type { Trade } from "@/lib/types/database";

interface EquityCurveProps {
  trades: Trade[];
  isDarkMode: boolean;
}

export default function EquityCurve({ trades, isDarkMode }: EquityCurveProps) {
  // Sort chronologically and compute cumulative P&L
  const sorted = [...trades].sort(
    (a, b) =>
      new Date(a.exit_at_utc).getTime() - new Date(b.exit_at_utc).getTime()
  );

  let cumulative = 0;
  const data = sorted.map((t, i) => {
    cumulative += t.pnl;
    return {
      index: i + 1,
      date: new Date(t.exit_at_utc).toLocaleDateString("ja-JP", {
        month: "short",
        day: "numeric",
      }),
      pnl: cumulative,
      tradePnl: t.pnl,
    };
  });

  if (data.length === 0) return null;

  const gridColor = isDarkMode ? "#2b2b43" : "#f0f3fa";
  const textColor = isDarkMode ? "#9ca3af" : "#6b7280";

  return (
    <div
      className={`rounded-xl border p-4 ${
        isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <h3
        className={`text-xs font-bold uppercase tracking-wider mb-4 ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        累積損益カーブ
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={cumulative >= 0 ? "#10b981" : "#ef4444"}
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor={cumulative >= 0 ? "#10b981" : "#ef4444"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="date"
            tick={{ fill: textColor, fontSize: 10 }}
            axisLine={{ stroke: gridColor }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: textColor, fontSize: 10 }}
            axisLine={{ stroke: gridColor }}
            tickLine={false}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDarkMode ? "#1a1e2a" : "#ffffff",
              border: `1px solid ${isDarkMode ? "#2a2e39" : "#e5e7eb"}`,
              borderRadius: "8px",
              fontSize: "12px",
              color: isDarkMode ? "#ffffff" : "#111827",
            }}
            formatter={(value) => {
              const v = Number(value);
              return [`${v >= 0 ? "+" : ""}${v.toLocaleString()}円`, "累積損益"];
            }}
          />
          <Area
            type="monotone"
            dataKey="pnl"
            stroke={cumulative >= 0 ? "#10b981" : "#ef4444"}
            strokeWidth={2}
            fill="url(#colorPnl)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
