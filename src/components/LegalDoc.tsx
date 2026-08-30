import { useI18n } from '@/i18n';
import { Reveal } from './Reveal';

interface LegalDocProps {
  title: string;
  intro: string;
  sections: { h: string; p: string }[];
}

export function LegalDoc({ title, intro, sections }: LegalDocProps) {
  const { t } = useI18n();
  return (
    <article className="shell max-w-3xl py-16 md:py-24">
      <Reveal as="h1" className="text-h1 text-ink">
        {title}
      </Reveal>
      <p className="mt-3 text-sm text-muted">
        {t.legal.lastUpdatedLabel}: {t.legal.lastUpdated}
      </p>

      <div className="mt-6 flex gap-3 rounded-xl border border-coral/35 bg-coral/8 px-5 py-4 text-sm text-ink-soft">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
          <path d="M12 3.5 2.5 20h19L12 3.5Z" stroke="var(--color-coral)" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M12 10v4.5M12 17.2v.2" stroke="var(--color-coral)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span>{t.legal.reviewNotice}</span>
      </div>

      <p className="mt-8 text-lead leading-relaxed text-ink-soft">{intro}</p>

      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-h3 text-ink">{s.h}</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">{s.p}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
