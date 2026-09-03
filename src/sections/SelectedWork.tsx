import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { AlexandrosShowcase } from '@/components/AlexandrosShowcase';
import { ArrowRight } from '@/components/Button';
import { ALEXANDROS_URL } from '@/lib/config';

export function SelectedWork() {
  const { t } = useI18n();

  return (
    <Section id="work">
      <IndexMarker index={t.work.index} label={t.work.eyebrow} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        <div className="order-2 min-w-0 lg:order-1">
          <Reveal as="h2" className="text-[length:var(--text-h1)] text-ink">
            {t.work.projectName}
          </Reveal>
          <Reveal as="p" delay={80} className="mt-2 font-serif text-[length:var(--text-h3)] italic text-coral">
            {t.work.role}
          </Reveal>

          <Reveal as="p" delay={140} className="mt-6 max-w-md text-lead leading-relaxed text-ink-soft">
            {t.work.description}
          </Reveal>

          <Reveal delay={200} className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
            {t.work.capabilities.map((cap) => (
              <span
                key={cap}
                className="rounded-full border border-line-strong px-3 py-1 text-xs uppercase tracking-[0.08em] text-muted"
              >
                {cap}
              </span>
            ))}
          </Reveal>

          <Reveal delay={260} className="mt-8">
            <a
              href={ALEXANDROS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2 font-medium text-ink"
            >
              {t.work.visit}
              <ArrowRight />
            </a>
          </Reveal>
        </div>

        <AlexandrosShowcase className="order-1 lg:order-2" />
      </div>
    </Section>
  );
}
