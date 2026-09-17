import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { I18nProvider } from '@/i18n';
import { resolvePath } from '@/i18n/routes';
import { ConsentProvider } from '@/lib/consent';
import { trackPageView } from '@/lib/analytics';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { ConsentBanner } from './ConsentBanner';
import { Curtain } from './Curtain';

/** Sends a GA4 page_view on client-side navigation. The first render is skipped
    because loadAnalytics already reports the initial view, so nothing is double
    counted. A no-op until analytics consent has loaded GA. */
function PageViewTracker({ path }: { path: string }) {
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    // Defer a frame so the new document.title (set by <Seo>) is current.
    const id = requestAnimationFrame(() => trackPageView(path));
    return () => cancelAnimationFrame(id);
  }, [path]);
  return null;
}

/** Scrolls to a hash target on navigation, or to the top on page change. */
function ScrollManager({ pathname, hash }: { pathname: string; hash: string }) {
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  const location = useLocation();
  const { locale, pageKey } = resolvePath(location.pathname);

  return (
    <I18nProvider locale={locale} pageKey={pageKey}>
      <ConsentProvider>
        <ScrollManager pathname={location.pathname} hash={location.hash} />
        <PageViewTracker path={location.pathname} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-bone"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
        <ConsentBanner />
        <Curtain />
      </ConsentProvider>
    </I18nProvider>
  );
}
