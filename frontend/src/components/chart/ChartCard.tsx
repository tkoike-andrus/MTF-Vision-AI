"use client";

import { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle } from "react";
import {
  createChart,
  type IChartApi,
  type ISeriesApi,
  ColorType,
  type Time,
  type SeriesMarker,
} from "lightweight-charts";
import { createClient } from "@/lib/supabase/client";
import type { Trade } from "@/lib/types/database";

const RESOLUTIONS = [
  { label: "1分足", value: "1min" },
  { label: "5分足", value: "5min" },
  { label: "10分足", value: "10min" },
  { label: "15分足", value: "15min" },
  { label: "30分足", value: "30min" },
  { label: "1時間足", value: "1hour" },
  { label: "4時間足", value: "4hour" },
  { label: "8時間足", value: "8hour" },
  { label: "12時間足", value: "12hour" },
  { label: "日足", value: "1day" },
  { label: "週足", value: "1week" },
  { label: "月足", value: "1month" },
];

// Initial bar counts per resolution
const INITIAL_BARS: Record<string, number> = {
  "1min": 300,
  "5min": 200,
  "10min": 200,
  "15min": 200,
  "30min": 200,
  "1hour": 300,
  "4hour": 200,
  "8hour": 150,
  "12hour": 150,
  "1day": 365,
  "1week": 150,
  "1month": 48,
};

const LOAD_MORE_BARS = 500;

// JST offset: +9 hours in seconds
const JST_OFFSET = 9 * 60 * 60;
const DAY_SECONDS = 86400;
const DAY_NAMES = ["日", "月", "火", "水", "木", "金", "土"];

/**
 * Convert UTC timestamp to display time for lightweight-charts.
 * - Intraday (1min–12hour): +9h JST offset
 * - Daily: +1 day (JST trading day = UTC date + 1)
 * - Weekly: next Monday from UTC Saturday
 * - Monthly: 1st of next month
 */
function toJstTime(utcTimestamp: string, resolution: string): Time {
  const utcMs = new Date(utcTimestamp).getTime();
  const utcSec = Math.floor(utcMs / 1000);

  if (resolution === "1month") {
    const d = new Date(utcMs);
    const next = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1));
    return Math.floor(next.getTime() / 1000) as Time;
  }

  if (resolution === "1week") {
    const d = new Date(utcMs);
    const dow = d.getUTCDay(); // 0=Sun..6=Sat
    const daysToMon = dow === 0 ? 1 : dow === 1 ? 0 : 8 - dow;
    return (utcSec + daysToMon * DAY_SECONDS) as Time;
  }

  if (resolution === "1day") {
    return (utcSec + DAY_SECONDS) as Time;
  }

  // Intraday
  return (utcSec + JST_OFFSET) as Time;
}

/** Tooltip format — resolution-aware */
function formatJstTime(unixSec: number, resolution: string): string {
  const d = new Date(unixSec * 1000);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  const day = d.getUTCDate();
  const dow = DAY_NAMES[d.getUTCDay()];

  if (resolution === "1month") {
    return `${y}/${m}`;
  }
  if (resolution === "1week") {
    return `${y}/${m}/${day}(${dow})から`;
  }
  if (resolution === "1day") {
    return `${y}/${m}/${day}(${dow})`;
  }
  // Intraday
  const h = d.getUTCHours();
  const min = d.getUTCMinutes().toString().padStart(2, "0");
  return `${y}/${m}/${day}(${dow}) ${h}:${min}`;
}

/** X-axis tick mark format — resolution-aware */
function formatTickMark(unixSec: number, resolution: string): string {
  const d = new Date(unixSec * 1000);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1;
  const day = d.getUTCDate();

  if (resolution === "1month") {
    return `${y}/${m}`;
  }
  if (resolution === "1week" || resolution === "1day") {
    return `${m}/${day}`;
  }
  // Intraday
  const h = d.getUTCHours();
  const min = d.getUTCMinutes().toString().padStart(2, "0");
  return `${m}/${day} ${h}:${min}`;
}

interface ChartCardProps {
  pair: string;
  isDarkMode: boolean;
  trade?: Trade | null;
  trades?: Trade[];
  defaultRes?: string;
}

export interface ChartCardHandle {
  takeScreenshot: () => string | null;
}

interface BarData {
  time: Time;
  open: number;
  high: number;
  low: number;
  close: number;
}

