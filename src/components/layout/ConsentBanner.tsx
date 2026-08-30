import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { useConsent } from '@/lib/consent';
import { loadAnalytics } from '@/lib/analytics';
import { isAnalyticsConfigured } from '@/lib/config';

export function ConsentBanner() {
  const { t, path } = useI18n();
  const { consent, setConsent } = useConsent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Load analytics whenever consent is (or becomes) granted.
  useEffect(() => {
    if (consent === 'granted') loadAnalytics();
  }, [consent]);

  // Nothing to consent to if analytics isn't configured.
  if (!mounted || consent !== 'unset' || !isAnalyticsConfigured) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.consent.title}
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-line-strong bg-paper p-5 shadow-[0_12px_40px_-12px_rgba(28,24,21,0.25)] sm:inset-x-4 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">
          {t.consent.body}{' '}
          <Link to={path('cookies')} className="link-underline whitespace-nowrap text-ink">
            {t.consent.more}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2.5">
          <button
            type="button"
            onClick={() => setConsent('denied')}
            className="min-h-[44px] rounded-full border border-line-strong px-4 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            {t.consent.decline}
          </button>
          <button
            type="button"
            onClick={() => setConsent('granted')}
            className="min-h-[44px] rounded-full bg-ink px-5 text-sm font-medium text-bone transition-colors hover:bg-coral"
          >
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
