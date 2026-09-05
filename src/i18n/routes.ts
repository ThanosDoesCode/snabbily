export type Locale = 'en' | 'el';
export const LOCALES: Locale[] = ['en', 'el'];
export const DEFAULT_LOCALE: Locale = 'en';

/** Logical pages and their canonical path in each language. */
export type PageKey =
  | 'home'
  | 'websiteDesign'
  | 'hairBeauty'
  | 'start'
  | 'review'
  | 'privacy'
  | 'cookies';

export const PAGE_PATHS: Record<PageKey, Record<Locale, string>> = {
  home: { en: '/', el: '/el' },
  websiteDesign: {
    en: '/website-design-for-small-businesses',
    el: '/el/kataskevi-istoselidon',
  },
  hairBeauty: {
    en: '/websites-for-hair-beauty',
    el: '/el/kataskevi-istoselidon-gia-kommotiria',
  },
  start: { en: '/start', el: '/el/start' },
  review: { en: '/review', el: '/el/review' },
  privacy: { en: '/privacy', el: '/el/privacy' },
  cookies: { en: '/cookies', el: '/el/cookies' },
};

/** Pages that should not be indexed (conversion flows). */
export const NOINDEX_PAGES: PageKey[] = ['start', 'review'];

export function pagePath(key: PageKey, locale: Locale): string {
  return PAGE_PATHS[key][locale];
}

/** All routes to statically prerender. */
export function allStaticPaths(): string[] {
  return Object.values(PAGE_PATHS).flatMap((byLocale) => Object.values(byLocale));
}

const REVERSE: Record<string, { locale: Locale; pageKey: PageKey }> = (() => {
  const map: Record<string, { locale: Locale; pageKey: PageKey }> = {};
  (Object.keys(PAGE_PATHS) as PageKey[]).forEach((key) => {
    (Object.keys(PAGE_PATHS[key]) as Locale[]).forEach((locale) => {
      map[PAGE_PATHS[key][locale]] = { locale, pageKey: key };
    });
  });
  return map;
})();

/** Resolve a pathname to its locale + page. Falls back to the EN home. */
export function resolvePath(pathname: string): { locale: Locale; pageKey: PageKey } {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return REVERSE[normalized] ?? { locale: DEFAULT_LOCALE, pageKey: 'home' };
}
