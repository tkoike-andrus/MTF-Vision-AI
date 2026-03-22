"use client";

import { useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("パスワードが一致しません");
      return;
    }

    if (password.length < 6) {
      setError("パスワードは6文字以上で入力してください");
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="w-full max-w-sm px-4 text-center">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          確認メールを送信しました
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          <strong className="text-gray-900 dark:text-white">{email}</strong> に確認メールを送信しました。
          メール内のリンクをクリックして登録を完了してください。
        </p>
        <Link
          href="/login"
          className="text-blue-500 dark:text-blue-400 text-sm hover:underline"
        >
          ログインページへ戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm px-4">
      <div className="text-center mb-8">
        <Image src="/logo.png" alt="AATM" width={56} height={56} className="rounded-2xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">新規登録</h1>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">AATMアカウントを作成</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
            メールアドレス
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-dark-card border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="email@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
            パスワード
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-dark-card border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="6文字以上"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5">
            パスワード確認
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border bg-gray-50 dark:bg-dark-card border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="もう一度入力"
            required
          />
        </div>

        {error && (
          <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-500 disabled:bg-gray-300 dark:disabled:bg-gray-800 disabled:text-gray-500 dark:disabled:text-gray-600 transition-colors shadow-lg shadow-blue-600/20"
        >
          {loading ? "登録中..." : "アカウント作成"}
        </button>
      </form>

      <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-6">
        既にアカウントをお持ちの方は{" "}
        <Link href="/login" className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300">
          ログイン
        </Link>
      </p>
    </div>
  );
}
