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

// Auto-detect language based on browser with fallback to English
const detectLanguage = (): Language => {
  // Check localStorage first (user preference)
  const stored = localStorage.getItem("lang") as Language;
  if (stored && ["en", "sv", "el"].includes(stored)) {
    return stored;
  }

  // Check browser locale
  const browserLang = navigator.language.toLowerCase();

  // Debug: Log detected browser language
  console.log("Browser language detected:", browserLang);

  // STRICT Swedish detection - only exact Swedish locales
  if (browserLang === "sv" || browserLang === "sv-se" || browserLang === "sv-fi") {
    console.log("Swedish language detected");
    return "sv";
  }

  // Greek detection (both 'el' and 'gr' codes)
  if (browserLang === "el" || browserLang === "el-gr" || browserLang === "gr" || browserLang === "gr-gr") {
    console.log("Greek language detected");
    return "el";
  }

  // Default to English for everything else (including en-US, en-GB, etc.)
  console.log("Defaulting to English");
  return "en";
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

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
