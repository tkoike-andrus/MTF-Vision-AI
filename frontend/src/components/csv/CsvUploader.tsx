"use client";

import { useState, useRef } from "react";
import { Upload, AlertCircle, CheckCircle2 } from "lucide-react";
import { parseCSV, type ParseResult } from "@/actions/csv-upload";
import type { ParsedTrade } from "@/lib/parsers/types";

interface CsvUploaderProps {
  isDarkMode: boolean;
  onParsed: (trades: ParsedTrade[], broker: string) => void;
}

export default function CsvUploader({ isDarkMode, onParsed }: CsvUploaderProps) {
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ParseResult | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    const res = await parseCSV(formData);
    setResult(res);
    setLoading(false);

    if (res.success) {
      onParsed(res.trades, res.broker);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="space-y-3">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
          dragOver
            ? "border-blue-500 bg-blue-500/10"
            : isDarkMode
            ? "border-gray-700 hover:border-gray-600 bg-dark-card"
            : "border-gray-300 hover:border-gray-400 bg-gray-50"
        }`}
      >
        <input
          ref={fileRef}
          type="file"
          accept=".csv"
          onChange={handleChange}
          className="hidden"
        />
        {loading ? (
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
              className={`text-sm font-medium ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              CSV解析中...
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Upload
              size={32}
              className={isDarkMode ? "text-gray-500" : "text-gray-400"}
            />
            <div>
              <p
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                CSVファイルをドラッグ&ドロップ
              </p>
              <p
                className={`text-xs mt-1 ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                またはクリックしてファイルを選択
              </p>
            </div>
          </div>
        )}
      </div>

      {result && !result.success && (
        <div className="flex items-center gap-2 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-lg">
          <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
          <p className="text-red-400 text-xs">{result.error}</p>
        </div>
      )}

      {result && result.success && (
        <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <CheckCircle2
            size={16}
            className="text-emerald-400 flex-shrink-0"
          />
          <p className="text-emerald-400 text-xs">
            {result.broker}から{result.trades.length}件のトレードを検出
          </p>
        </div>
      )}
    </div>
  );
}
