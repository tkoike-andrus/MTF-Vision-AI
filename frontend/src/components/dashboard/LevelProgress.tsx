"use client";

import type { XpBreakdown } from "@/lib/leveling/xp-calculator";
import { Trophy, Target, Flame, Shield, Star } from "lucide-react";

interface Props {
  breakdown: XpBreakdown;
  isDarkMode: boolean;
}

export default function LevelProgress({ breakdown, isDarkMode }: Props) {
  const card = isDarkMode ? "bg-[#1a1e2a] border-gray-800" : "bg-white border-gray-200";
  const textSub = isDarkMode ? "text-gray-400" : "text-gray-500";
  const textMuted = isDarkMode ? "text-gray-600" : "text-gray-400";

  const sources = [
    {
      icon: Target,
      label: "取引完了",
      xp: breakdown.tradeCompletionXp,
      color: "text-blue-400",
      desc: "1取引 +10 XP",
    },
    {
      icon: Shield,
      label: "規律ボーナス",
      xp: breakdown.disciplineBonusXp,
      color: "text-emerald-400",
      desc: "スコア × 0.5",
    },
    {
      icon: Trophy,
      label: "勝利ボーナス",
      xp: breakdown.winBonusXp,
      color: "text-amber-400",
      desc: "勝ちトレード +15 XP",
    },
    {
      icon: Flame,
      label: "連続コンプラ",
      xp: breakdown.streakBonusXp,
      color: "text-orange-400",
      desc: "連続 × 5 (上限50)",
    },
    {
      icon: Star,
      label: "ミスなし",
      xp: breakdown.noMistakeBonusXp,
      color: "text-purple-400",
      desc: "感情的取引なし +20 XP",
    },
  ];

  return (
    <div className={`rounded-xl border ${card}`}>
      <div className={`px-4 py-2.5 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
        <div className="flex items-center justify-between">
          <h3 className={`text-xs font-bold ${textSub}`}>XP内訳</h3>
          <span className="text-xs font-bold text-amber-400">
            {breakdown.totalXp.toLocaleString()} XP
          </span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {sources.map((s) => {
          const Icon = s.icon;
          const pct = breakdown.totalXp > 0 ? (s.xp / breakdown.totalXp) * 100 : 0;
          return (
            <div key={s.label}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Icon size={12} className={s.color} />
                  <span className={`text-xs font-bold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {s.label}
                  </span>
                </div>
                <span className={`text-xs font-mono font-bold ${s.color}`}>
                  {s.xp.toLocaleString()}
                </span>
              </div>
              <div className={`h-1.5 rounded-full overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                <div
                  className={`h-full rounded-full transition-all duration-700`}
                  style={{
                    width: `${pct}%`,
                    background: s.color.includes("blue") ? "#3b82f6"
                      : s.color.includes("emerald") ? "#10b981"
                      : s.color.includes("amber") ? "#f59e0b"
                      : s.color.includes("orange") ? "#f97316"
                      : "#a855f7",
                  }}
                />
              </div>
              <p className={`text-[9px] mt-0.5 ${textMuted}`}>{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
