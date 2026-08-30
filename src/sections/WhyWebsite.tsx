import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

export function WhyWebsite() {
  const { t } = useI18n();

  return (
    <Section>
      <IndexMarker index={t.why.index} label={t.why.eyebrow} />

      <Reveal as="h2" className="mt-8 max-w-3xl text-h2 leading-[1.08] text-ink">
        {t.why.lead}
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {t.why.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70} className="bg-bone p-7 md:p-9">
            <h3 className="font-serif text-[1.4rem] text-ink">{item.title}</h3>
            <p className="mt-3 text-ink-soft">{item.blurb}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
