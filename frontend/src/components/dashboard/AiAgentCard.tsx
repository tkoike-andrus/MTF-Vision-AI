"use client";

import type { Profile } from "@/lib/types/database";
import type { LevelInfo } from "@/lib/leveling/xp-calculator";
import { Shield, Zap, Moon } from "lucide-react";

interface Props {
  profile: Profile | null;
  levelInfo: LevelInfo;
  isDarkMode: boolean;
}

const AGENT_CONFIG = {
  guardian: {
    icon: Shield,
    gradient: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
    color: "text-blue-400",
    bgAccent: "bg-blue-500/10",
    label: "Guardian",
    labelJa: "守護神",
  },
  assault: {
    icon: Zap,
    gradient: "from-red-500 to-orange-400",
    glow: "shadow-red-500/20",
    color: "text-red-400",
    bgAccent: "bg-red-500/10",
    label: "Assault",
    labelJa: "強襲",
  },
  eclipse: {
    icon: Moon,
    gradient: "from-purple-500 to-pink-400",
    glow: "shadow-purple-500/20",
    color: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    label: "Eclipse",
    labelJa: "エクリプス",
  },
};

export default function AiAgentCard({ profile, levelInfo, isDarkMode }: Props) {
  const agentType = (profile?.ai_agent_type || "guardian") as keyof typeof AGENT_CONFIG;
  const agent = AGENT_CONFIG[agentType];
  const Icon = agent.icon;
  const agentName = profile?.ai_agent_name || "AI Trader";

  const xpPercent = levelInfo.xpToNextLevel > 0
    ? Math.min(100, (levelInfo.currentXp / levelInfo.xpToNextLevel) * 100)
    : 100;

  return (
    <div className={`rounded-xl border p-5 flex flex-col items-center text-center ${
      isDarkMode ? "bg-[#1a1e2a] border-gray-800" : "bg-white border-gray-200"
    }`}>
      {/* Avatar */}
      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${agent.gradient} flex items-center justify-center shadow-lg ${agent.glow} mb-3`}>
        <Icon size={36} className="text-white" />
      </div>

      {/* Agent Name & Type */}
      <p className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
        {agentName}
      </p>
      <p className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${agent.color}`}>
        {agent.labelJa}
      </p>

      {/* Level */}
      <div className="mt-4 flex items-baseline gap-1">
        <span className={`text-3xl font-black ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          Lv.{levelInfo.level}
        </span>
      </div>
      <p className={`text-xs font-bold mt-1 ${agent.color}`}>
        {levelInfo.titleJa}
      </p>

      {/* XP Bar */}
      <div className="w-full mt-4">
        <div className="flex justify-between text-[10px] mb-1">
          <span className={isDarkMode ? "text-gray-500" : "text-gray-400"}>XP</span>
          <span className={isDarkMode ? "text-gray-500" : "text-gray-400"}>
            {levelInfo.currentXp.toLocaleString()} / {levelInfo.xpToNextLevel.toLocaleString()}
          </span>
        </div>
        <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
          <div
            className={`h-full rounded-full bg-gradient-to-r ${agent.gradient} transition-all duration-1000 ease-out`}
            style={{ width: `${xpPercent}%` }}
          />
        </div>
        <p className={`text-[10px] mt-1 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`}>
          Total: {levelInfo.totalXp.toLocaleString()} XP
        </p>
      </div>

      {/* Plan Badge */}
      {profile?.plan && (
        <div className={`mt-3 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
          profile.plan === "expert"
            ? "bg-amber-500/15 text-amber-400"
            : profile.plan === "standard"
            ? "bg-blue-500/15 text-blue-400"
            : isDarkMode
            ? "bg-gray-800 text-gray-500"
            : "bg-gray-100 text-gray-400"
        }`}>
          {profile.plan}
        </div>
      )}
    </div>
  );
}
