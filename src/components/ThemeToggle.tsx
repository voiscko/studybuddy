'use client';
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initiales Theme aus localStorage oder System übernehmen
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <button
      aria-label={theme === "dark" ? "Wechsel zu hellem Modus" : "Wechsel zu dunklem Modus"}
      onClick={toggleTheme}
      className="rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" size={22} />
      ) : (
        <FaMoon className="text-blue-600" size={22} />
      )}
    </button>
  );
} 