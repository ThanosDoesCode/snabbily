import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

export function Capabilities() {
  const { locale, t, path } = useI18n();

  return (
    <Section id="services" tone="sunk">
      <IndexMarker index={t.capabilities.index} label={t.capabilities.eyebrow} />

      <Reveal as="h2" className="mt-8 max-w-2xl text-h2 text-ink">
        {t.capabilities.title}
      </Reveal>

      <div className="mt-14 flex flex-col">
        {t.capabilities.items.map((item, i) => (
          <Reveal
            key={item.no}
            delay={i * 60}
            className="grid gap-6 border-t border-line py-9 md:grid-cols-[auto_1fr_1.2fr] md:gap-10 md:py-11"
          >
            <span className="font-serif text-4xl leading-none text-coral md:text-5xl" aria-hidden="true">
              {item.no}
            </span>
            <div>
              <h3 className="text-h3 text-ink">{item.title}</h3>
              <p className="mt-3 max-w-sm text-ink-soft">{item.blurb}</p>
            </div>
            <ul className="grid gap-2.5 self-center sm:grid-cols-2 md:grid-cols-1 md:gap-2">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-ink-soft">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Link to={path('websiteDesign')} className="link-underline font-medium text-ink">
          {locale === 'el'
            ? 'Περισσότερα για την κατασκευή ιστοσελίδας για την επιχείρησή σας'
            : 'Explore website design for your small business'}
        </Link>
      </Reveal>
    </Section>
  );
}
