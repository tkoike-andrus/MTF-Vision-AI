"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "@/lib/hooks/useTheme";
import { useAuth } from "@/lib/hooks/useAuth";
import StatsOverview from "@/components/dashboard/StatsOverview";
import EquityCurve from "@/components/dashboard/EquityCurve";
import AiAgentCard from "@/components/dashboard/AiAgentCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import LevelProgress from "@/components/dashboard/LevelProgress";
import { calculateStats } from "@/lib/stats/calculate-stats";
import {
  calculateTotalXp,
  getLevelFromXp,
  getXpBreakdown,
  calculateTradeXps,
} from "@/lib/leveling/xp-calculator";
import type { Trade, Profile } from "@/lib/types/database";
import { Loader2 } from "lucide-react";

export default function DashboardPage() {
  const { isDarkMode } = useTheme();
  const { userId, loading: authLoading } = useAuth();
  const [trades, setTrades] = useState<Trade[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (authLoading || !userId) {
        if (!authLoading) setLoading(false);
        return;
      }
      const res = await fetch(`/api/dashboard?user_id=${userId}`);
      const data = await res.json();

      console.log("[Dashboard] userId:", userId, "trades count:", data.trades?.length);
      if (data.profile) setProfile(data.profile as Profile);
      if (data.trades) setTrades(data.trades as Trade[]);
      setLoading(false);
    }
    load();
  }, [authLoading, userId]);

  const stats = useMemo(() => calculateStats(trades), [trades]);
  const totalXp = useMemo(() => calculateTotalXp(trades), [trades]);
  const levelInfo = useMemo(() => getLevelFromXp(totalXp), [totalXp]);
  const xpBreakdown = useMemo(() => getXpBreakdown(trades), [trades]);
  const tradeXps = useMemo(() => calculateTradeXps(trades), [trades]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 size={24} className="animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDarkMode ? "bg-dark-bg" : "bg-gray-50"
      }`}
    >
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            ダッシュボード
          </h1>
          <p
            className={`text-sm mt-1 ${
              isDarkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            AIトレーダー成長システム
          </p>
        </div>

        {/* Top Row: AI Agent + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mb-6">
          <AiAgentCard
            profile={profile}
            levelInfo={levelInfo}
            isDarkMode={isDarkMode}
          />
          <StatsOverview stats={stats} isDarkMode={isDarkMode} />
        </div>

        {/* Equity Curve */}
        <div className="mb-6">
          <EquityCurve trades={trades} isDarkMode={isDarkMode} />
        </div>

        {/* Bottom Row: Recent Activity + Level Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity
            trades={trades}
            tradeXps={tradeXps}
            isDarkMode={isDarkMode}
          />
          <LevelProgress
            breakdown={xpBreakdown}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}
