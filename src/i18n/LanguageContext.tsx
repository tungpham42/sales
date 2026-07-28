import React, { createContext, useContext, useMemo, useState } from "react";
import { translations, TranslationKey } from "./translations";

export type Language = "vi" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "softy_lang";

function getInitialLang(): Language {
  if (typeof window === "undefined") return "vi";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "vi" || stored === "en") return stored;
  return "vi";
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>(getInitialLang());

  const setLang = (next: Language) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  };

  const toggleLang = () => setLang(lang === "vi" ? "en" : "vi");

  const t = (key: TranslationKey) => translations[key][lang];

  const value = useMemo(() => ({ lang, setLang, toggleLang, t }), [lang]); // eslint-disable-line

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
