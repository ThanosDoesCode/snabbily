import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/BrowserFrame';
import { ArrowRight } from '@/components/Button';
import { useParallax } from '@/lib/useParallax';
import { ALEXANDROS_URL } from '@/lib/config';

export function SelectedWork() {
  const { t } = useI18n();
  const parallaxRef = useParallax<HTMLDivElement>(20);

  return (
    <Section id="work">
      <IndexMarker index={t.work.index} label={t.work.eyebrow} />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
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

        <Reveal variant="fade" className="order-1 lg:order-2">
          <div ref={parallaxRef} className="will-change-transform">
            <a
              href={ALEXANDROS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.work.projectName} — ${t.work.visit}`}
              className="group block rounded-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <BrowserFrame url="alexandrosliakos.lovable.app">
                <img
                  src="/work/alexandros-liakos.webp"
                  alt="Alexandros Liakos Hair Expert and Educator website"
                  width={1600}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </BrowserFrame>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
