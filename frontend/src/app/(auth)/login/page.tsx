"use client";

import { useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div className="w-full max-w-sm px-4">
      {/* Logo */}
      <div className="text-center mb-8">
        <Image src="/logo.png" alt="AATM" width={56} height={56} className="rounded-2xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AATM</h1>
        <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Autonomous AI Trading Manager</p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-4">
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
            placeholder="********"
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
          {loading ? "ログイン中..." : "ログイン"}
        </button>
      </form>

      <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-6">
        アカウントをお持ちでない方は{" "}
        <Link href="/register" className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300">
          新規登録
        </Link>
      </p>
    </div>
  );
}
