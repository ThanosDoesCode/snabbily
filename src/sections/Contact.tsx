import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { CtaLink, ArrowRight } from '@/components/Button';
import { CONTACT_EMAIL, CAL_URL, isCalConfigured } from '@/lib/config';
import { track } from '@/lib/analytics';

export function Contact() {
  const { t, path } = useI18n();

  return (
    <Section id="contact">
      <IndexMarker index={t.contact.index} label={t.contact.eyebrow} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <Reveal as="h2" className="max-w-xl text-h1 leading-[1.06] text-ink">
            {t.contact.heading}
          </Reveal>
          <Reveal as="p" delay={90} className="mt-6 max-w-md text-lead leading-relaxed text-ink-soft">
            {t.contact.copy}
          </Reveal>

          <Reveal delay={160} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink to={path('start')} size="lg">
              {t.contact.primaryLabel}
              <ArrowRight />
            </CtaLink>
            <CtaLink to={path('review')} variant="secondary" size="lg">
              {t.contact.secondaryLabel}
            </CtaLink>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={120} className="lg:pl-10">
          <p className="eyebrow">{t.contact.alternativeLabel}</p>
          <ul className="mt-5">
            <li className="border-t border-line py-4">
              <span className="block text-sm text-muted">{t.contact.emailLabel}</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline text-lg text-ink">
                {CONTACT_EMAIL}
              </a>
            </li>
            {isCalConfigured && (
              <li className="border-t border-line py-4">
                <span className="block text-sm text-muted">{t.contact.bookLabel}</span>
                <a
                  href={CAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('book_call_clicked')}
                  className="link-underline text-lg text-ink"
                >
                  cal.com
                </a>
              </li>
            )}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
