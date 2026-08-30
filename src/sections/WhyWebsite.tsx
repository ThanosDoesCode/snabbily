import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

export function WhyWebsite() {
  const { t } = useI18n();

  return (
    <Section tone="ink">
      <IndexMarker index={t.why.index} label={t.why.eyebrow} onDark />

      <Reveal as="h2" className="mt-9 max-w-4xl text-h1 leading-[1.06] text-bone">
        {t.why.lead}
      </Reveal>

      <div className="mt-16 grid gap-x-14 gap-y-10 md:mt-20 md:grid-cols-2">
        {t.why.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 70}
            className="flex gap-6 border-t border-bone/15 pt-6"
          >
            <span
              className="font-mono text-sm tabular-nums text-coral"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="font-serif text-[1.5rem] leading-tight text-bone">{item.title}</h3>
              <p className="mt-2.5 max-w-sm leading-relaxed text-bone/65">{item.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
