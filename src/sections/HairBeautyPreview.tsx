import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { ArrowRight } from '@/components/Button';

export function HairBeautyPreview() {
  const { t, path } = useI18n();

  return (
    <Section>
      <IndexMarker index={t.niche.index} label={t.niche.eyebrow} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <Reveal as="h2" className="text-h2 leading-[1.08] text-ink">
            {t.niche.headline}
          </Reveal>
          <Reveal as="p" delay={90} className="mt-6 max-w-lg text-lead leading-relaxed text-ink-soft">
            {t.niche.body}
          </Reveal>
          <Reveal delay={160} className="mt-8">
            <Link
              to={path('hairBeauty')}
              className="link-underline inline-flex items-center gap-2 text-lg font-medium text-ink"
            >
              {t.niche.cta}
              <ArrowRight />
            </Link>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={120} className="lg:pl-10">
          <p className="font-serif text-[length:clamp(2.4rem,5vw,3.4rem)] leading-none text-coral">
            {t.niche.focusLabel}
          </p>
          <ul className="mt-6">
            {t.niche.audience.map((a) => (
              <li
                key={a}
                className="flex items-center justify-between border-t border-line py-4 text-lg text-ink"
              >
                {a}
                <span className="text-line-strong" aria-hidden="true">
                  —
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
