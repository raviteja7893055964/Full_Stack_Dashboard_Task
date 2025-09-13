"use client";

import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";

export default function ThemeLanguageSwitcher() {
const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLang();

  return (
    <div className="flex gap-4 p-4">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg shadow-md bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors"
      >
        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>

      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="px-4 py-2 rounded-lg shadow-md bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  );
}
