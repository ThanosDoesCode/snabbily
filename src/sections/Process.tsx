import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

export function Process() {
  const { t } = useI18n();

  return (
    <Section>
      <IndexMarker index={t.process.index} label={t.process.eyebrow} />

      <Reveal as="h2" className="mt-8 max-w-2xl text-h2 text-ink">
        {t.process.title}
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((step, i) => (
          <Reveal key={step.no} delay={i * 80} className="border-t-2 border-ink pt-5">
            <span className="block font-serif text-6xl leading-none text-ink" aria-hidden="true">
              {step.no}
            </span>
            <h3 className="mt-5 text-h3 text-ink">{step.title}</h3>
            <p className="mt-3 text-ink-soft">{step.blurb}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
