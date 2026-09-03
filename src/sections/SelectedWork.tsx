import { useI18n } from '@/i18n';
import { Section, IndexMarker } from '@/components/Section';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/BrowserFrame';
import { PhoneFrame } from '@/components/PhoneFrame';
import { WorkReel, type ReelPage } from '@/components/WorkReel';
import { ArrowRight } from '@/components/Button';
import { useParallax } from '@/lib/useParallax';
import { ALEXANDROS_URL } from '@/lib/config';

const DESKTOP_PAGES: ReelPage[] = [
  { src: '/work/alexandros-home.webp', w: 1280, h: 2018 },
  { src: '/work/alexandros-collections.webp', w: 1280, h: 2474 },
  { src: '/work/alexandros-contact.webp', w: 1280, h: 1521 },
  { src: '/work/alexandros-splash.webp', w: 1280, h: 800 },
];

const MOBILE_PAGES: ReelPage[] = [
  { src: '/work/alexandros-home-mobile.webp', w: 780, h: 6210 },
  { src: '/work/alexandros-collections-mobile.webp', w: 780, h: 6078 },
  { src: '/work/alexandros-contact-mobile.webp', w: 780, h: 4916 },
  { src: '/work/alexandros-splash-mobile.webp', w: 780, h: 1690 },
];

export function SelectedWork() {
  const { t } = useI18n();
  const parallaxRef = useParallax<HTMLDivElement>(20);

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

        <Reveal variant="fade" className="relative order-1 min-w-0 pb-6 pl-10 sm:pl-16 lg:order-2 lg:pb-8">
          <div ref={parallaxRef} className="will-change-transform">
            <a
              href={ALEXANDROS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.work.projectName}, ${t.work.visit}`}
              className="group reel-card block rounded-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <BrowserFrame url="alexandrosliakos.lovable.app" contentClassName="work-shot">
                <WorkReel pages={DESKTOP_PAGES} />
              </BrowserFrame>
            </a>
          </div>

          {/* Mobile view of the same site, tucked into the lower-left corner. */}
          <a
            href={ALEXANDROS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.work.projectName} on mobile, ${t.work.visit}`}
            className="group/phone reel-card absolute bottom-0 left-0 block w-[30%] max-w-[128px] rounded-[1.8rem] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-[26%]"
          >
            <PhoneFrame>
              <WorkReel pages={MOBILE_PAGES} />
            </PhoneFrame>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
