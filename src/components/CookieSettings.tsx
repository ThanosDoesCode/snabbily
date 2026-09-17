import { useI18n } from '@/i18n';
import { useConsent } from '@/lib/consent';
import { isAnalyticsConfigured } from '@/lib/config';

/** Cookie preferences panel shown on the Cookie Policy page. Distinguishes
    necessary cookies (always active) from analytics (optional) and lets the
    visitor change their analytics consent, which loads or stops GA immediately. */
export function CookieSettings() {
  const { t } = useI18n();
  const { consent, setConsent } = useConsent();
  const cs = t.cookieSettings;
  const on = consent === 'granted';

  return (
    <section className="shell max-w-3xl pb-16 md:pb-20">
      <div className="rounded-2xl border border-line-strong bg-bone p-6 md:p-8">
        <h2 className="text-h3 text-ink">{cs.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{cs.intro}</p>

        <dl className="mt-6 divide-y divide-line">
          {/* Necessary: always on. */}
          <div className="flex items-start justify-between gap-5 pb-5">
            <div>
              <dt className="font-medium text-ink">{cs.necessaryTitle}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{cs.necessaryBody}</dd>
            </div>
            <span className="mt-1 shrink-0 rounded-full border border-line-strong px-3 py-1 text-[0.7rem] uppercase tracking-[0.08em] text-muted">
              {cs.alwaysActive}
            </span>
          </div>

          {/* Analytics: optional toggle bound to the consent system. */}
          <div className="flex items-start justify-between gap-5 pt-5">
            <div>
              <dt className="font-medium text-ink">{cs.analyticsTitle}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{cs.analyticsBody}</dd>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={on}
              aria-label={cs.toggleLabel}
              disabled={!isAnalyticsConfigured}
              onClick={() => setConsent(on ? 'denied' : 'granted')}
              className={`relative mt-1 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40 ${
                on ? 'bg-coral' : 'bg-line-strong'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-paper shadow transition-transform duration-200 ${
                  on ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </dl>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          {on ? cs.statusOn : cs.statusOff}
        </p>
      </div>
    </section>
  );
}
