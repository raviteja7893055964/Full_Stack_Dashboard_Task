'use client';
import React from 'react';
import { useLang } from '../context/LanguageContext';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { useTheme } from "../context/ThemeContext";


export default function Header() {
const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLang();
  const router = useRouter();

  async function logout() {
    await fetch('/api/logout', { method: 'POST', credentials: 'include' });
    router.push('/login');
  }

  return (
    <header className="p-4 flex items-center justify-between border-b">
      <div className="flex items-center gap-4">
       <button
      onClick={toggleTheme}
      className="w-full px-3 py-2 rounded transition-colors duration-300 bg-white text-black border border-gray-300 dark:bg-black dark:text-white dark:border-gray-600"
    >
      {theme === "light" ? "Switch to Dark 🌙" : "Switch to Light 🌞"}
    </button>



        <select value={locale} onChange={(e) => setLocale(e.target.value as any)} className="border rounded px-2 py-1">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

     {/* <div>
        <Button label={t('logout')} onClick={logout} />
      </div> */}
    </header>
  );
}
