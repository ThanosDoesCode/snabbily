import { useState } from 'react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { CtaLink, ArrowRight } from '@/components/Button';
import { useI18n } from '@/i18n';

type Category = 'all' | 'health' | 'professional' | 'home' | 'travel';

const MEDIA: Record<string, { video: string; poster: string }> = {
  dermatologist: {
    video: '/concepts/dermatologist.mp4',
    poster: '/concepts/dermatologist-poster.jpg',
  },
  psychologist: {
    video: '/concepts/psychologist.mp4',
    poster: '/concepts/psychologist-poster.jpg',
  },
  'dental-clinic': {
    video: '/concepts/dental-clinic.mp4',
    poster: '/concepts/dental-clinic-poster.jpg',
  },
  architect: {
    video: '/concepts/architect.mp4',
    poster: '/concepts/architect-poster.jpg',
  },
  'aluminium-security': {
    video: '/concepts/aluminium-security.mp4',
    poster: '/concepts/aluminium-security-poster.jpg',
  },
  'boat-rentals': {
    video: '/concepts/boat-rentals.mp4',
    poster: '/concepts/boat-rentals-poster.jpg',
  },
};

export default function WebsiteConcepts() {
  const { locale, t, path } = useI18n();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const copy = t.concepts;
  const filters: { id: Category; label: string }[] = [
    { id: 'all', label: copy.allLabel },
    { id: 'health', label: copy.categories.health },
    { id: 'professional', label: copy.categories.professional },
    { id: 'home', label: copy.categories.home },
    { id: 'travel', label: copy.categories.travel },
  ];
  const visibleItems = copy.items.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory,
  );

  return (
    <>
      <Seo
        locale={locale}
        pageKey="concepts"
        title={t.meta.concepts.title}
        description={t.meta.concepts.description}
      />

      <header className="shell pb-14 pt-14 md:pb-20 md:pt-20">
        <p className="hero-rise eyebrow mb-6" style={{ ['--rise-delay' as string]: '60ms' }}>
          {copy.eyebrow}
        </p>
        <h1
          className="hero-rise max-w-4xl text-h1 leading-[1.04] text-ink"
          style={{ ['--rise-delay' as string]: '120ms' }}
        >
          {copy.heading}
        </h1>
        <p
          className="hero-rise mt-7 max-w-2xl text-lead leading-relaxed text-ink-soft"
          style={{ ['--rise-delay' as string]: '200ms' }}
        >
          {copy.intro}
        </p>
      </header>

      <section className="shell pb-20 md:pb-28" aria-labelledby="concept-filter-label">
        <h2 id="concept-filter-label" className="sr-only">
          {copy.filterLabel}
        </h2>
        <div className="-mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          <div className="flex w-max min-w-full gap-2" role="group" aria-label={copy.filterLabel}>
            {filters.map((filter) => {
              const isActive = filter.id === activeCategory;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(filter.id)}
                  className={`min-h-11 shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                    isActive
                      ? 'border-ink bg-ink text-bone'
                      : 'border-line-strong bg-bone text-ink-soft hover:border-ink hover:text-ink'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {visibleItems.map((item, index) => {
            const media = MEDIA[item.id];
            return (
              <Reveal
                as="article"
                key={item.id}
                delay={(index % 2) * 70}
                className="min-w-0"
              >
                <div className="aspect-[1200/965] overflow-hidden rounded-2xl border border-line bg-ink">
                  <video
                    className="h-full w-full object-contain"
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    playsInline
                    preload="none"
                    poster={media.poster}
                    aria-label={item.videoLabel}
                  >
                    <source src={media.video} type="video/mp4" />
                  </video>
                </div>
                <div className="pt-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="rounded-full bg-coral/10 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-coral-ink">
                      {copy.conceptLabel}
                    </span>
                    <span className="text-xs uppercase tracking-[0.1em] text-muted">
                      {copy.categories[item.category]}
                    </span>
                  </div>
                  <h2 className="mt-4 font-serif text-[clamp(1.55rem,3vw,2rem)] leading-tight text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="shell pb-24 md:pb-32">
        <Reveal className="rounded-3xl bg-ink px-7 py-14 text-center md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl text-h2 text-bone">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-lg text-lead text-bone/75">{copy.ctaBody}</p>
          <div className="mt-9">
            <CtaLink to={path('start')} variant="invert" size="lg">
              {copy.ctaLabel}
              <ArrowRight />
            </CtaLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
