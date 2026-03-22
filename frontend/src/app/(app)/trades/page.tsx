"use client";

import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  ArrowUpDown,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Tag,
  Check,
  LineChart,
  Camera,
  X,
  Save,
  Loader2,
  Clipboard,
  BarChart3,
  Upload,
} from "lucide-react";
import TradeStatsDashboard from "@/components/trades/TradeStatsDashboard";
import CsvUploader from "@/components/csv/CsvUploader";
import { useRouter } from "next/navigation";
import { useTheme } from "@/lib/hooks/useTheme";
import { useAuth } from "@/lib/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";
import type { Trade, EntryReason } from "@/lib/types/database";
import type { ParsedTrade } from "@/lib/parsers/types";
import { scoreTrade } from "@/lib/scoring/discipline-score";
import { saveTrades } from "@/actions/save-trades";

interface OcrTrade {
  pair: string;
  side: string;
  entry_price: number;
  exit_price: number;
  pnl: number;
  lot_size: number | null;
  entry_at: string | null;
  exit_at: string | null;
}

type SortKey = "exit_at_utc" | "pair" | "pnl" | "discipline_score";
type SortDir = "asc" | "desc";

export default function TradesPage() {
  const { isDarkMode } = useTheme();
  const { userId, loading: authLoading } = useAuth();

  const [trades, setTrades] = useState<Trade[]>([]);
  const [entryReasons, setEntryReasons] = useState<EntryReason[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPair, setFilterPair] = useState<string>("all");
  const [filterSide, setFilterSide] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("exit_at_utc");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const router = useRouter();

  // Stats toggle
  const [showStats, setShowStats] = useState(false);

  // CSV upload state
  const [showCsv, setShowCsv] = useState(false);
  const [csvSaving, setCsvSaving] = useState(false);

  // OCR state
  const [showOcr, setShowOcr] = useState(false);
  const [ocrLoading, setOcrLoading] = useState(false);
  const [ocrResults, setOcrResults] = useState<OcrTrade[] | null>(null);
  const [ocrNotes, setOcrNotes] = useState<string | null>(null);
  const [ocrSaving, setOcrSaving] = useState(false);
  const [ocrBroker, setOcrBroker] = useState<string>("sbi");

  useEffect(() => {
    async function load() {
      if (authLoading || !userId) return;
      const supabase = createClient();

      const [tradesRes, reasonsRes] = await Promise.all([
        supabase
          .from("trades")
          .select("*, entry_reason:entry_reasons(*)")
          .eq("user_id", userId)
          .order("exit_at_utc", { ascending: false }),
        supabase
          .from("entry_reasons")
          .select("*")
          .order("sort_order", { ascending: true }),
      ]);

      if (tradesRes.data) setTrades(tradesRes.data as Trade[]);
      if (reasonsRes.data) setEntryReasons(reasonsRes.data as EntryReason[]);
      setLoading(false);
    }
    load();
  }, [authLoading, userId]);

  const pairs = useMemo(
    () => Array.from(new Set(trades.map((t) => t.pair))).sort(),
    [trades]
  );

  const filteredTrades = useMemo(() => {
    let result = [...trades];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.pair.toLowerCase().includes(q) ||
          t.broker_trade_id.toLowerCase().includes(q)
      );
    }
    if (filterPair !== "all") {
      result = result.filter((t) => t.pair === filterPair);
    }
    if (filterSide !== "all") {
      result = result.filter((t) => t.side === filterSide);
    }

    result.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "exit_at_utc":
          cmp = new Date(a.exit_at_utc).getTime() - new Date(b.exit_at_utc).getTime();
          break;
        case "pair":
          cmp = a.pair.localeCompare(b.pair);
          break;
        case "pnl":
          cmp = a.pnl - b.pnl;
          break;
        case "discipline_score":
          cmp = (a.discipline_score ?? 0) - (b.discipline_score ?? 0);
          break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return result;
  }, [trades, searchQuery, filterPair, filterSide, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const handleReasonSelect = useCallback(
    async (tradeId: string, reasonId: string) => {
      setSavingId(tradeId);
      const reason = entryReasons.find((r) => r.id === reasonId);
      if (!reason) return;

      const score = scoreTrade({
        category: reason.category,
        is_mistake: reason.is_mistake,
      });

      const supabase = createClient();
      const { error } = await supabase
        .from("trades")
        .update({
          entry_reason_id: reasonId,
          discipline_score: score.total_score,
          is_rule_compliant: score.is_rule_compliant,
          updated_at: new Date().toISOString(),
        })
        .eq("id", tradeId);

      if (!error) {
        setTrades((prev) =>
          prev.map((t) =>
            t.id === tradeId
              ? {
                  ...t,
                  entry_reason_id: reasonId,
                  entry_reason: reason,
                  discipline_score: score.total_score,
                  is_rule_compliant: score.is_rule_compliant,
                }
              : t
          )
        );
      }
      setSavingId(null);
      setExpandedId(null);
    },
    [entryReasons]
  );

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ArrowUpDown size={12} className="text-gray-600" />;
    return sortDir === "asc" ? (
      <ChevronUp size={12} className="text-blue-400" />
    ) : (
      <ChevronDown size={12} className="text-blue-400" />
    );
  };

  const scoreBadgeColor = (score: number | null) => {
    if (score === null) return isDarkMode ? "text-gray-500" : "text-gray-400";
    if (score >= 80) return "text-emerald-400";
    if (score >= 60) return "text-yellow-400";
    if (score >= 40) return "text-orange-400";
    return "text-red-400";
  };

  const groupedReasons = useMemo(() => {
    const groups: Record<string, EntryReason[]> = {};
    for (const r of entryReasons) {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    }
    return groups;
  }, [entryReasons]);

  const categoryLabel: Record<string, string> = {
    technical: "テクニカル",
    fundamental: "ファンダメンタルズ",
    emotional: "感情的",
    custom: "カスタム",
  };

  // OCR handlers — shared base64 processing
  const ocrPanelRef = useRef<HTMLDivElement>(null);

  const processOcrImage = useCallback(async (base64: string) => {
    if (!userId) return;
    setOcrLoading(true);
    setOcrResults(null);
    setOcrNotes(null);

    try {
      const res = await fetch("/api/trades/ocr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, image: base64, broker: ocrBroker }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "OCR failed");

      setOcrResults(data.trades || []);
      setOcrNotes(data.notes || null);
    } catch (err) {
      alert(err instanceof Error ? err.message : "OCRエラー");
    } finally {
      setOcrLoading(false);
    }
  }, [userId, ocrBroker]);

  const handleOcrUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(",")[1];
      processOcrImage(base64);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }, [processOcrImage]);

  const handlePaste = useCallback(async (e: ClipboardEvent) => {
    if (!showOcr || !userId || ocrLoading) return;

    const items = e.clipboardData?.items;
    if (!items) return;

    for (const item of Array.from(items)) {
      if (item.type.startsWith("image/")) {
        e.preventDefault();
        const blob = item.getAsFile();
        if (!blob) continue;

        const reader = new FileReader();
        reader.onload = () => {
          const base64 = (reader.result as string).split(",")[1];
          processOcrImage(base64);
        };
        reader.readAsDataURL(blob);
        return;
      }
    }
  }, [showOcr, userId, ocrLoading, processOcrImage]);

  // Listen for paste events when OCR panel is open
  useEffect(() => {
    if (!showOcr) return;
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, [showOcr, handlePaste]);

  const handleOcrSave = useCallback(async () => {
    if (!ocrResults || !userId) return;
    setOcrSaving(true);

    const parsedTrades = ocrResults.map((t, i) => ({
      broker_trade_id: `ocr_${Date.now()}_${i}`,
      broker: "OCR" as const,
      pair: t.pair,
      side: t.side as "Buy" | "Sell",
      entry_price: t.entry_price,
      exit_price: t.exit_price,
      pnl: t.pnl,
      lot_size: t.lot_size || 1,
      entry_at_utc: t.entry_at || new Date().toISOString(),
      exit_at_utc: t.exit_at || new Date().toISOString(),
    }));

    const result = await saveTrades(parsedTrades, userId, "csv_sbi", "OCR読み取り");
    if (result.success) {
      setOcrResults(null);
      setShowOcr(false);
      // Reload trades
      const supabase = createClient();
      const { data: tradesData } = await supabase
        .from("trades")
        .select("*, entry_reason:entry_reasons(*)")
        .eq("user_id", userId)
        .order("exit_at_utc", { ascending: false });
      if (tradesData) setTrades(tradesData as Trade[]);
    } else {
      alert(result.error || "保存エラー");
    }
    setOcrSaving(false);
  }, [ocrResults, userId]);

  // CSV upload handler
  const handleCsvParsed = useCallback(async (parsed: ParsedTrade[]) => {
    if (!userId || parsed.length === 0) return;
    setCsvSaving(true);
    const result = await saveTrades(parsed, userId, "csv_sbi", "CSVアップロード");
    if (result.success) {
      setShowCsv(false);
      // Reload trades
      const supabase = createClient();
      const { data: tradesData } = await supabase
        .from("trades")
        .select("*, entry_reason:entry_reasons(*)")
        .eq("user_id", userId)
        .order("exit_at_utc", { ascending: false });
      if (tradesData) setTrades(tradesData as Trade[]);
    } else {
      alert(result.error || "保存エラー");
    }
    setCsvSaving(false);
  }, [userId]);

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse text-gray-500">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            取引履歴
          </h1>
          <p className={`text-sm mt-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            {trades.length}件のトレード — エントリー理由を記録してスコアリング
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowStats(!showStats)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              showStats
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : isDarkMode
                ? "border border-gray-700 text-gray-400 hover:text-gray-300"
                : "border border-gray-300 text-gray-500 hover:text-gray-700"
            }`}
          >
            <BarChart3 size={14} />
            統計分析
          </button>
          <button
            onClick={() => { setShowCsv(!showCsv); if (!showCsv) setShowOcr(false); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              showCsv
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : isDarkMode
                ? "border border-gray-700 text-gray-400 hover:text-gray-300"
                : "border border-gray-300 text-gray-500 hover:text-gray-700"
            }`}
          >
            <Upload size={14} />
            CSV取込
          </button>
          <button
            onClick={() => { setShowOcr(!showOcr); if (!showOcr) setShowCsv(false); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              showOcr
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                : isDarkMode
                ? "border border-gray-700 text-gray-400 hover:text-gray-300"
                : "border border-gray-300 text-gray-500 hover:text-gray-700"
            }`}
          >
            <Camera size={14} />
            画像OCR
          </button>
        </div>
      </div>

      {/* CSV Upload Panel */}
      {showCsv && (
        <div className={`rounded-xl border p-4 space-y-3 ${isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Upload size={16} className="text-emerald-400" />
              <h3 className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                CSVファイル取込
              </h3>
            </div>
            <button onClick={() => setShowCsv(false)} className="text-gray-500 hover:text-gray-300">
              <X size={16} />
            </button>
          </div>
          {csvSaving ? (
            <div className="flex items-center justify-center gap-2 py-6">
              <Loader2 size={16} className="animate-spin text-emerald-400" />
              <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>保存中...</span>
            </div>
          ) : (
            <CsvUploader isDarkMode={isDarkMode} onParsed={(parsed) => handleCsvParsed(parsed)} />
          )}
        </div>
      )}

      {/* OCR Panel */}
      {showOcr && (
        <div ref={ocrPanelRef} className={`rounded-xl border p-4 space-y-4 ${isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Camera size={16} className="text-purple-400" />
              <h3 className={`text-sm font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                取引履歴の画像OCR読取
              </h3>
            </div>
            <button onClick={() => { setShowOcr(false); setOcrResults(null); }} className="text-gray-500 hover:text-gray-300">
              <X size={16} />
            </button>
          </div>

          <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            SBI FXやGMO Coinの取引履歴画面のスクリーンショットをアップロード、または <kbd className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`}>Ctrl+V</kbd> で貼り付けできます。
          </p>

          <div className="flex items-center gap-3">
            <select
              value={ocrBroker}
              onChange={(e) => setOcrBroker(e.target.value)}
              className={`px-3 py-2 rounded-lg text-xs border ${isDarkMode ? "bg-dark-secondary border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-700"}`}
            >
              <option value="sbi">SBI FXトレード</option>
              <option value="gmo">GMO Coin FX</option>
              <option value="other">その他</option>
            </select>

            <label className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${
              ocrLoading
                ? "opacity-50 cursor-not-allowed"
                : isDarkMode ? "border-gray-700 hover:border-purple-500/50" : "border-gray-300 hover:border-purple-400"
            }`}>
              {ocrLoading ? (
                <><Loader2 size={16} className="animate-spin text-purple-400" /> <span className="text-sm text-purple-400">AI読み取り中...</span></>
              ) : (
                <><Camera size={16} className="text-gray-500" /> <span className="text-sm text-gray-500">画像ファイルを選択</span></>
              )}
              <input type="file" accept="image/*" onChange={handleOcrUpload} disabled={ocrLoading} className="hidden" />
            </label>

            <button
              onClick={async () => {
                try {
                  const clipboardItems = await navigator.clipboard.read();
                  for (const item of clipboardItems) {
                    const imageType = item.types.find((t) => t.startsWith("image/"));
                    if (imageType) {
                      const blob = await item.getType(imageType);
                      const reader = new FileReader();
                      reader.onload = () => {
                        const base64 = (reader.result as string).split(",")[1];
                        processOcrImage(base64);
                      };
                      reader.readAsDataURL(blob);
                      return;
                    }
                  }
                  alert("クリップボードに画像がありません");
                } catch {
                  alert("クリップボードへのアクセスが拒否されました。Ctrl+V で貼り付けてください。");
                }
              }}
              disabled={ocrLoading}
              className={`flex items-center gap-1.5 px-3 py-3 rounded-lg border-2 border-dashed text-xs font-medium transition-colors whitespace-nowrap ${
                ocrLoading
                  ? "opacity-50 cursor-not-allowed"
                  : isDarkMode
                  ? "border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-purple-400"
                  : "border-gray-300 text-gray-500 hover:border-purple-400 hover:text-purple-600"
              }`}
            >
              <Clipboard size={14} />
              貼り付け
            </button>
          </div>

          {/* OCR Results */}
          {ocrResults && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className={`text-xs font-bold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {ocrResults.length}件の取引を読み取りました
                </p>
                <button
                  onClick={handleOcrSave}
                  disabled={ocrSaving || ocrResults.length === 0}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold disabled:opacity-50"
                >
                  {ocrSaving ? <><Loader2 size={12} className="animate-spin" /> 保存中...</> : <><Save size={12} /> DBに保存</>}
                </button>
              </div>

              {ocrNotes && (
                <p className={`text-xs p-2 rounded-lg ${isDarkMode ? "bg-yellow-500/10 text-yellow-400" : "bg-yellow-50 text-yellow-600"}`}>
                  ⚠️ {ocrNotes}
                </p>
              )}

              <div className={`rounded-lg border overflow-hidden ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>
                <div className={`grid grid-cols-[80px_60px_45px_100px_70px] gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
                  isDarkMode ? "bg-dark-header text-gray-500" : "bg-gray-50 text-gray-400"
                }`}>
                  <span>日時</span>
                  <span>ペア</span>
                  <span>方向</span>
                  <span>価格</span>
                  <span>損益</span>
                </div>
                <div className="max-h-48 overflow-y-auto divide-y divide-gray-800/30">
                  {ocrResults.map((t, i) => (
                    <div key={i} className={`grid grid-cols-[80px_60px_45px_100px_70px] gap-2 px-3 py-2 text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      <span className="font-mono text-[10px]">
                        {t.exit_at ? new Date(t.exit_at).toLocaleDateString("ja-JP", { month: "2-digit", day: "2-digit" }) : "—"}
                      </span>
                      <span className="font-mono font-bold">{t.pair.replace("_", "/")}</span>
                      <span className={`text-[10px] font-bold ${t.side === "Buy" ? "text-emerald-400" : "text-red-400"}`}>
                        {t.side === "Buy" ? "B" : "S"}
                      </span>
                      <span className="font-mono text-[10px]">{t.entry_price} → {t.exit_price}</span>
                      <span className={`font-mono font-bold ${t.pnl >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                        {t.pnl >= 0 ? "+" : ""}{t.pnl.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Statistical Analysis Dashboard */}
      {showStats && (
        <TradeStatsDashboard trades={trades} isDarkMode={isDarkMode} />
      )}

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[180px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ペア・IDで検索..."
            className={`w-full pl-9 pr-3 py-2 rounded-lg text-sm border ${
              isDarkMode
                ? "bg-dark-card border-gray-800 text-white placeholder:text-gray-600"
                : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400"
            }`}
          />
        </div>
        <select
          value={filterPair}
          onChange={(e) => setFilterPair(e.target.value)}
          className={`px-3 py-2 rounded-lg text-sm border ${
            isDarkMode ? "bg-dark-card border-gray-800 text-gray-300" : "bg-white border-gray-200 text-gray-700"
          }`}
        >
          <option value="all">全ペア</option>
          {pairs.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select
          value={filterSide}
          onChange={(e) => setFilterSide(e.target.value)}
          className={`px-3 py-2 rounded-lg text-sm border ${
            isDarkMode ? "bg-dark-card border-gray-800 text-gray-300" : "bg-white border-gray-200 text-gray-700"
          }`}
        >
          <option value="all">全方向</option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
        <div className={`flex items-center gap-1 px-2 py-2 text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
          <Filter size={12} />
          {filteredTrades.length}件
        </div>
      </div>

      {/* Table */}
      {filteredTrades.length === 0 ? (
        <div className={`rounded-xl border p-8 text-center ${isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"}`}>
          <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
            {trades.length === 0
              ? "取引データがありません。ダッシュボードからCSVをアップロードしてください。"
              : "条件に一致するトレードがありません。"}
          </p>
        </div>
      ) : (
        <div className={`rounded-xl border overflow-hidden ${isDarkMode ? "bg-dark-card border-gray-800" : "bg-white border-gray-200"}`}>
          {/* Table Header */}
          <div className={`grid grid-cols-[100px_70px_50px_90px_80px_1fr_60px_36px] gap-2 px-4 py-2 border-b text-xs font-bold uppercase tracking-wider ${
            isDarkMode ? "bg-dark-header border-gray-800 text-gray-500" : "bg-gray-50 border-gray-200 text-gray-400"
          }`}>
            <button onClick={() => toggleSort("exit_at_utc")} className="flex items-center gap-1 text-left">
              日時 <SortIcon col="exit_at_utc" />
            </button>
            <button onClick={() => toggleSort("pair")} className="flex items-center gap-1 text-left">
              ペア <SortIcon col="pair" />
            </button>
            <span>方向</span>
            <span>価格</span>
            <button onClick={() => toggleSort("pnl")} className="flex items-center gap-1 text-left">
              損益 <SortIcon col="pnl" />
            </button>
            <span>エントリー理由</span>
            <button onClick={() => toggleSort("discipline_score")} className="flex items-center gap-1 text-left">
              スコア <SortIcon col="discipline_score" />
            </button>
            <span></span>
          </div>

          {/* Rows */}
          <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
            {filteredTrades.map((trade) => {
              const isExpanded = expandedId === trade.id;
              return (
                <div key={trade.id}>
                  <div
                    className={`grid grid-cols-[100px_70px_50px_90px_80px_1fr_60px_36px] gap-2 px-4 py-2.5 items-center text-xs border-b transition-colors ${
                      isDarkMode
                        ? "border-gray-800/50 hover:bg-dark-secondary/50"
                        : "border-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    {/* Date */}
                    <span className={`font-mono ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {new Date(trade.exit_at_utc).toLocaleDateString("ja-JP", {
                        month: "2-digit",
                        day: "2-digit",
                      })}{" "}
                      {new Date(trade.exit_at_utc).toLocaleTimeString("ja-JP", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>

                    {/* Pair */}
                    <span className={`font-mono font-bold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                      {trade.pair.replace("_", "/")}
                    </span>

                    {/* Side */}
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded text-center ${
                        trade.side === "Buy"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-red-500/15 text-red-400"
                      }`}
                    >
                      {trade.side === "Buy" ? "B" : "S"}
                    </span>

                    {/* Price */}
                    <span className={`font-mono text-[10px] ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}>
                      {trade.entry_price.toFixed(trade.pair.includes("JPY") ? 3 : 5)}
                      {" → "}
                      {trade.exit_price.toFixed(trade.pair.includes("JPY") ? 3 : 5)}
                    </span>

                    {/* P&L */}
                    <span
                      className={`font-mono font-bold text-right ${
                        trade.pnl >= 0 ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {trade.pnl >= 0 ? "+" : ""}
                      {trade.pnl.toLocaleString()}
                    </span>

                    {/* Entry Reason */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : trade.id)}
                      className={`flex items-center gap-1 text-left rounded-lg px-2 py-1 transition-colors ${
                        trade.entry_reason
                          ? trade.entry_reason.is_mistake
                            ? "bg-red-500/10 text-red-400"
                            : "bg-blue-500/10 text-blue-400"
                          : isDarkMode
                          ? "bg-dark-secondary text-gray-500 hover:text-gray-300"
                          : "bg-gray-50 text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <Tag size={10} />
                      <span className="truncate">
                        {trade.entry_reason ? trade.entry_reason.label_ja : "未設定"}
                      </span>
                    </button>

                    {/* Score */}
                    <span className={`font-mono font-bold text-center ${scoreBadgeColor(trade.discipline_score)}`}>
                      {trade.discipline_score !== null ? trade.discipline_score : "-"}
                    </span>

                    {/* Chart Link */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/chart?trade_id=${trade.id}&pair=${trade.pair}`);
                      }}
                      className={`p-1 rounded transition-colors ${
                        isDarkMode ? "text-gray-600 hover:text-blue-400 hover:bg-blue-500/10" : "text-gray-400 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                      title="チャートで表示"
                    >
                      <LineChart size={14} />
                    </button>
                  </div>

                  {/* Expanded: Reason Selector */}
                  {isExpanded && (
                    <div
                      className={`px-4 py-3 border-b ${
                        isDarkMode ? "bg-dark-secondary/30 border-gray-800" : "bg-gray-50 border-gray-100"
                      }`}
                    >
                      <p className={`text-xs font-bold mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                        エントリー理由を選択
                      </p>
                      <div className="space-y-2">
                        {Object.entries(groupedReasons).map(([category, reasons]) => (
                          <div key={category}>
                            <p className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                              isDarkMode ? "text-gray-600" : "text-gray-400"
                            }`}>
                              {categoryLabel[category] || category}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {reasons.map((reason) => {
                                const isActive = trade.entry_reason_id === reason.id;
                                const isSaving = savingId === trade.id;
                                return (
                                  <button
                                    key={reason.id}
                                    onClick={() => handleReasonSelect(trade.id, reason.id)}
                                    disabled={isSaving}
                                    className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium transition-colors ${
                                      isActive
                                        ? reason.is_mistake
                                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                        : reason.is_mistake
                                        ? isDarkMode
                                          ? "bg-dark-secondary text-red-400/60 hover:bg-red-500/10"
                                          : "bg-gray-100 text-red-400/60 hover:bg-red-50"
                                        : isDarkMode
                                        ? "bg-dark-secondary text-gray-400 hover:bg-blue-500/10 hover:text-blue-400"
                                        : "bg-gray-100 text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                                    }`}
                                  >
                                    {isActive && <Check size={10} />}
                                    {reason.label_ja}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
