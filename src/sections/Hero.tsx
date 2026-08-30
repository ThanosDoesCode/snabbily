import { useEffect, useState } from 'react';
import { useI18n } from '@/i18n';
import { CtaLink, ArrowRight } from '@/components/Button';
import { Reveal } from '@/components/Reveal';

export function Hero() {
  const { t, path } = useI18n();
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setDrawn(true), 120);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className="shell relative pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="max-w-4xl">
        <Reveal
          as="p"
          variant="fade"
          className="eyebrow mb-7 flex items-center gap-3"
        >
          <span className="inline-block h-px w-8 bg-coral" aria-hidden="true" />
          {t.footer.builtNote}
        </Reveal>

        <h1 className="text-[length:var(--text-display)] font-medium leading-[1.02] text-ink">
          <Reveal as="span" className="block">
            {t.hero.headlineLead}
          </Reveal>
          <Reveal as="span" delay={90} className="relative inline-block">
            <span className="relative z-10">{t.hero.headlineEmphasis}</span>
            <svg
              className={`hero-underline absolute -bottom-1 left-0 z-0 w-full ${drawn ? 'is-drawn' : ''}`}
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
          </Reveal>
        </h1>

        <Reveal
          as="p"
          delay={160}
          className="mt-8 max-w-2xl text-[length:var(--text-lead)] leading-relaxed text-ink-soft"
        >
          {t.hero.supporting}
        </Reveal>

        <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaLink to={path('start')} size="lg">
            {t.cta.startProject}
            <ArrowRight />
          </CtaLink>
          <CtaLink to={path('review')} variant="secondary" size="lg">
            {t.cta.freeReview}
          </CtaLink>
        </Reveal>

        <Reveal
          delay={320}
          className="mt-12 border-l-2 border-line-strong pl-5 text-ink-soft md:mt-16"
        >
          <p className="font-serif text-[length:var(--text-h3)] italic leading-snug text-ink">
            {t.hero.supportingLineA}
            <br />
            {t.hero.supportingLineB}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
