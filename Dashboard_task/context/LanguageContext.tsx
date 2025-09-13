'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import en from '../locales/en.json';
import hi from '../locales/hi.json';

type LocaleKey = 'en' | 'hi';
type Messages = Record<string, any>;

const LOCALES: Record<LocaleKey, Messages> = { en, hi };

type LangContextType = {
  locale: LocaleKey;
  setLocale: (l: LocaleKey) => void;
  t: (path: string) => string;
  messages: Messages;
};

const LanguageContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleKey>(() => {
    if (typeof window === 'undefined') return 'en';
    const saved = localStorage.getItem('locale') as LocaleKey | null;
    return saved ?? 'en';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  function setLocale(l: LocaleKey) {
    setLocaleState(l);
  }

  function t(path: string) {
    const parts = path.split('.');
    let cur: any = LOCALES[locale];
    for (const p of parts) {
      cur = cur?.[p];
      if (cur == null) return path;
    }
    return typeof cur === 'string' ? cur : JSON.stringify(cur);
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, messages: LOCALES[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

export const useLanguage = useLang;
export default LanguageContext;
