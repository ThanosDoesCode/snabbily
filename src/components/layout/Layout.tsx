import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { I18nProvider } from '@/i18n';
import { resolvePath } from '@/i18n/routes';
import { ConsentProvider } from '@/lib/consent';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { ConsentBanner } from './ConsentBanner';

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
      </ConsentProvider>
    </I18nProvider>
  );
}
