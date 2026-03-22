"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTheme } from "@/lib/hooks/useTheme";
import { useAuth } from "@/lib/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";
import ChartCard, { type ChartCardHandle } from "@/components/chart/ChartCard";
import type { Trade } from "@/lib/types/database";
import { Eye, EyeOff, Sparkles, Loader2, RefreshCw } from "lucide-react";

const PAIRS = [
  { label: "USD / JPY", value: "USD_JPY" },
  { label: "EUR / JPY", value: "EUR_JPY" },
  { label: "GBP / JPY", value: "GBP_JPY" },
  { label: "AUD / JPY", value: "AUD_JPY" },
  { label: "EUR / USD", value: "EUR_USD" },
  { label: "GBP / USD", value: "GBP_USD" },
];

export default function ChartPageWrapper() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-500 animate-pulse">読み込み中...</div>}>
      <ChartPage />
    </Suspense>
  );
}

function ChartPage() {
  const { isDarkMode } = useTheme();
  const searchParams = useSearchParams();
  const [selectedPair, setSelectedPair] = useState("USD_JPY");
  const [selectedTrade, setSelectedTrade] = useState<Trade | null>(null);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [showTrades, setShowTrades] = useState(false);
  const [loadingTrades, setLoadingTrades] = useState(false);
  const { userId, loading: authLoading } = useAuth();

  // Chart data sync
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Chart refs for capture
  const chart5minRef = useRef<ChartCardHandle>(null);
  const chart1hRef = useRef<ChartCardHandle>(null);
  const chart4hRef = useRef<ChartCardHandle>(null);
  const chart1dRef = useRef<ChartCardHandle>(null);

  // AI Vision analysis state
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  // Handle trade_id from URL params (from trades page navigation)
  useEffect(() => {
    const tradeId = searchParams.get("trade_id");
    const pair = searchParams.get("pair");
    if (pair) {
      setSelectedPair(pair);
      setShowTrades(true);
    }
    if (tradeId) {
      const loadTradeById = async () => {
        const supabase = createClient();
        const { data } = await supabase
          .from("trades")
          .select("*")
          .eq("id", tradeId)
          .single();
        if (data) {
          const trade = data as Trade;
          setSelectedTrade(trade);
          setSelectedPair(trade.pair);
          setShowTrades(true);
        }
      };
      loadTradeById();
    }
  }, [searchParams]);

  // Load trades for current pair
  useEffect(() => {
    async function loadTrades() {
      if (authLoading || !userId) return;
      setLoadingTrades(true);
      const supabase = createClient();

      const { data } = await supabase
        .from("trades")
        .select("*")
        .eq("user_id", userId)
        .eq("pair", selectedPair)
        .order("exit_at_utc", { ascending: false })
        .limit(50);

      setTrades((data as Trade[]) || []);
      setLoadingTrades(false);
    }
    loadTrades();
  }, [authLoading, userId, selectedPair]);

  // Sync chart data from GMO public API
  const syncChartData = useCallback(async () => {
    setSyncing(true);
    setSyncResult(null);
    try {
      const res = await fetch("/api/chart-data/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pair: selectedPair,
          resolutions: ["5min", "1hour", "4hour", "1day"],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Sync failed");
      setSyncResult(`${data.total_new}件のデータを取得しました`);
      // Force chart re-mount to load new data
      setRefreshKey((k) => k + 1);
      // Store last sync time
      localStorage.setItem(`chart-sync-${selectedPair}`, new Date().toISOString());
    } catch (err) {
      setSyncResult(`エラー: ${err instanceof Error ? err.message : "不明"}`);
    } finally {
      setSyncing(false);
      // Clear message after 5s
      setTimeout(() => setSyncResult(null), 5000);
    }
  }, [selectedPair]);

  // Capture all 4 MTF charts and send to Gemini Vision for analysis
  const captureAndAnalyze = useCallback(async () => {
    if (!userId) return;
    setAnalyzing(true);
    setAnalysisResult(null);

    try {
      // Capture all 4 timeframe charts for MTF analysis
      const chartRefs = [
        { ref: chart5minRef, label: "5分足" },
        { ref: chart1hRef, label: "1時間足" },
        { ref: chart4hRef, label: "4時間足" },
        { ref: chart1dRef, label: "日足" },
      ];

      const chartImages: string[] = [];
      const timeframes: string[] = [];

      for (const { ref, label } of chartRefs) {
        const img = ref.current?.takeScreenshot();
        if (img) {
          chartImages.push(img);
          timeframes.push(label);
        }
      }

      if (chartImages.length === 0) {
        setAnalysisResult("チャート画像のキャプチャに失敗しました。チャートが読み込まれるまでお待ちください。");
        setAnalyzing(false);
        return;
      }

      const tradeInfo = selectedTrade ? {
        pair: selectedTrade.pair,
        side: selectedTrade.side,
        entry_price: selectedTrade.entry_price,
        exit_price: selectedTrade.exit_price,
        pnl: selectedTrade.pnl,
      } : null;

      const res = await fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          analysis_type: "vision_chart",
          user_id: userId,
          trade_info: tradeInfo,
          chart_images: chartImages,
          timeframes: timeframes,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "分析エラー");

      const text = data.analysis_text || "";
      if (!text) {
        setAnalysisResult("AIからの応答が空でした。再度お試しください。");
      } else {
        setAnalysisResult(text);
      }
    } catch (err) {
      setAnalysisResult(`エラー: ${err instanceof Error ? err.message : "不明なエラー"}`);
    } finally {
      setAnalyzing(false);
    }
  }, [userId, selectedTrade]);

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDarkMode ? "bg-dark-bg" : "bg-gray-50"
      }`}
    >
      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              MTFチャート
            </h1>
            <p
              className={`text-sm mt-1 ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              マルチタイムフレーム分析
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Chart Data Sync */}
            <button
              onClick={syncChartData}
              disabled={syncing}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                syncing
                  ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                  : isDarkMode
                  ? "border-gray-700 text-emerald-400 hover:bg-emerald-500/10"
                  : "border-gray-300 text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              <RefreshCw size={14} className={syncing ? "animate-spin" : ""} />
              {syncing ? "同期中..." : "データ更新"}
            </button>

            {/* AI Vision Analysis */}
            <button
              onClick={captureAndAnalyze}
              disabled={analyzing}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                analyzing
                  ? "bg-purple-500/20 border-purple-500/30 text-purple-400"
                  : isDarkMode
                  ? "border-gray-700 text-purple-400 hover:bg-purple-500/10"
                  : "border-gray-300 text-purple-600 hover:bg-purple-50"
              }`}
            >
              {analyzing ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
              {analyzing ? "AI分析中..." : "AI分析"}
            </button>

            {/* Toggle Trade History */}
            <button
              onClick={() => {
                setShowTrades(!showTrades);
                if (showTrades) setSelectedTrade(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                showTrades
                  ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
                  : isDarkMode
                  ? "border-gray-700 text-gray-400 hover:text-gray-300"
                  : "border-gray-300 text-gray-500 hover:text-gray-700"
              }`}
            >
              {showTrades ? <EyeOff size={14} /> : <Eye size={14} />}
              取引履歴
            </button>

            {/* Pair Selector */}
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${
                  isDarkMode ? "text-white/70" : "text-gray-500"
                }`}
              >
                通貨ペア
              </span>
              <select
                value={selectedPair}
                onChange={(e) => {
                  setSelectedPair(e.target.value);
                  setSelectedTrade(null);
                }}
                className={`px-3 py-1.5 rounded-lg border font-bold text-sm outline-none transition-all cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                    : "bg-white border-gray-200 text-gray-900 focus:border-blue-400"
                }`}
              >
                {PAIRS.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* AI Vision Analysis Result — displayed at top */}
        {(analysisResult !== null || analyzing) && (
          <div
            className={`mb-4 rounded-xl border overflow-hidden ${
              isDarkMode
                ? "bg-dark-card border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            <div
              className={`px-4 py-2 border-b flex items-center justify-between ${
                isDarkMode
                  ? "bg-dark-header border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-purple-400" />
                <h3
                  className={`text-xs font-bold ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  AI Vision MTF チャート分析
                </h3>
              </div>
              {!analyzing && (
                <button
                  onClick={() => setAnalysisResult(null)}
                  className="text-gray-500 hover:text-gray-300 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="p-4">
              {analyzing ? (
                <div className="flex items-center gap-3">
                  <Loader2 size={16} className="animate-spin text-purple-400" />
                  <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    4つの時間足チャートをAIが分析中...
                  </span>
                </div>
              ) : (
                <div className="space-y-3">
                  {(() => {
                    const rawText = analysisResult || "";
                    const fallbackView = (
                      <pre className={`text-sm leading-relaxed whitespace-pre-wrap ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {rawText || "結果なし"}
                      </pre>
                    );

                    try {
                      // Strip markdown code fences and preamble text
                      let cleanText = rawText;
                      // Remove ```json ... ``` wrapping
                      cleanText = cleanText.replace(/```json\s*/gi, "").replace(/```\s*/g, "");
                      // Remove any preamble text before the first {
                      const firstBrace = cleanText.indexOf("{");
                      if (firstBrace > 0) {
                        cleanText = cleanText.substring(firstBrace);
                      }
                      // Remove any trailing text after the last }
                      const lastBrace = cleanText.lastIndexOf("}");
                      if (lastBrace > 0) {
                        cleanText = cleanText.substring(0, lastBrace + 1);
                      }

                      const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
                      if (!jsonMatch) return fallbackView;

                      const parsed = JSON.parse(jsonMatch[0]);
                      if (!parsed || typeof parsed !== "object") return fallbackView;

                      // Check if parsed has any meaningful content
                      const hasContent = parsed.chart_analysis || parsed.mtf_confluence || parsed.trend || parsed.timeframe_analysis;
                      if (!hasContent) return fallbackView;

                      return (
                        <>
                          {/* MTF Confluence Badge */}
                          {parsed.mtf_confluence && (
                            <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold ${
                              parsed.mtf_confluence.includes("一致")
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "bg-yellow-500/10 text-yellow-400"
                            }`}>
                              <span>MTF整合性:</span> {parsed.mtf_confluence}
                            </div>
                          )}

                          {/* Trend + Entry Opportunity */}
                          <div className="flex flex-wrap gap-2">
                            {parsed.trend && (
                              <span className={`px-2.5 py-1 rounded text-sm font-bold ${
                                parsed.trend === "uptrend" ? "bg-emerald-500/15 text-emerald-400"
                                : parsed.trend === "downtrend" ? "bg-red-500/15 text-red-400"
                                : "bg-gray-500/15 text-gray-400"
                              }`}>
                                {parsed.trend === "uptrend" ? "↑上昇トレンド" : parsed.trend === "downtrend" ? "↓下降トレンド" : "→レンジ"}
                                {parsed.trend_strength && ` (${parsed.trend_strength})`}
                              </span>
                            )}
                            {parsed.entry_opportunity && (
                              <span className={`px-2.5 py-1 rounded text-sm font-bold ${
                                parsed.entry_opportunity === "buy" ? "bg-emerald-500/15 text-emerald-400"
                                : parsed.entry_opportunity === "sell" ? "bg-red-500/15 text-red-400"
                                : "bg-gray-500/15 text-gray-400"
                              }`}>
                                推奨: {parsed.entry_opportunity === "buy" ? "買い" : parsed.entry_opportunity === "sell" ? "売り" : "様子見"}
                              </span>
                            )}
                            {parsed.timing_assessment && (
                              <span className={`px-2.5 py-1 rounded text-sm font-bold ${
                                parsed.timing_assessment === "good" ? "bg-emerald-500/15 text-emerald-400"
                                : "bg-orange-500/15 text-orange-400"
                              }`}>
                                タイミング: {parsed.timing_assessment === "good" ? "適切" : parsed.timing_assessment === "early" ? "やや早い" : "やや遅い"}
                              </span>
                            )}
                          </div>

                          {/* Timeframe-by-timeframe analysis */}
                          {parsed.timeframe_analysis && (
                            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3`}>
                              {Object.entries(parsed.timeframe_analysis as Record<string, string>).map(([tf, analysis]) => (
                                <div key={tf} className={`p-3 rounded-lg text-sm ${isDarkMode ? "bg-dark-secondary/50" : "bg-gray-50"}`}>
                                  <span className={`font-bold block mb-1.5 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
                                    {tf === "daily" ? "📊 日足" : tf === "h4" ? "📈 4時間足" : tf === "h1" ? "📉 1時間足" : "⚡ 5分足"}
                                  </span>
                                  <span className={`leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                    {typeof analysis === "string" ? analysis : JSON.stringify(analysis)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Main analysis text */}
                          {parsed.chart_analysis && (
                            <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                              {parsed.chart_analysis}
                            </p>
                          )}

                          {/* Entry reasoning */}
                          {parsed.entry_reasoning && (
                            <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                              {parsed.entry_reasoning}
                            </p>
                          )}

                          {/* Timing detail */}
                          {parsed.timing_detail && (
                            <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                              {parsed.timing_detail}
                            </p>
                          )}

                          {/* Key levels */}
                          {parsed.key_levels && (
                            <div className="flex flex-wrap gap-3 text-sm">
                              {parsed.key_levels.support?.length > 0 && (
                                <span className="text-emerald-400">
                                  サポート: {parsed.key_levels.support.join(", ")}
                                </span>
                              )}
                              {parsed.key_levels.resistance?.length > 0 && (
                                <span className="text-red-400">
                                  レジスタンス: {parsed.key_levels.resistance.join(", ")}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Improvement suggestions */}
                          {parsed.improvement_suggestions?.length > 0 && (
                            <div className={`text-sm space-y-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                              <span className="font-bold">改善提案:</span>
                              <ul className="list-disc list-inside">
                                {parsed.improvement_suggestions.map((s: string, i: number) => (
                                  <li key={i}>{s}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Risk note */}
                          {parsed.risk_note && (
                            <p className={`text-sm px-3 py-2 rounded-lg ${isDarkMode ? "bg-red-500/5 text-red-400/80" : "bg-red-50 text-red-500"}`}>
                              ⚠️ {parsed.risk_note}
                            </p>
                          )}
                        </>
                      );
                    } catch {
                      return fallbackView;
                    }
                  })()}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sync Result Toast */}
        {syncResult && (
          <div className={`mb-3 px-4 py-2 rounded-lg text-xs font-medium ${
            syncResult.startsWith("エラー")
              ? isDarkMode ? "bg-red-500/10 text-red-400" : "bg-red-50 text-red-600"
              : isDarkMode ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"
          }`}>
            {syncResult}
          </div>
        )}

        {/* Marker Legend */}
        {selectedTrade && (
          <div className={`mb-3 flex items-center gap-4 text-[10px] font-medium ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            {selectedTrade.trade_type === "auto" ? (
              <>
                <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#B8860B] rounded-sm" /> Auto Entry</span>
                <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#B8860B] rounded-sm" /> Auto Exit (+)</span>
                <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#D2691E] rounded-sm" /> Auto Exit (-)</span>
              </>
            ) : (
              <>
                <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#2196F3] rounded-sm" /> Entry</span>
                <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#4CAF50] rounded-sm" /> Exit (+)</span>
                <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 bg-[#FF5252] rounded-sm" /> Exit (-)</span>
              </>
            )}
          </div>
        )}

        {/* 4-Panel MTF Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ChartCard
            key={`5min-${refreshKey}`}
            ref={chart5minRef}
            pair={selectedPair}
            isDarkMode={isDarkMode}
            defaultRes="5min"
            trade={selectedTrade}
          />
          <ChartCard
            key={`1h-${refreshKey}`}
            ref={chart1hRef}
            pair={selectedPair}
            isDarkMode={isDarkMode}
            defaultRes="1hour"
            trade={selectedTrade}
          />
          <ChartCard
            key={`4h-${refreshKey}`}
            ref={chart4hRef}
            pair={selectedPair}
            isDarkMode={isDarkMode}
            defaultRes="4hour"
            trade={selectedTrade}
          />
          <ChartCard
            key={`1d-${refreshKey}`}
            ref={chart1dRef}
            pair={selectedPair}
            isDarkMode={isDarkMode}
            defaultRes="1day"
            trade={selectedTrade}
          />
        </div>

        {/* Trade List (when overlay enabled) */}
        {showTrades && (
          <div
            className={`mt-4 rounded-xl border overflow-hidden ${
              isDarkMode
                ? "bg-dark-card border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            <div
              className={`px-4 py-2 border-b ${
                isDarkMode
                  ? "bg-dark-header border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <h3
                className={`text-xs font-bold ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {selectedPair.replace("_", "/")} の取引履歴（クリックでチャートにプロット）
                {loadingTrades && " — 読み込み中..."}
              </h3>
            </div>

            {trades.length === 0 ? (
              <div className="p-4 text-center">
                <p
                  className={`text-xs ${
                    isDarkMode ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  このペアの取引データがありません
                </p>
              </div>
            ) : (
              <div className="max-h-48 overflow-y-auto divide-y divide-gray-800/30">
                {trades.map((trade) => {
                  const isSelected = selectedTrade?.id === trade.id;
                  return (
                    <button
                      key={trade.id}
                      onClick={() =>
                        setSelectedTrade(isSelected ? null : trade)
                      }
                      className={`w-full px-4 py-2 flex items-center gap-4 text-xs transition-colors ${
                        isSelected
                          ? "bg-blue-500/10"
                          : isDarkMode
                          ? "hover:bg-dark-secondary/30"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span
                        className={`font-mono ${
                          isDarkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {new Date(trade.exit_at_utc).toLocaleDateString(
                          "ja-JP",
                          { month: "2-digit", day: "2-digit" }
                        )}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          trade.side === "Buy"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : "bg-red-500/15 text-red-400"
                        }`}
                      >
                        {trade.side === "Buy" ? "B" : "S"}
                      </span>
                      <span
                        className={`font-mono ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {trade.entry_price} → {trade.exit_price}
                      </span>
                      <span
                        className={`font-mono font-bold ${
                          trade.pnl >= 0 ? "text-emerald-400" : "text-red-400"
                        }`}
                      >
                        {trade.pnl >= 0 ? "+" : ""}
                        {trade.pnl.toLocaleString()}
                      </span>
                      <span
                        className={`text-[10px] px-1 py-0.5 rounded font-bold ${
                          trade.trade_type === "auto"
                            ? "bg-amber-500/15 text-amber-400"
                            : isDarkMode ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {trade.trade_type === "auto" ? "AUTO" : trade.broker}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Selected Trade Info */}
        {selectedTrade && (
          <div
            className={`mt-4 p-4 rounded-xl border ${
              isDarkMode
                ? "bg-dark-card border-gray-800"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4 text-sm">
              <span
                className={`px-2 py-0.5 rounded text-xs font-medium ${
                  selectedTrade.side === "Buy"
                    ? "bg-emerald-500/15 text-emerald-400"
                    : "bg-red-500/15 text-red-400"
                }`}
              >
                {selectedTrade.side === "Buy" ? "買" : "売"}
              </span>
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                {selectedTrade.pair.replace("_", " / ")}
              </span>
              <span className="text-gray-500">
                {selectedTrade.entry_price} → {selectedTrade.exit_price}
              </span>
              <span
                className={
                  selectedTrade.pnl >= 0
                    ? "text-emerald-400"
                    : "text-red-400"
                }
              >
                {selectedTrade.pnl >= 0 ? "+" : ""}
                {selectedTrade.pnl.toLocaleString()}円
              </span>
              <span
                className={`text-xs ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {selectedTrade.broker}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
