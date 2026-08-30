import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { en, type Dictionary } from './en';
import { el } from './el';
import { DEFAULT_LOCALE, PAGE_PATHS, pagePath, type Locale, type PageKey } from './routes';

const DICTS: Record<Locale, Dictionary> = { en, el };

interface I18nContextValue {
  locale: Locale;
  otherLocale: Locale;
  t: Dictionary;
  pageKey: PageKey;
  /** Path of the current page in the other language. */
  altPath: string;
  /** Build a path for a page in the current locale. */
  path: (key: PageKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  pageKey,
  children,
}: {
  locale: Locale;
  pageKey: PageKey;
  children: ReactNode;
}) {
  const value = useMemo<I18nContextValue>(() => {
    const otherLocale: Locale = locale === 'en' ? 'el' : 'en';
    return {
      locale,
      otherLocale,
      t: DICTS[locale] ?? DICTS[DEFAULT_LOCALE],
      pageKey,
      altPath: PAGE_PATHS[pageKey][otherLocale],
      path: (key: PageKey) => pagePath(key, locale),
    };
  }, [locale, pageKey]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
