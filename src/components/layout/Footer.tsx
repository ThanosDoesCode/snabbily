import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { CONTACT_EMAIL, isAnalyticsConfigured } from '@/lib/config';
import { useConsent } from '@/lib/consent';

export function Footer() {
  const { t, path } = useI18n();
  const { resetConsent } = useConsent();
  const home = home_(path('home'));
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bone">
      <div className="shell py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8">
          <div className="max-w-sm">
            <div className="font-serif text-2xl text-ink">
              Snabbily<span className="text-coral">.</span>
            </div>
            <p className="mt-4 text-ink-soft">{t.footer.tagline}</p>
            <p className="mt-6 text-sm text-muted">{t.footer.builtNote}</p>
          </div>

          <nav aria-label={t.footer.servicesTitle}>
            <h2 className="eyebrow">{t.footer.servicesTitle}</h2>
            <ul className="mt-4 space-y-2.5 text-ink-soft">
              <li>
                <Link className="link-underline hover:text-ink" to={`${home}#services`}>
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link className="link-underline hover:text-ink" to={`${home}#pricing`}>
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link className="link-underline hover:text-ink" to={path('hairBeauty')}>
                  {t.niche.focusLabel}
                </Link>
              </li>
              <li>
                <Link className="link-underline hover:text-ink" to={path('review')}>
                  {t.cta.freeReview}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">{t.footer.legalTitle}</h2>
            <ul className="mt-4 space-y-2.5 text-ink-soft">
              <li>
                <a className="link-underline hover:text-ink" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link className="link-underline hover:text-ink" to={path('privacy')}>
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link className="link-underline hover:text-ink" to={path('cookies')}>
                  {t.footer.cookies}
                </Link>
              </li>
              {isAnalyticsConfigured && (
                <li>
                  <button
                    type="button"
                    onClick={resetConsent}
                    className="link-underline text-left text-ink-soft hover:text-ink"
                  >
                    {t.footer.cookieSettings}
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Snabbily. {t.footer.rights}
          </p>
          <p>snabbily.com</p>
        </div>
      </div>
    </footer>
  );
}

function home_(p: string): string {
  return p === '/' ? '' : p;
}
