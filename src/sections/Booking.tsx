import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

export function Booking() {
  const { t } = useI18n();

  return (
    <Section className="bg-bone-deep/40">
      <IndexMarker index={t.booking.index} label={t.booking.eyebrow} />

      <div className="mt-10 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-16">
        <div>
          <Reveal as="h2" className="max-w-xl text-h2 leading-[1.1] text-ink">
            {t.booking.heading}
          </Reveal>
          <Reveal as="p" delay={90} className="mt-6 max-w-lg text-lead leading-relaxed text-ink-soft">
            {t.booking.copy}
          </Reveal>
        </div>

        <Reveal delay={140}>
          <ul className="space-y-3">
            {t.booking.benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 border-t border-line pt-3 text-ink">
                <span className="font-mono text-sm text-coral" aria-hidden="true">
                  +
                </span>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
