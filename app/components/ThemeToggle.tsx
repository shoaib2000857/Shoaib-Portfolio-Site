"use client";
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = theme === 'dark';
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="glass px-3 py-2 text-sm font-medium flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition"
    >
      {isDark ? '🌙' : '☀️'}{' '}
      <span className="hidden sm:inline">{isDark ? 'Dark' : 'Light'} mode</span>
    </button>
  );
}
