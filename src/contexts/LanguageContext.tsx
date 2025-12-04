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

// 1. Logic moved outside component to be pure and testable
const detectLanguage = (): Language => {
  // Safety check for SSR (Server Side Rendering) environments
  if (typeof window === "undefined") return "en";

  // --- NEW LOGIC START ---
  // 1. PRIORITY: Check URL Query Parameter (?lang=sv)
  // This is required for SEO links to work correctly
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  if (urlLang && ["en", "sv", "el"].includes(urlLang)) {
    return urlLang as Language;
  }
  // --- NEW LOGIC END ---

  // 2. Check localStorage (User preference from previous visit)
  const stored = localStorage.getItem("lang") as Language;
  if (stored && ["en", "sv", "el"].includes(stored)) {
    return stored;
  }

  // 3. Check browser capability
  const browserLang = navigator.language ? navigator.language.toLowerCase() : "en";

  // Strict Swedish Detection
  if (browserLang.startsWith("sv")) {
    return "sv";
  }

  // Greek Detection
  if (browserLang.startsWith("el") || browserLang === "gr") {
    return "el";
  }

  // Default to Swedish
  return "sv";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // 2. LAZY INITIALIZATION: Pass a function to useState, not a value.
  // This runs ONLY once on mount, preventing the "English Flash".
  const [lang, setLangState] = useState<Language>(() => {
    const initialLang = detectLanguage();
    // Set the HTML lang attribute immediately on boot
    if (typeof window !== "undefined") {
      document.documentElement.lang = initialLang;
    }
    return initialLang;
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;

    // Optional: Update URL without reloading page (SPA friendly)
    // This keeps the URL clean if they switch manually via the toggle
    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLang);
    window.history.replaceState({}, "", url);
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
