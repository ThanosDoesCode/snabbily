import type { CSSProperties } from 'react';
import { useI18n } from '@/i18n';
import { CtaLink, ArrowRight } from '@/components/Button';

/** Small helper: inline stagger delay for the CSS entrance. */
const rise = (delay: number): CSSProperties => ({ ['--rise-delay' as string]: `${delay}ms` });

export function Hero() {
  const { t, path } = useI18n();

  return (
    <section className="shell relative pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="max-w-4xl">
        <p className="hero-rise eyebrow mb-7 flex items-center gap-3" style={rise(0)}>
          <span className="inline-block h-px w-8 bg-coral" aria-hidden="true" />
          {t.footer.builtNote}
        </p>

        <h1 className="text-[length:var(--text-display)] font-medium leading-[1.02] text-ink">
          <span className="hero-rise block" style={rise(60)}>
            {t.hero.headlineLead}
          </span>
          <span className="hero-rise relative inline-block" style={rise(140)}>
            <span className="relative z-10">{t.hero.headlineEmphasis}</span>
            <svg
              className="hero-underline absolute -bottom-1 left-0 z-0 w-full"
              viewBox="0 0 300 16"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
              height="14"
            >
              <path
                pathLength={1}
                d="M3 11C46 5 118 3 168 4.5C214 6 268 7 297 6"
                stroke="var(--color-coral)"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
            {t.hero.headlineTail}
          </span>
        </h1>

        <p
          className="hero-rise mt-8 max-w-2xl text-[length:var(--text-lead)] leading-relaxed text-ink-soft"
          style={rise(220)}
        >
          {t.hero.supporting}
        </p>

        <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={rise(300)}>
          <CtaLink to={path('start')} size="lg">
            {t.cta.startProject}
            <ArrowRight />
          </CtaLink>
          <CtaLink to={path('review')} variant="secondary" size="lg">
            {t.cta.freeReview}
          </CtaLink>
        </div>

        <div className="hero-rise mt-12 border-l-2 border-line-strong pl-5 text-ink-soft md:mt-16" style={rise(380)}>
          <p className="font-serif text-[length:var(--text-h3)] italic leading-snug text-ink">
            {t.hero.supportingLineA}
            <br />
            {t.hero.supportingLineB}
          </p>
        </div>
      </div>
    </section>
  );
}
