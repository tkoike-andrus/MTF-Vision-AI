"use client";

import { useSyncExternalStore, useCallback, useEffect } from "react";

const STORAGE_KEY = "aatm-dark-mode";

function getSnapshot(): boolean {
  if (typeof window === "undefined") return true;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === null ? true : stored === "true";
}

function getServerSnapshot(): boolean {
  return true;
}

function subscribe(callback: () => void): () => void {
  const handleStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  const handleCustom = () => callback();
  window.addEventListener("storage", handleStorage);
  window.addEventListener("theme-change", handleCustom);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("theme-change", handleCustom);
  };
}

function applyTheme(dark: boolean) {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function useTheme() {
  const isDarkMode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Sync the dark class on mount and whenever isDarkMode changes
  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    const next = !getSnapshot();
    localStorage.setItem(STORAGE_KEY, String(next));
    applyTheme(next);
    window.dispatchEvent(new CustomEvent("theme-change"));
  }, []);

  return { isDarkMode, toggleTheme };
}
