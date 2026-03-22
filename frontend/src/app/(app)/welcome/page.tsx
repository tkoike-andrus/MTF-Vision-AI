"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Brain,
  CandlestickChart,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/lib/hooks/useTheme";
import { useAuth } from "@/lib/hooks/useAuth";

const FEATURES = [
  {
    icon: BarChart3,
    title: "統計ダッシュボード",
    desc: "勝率・損益・ドローダウンなどKPIを一目で把握",
    color: "blue",
  },
  {
    icon: Brain,
    title: "AI負け癖 / 勝ちパターン診断",
    desc: "AIがあなたの取引パターンを分析し改善点を提案",
    color: "emerald",
  },
  {
    icon: CandlestickChart,
    title: "MTFチャート分析",
    desc: "4画面マルチタイムフレームでエントリーを可視化",
    color: "purple",
  },
  {
    icon: Shield,
    title: "やらかしスコアリング",
    desc: "規律スコアで感情トレードを数値化・改善",
    color: "orange",
  },
];

const COLOR_MAP: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400" },
};

export default function WelcomePage() {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (authLoading) return;
    if (user?.email) {
      setDisplayName(user.email.split("@")[0]);
    }
  }, [authLoading, user]);

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto">
      {/* Hero */}
      <div className="text-center py-8">
        <Image src="/logo.png" alt="AATM" width={64} height={64} className="rounded-2xl mx-auto mb-4 shadow-lg shadow-blue-600/30" />
        <h1
          className={`text-2xl font-bold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          ようこそ、{displayName || "トレーダー"}さん！
        </h1>
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          メール認証が完了しました。AATMでトレードを進化させましょう。
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          const colors = COLOR_MAP[feature.color];
          return (
            <div
              key={feature.title}
              className={`rounded-xl border p-4 ${
                isDarkMode
                  ? "bg-dark-card border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg shrink-0 ${colors.bg}`}>
                  <Icon size={18} className={colors.text} />
                </div>
                <div>
                  <h3
                    className={`text-sm font-bold mb-0.5 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-xs ${
                      isDarkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="space-y-3">
        <button
          onClick={() => router.push("/onboarding")}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm transition-colors shadow-lg shadow-blue-500/20"
        >
          セットアップを始める
          <ArrowRight size={16} />
        </button>
        <button
          onClick={() => router.push("/dashboard")}
          className={`w-full py-3 rounded-xl text-sm font-medium transition-colors ${
            isDarkMode
              ? "text-gray-400 hover:text-white hover:bg-white/5"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          }`}
        >
          スキップしてダッシュボードへ
        </button>
      </div>
    </div>
  );
}
