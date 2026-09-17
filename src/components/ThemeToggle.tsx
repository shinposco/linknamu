"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="다크모드 전환"
      className="absolute right-5 top-5 rounded-full border border-white/60 bg-white/55 p-2.5 text-base leading-none shadow-[0_4px_16px_-4px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-200 hover:bg-white/75 dark:border-white/10 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/70"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
