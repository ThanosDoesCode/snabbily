import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/locales/en.json";
import sv from "@/locales/sv.json";
import el from "@/locales/el.json";

type Language = "en" | "sv" | "el";
type Translations = typeof en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = { en, sv, el };

// Helper to get nested object property by string path
const getNestedTranslation = (obj: any, path: string): string => {
  const keys = path.split(".");
  let result = obj;
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return path; // Return key if not found
    }
  }
  return typeof result === "string" ? result : path;
};

// Auto-detect language based on browser/country
const detectLanguage = (): Language => {
  // Check localStorage first
  const stored = localStorage.getItem("lang") as Language;
  if (stored && ["en", "sv", "el"].includes(stored)) {
    return stored;
  }

  // Check browser locale
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("sv")) return "sv";
  if (browserLang.startsWith("el")) return "el";

  // Optional: Check CF-IPCountry header if available (requires server-side setup)
  // For client-side detection, we rely on browser locale
  // If you set up a server that provides CF-IPCountry, you could fetch it here

  return "en"; // Default fallback
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const detected = detectLanguage();
    setLangState(detected);
    document.documentElement.lang = detected;
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = (key: string): string => {
    return getNestedTranslation(translations[lang], key);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
