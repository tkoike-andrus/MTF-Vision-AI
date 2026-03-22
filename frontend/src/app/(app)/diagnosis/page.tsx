"use client";

import { useState, useEffect, useCallback } from "react";
import {
  AlertTriangle,
  TrendingUp,
  Eye,
  Play,
  Clock,
  Upload,
  ChevronRight,
  FileText,
  Check,
  X,
  Sparkles,
} from "lucide-react";
import { useTheme } from "@/lib/hooks/useTheme";
import { useAuth } from "@/lib/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";
import DiagnosisCard from "@/components/diagnosis/DiagnosisCard";
import type { Trade, TradeAnalysis, StrategyProposal, Strategy } from "@/lib/types/database";

type DiagnosisTab = "losing_pattern" | "winning_pattern" | "vision_chart";

const TABS: { key: DiagnosisTab; label: string; icon: typeof AlertTriangle; color: string }[] = [
  { key: "losing_pattern", label: "負け癖診断", icon: AlertTriangle, color: "text-red-400" },
  { key: "winning_pattern", label: "勝ちパターン", icon: TrendingUp, color: "text-emerald-400" },
  { key: "vision_chart", label: "チャート分析", icon: Eye, color: "text-blue-400" },
];

export default function DiagnosisPage() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<DiagnosisTab>("losing_pattern");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [history, setHistory] = useState<TradeAnalysis[]>([]);
  const [historyFilter, setHistoryFilter] = useState<DiagnosisTab | "all">("all");
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);
  const [chartImage, setChartImage] = useState<string | null>(null);
  const [resultChartImages, setResultChartImages] = useState<{ label: string; data_url: string }[] | null>(null);
  const { userId, loading: authLoading } = useAuth();

  // Strategy proposal state
  const [proposals, setProposals] = useState<StrategyProposal[]>([]);
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [proposalLoading, setProposalLoading] = useState(false);
  const [proposalSuccess, setProposalSuccess] = useState<string | null>(null);
  const [approving, setApproving] = useState<string | null>(null);

  // Fetch all data
  useEffect(() => {
    async function init() {
      if (authLoading || !userId) return;
      const supabase = createClient();

      const [tradeRes, historyRes, proposalRes, strategyRes] = await Promise.all([
        supabase.from("trades").select("*").eq("user_id", userId).order("exit_at_utc", { ascending: false }),
        supabase.from("trade_analyses").select("*").eq("user_id", userId).order("created_at", { ascending: false }).limit(10),
        fetch(`/api/strategies/proposals?user_id=${userId}`).then((r) => r.json()),
        fetch(`/api/strategies?user_id=${userId}`).then((r) => r.json()),
      ]);

      if (tradeRes.data) setTrades(tradeRes.data as Trade[]);
      if (historyRes.data) setHistory(historyRes.data as TradeAnalysis[]);
      if (proposalRes.proposals) setProposals(proposalRes.proposals);
      if (strategyRes.strategies) setStrategies(strategyRes.strategies);
    }
    init();
  }, [authLoading, userId]);

  const runDiagnosis = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const body: Record<string, unknown> = {
        analysis_type: activeTab,
        user_id: userId,
      };

      if (activeTab === "vision_chart") {
        if (!selectedTrade) {
          setError("チャート分析にはトレードを選択してください。");
          setLoading(false);
          return;
        }
        body.trade_info = {
          pair: selectedTrade.pair,
          side: selectedTrade.side,
          entry_price: selectedTrade.entry_price,
          exit_price: selectedTrade.exit_price,
          pnl: selectedTrade.pnl,
        };
        if (chartImage) body.chart_image = chartImage;
      }

      const res = await fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "API error");

      setResult(data.analysis_text);
      setResultChartImages(data.chart_images || null);

      // Refresh history
      const supabase = createClient();
      const { data: historyData } = await supabase
        .from("trade_analyses")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(10);
      if (historyData) setHistory(historyData as TradeAnalysis[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "診断に失敗しました");
    } finally {
      setLoading(false);
    }
  }, [userId, activeTab, selectedTrade, chartImage]);

  // Generate strategy proposal from diagnosis result
  const generateProposal = useCallback(async () => {
    if (!userId || !result) return;
    setProposalLoading(true);
    setProposalSuccess(null);

    try {
      // Get current strategy from bot config
      const supabase = createClient();
      const { data: botConfig } = await supabase
        .from("bot_configs")
        .select("strategy_name")
        .eq("user_id", userId)
        .single();

      const strategyName = botConfig?.strategy_name || "PriceAction_logic";
      const currentStrategy = strategies.find((s) => s.name === strategyName);
      if (!currentStrategy?.prompt_template) {
        setError("現在の戦略プロンプトが見つかりません");
        setProposalLoading(false);
        return;
      }

      // Call Gemini to generate a modified prompt
      const geminiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey || ""}`;

      const prompt = `あなたはFXトレーディング戦略の専門家です。以下のAI診断結果に基づいて、現在のストラテジープロンプトの改善案を提案してください。

## 現在のストラテジープロンプト:
${currentStrategy.prompt_template}

## AI診断結果:
${result}

## 指示:
1. 診断結果から特定された問題点・改善点を踏まえ、ストラテジープロンプトを修正してください。
2. 修正は最小限にし、元のプロンプトの構造を維持してください。
3. 以下のJSON形式で回答してください:

{
  "change_summary": "変更の概要（日本語、3行以内）",
  "reason": "変更理由（診断結果との関連性）",
  "proposed_prompt": "修正後のプロンプト全文"
}`;

      const geminiRes = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.3, maxOutputTokens: 4096 },
        }),
      });

      if (!geminiRes.ok) {
        // Fallback: use server-side GEMINI_API_KEY via diagnosis API
        const serverRes = await fetch("/api/diagnosis", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            analysis_type: "strategy_proposal",
            user_id: userId,
            strategy_prompt: currentStrategy.prompt_template,
            diagnosis_result: result,
          }),
        });
        const serverData = await serverRes.json();
        if (!serverRes.ok) throw new Error(serverData.error || "Proposal generation failed");
      }

      const geminiData = await geminiRes.json();
      const responseText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || "";

      // Parse JSON from response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("AIからの応答を解析できませんでした");

      const parsed = JSON.parse(jsonMatch[0]);

      // Save proposal
      const proposalRes = await fetch("/api/strategies/proposals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          strategy_name: strategyName,
          original_prompt: currentStrategy.prompt_template,
          proposed_prompt: parsed.proposed_prompt,
          change_summary: parsed.change_summary,
          reason: parsed.reason,
        }),
      });

      const proposalData = await proposalRes.json();
      if (proposalData.proposal) {
        setProposals((prev) => [proposalData.proposal, ...prev]);
        setProposalSuccess("戦略の修正案を生成しました");
        setTimeout(() => setProposalSuccess(null), 5000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "修正案の生成に失敗しました");
    } finally {
      setProposalLoading(false);
    }
  }, [userId, result, strategies]);

  // Approve/reject proposal
  const handleProposal = useCallback(async (proposalId: string, action: "approve" | "reject") => {
    setApproving(proposalId);
    try {
      const res = await fetch(`/api/strategies/proposals/${proposalId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const data = await res.json();
      if (data.success) {
        setProposals((prev) =>
          prev.map((p) =>
            p.id === proposalId
              ? { ...p, status: action === "approve" ? "approved" : "rejected", reviewed_at: new Date().toISOString() }
              : p
          )
        );
        if (action === "approve") {
          // Refresh strategies
          if (userId) {
            const stratRes = await fetch(`/api/strategies?user_id=${userId}`);
            const stratData = await stratRes.json();
            if (stratData.strategies) setStrategies(stratData.strategies);
          }
        }
      }
    } catch (err) {
      console.error("Proposal action error:", err);
    }
    setApproving(null);
  }, [userId]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      setChartImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const tradeCount = trades.length;
  const losingCount = trades.filter((t) => t.pnl < 0).length;
  const winningCount = trades.filter((t) => t.pnl > 0).length;

  const filteredHistory = historyFilter === "all" ? history : history.filter((h) => h.analysis_type === historyFilter);
  const pendingProposals = proposals.filter((p) => p.status === "pending");

  const card = `rounded-xl border ${isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"}`;

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <h1 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>AI診断</h1>
        <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
          AIがあなたの取引パターンを分析し、改善ポイントを提案します
        </p>
      </div>

      {/* Tab Selector */}
      <div className={`flex rounded-xl overflow-hidden border ${isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"}`}>
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => { setActiveTab(tab.key); setResult(null); setError(null); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-2 text-sm font-medium transition-colors ${
                isActive
                  ? isDarkMode ? "bg-dark-secondary text-white" : "bg-gray-100 text-gray-900"
                  : isDarkMode ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon size={16} className={isActive ? tab.color : ""} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Trade Data Summary */}
      <div className={card + " p-4"}>
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>分析対象データ</h3>
          <span className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            {tradeCount === 0 ? "データなし — ダッシュボードからCSVをアップロードしてください" : `${tradeCount}件のトレード`}
          </span>
        </div>
        {tradeCount > 0 && (
          <div className="grid grid-cols-3 gap-3">
            <div className={`rounded-lg p-3 text-center ${isDarkMode ? "bg-dark-secondary" : "bg-gray-50"}`}>
              <div className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>{tradeCount}</div>
              <div className="text-xs text-gray-500">総トレード</div>
            </div>
            <div className={`rounded-lg p-3 text-center ${isDarkMode ? "bg-dark-secondary" : "bg-gray-50"}`}>
              <div className="text-lg font-bold text-emerald-400">{winningCount}</div>
              <div className="text-xs text-gray-500">勝ち</div>
            </div>
            <div className={`rounded-lg p-3 text-center ${isDarkMode ? "bg-dark-secondary" : "bg-gray-50"}`}>
              <div className="text-lg font-bold text-red-400">{losingCount}</div>
              <div className="text-xs text-gray-500">負け</div>
            </div>
          </div>
        )}
      </div>

      {/* Vision Chart: Trade Selector + Image Upload */}
      {activeTab === "vision_chart" && (
        <div className={card + " p-4 space-y-4"}>
          <h3 className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>トレード選択</h3>
          <div className="max-h-48 overflow-y-auto space-y-1">
            {trades.length === 0 ? (
              <p className="text-sm text-gray-500">トレードデータがありません</p>
            ) : (
              trades.slice(0, 20).map((trade) => (
                <button
                  key={trade.id}
                  onClick={() => setSelectedTrade(trade)}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-left text-sm transition-colors ${
                    selectedTrade?.id === trade.id
                      ? isDarkMode ? "bg-blue-500/20 border border-blue-500/30" : "bg-blue-50 border border-blue-200"
                      : isDarkMode ? "hover:bg-dark-secondary" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{trade.pair}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded ${trade.side === "Buy" ? "bg-blue-500/20 text-blue-400" : "bg-red-500/20 text-red-400"}`}>{trade.side}</span>
                    <span className="text-xs text-gray-500">{new Date(trade.exit_at_utc).toLocaleDateString("ja-JP")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono ${trade.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                      {trade.pnl >= 0 ? "+" : ""}{trade.pnl.toLocaleString()}円
                    </span>
                    <ChevronRight size={12} className="text-gray-500" />
                  </div>
                </button>
              ))
            )}
          </div>
          <div>
            <label className={`text-xs font-bold mb-2 block ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>チャート画像（任意）</label>
            <label className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${
              chartImage
                ? isDarkMode ? "border-blue-500/50 bg-blue-500/10" : "border-blue-300 bg-blue-50"
                : isDarkMode ? "border-gray-700 hover:border-gray-600" : "border-gray-300 hover:border-gray-400"
            }`}>
              <Upload size={16} className="text-gray-500" />
              <span className="text-sm text-gray-500">{chartImage ? "画像アップロード済み" : "チャートのスクリーンショットをアップロード"}</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>
        </div>
      )}

      {/* Run Button */}
      <button
        onClick={runDiagnosis}
        disabled={loading || tradeCount === 0}
        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
          loading || tradeCount === 0
            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
            : activeTab === "losing_pattern" ? "bg-red-500 hover:bg-red-600 text-white"
            : activeTab === "winning_pattern" ? "bg-emerald-500 hover:bg-emerald-600 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        <Play size={16} />
        {loading ? "AI分析中..." : `${TABS.find((t) => t.key === activeTab)?.label}を実行`}
      </button>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Result */}
      {(result || loading) && (
        <>
          <DiagnosisCard analysisText={result || ""} analysisType={activeTab} isDarkMode={isDarkMode} loading={loading} />

          {/* Chart images used for analysis */}
          {resultChartImages && resultChartImages.length > 0 && activeTab === "vision_chart" && !loading && (
            <div className={card + " p-4"}>
              <p className={`text-xs font-bold mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>分析に使用したチャート</p>
              <div className="grid grid-cols-2 gap-2">
                {resultChartImages.map((img, i) => (
                  <div key={i} className="relative">
                    <span className={`absolute top-1 left-1 text-[10px] font-bold px-1.5 py-0.5 rounded z-10 ${
                      isDarkMode ? "bg-black/70 text-gray-300" : "bg-white/80 text-gray-600"
                    }`}>
                      {img.label}
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.data_url}
                      alt={img.label}
                      className={`rounded-lg border w-full object-contain ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strategy Proposal Button — show after diagnosis completes */}
          {result && !loading && (activeTab === "losing_pattern" || activeTab === "winning_pattern") && (
            <div className={card + " p-4"}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-purple-400" />
                  <div>
                    <p className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      戦略プロンプトの修正提案
                    </p>
                    <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                      診断結果に基づき、AIが戦略プロンプトの改善案を生成します
                    </p>
                  </div>
                </div>
                <button
                  onClick={generateProposal}
                  disabled={proposalLoading}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-white text-xs font-bold disabled:opacity-50"
                >
                  <Sparkles size={12} />
                  {proposalLoading ? "生成中..." : "修正案を生成"}
                </button>
              </div>
              {proposalSuccess && (
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                  <Check size={12} /> {proposalSuccess}
                </p>
              )}
            </div>
          )}
        </>
      )}

      {/* Pending Strategy Proposals */}
      {pendingProposals.length > 0 && (
        <div className={card + " overflow-hidden"}>
          <div className={`px-4 py-3 border-b flex items-center gap-2 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
            <FileText size={14} className="text-purple-400" />
            <h3 className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              承認待ちの戦略修正案
            </h3>
            <span className="text-[10px] bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded font-bold ml-auto">
              {pendingProposals.length}件
            </span>
          </div>

          <div className="divide-y divide-gray-800/30">
            {pendingProposals.map((proposal) => (
              <div key={proposal.id} className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-xs font-bold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {strategies.find((s) => s.name === proposal.strategy_name)?.display_name || proposal.strategy_name}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {new Date(proposal.created_at).toLocaleString("ja-JP")}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleProposal(proposal.id, "approve")}
                      disabled={approving === proposal.id}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold disabled:opacity-50"
                    >
                      <Check size={12} /> 承認
                    </button>
                    <button
                      onClick={() => handleProposal(proposal.id, "reject")}
                      disabled={approving === proposal.id}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold disabled:opacity-50 ${
                        isDarkMode ? "bg-gray-800 text-gray-400 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <X size={12} /> 却下
                    </button>
                  </div>
                </div>

                {/* Change Summary */}
                <div className={`rounded-lg p-3 ${isDarkMode ? "bg-purple-500/10" : "bg-purple-50"}`}>
                  <p className={`text-xs font-bold mb-1 ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>変更概要</p>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? "text-purple-200/80" : "text-purple-600"}`}>
                    {proposal.change_summary}
                  </p>
                </div>

                <div className={`rounded-lg p-3 ${isDarkMode ? "bg-dark-secondary" : "bg-gray-50"}`}>
                  <p className={`text-xs font-bold mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>変更理由</p>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {proposal.reason}
                  </p>
                </div>

                {/* Diff preview */}
                <details>
                  <summary className={`text-xs cursor-pointer ${isDarkMode ? "text-gray-600 hover:text-gray-400" : "text-gray-400 hover:text-gray-600"}`}>
                    修正後プロンプトを表示
                  </summary>
                  <pre className={`mt-2 p-3 rounded-lg text-[10px] font-mono leading-relaxed overflow-x-auto max-h-48 overflow-y-auto whitespace-pre-wrap ${
                    isDarkMode ? "bg-dark-secondary text-gray-400" : "bg-gray-50 text-gray-600"
                  }`}>
                    {proposal.proposed_prompt.slice(0, 1000)}
                    {proposal.proposed_prompt.length > 1000 ? "\n..." : ""}
                  </pre>
                </details>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* History */}
      <div className={card}>
        <div className={`flex items-center justify-between px-4 py-3 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-gray-500" />
            <h3 className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>診断履歴</h3>
          </div>
          <select
            value={historyFilter}
            onChange={(e) => setHistoryFilter(e.target.value as DiagnosisTab | "all")}
            className={`text-xs rounded-lg px-2 py-1 border ${isDarkMode ? "bg-dark-secondary border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-700"}`}
          >
            <option value="all">すべて</option>
            <option value="losing_pattern">負け癖</option>
            <option value="winning_pattern">勝ちパターン</option>
            <option value="vision_chart">チャート</option>
          </select>
        </div>

        <div className="p-4">
          {filteredHistory.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">まだ診断履歴がありません</p>
          ) : (
            <div className="space-y-2">
              {filteredHistory.map((item) => {
                const tabConfig = TABS.find((t) => t.key === item.analysis_type);
                const Icon = tabConfig?.icon || AlertTriangle;
                let summary = "";
                try {
                  const jsonMatch = item.analysis_text.match(/\{[\s\S]*\}/);
                  if (jsonMatch) {
                    const parsed = JSON.parse(jsonMatch[0]);
                    summary = parsed.overall_assessment || parsed.chart_analysis || item.analysis_text.slice(0, 100);
                  } else {
                    summary = item.analysis_text.slice(0, 100);
                  }
                } catch {
                  summary = item.analysis_text.slice(0, 100);
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.analysis_type);
                      setResult(item.analysis_text);
                      setResultChartImages(item.chart_images || null);
                      setError(null);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${isDarkMode ? "hover:bg-dark-secondary" : "hover:bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={12} className={tabConfig?.color || "text-gray-400"} />
                      <span className={`text-xs font-bold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{tabConfig?.label || item.analysis_type}</span>
                      {item.chart_images && item.chart_images.length > 0 && (
                        <span className={`text-xs px-2 py-0.5 rounded flex items-center gap-1 ${isDarkMode ? "bg-blue-500/15 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                          <Eye size={11} /> {item.chart_images.length}枚
                        </span>
                      )}
                      <span className="text-xs text-gray-500 ml-auto">
                        {new Date(item.created_at).toLocaleString("ja-JP", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                    <p className={`text-xs line-clamp-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{summary}</p>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
