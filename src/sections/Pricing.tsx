import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { CtaLink } from '@/components/Button';

function Check({ dark = false }: { dark?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true" className="mt-1 shrink-0">
      <path
        d="M3 8.5l3.2 3.2L13 4.5"
        stroke={dark ? 'var(--color-coral)' : 'var(--color-coral)'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing() {
  const { t, path } = useI18n();
  const home = path('home');
  const quoteHref = `${home === '/' ? '' : home}#contact`;

  return (
    <Section id="pricing">
      <IndexMarker index={t.pricing.index} label={t.pricing.eyebrow} />

      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <Reveal as="h2" className="max-w-xl text-h2 text-ink">
          {t.pricing.title}
        </Reveal>
        <Reveal as="p" delay={80} className="max-w-sm text-ink-soft">
          {t.pricing.subtitle}
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-start">
        {t.pricing.plans.map((plan, i) => {
          const dark = plan.popular;
          return (
            <Reveal
              key={plan.id}
              delay={i * 80}
              className={[
                'flex h-full flex-col rounded-2xl p-7 md:p-8',
                dark
                  ? 'bg-ink text-bone lg:-translate-y-3 shadow-[0_28px_70px_-30px_rgba(28,24,21,0.55)]'
                  : 'border border-line-strong bg-paper text-ink',
              ].join(' ')}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className={`text-h3 ${dark ? 'text-bone' : 'text-ink'}`}>{plan.name}</h3>
                {plan.popular && (
                  <span className="rounded-full bg-coral px-3 py-1 text-xs font-medium text-white">
                    {t.pricing.mostPopular}
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-serif text-5xl leading-none">{plan.price}</span>
              </div>

              <p className={`mt-4 min-h-[3rem] ${dark ? 'text-bone/75' : 'text-ink-soft'}`}>
                {plan.tagline}
              </p>

              {plan.badge && (
                <p className="mt-4 flex items-start gap-2 rounded-lg border border-coral/35 bg-coral/10 px-3 py-2 text-sm font-medium text-[#f0906f]">
                  <svg viewBox="0 0 16 16" width="14" height="14" className="mt-0.5 shrink-0" fill="currentColor" aria-hidden="true">
                    <path d="M8 1l1.9 4.1 4.5.5-3.3 3 .9 4.4L8 10.9 4 13l.9-4.4-3.3-3 4.5-.5z" />
                  </svg>
                  <span>{plan.badge}</span>
                </p>
              )}

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className={`flex gap-2.5 text-sm ${dark ? 'text-bone/85' : 'text-ink-soft'}`}>
                    <Check dark={dark} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaLink
                  to={plan.action === 'start' ? path('start') : undefined}
                  href={plan.action === 'quote' ? quoteHref : undefined}
                  variant={dark ? 'invert' : 'primary'}
                  size="md"
                  className="w-full"
                >
                  {plan.cta}
                </CtaLink>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Hosting & care + payment */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-line-strong bg-bone p-7 md:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-h3 text-ink">{t.pricing.hosting.title}</h3>
            <p className="font-serif text-3xl text-ink">
              {t.pricing.hosting.price}
              <span className="text-base text-muted">{t.pricing.hosting.per}</span>
            </p>
          </div>
          <p className="mt-3 text-ink-soft">{t.pricing.hosting.lead}</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {t.pricing.hosting.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
                <Check />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">{t.pricing.hosting.note}</p>
        </Reveal>

        <Reveal delay={80} className="rounded-2xl border border-line-strong bg-bone p-7 md:p-8">
          <h3 className="text-h3 text-ink">{t.pricing.payment.title}</h3>
          <ul className="mt-5 space-y-3">
            {t.pricing.payment.points.map((p) => (
              <li key={p} className="flex gap-3 text-ink-soft">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
