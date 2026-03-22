"use client";

import { useState, useMemo } from "react";
import { useTheme } from "@/lib/hooks/useTheme";
import { DEMO_TRADES, DEMO_DIAGNOSIS_RESULT } from "@/lib/demo/demo-trades";
import { calculateStats, calculatePairStats } from "@/lib/stats/calculate-stats";
import StatsOverview from "@/components/dashboard/StatsOverview";
import PairBreakdown from "@/components/dashboard/PairBreakdown";
import EquityCurve from "@/components/dashboard/EquityCurve";
import DiagnosisCard from "@/components/diagnosis/DiagnosisCard";
import { AlertTriangle, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

type DemoTab = "dashboard" | "diagnosis";

export default function SandboxPage() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<DemoTab>("dashboard");
  const [diagnosisType, setDiagnosisType] = useState<"losing_pattern" | "winning_pattern">("losing_pattern");

  const stats = useMemo(() => calculateStats(DEMO_TRADES), []);
  const pairStats = useMemo(() => calculatePairStats(DEMO_TRADES), []);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-dark-bg" : "bg-gray-50"}`}>
      {/* Demo Banner */}
      <div className="bg-yellow-500/10 border-b border-yellow-500/30 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-yellow-400 text-sm font-medium">
            デモモード — サンプルデータ50件で体験中
          </p>
          <Link
            href="/register"
            className="flex items-center gap-1 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            無料で始める
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            AATM サンドボックス
          </h1>
          <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            50件のデモ取引データでAATMの機能を体験できます
          </p>
        </div>

        {/* Tab Selector */}
        <div
          className={`flex rounded-xl overflow-hidden border ${
            isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"
          }`}
        >
          {[
            { key: "dashboard" as DemoTab, label: "統計ダッシュボード" },
            { key: "diagnosis" as DemoTab, label: "AI診断プレビュー" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? isDarkMode
                    ? "bg-dark-secondary text-white"
                    : "bg-gray-100 text-gray-900"
                  : isDarkMode
                  ? "text-gray-500 hover:text-gray-300"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <StatsOverview stats={stats} isDarkMode={isDarkMode} />
            <EquityCurve trades={DEMO_TRADES} isDarkMode={isDarkMode} />
            <PairBreakdown pairStats={pairStats} isDarkMode={isDarkMode} />
          </div>
        )}

        {/* Diagnosis Tab */}
        {activeTab === "diagnosis" && (
          <div className="space-y-4">
            {/* Diagnosis Type Toggle */}
            <div
              className={`flex rounded-xl overflow-hidden border ${
                isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"
              }`}
            >
              <button
                onClick={() => setDiagnosisType("losing_pattern")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                  diagnosisType === "losing_pattern"
                    ? isDarkMode
                      ? "bg-dark-secondary text-white"
                      : "bg-gray-100 text-gray-900"
                    : isDarkMode
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <AlertTriangle size={14} className={diagnosisType === "losing_pattern" ? "text-red-400" : ""} />
                負け癖診断
              </button>
              <button
                onClick={() => setDiagnosisType("winning_pattern")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                  diagnosisType === "winning_pattern"
                    ? isDarkMode
                      ? "bg-dark-secondary text-white"
                      : "bg-gray-100 text-gray-900"
                    : isDarkMode
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <TrendingUp size={14} className={diagnosisType === "winning_pattern" ? "text-emerald-400" : ""} />
                勝ちパターン
              </button>
            </div>

            <div
              className={`rounded-xl border p-3 text-center ${
                isDarkMode ? "bg-blue-500/5 border-blue-500/20" : "bg-blue-50 border-blue-200"
              }`}
            >
              <p className={`text-xs ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                これはデモ用のキャッシュ済みAI診断結果です。実際のAI分析はあなたの取引データに基づいて実行されます。
              </p>
            </div>

            <DiagnosisCard
              analysisText={DEMO_DIAGNOSIS_RESULT[diagnosisType]}
              analysisType={diagnosisType}
              isDarkMode={isDarkMode}
            />
          </div>
        )}

        {/* CTA */}
        <div
          className={`rounded-xl border p-6 text-center ${
            isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"
          }`}
        >
          <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            自分の取引データで分析してみませんか？
          </h3>
          <p className={`text-sm mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            無料プランでCSV統計ダッシュボード、AI負け癖/勝ちパターン診断が利用できます
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm transition-colors"
          >
            無料で始める
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
