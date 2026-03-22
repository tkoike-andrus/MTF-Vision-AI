"use client";

import { AlertTriangle, TrendingUp, Eye } from "lucide-react";

interface DiagnosisCardProps {
  analysisText: string;
  analysisType: "losing_pattern" | "winning_pattern" | "vision_chart";
  isDarkMode: boolean;
  loading?: boolean;
}

const TYPE_CONFIG = {
  losing_pattern: {
    icon: AlertTriangle,
    label: "負け癖診断",
    color: "red",
    iconColor: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  winning_pattern: {
    icon: TrendingUp,
    label: "勝ちパターン診断",
    color: "emerald",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  vision_chart: {
    icon: Eye,
    label: "チャート分析",
    color: "blue",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
};

function cleanJsonText(raw: string): string {
  let text = raw;
  text = text.replace(/```json\s*/gi, "").replace(/```\s*/g, "");
  const firstBrace = text.indexOf("{");
  if (firstBrace > 0) text = text.substring(firstBrace);
  const lastBrace = text.lastIndexOf("}");
  if (lastBrace > 0) text = text.substring(0, lastBrace + 1);
  return text;
}

export default function DiagnosisCard({
  analysisText,
  analysisType,
  isDarkMode,
  loading,
}: DiagnosisCardProps) {
  const config = TYPE_CONFIG[analysisType];
  const Icon = config.icon;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let parsedResult: Record<string, any> | null = null;

  try {
    const cleaned = cleanJsonText(analysisText);
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      parsedResult = JSON.parse(jsonMatch[0]);
    }
  } catch {
    // Not JSON
  }

  const isVision = analysisType === "vision_chart";

  // Losing/Winning pattern fields
  const assessment =
    parsedResult?.overall_assessment ||
    parsedResult?.chart_analysis ||
    analysisText;
  const patterns = parsedResult?.patterns || [];
  const actions =
    parsedResult?.action_plan || parsedResult?.improvement_suggestions || [];

  // Vision chart fields
  const timeframeAnalysis = parsedResult?.timeframe_analysis as Record<string, string> | undefined;
  const mtfConfluence = parsedResult?.mtf_confluence as string | undefined;
  const trend = parsedResult?.trend as string | undefined;
  const trendStrength = parsedResult?.trend_strength as string | undefined;
  const entryOpportunity = parsedResult?.entry_opportunity as string | undefined;
  const entryReasoning = parsedResult?.entry_reasoning as string | undefined;
  const timingAssessment = parsedResult?.timing_assessment as string | undefined;
  const timingDetail = parsedResult?.timing_detail as string | undefined;
  const keyLevels = parsedResult?.key_levels as { support?: number[]; resistance?: number[] } | undefined;
  const improvementSuggestions = parsedResult?.improvement_suggestions as string[] | undefined;
  const patternsDetected = parsedResult?.patterns_detected as string[] | undefined;
  const riskNote = parsedResult?.risk_note as string | undefined;
  const chartAnalysis = parsedResult?.chart_analysis as string | undefined;

  const hasVisionContent = isVision && parsedResult && (chartAnalysis || timeframeAnalysis || mtfConfluence || trend);

  return (
    <div
      className={`rounded-xl border ${
        isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-2 px-4 py-3 border-b ${
          isDarkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className={`p-1.5 rounded-lg ${config.bgColor}`}>
          <Icon size={14} className={config.iconColor} />
        </div>
        <span
          className={`text-sm font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {config.label}
        </span>
      </div>

      <div className="p-4 space-y-4">
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="animate-pulse flex gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
            <span className="text-sm text-gray-400">AI分析中...</span>
          </div>
        ) : hasVisionContent ? (
          /* ========== Vision Chart MTF Analysis ========== */
          <div className="space-y-3">
            {/* MTF Confluence Badge */}
            {mtfConfluence && (
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold ${
                mtfConfluence.includes("一致")
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-yellow-500/10 text-yellow-400"
              }`}>
                <span>MTF整合性:</span> {mtfConfluence}
              </div>
            )}

            {/* Trend + Entry/Timing Badges */}
            <div className="flex flex-wrap gap-2">
              {trend && (
                <span className={`px-2.5 py-1 rounded text-sm font-bold ${
                  trend === "uptrend" ? "bg-emerald-500/15 text-emerald-400"
                  : trend === "downtrend" ? "bg-red-500/15 text-red-400"
                  : "bg-gray-500/15 text-gray-400"
                }`}>
                  {trend === "uptrend" ? "↑上昇トレンド" : trend === "downtrend" ? "↓下降トレンド" : "→レンジ"}
                  {trendStrength && ` (${trendStrength})`}
                </span>
              )}
              {entryOpportunity && (
                <span className={`px-2.5 py-1 rounded text-sm font-bold ${
                  entryOpportunity === "buy" ? "bg-emerald-500/15 text-emerald-400"
                  : entryOpportunity === "sell" ? "bg-red-500/15 text-red-400"
                  : "bg-gray-500/15 text-gray-400"
                }`}>
                  推奨: {entryOpportunity === "buy" ? "買い" : entryOpportunity === "sell" ? "売り" : "様子見"}
                </span>
              )}
              {timingAssessment && (
                <span className={`px-2.5 py-1 rounded text-sm font-bold ${
                  timingAssessment === "good" ? "bg-emerald-500/15 text-emerald-400"
                  : "bg-orange-500/15 text-orange-400"
                }`}>
                  タイミング: {timingAssessment === "good" ? "適切" : timingAssessment === "early" ? "やや早い" : "やや遅い"}
                </span>
              )}
            </div>

            {/* Timeframe-by-timeframe Analysis */}
            {timeframeAnalysis && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(timeframeAnalysis).map(([tf, analysis]) => (
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

            {/* Main chart analysis text */}
            {chartAnalysis && (
              <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {chartAnalysis}
              </p>
            )}

            {/* Entry reasoning / Timing detail */}
            {entryReasoning && (
              <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {entryReasoning}
              </p>
            )}
            {timingDetail && (
              <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {timingDetail}
              </p>
            )}

            {/* Key Levels */}
            {keyLevels && (
              <div className="flex flex-wrap gap-3 text-sm">
                {keyLevels.support && keyLevels.support.length > 0 && (
                  <span className="text-emerald-400">
                    サポート: {keyLevels.support.join(", ")}
                  </span>
                )}
                {keyLevels.resistance && keyLevels.resistance.length > 0 && (
                  <span className="text-red-400">
                    レジスタンス: {keyLevels.resistance.join(", ")}
                  </span>
                )}
              </div>
            )}

            {/* Detected Patterns */}
            {patternsDetected && patternsDetected.length > 0 && (
              <div className={`text-sm space-y-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                <span className="font-bold">検出パターン:</span>
                <ul className="list-disc list-inside">
                  {patternsDetected.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Improvement Suggestions */}
            {improvementSuggestions && improvementSuggestions.length > 0 && (
              <div className={`text-sm space-y-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                <span className="font-bold">改善提案:</span>
                <ul className="list-disc list-inside">
                  {improvementSuggestions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Risk Note */}
            {riskNote && (
              <p className={`text-sm px-3 py-2 rounded-lg ${isDarkMode ? "bg-red-500/5 text-red-400/80" : "bg-red-50 text-red-500"}`}>
                ⚠️ {riskNote}
              </p>
            )}
          </div>
        ) : (
          /* ========== Losing/Winning Pattern Analysis ========== */
          <>
            {/* Assessment */}
            <p
              className={`text-sm leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {assessment}
            </p>

            {/* Patterns */}
            {patterns.length > 0 && (
              <div className="space-y-2">
                <h4
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  検出パターン
                </h4>
                {patterns.map((p: { pattern_type: string; confidence: number; evidence: string; suggestion: string }, i: number) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-dark-secondary border-gray-700"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-bold ${config.iconColor}`}
                      >
                        {p.pattern_type}
                      </span>
                      <span className="text-xs text-gray-500">
                        信頼度 {Math.round(p.confidence * 100)}%
                      </span>
                    </div>
                    <p
                      className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {p.evidence}
                    </p>
                    <p className="text-xs text-blue-400 mt-1">
                      → {p.suggestion}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Action Plan */}
            {actions.length > 0 && (
              <div>
                <h4
                  className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  アクションプラン
                </h4>
                <ul className="space-y-1">
                  {actions.map((action: string, i: number) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-xs ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="text-blue-400 mt-0.5">●</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
