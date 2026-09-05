import { Head } from 'vite-react-ssg';
import { SITE_URL } from '@/lib/config';
import { PAGE_PATHS, NOINDEX_PAGES, type Locale, type PageKey } from '@/i18n/routes';

interface SeoProps {
  locale: Locale;
  pageKey: PageKey;
  title: string;
  description: string;
  /** Extra JSON-LD blocks (already-truthful objects). */
  jsonLd?: Record<string, unknown>[];
}

const OG_IMAGE = `${SITE_URL}/og-image.png`;

export function Seo({ locale, pageKey, title, description, jsonLd }: SeoProps) {
  const path = PAGE_PATHS[pageKey][locale];
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const noindex = NOINDEX_PAGES.includes(pageKey);

  const enPath = PAGE_PATHS[pageKey].en;
  const elPath = PAGE_PATHS[pageKey].el;
  const enUrl = `${SITE_URL}${enPath === '/' ? '' : enPath}`;
  const elUrl = `${SITE_URL}${elPath}`;
  const ogLocale = locale === 'el' ? 'el_GR' : 'en_GB';

  return (
    <Head>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* hreflang alternates (indexable pages only) */}
      {!noindex && <link rel="alternate" hrefLang="en" href={enUrl} />}
      {!noindex && <link rel="alternate" hrefLang="el" href={elUrl} />}
      {!noindex && <link rel="alternate" hrefLang="x-default" href={enUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Snabbily" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd?.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}