const ChartCard = forwardRef<ChartCardHandle, ChartCardProps>(function ChartCard({
  pair,
  isDarkMode,
  trade,
  trades,
  defaultRes = "15min",
}, ref) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick", Time> | null>(null);
  const [resolution, setResolution] = useState(defaultRes);
  const [isLoading, setIsLoading] = useState(true);
  const allBarsRef = useRef<BarData[]>([]);
  const oldestTimestampRef = useRef<string | null>(null);
  const isLoadingMoreRef = useRef(false);
  const hasMoreRef = useRef(true);

  useImperativeHandle(ref, () => ({
    takeScreenshot: () => {
      if (!chartRef.current) return null;
      try {
        const canvas = chartRef.current.takeScreenshot();
        return canvas.toDataURL("image/png").split(",")[1];
      } catch {
        return null;
      }
    },
  }));

  const getThemeColors = useCallback(() => {
    if (isDarkMode) {
      return {
        background: "#131722",
        text: "#d1d4dc",
        grid: "#2b2b43",
        up: "#ffffff",
        down: "#00bfff",
        borderUp: "#ffffff",
        wickUp: "#ffffff",
        borderDown: "#00bfff",
        wickDown: "#00bfff",
      };
    }
    return {
      background: "#ffffff",
      text: "#131722",
      grid: "#f0f3fa",
      up: "#e43a8f",
      down: "#3f92ff",
      borderUp: "#e43a8f",
      wickUp: "#e43a8f",
      borderDown: "#3f92ff",
      wickDown: "#3f92ff",
    };
  }, [isDarkMode]);

  // Fetch latest N bars (initial load)
  const fetchInitialData = useCallback(async () => {
    if (!seriesRef.current) return;
    setIsLoading(true);
    try {
      const supabase = createClient();
      const limit = INITIAL_BARS[resolution] || 200;

      // Fetch latest bars by ordering DESC then reversing
      const { data, error } = await supabase
        .from("market_data")
        .select("timestamp, open, high, low, close")
        .eq("pair", pair)
        .eq("resolution", resolution)
        .order("timestamp", { ascending: false })
        .limit(limit);

      if (error) throw error;
      if (data && data.length > 0) {
        // Reverse to chronological order
        const reversed = data.reverse();
        const bars: BarData[] = reversed.map(
          (d: { timestamp: string; open: number; high: number; low: number; close: number }) => ({
            time: toJstTime(d.timestamp, resolution),
            open: d.open,
            high: d.high,
            low: d.low,
            close: d.close,
          })
        );

        allBarsRef.current = bars;
        oldestTimestampRef.current = reversed[0].timestamp;
        hasMoreRef.current = data.length >= limit;
        seriesRef.current.setData(bars);
        chartRef.current?.timeScale().scrollToRealTime();
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setTimeout(() => setIsLoading(false), 300);
    }
  }, [pair, resolution]);

  // Load older data when scrolling left
  const loadMoreData = useCallback(async () => {
    if (
      isLoadingMoreRef.current ||
      !hasMoreRef.current ||
      !seriesRef.current ||
      !oldestTimestampRef.current
    )
      return;

    isLoadingMoreRef.current = true;
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("market_data")
        .select("timestamp, open, high, low, close")
        .eq("pair", pair)
        .eq("resolution", resolution)
        .lt("timestamp", oldestTimestampRef.current)
        .order("timestamp", { ascending: false })
        .limit(LOAD_MORE_BARS);

      if (error) throw error;
      if (data && data.length > 0) {
        const reversed = data.reverse();
        const newBars: BarData[] = reversed.map(
          (d: { timestamp: string; open: number; high: number; low: number; close: number }) => ({
            time: toJstTime(d.timestamp, resolution),
            open: d.open,
            high: d.high,
            low: d.low,
            close: d.close,
          })
        );

        oldestTimestampRef.current = reversed[0].timestamp;
        hasMoreRef.current = data.length >= LOAD_MORE_BARS;

        // Prepend and re-set all data
        allBarsRef.current = [...newBars, ...allBarsRef.current];
        seriesRef.current.setData(allBarsRef.current);
      } else {
        hasMoreRef.current = false;
      }
    } catch (err) {
      console.error("Load more error:", err);
    } finally {
      isLoadingMoreRef.current = false;
    }
  }, [pair, resolution]);

  // Trade markers — supports single trade (zoom) or multi-trade (all markers)
  useEffect(() => {
    if (!seriesRef.current) return;

    // Determine which trades to plot
    const tradesToPlot = trade ? [trade] : trades ?? [];
    if (tradesToPlot.length === 0) {
      seriesRef.current.setMarkers([]);
      return;
    }

    const markers: SeriesMarker<Time>[] = [];

    for (const t of tradesToPlot) {
      const isAuto = t.trade_type === "auto";

      if (t.entry_at_utc) {
        markers.push({
          time: toJstTime(t.entry_at_utc, resolution),
          position: "belowBar",
          color: isAuto ? "#B8860B" : "#2196F3",
          shape: isAuto ? "square" : "arrowUp",
          text: `${t.side === "Buy" ? "買" : "売"} @ ${t.entry_price}`,
        });
      }
      if (t.exit_at_utc) {
        markers.push({
          time: toJstTime(t.exit_at_utc, resolution),
          position: "aboveBar",
          color: isAuto
            ? (t.pnl >= 0 ? "#B8860B" : "#D2691E")
            : (t.pnl >= 0 ? "#4CAF50" : "#FF5252"),
          shape: isAuto ? "circle" : "arrowDown",
          text: `${t.pnl >= 0 ? "+" : ""}${t.pnl.toLocaleString()}`,
        });
      }
    }

    markers.sort((a, b) => (a.time as number) - (b.time as number));
    seriesRef.current.setMarkers(markers);

    // Only auto-scroll when single trade is selected (preserve bar width)
    if (trade && chartRef.current && markers.length > 0) {
      const ts = chartRef.current.timeScale();
      const barSpacing = ts.options().barSpacing;
      const entryTime = markers[0].time as number;
      const exitTime = markers.length > 1 ? markers[markers.length - 1].time as number : entryTime;
      const midTime = Math.floor((entryTime + exitTime) / 2);
      // Scroll to center the trade without changing zoom
      ts.scrollToPosition(0, false);
      const range = ts.getVisibleLogicalRange();
      if (range) {
        // Use setVisibleRange with enough padding to keep bar spacing
        const padding = Math.max(7200, (exitTime - entryTime) * 0.5);
        ts.setVisibleRange({
          from: (midTime - padding) as Time,
          to: (midTime + padding) as Time,
        });
        // Restore original bar spacing to prevent candle width change
        ts.applyOptions({ barSpacing });
      }
    }

    return () => {
      seriesRef.current?.setMarkers([]);
    };
  }, [trade, trades, resolution]);

  // Chart initialization
  useEffect(() => {
    if (!chartContainerRef.current) return;

    const colors = getThemeColors();
    const res = resolution;
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: colors.background },
        textColor: colors.text,
      },
      grid: {
        vertLines: { color: colors.grid },
        horzLines: { color: colors.grid },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      localization: {
        timeFormatter: (time: number) => formatJstTime(time, res),
      },
      timeScale: {
        timeVisible: true,
        borderVisible: false,
        rightOffset: 5,
        tickMarkFormatter: (time: number) => formatTickMark(time, res),
      },
      rightPriceScale: {
        borderVisible: false,
      },
    });

    const series = chart.addCandlestickSeries({
      upColor: colors.up,
      downColor: colors.down,
      borderVisible: true,
      borderUpColor: colors.borderUp,
      wickUpColor: colors.wickUp,
      borderDownColor: colors.borderDown,
      wickDownColor: colors.wickDown,
    });

    chartRef.current = chart;
    seriesRef.current = series;

    // Reset state for new pair/resolution
    allBarsRef.current = [];
    oldestTimestampRef.current = null;
    hasMoreRef.current = true;

    fetchInitialData();

    // Detect scroll to left edge → load more
    chart.timeScale().subscribeVisibleLogicalRangeChange((logicalRange) => {
      if (!logicalRange) return;
      if (logicalRange.from < 10) {
        loadMoreData();
      }
    });

    const handleResize = () =>
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [pair, resolution, getThemeColors, fetchInitialData, loadMoreData]);

  // Theme change
  useEffect(() => {
    if (!chartRef.current || !seriesRef.current) return;
    const colors = getThemeColors();

    chartRef.current.applyOptions({
      layout: {
        background: { type: ColorType.Solid, color: colors.background },
        textColor: colors.text,
      },
      grid: {
        vertLines: { color: colors.grid },
        horzLines: { color: colors.grid },
      },
    });

    seriesRef.current.applyOptions({
      upColor: colors.up,
      downColor: colors.down,
      borderUpColor: colors.borderUp,
      wickUpColor: colors.wickUp,
      borderDownColor: colors.borderDown,
      wickDownColor: colors.wickDown,
    });
  }, [isDarkMode, getThemeColors]);

  return (
    <div
      className={`relative border rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
        isDarkMode
          ? "bg-dark-secondary border-gray-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`flex justify-between items-center p-3 transition-colors ${
          isDarkMode
            ? "bg-dark-header text-gray-200"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <span className="font-extrabold tracking-widest text-sm">
          {pair.replace("_", " / ")}
        </span>
        <select
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
          className={`text-xs rounded px-2 py-1 border outline-none font-medium transition-colors ${
            isDarkMode
              ? "bg-black border-gray-600 focus:border-blue-500 text-white"
              : "bg-white border-gray-300 focus:border-blue-400 text-gray-900"
          }`}
        >
          {RESOLUTIONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <div ref={chartContainerRef} className="w-full" />
        {isLoading && (
          <div
            className={`absolute inset-0 flex items-center justify-center z-10 backdrop-blur-[1px] transition-opacity duration-300 ${
              isDarkMode ? "bg-black/20" : "bg-white/40"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <svg
                className="animate-spin h-8 w-8 text-blue-500"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              <span
                className={`text-[11px] font-bold tracking-widest ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                データ取得中
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default ChartCard;
