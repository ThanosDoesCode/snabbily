import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { CtaLink, ArrowRight } from '@/components/Button';

export function FreeReviewSection() {
  const { t, path } = useI18n();

  return (
    <Section tone="sunk">
      <IndexMarker index={t.review.index} label={t.review.eyebrow} />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
        <div>
          <Reveal as="h2" className="max-w-xl text-h2 leading-[1.1] text-ink">
            {t.review.heading}
          </Reveal>
          <Reveal as="p" delay={90} className="mt-6 max-w-lg text-lead leading-relaxed text-ink-soft">
            {t.review.copy}
          </Reveal>
        </div>
        <Reveal delay={140} className="lg:justify-self-end">
          <CtaLink to={path('review')} size="lg">
            {t.review.cta}
            <ArrowRight />
          </CtaLink>
        </Reveal>
      </div>
    </Section>
  );
}
