import { useI18n } from '@/i18n';
import { Reveal } from './Reveal';

/** A content block is either a paragraph (string) or a bullet list (string[]). */
export type LegalBlock = string | string[];
export interface LegalSection {
  h: string;
  blocks: LegalBlock[];
}

interface LegalDocProps {
  title: string;
  intro: string;
  sections: LegalSection[];
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

      <p className="mt-8 text-lead leading-relaxed text-ink-soft">{intro}</p>

      <div className="mt-10 space-y-9">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-h3 text-ink">{s.h}</h2>
            <div className="mt-3 space-y-3">
              {s.blocks.map((block, i) =>
                Array.isArray(block) ? (
                  <ul key={i} className="space-y-2">
                    {block.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-ink-soft">
                        <span
                          className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-coral"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="leading-relaxed text-ink-soft">
                    {block}
                  </p>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
