import { useId, useState } from 'react';
import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="border-t border-line">
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-serif text-[1.2rem] leading-snug text-ink md:text-[1.35rem]">{q}</span>
          <span
            aria-hidden="true"
            className="relative mt-1 block h-3.5 w-3.5 shrink-0 text-coral"
          >
            <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current" />
            <span
              className={`absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? 'scale-y-0' : 'scale-y-100'
              }`}
            />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`faq-panel ${open ? 'is-open' : ''}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const { t } = useI18n();
  return (
    <Section id="faq">
      <IndexMarker index={t.faq.index} label={t.faq.eyebrow} />

      <Reveal as="h2" className="mt-8 max-w-2xl text-h2 text-ink">
        {t.faq.title}
      </Reveal>

      <Reveal className="mt-12 border-b border-line">
        {t.faq.items.map((item) => (
          <FaqRow key={item.q} q={item.q} a={item.a} />
        ))}
      </Reveal>
    </Section>
  );
}
