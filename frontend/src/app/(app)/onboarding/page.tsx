"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Shield, Swords, Eclipse, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useTheme } from "@/lib/hooks/useTheme";
import { useAuth } from "@/lib/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";

const AGENTS = [
  {
    type: "guardian" as const,
    name: "守護神",
    icon: Shield,
    color: "blue",
    desc: "リスク管理重視。損失を最小化し、安定した成長を支援します。",
    traits: ["堅実なリスク管理", "感情的トレードを警告", "ドローダウン監視"],
  },
  {
    type: "assault" as const,
    name: "強襲",
    icon: Swords,
    color: "red",
    desc: "攻撃的なトレードスタイル。チャンスを逃さず、大きなリターンを狙います。",
    traits: ["トレンド乗り推奨", "利益最大化フォーカス", "チャンス検出"],
  },
  {
    type: "eclipse" as const,
    name: "エクリプス",
    icon: Eclipse,
    color: "purple",
    desc: "バランス型。状況に応じて攻守を切り替え、総合的なパフォーマンス向上を図ります。",
    traits: ["状況適応型", "強み/弱み両面分析", "柔軟な戦略提案"],
  },
];

export default function OnboardingPage() {
  const { isDarkMode } = useTheme();
  const { userId } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState<"guardian" | "assault" | "eclipse" | null>(null);
  const [riskConfig, setRiskConfig] = useState({
    loss_tolerance: 50000,
    max_drawdown_pct: 10,
    losing_streak_lock: 5,
  });
  const [saving, setSaving] = useState(false);

  const canProceed = () => {
    if (step === 0) return selectedAgent !== null;
    return true;
  };

  const handleFinish = async () => {
    if (!userId) return;
    setSaving(true);
    try {
      const supabase = createClient();

      await supabase
        .from("profiles")
        .update({
          ai_agent_type: selectedAgent,
          ai_agent_name: AGENTS.find((a) => a.type === selectedAgent)?.name || null,
          risk_config: riskConfig,
          onboarding_completed: true,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId);

      router.push("/dashboard");
    } catch (err) {
      console.error("Onboarding save error:", err);
    } finally {
      setSaving(false);
    }
  };

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/40", text: "text-blue-400" },
    red: { bg: "bg-red-500/10", border: "border-red-500/40", text: "text-red-400" },
    purple: { bg: "bg-purple-500/10", border: "border-purple-500/40", text: "text-purple-400" },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className={`w-full max-w-xl rounded-2xl border p-6 ${
        isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"
      }`}>
        {/* Progress */}
        <div className="flex items-center gap-2 mb-6">
          {[0, 1, 2].map((s) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  s < step
                    ? "bg-emerald-500 text-white"
                    : s === step
                    ? "bg-blue-500 text-white"
                    : isDarkMode
                    ? "bg-dark-secondary text-gray-500"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {s < step ? <Check size={14} /> : s + 1}
              </div>
              {s < 2 && (
                <div
                  className={`flex-1 h-0.5 ${
                    s < step
                      ? "bg-emerald-500"
                      : isDarkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 0: AI Character */}
        {step === 0 && (
          <div className="space-y-4">
            <div>
              <h2 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                AIキャラクターを選択
              </h2>
              <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                あなたのトレードスタイルに合ったAIアシスタントを選んでください
              </p>
            </div>

            <div className="space-y-3">
              {AGENTS.map((agent) => {
                const Icon = agent.icon;
                const colors = colorMap[agent.color];
                const isSelected = selectedAgent === agent.type;
                return (
                  <button
                    key={agent.type}
                    onClick={() => setSelectedAgent(agent.type)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? `${colors.bg} ${colors.border}`
                        : isDarkMode
                        ? "border-gray-800 hover:border-gray-700"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${colors.bg}`}>
                        <Icon size={20} className={colors.text} />
                      </div>
                      <span className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        {agent.name}
                      </span>
                    </div>
                    <p className={`text-sm mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {agent.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {agent.traits.map((trait) => (
                        <span
                          key={trait}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            isDarkMode ? "bg-dark-secondary text-gray-400" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 1: Risk Config */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                リスク許容度の設定
              </h2>
              <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                あなたのリスク管理ルールを設定してください（後から変更可能）
              </p>
            </div>

            {/* Loss Tolerance */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  1日の許容損失額
                </label>
                <span className="text-sm font-mono text-red-400">
                  ¥{riskConfig.loss_tolerance.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={10000}
                max={500000}
                step={10000}
                value={riskConfig.loss_tolerance}
                onChange={(e) =>
                  setRiskConfig((prev) => ({ ...prev, loss_tolerance: Number(e.target.value) }))
                }
                className="w-full accent-red-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>¥10,000</span>
                <span>¥500,000</span>
              </div>
            </div>

            {/* Max Drawdown */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  最大ドローダウン率
                </label>
                <span className="text-sm font-mono text-orange-400">
                  {riskConfig.max_drawdown_pct}%
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={30}
                step={1}
                value={riskConfig.max_drawdown_pct}
                onChange={(e) =>
                  setRiskConfig((prev) => ({ ...prev, max_drawdown_pct: Number(e.target.value) }))
                }
                className="w-full accent-orange-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>3%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Losing Streak Lock */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  連敗ロック回数
                </label>
                <span className="text-sm font-mono text-yellow-400">
                  {riskConfig.losing_streak_lock}連敗
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={10}
                step={1}
                value={riskConfig.losing_streak_lock}
                onChange={(e) =>
                  setRiskConfig((prev) => ({ ...prev, losing_streak_lock: Number(e.target.value) }))
                }
                className="w-full accent-yellow-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>3連敗</span>
                <span>10連敗</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Summary + Start */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <h2 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                セットアップ完了
              </h2>
              <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                設定内容を確認してください。ダッシュボードからデータを追加できます。
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isDarkMode ? "bg-emerald-500/5 border-emerald-500/20" : "bg-emerald-50 border-emerald-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Check size={16} className="text-emerald-400" />
                <span className={`text-sm font-bold ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}>
                  準備完了!
                </span>
              </div>
              <ul className={`text-sm space-y-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                <li className="flex justify-between">
                  <span>AIキャラクター</span>
                  <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                    {AGENTS.find((a) => a.type === selectedAgent)?.name || "未選択"}
                  </strong>
                </li>
                <li className="flex justify-between">
                  <span>許容損失</span>
                  <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                    ¥{riskConfig.loss_tolerance.toLocaleString()}
                  </strong>
                </li>
                <li className="flex justify-between">
                  <span>ドローダウン上限</span>
                  <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                    {riskConfig.max_drawdown_pct}%
                  </strong>
                </li>
                <li className="flex justify-between">
                  <span>連敗ロック</span>
                  <strong className={isDarkMode ? "text-white" : "text-gray-900"}>
                    {riskConfig.losing_streak_lock}連敗
                  </strong>
                </li>
              </ul>
            </div>

            <div
              className={`p-3 rounded-lg text-center ${
                isDarkMode ? "bg-dark-secondary" : "bg-gray-50"
              }`}
            >
              <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                取引データはダッシュボードからCSVアップロード、またはGMO API連携で追加できます
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              step === 0
                ? "opacity-0 pointer-events-none"
                : isDarkMode
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <ChevronLeft size={16} />
            戻る
          </button>

          {step < 2 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProceed()}
              className={`flex items-center gap-1 px-6 py-2 rounded-lg text-sm font-bold transition-colors ${
                canProceed()
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-500 cursor-not-allowed"
              }`}
            >
              次へ
              <ChevronRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              disabled={saving}
              className="flex items-center gap-1 px-6 py-2 rounded-lg text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
            >
              {saving ? "保存中..." : "始める"}
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
