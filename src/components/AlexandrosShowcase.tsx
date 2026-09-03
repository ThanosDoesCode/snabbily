import { useI18n } from '@/i18n';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/BrowserFrame';
import { PhoneFrame } from '@/components/PhoneFrame';
import { WorkReel, type ReelPage } from '@/components/WorkReel';
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

/** The Alexandros Liakos device showcase used on the homepage and the Hair &
    Beauty page: a laptop and phone that scroll through the live site on hover
    and end on the title card. Kept in one place so both pages stay in sync. */
export function AlexandrosShowcase({ className }: { className?: string }) {
  const { t } = useI18n();
  const parallaxRef = useParallax<HTMLDivElement>(20);

  return (
    <Reveal variant="fade" className={['relative min-w-0 pb-6 pl-10 sm:pl-16 lg:pb-8', className].filter(Boolean).join(' ')}>
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
  );
}
