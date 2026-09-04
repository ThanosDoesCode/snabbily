import { useState } from 'react';
import { useI18n } from '@/i18n';
import type { Dictionary } from '@/i18n/en';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { CtaLink } from '@/components/Button';

type Plan = Dictionary['pricing']['plans'][number];
type PricingDict = Dictionary['pricing'];

function Check() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
      <path d="M3 8.5l3.2 3.2L13 4.5" stroke="var(--color-coral)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dot() {
  return <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-line-strong" aria-hidden="true" />;
}

/** The detail for one package: value first, then included, then the matching
    optional Care plan. Used in the desktop panel and each mobile accordion. */
function PanelContent({
  plan,
  pricing,
  startHref,
  quoteHref,
  compact = false,
}: {
  plan: Plan;
  pricing: PricingDict;
  startHref: string;
  quoteHref: string;
  /** Hide the package name (the mobile accordion header already shows it). */
  compact?: boolean;
}) {
  const care = plan.care;
  return (
    <div>
      {!compact && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="font-serif text-[length:var(--text-h2)] leading-none text-ink">{plan.name}</h3>
          {plan.popular && (
            <span className="rounded-full bg-coral px-3 py-1 text-xs font-medium text-white">{pricing.mostPopular}</span>
          )}
        </div>
      )}

      <p className={`${compact ? '' : 'mt-4'} font-serif text-5xl leading-none text-ink`}>{plan.price}</p>
      <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-muted">{pricing.oneTimeLabel}</p>

      <p className="mt-5 max-w-xl text-lead leading-relaxed text-ink-soft">{plan.tagline}</p>

      <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink">{pricing.bestForLabel}</p>
      <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-soft">{plan.bestFor}</p>

      <div className="mt-7 grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {/* Outcomes: prominent, plain-language value. */}
        <div>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink">{pricing.helpsLabel}</p>
          <ul className="mt-3 space-y-2">
            {plan.outcomes.map((o) => (
              <li key={o} className="flex gap-2.5 text-sm leading-snug text-ink">
                <Check />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Included: subdued technical detail. */}
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted">{pricing.includedLabel}</p>
          {plan.includesPrevious && <p className="mt-2 text-xs text-ink-soft">{plan.includesPrevious}</p>}
          <ul className="mt-2 space-y-1.5">
            {plan.features.map((f) => (
              <li key={f} className="flex gap-2 text-xs leading-snug text-muted">
                <Dot />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <CtaLink
          to={plan.action === 'start' ? startHref : undefined}
          href={plan.action === 'quote' ? quoteHref : undefined}
          variant="primary"
          size="md"
          className="w-full sm:w-auto"
        >
          {plan.cta}
        </CtaLink>
      </div>

      {/* Optional, secondary Care plan matched to this package. */}
      <div className="mt-8 rounded-xl border border-line bg-bone/60 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.14em] text-muted">{pricing.careLabel}</p>
            <p className="mt-1 font-serif text-lg text-ink">{care.name}</p>
          </div>
          <p className="shrink-0 font-serif text-2xl leading-none text-ink">
            {care.price}
            <span className="text-sm text-muted">{pricing.perYear}</span>
          </p>
        </div>
        <p className="mt-2 text-sm text-ink-soft">
          <span className="text-muted">{pricing.careBestForLabel}: </span>
          {care.bestFor}
        </p>
        <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
          {care.features.map((f) => (
            <li key={f} className="flex gap-2 text-xs text-ink-soft">
              <Dot />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs leading-relaxed text-muted">{pricing.careBoundary}</p>
      </div>
    </div>
  );
}

function MenuItem({
  plan,
  active,
  mostPopular,
  onSelect,
}: {
  plan: Plan;
  active: boolean;
  mostPopular: string;
  onSelect: () => void;
}) {
  const base = 'relative w-full rounded-xl border px-5 py-4 text-left transition-colors duration-200';
  const state = active
    ? 'border-line-strong bg-paper shadow-[0_18px_40px_-30px_rgba(28,24,21,0.5)]'
    : plan.popular
      ? 'border-coral/30 hover:bg-paper/50'
      : 'border-transparent hover:bg-paper/50';
  return (
    <button type="button" role="tab" aria-selected={active} onClick={onSelect} className={`${base} ${state}`}>
      <span
        className={`absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-coral transition-opacity duration-200 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
      <span className="flex items-baseline justify-between gap-3">
        <span className="font-serif text-lg text-ink">{plan.name}</span>
        <span className="font-serif text-lg text-ink">{plan.price}</span>
      </span>
      <span className="mt-0.5 flex items-center justify-between gap-2">
        <span className="text-xs text-muted">{plan.menuLine}</span>
        {plan.popular && (
          <span className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-coral">{mostPopular}</span>
        )}
      </span>
    </button>
  );
}

export function Pricing() {
  const { t, path } = useI18n();
  const home = path('home');
  const startHref = path('start');
  const quoteHref = `${home === '/' ? '' : home}#contact`;
  const pricing = t.pricing;
  const plans = pricing.plans;
  const [active, setActive] = useState(0);

  return (
    <Section id="pricing">
      <IndexMarker index={pricing.index} label={pricing.eyebrow} />

      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <Reveal as="h2" className="max-w-xl text-h2 text-ink">
          {pricing.title}
        </Reveal>
        <Reveal as="p" delay={80} className="max-w-sm text-ink-soft">
          {pricing.subtitle}
        </Reveal>
      </div>

      {/* Desktop: package menu + detail panel */}
      <Reveal className="mt-12 hidden lg:grid lg:grid-cols-[19rem_1fr] lg:items-start lg:gap-8">
        <div role="tablist" aria-label={pricing.eyebrow} className="flex flex-col gap-1.5">
          {plans.map((p, i) => (
            <MenuItem key={p.id} plan={p} active={i === active} mostPopular={pricing.mostPopular} onSelect={() => setActive(i)} />
          ))}
        </div>

        <div className="rounded-2xl border border-line-strong bg-paper p-8 xl:p-10">
          <div key={plans[active].id} className="pricing-panel">
            <PanelContent plan={plans[active]} pricing={pricing} startHref={startHref} quoteHref={quoteHref} />
          </div>
        </div>
      </Reveal>

      {/* Mobile / tablet: accordion */}
      <Reveal className="mt-10 flex flex-col gap-3 lg:hidden">
        {plans.map((p, i) => {
          const on = i === active;
          return (
            <div key={p.id} className={`rounded-2xl border ${on ? 'border-line-strong bg-paper' : 'border-line bg-paper/40'}`}>
              <button
                type="button"
                aria-expanded={on}
                onClick={() => setActive(i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="font-serif text-lg text-ink">{p.name}</span>
                    {p.popular && (
                      <span className="shrink-0 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-coral">
                        {pricing.mostPopular}
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted">{p.menuLine}</span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="font-serif text-lg text-ink">{p.price}</span>
                  <svg
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    fill="none"
                    aria-hidden="true"
                    className={`shrink-0 text-muted transition-transform duration-300 ${on ? 'rotate-180' : ''}`}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: on ? '1fr' : '0fr' }}>
                <div className="overflow-hidden">
                  <div className="border-t border-line px-5 pb-6 pt-5">
                    <PanelContent plan={p} pricing={pricing} startHref={startHref} quoteHref={quoteHref} compact />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>

      <Reveal className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-coral" aria-hidden="true" />
        {t.bonus.teaser}
      </Reveal>

      {/* How payment works */}
      <Reveal delay={80} className="mt-8 rounded-2xl border border-line-strong bg-bone p-7 md:p-8">
        <h3 className="text-h3 text-ink">{pricing.payment.title}</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {pricing.payment.points.map((p) => (
            <li key={p} className="flex gap-3 text-ink-soft">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
