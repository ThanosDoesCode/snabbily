import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/BrowserFrame';
import { CtaLink, ArrowRight } from '@/components/Button';
import { SITE_URL, ALEXANDROS_URL } from '@/lib/config';
import { serviceLd, breadcrumbLd } from '@/lib/structuredData';
import { PAGE_PATHS } from '@/i18n/routes';

export default function HairBeauty() {
  const { locale, t, path } = useI18n();
  const canonical = `${SITE_URL}${PAGE_PATHS.hairBeauty[locale]}`;

  return (
    <>
      <Seo
        locale={locale}
        pageKey="hairBeauty"
        title={t.meta.hairBeauty.title}
        description={t.meta.hairBeauty.description}
        jsonLd={[
          serviceLd(t.meta.hairBeauty.title, t.hairBeauty.intro, canonical),
          breadcrumbLd([
            { name: 'Snabbily', url: `${SITE_URL}${path('home') === '/' ? '' : path('home')}` },
            { name: t.hairBeauty.breadcrumb, url: canonical },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="shell pb-14 pt-14 md:pb-20 md:pt-20">
        <nav
          className="hero-rise mb-8 flex items-center gap-2 text-sm text-muted"
          aria-label="Breadcrumb"
        >
          <Link to={path('home')} className="hover:text-ink">
            Snabbily
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{t.hairBeauty.breadcrumb}</span>
        </nav>

        <p className="hero-rise eyebrow mb-6" style={{ ['--rise-delay' as string]: '60ms' }}>
          {t.hairBeauty.eyebrow}
        </p>
        <h1 className="hero-rise max-w-4xl text-h1 leading-[1.04] text-ink" style={{ ['--rise-delay' as string]: '120ms' }}>
          {t.hairBeauty.heading}
        </h1>
        <p
          className="hero-rise mt-7 max-w-2xl text-lead leading-relaxed text-ink-soft"
          style={{ ['--rise-delay' as string]: '200ms' }}
        >
          {t.hairBeauty.intro}
        </p>
        <div
          className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ ['--rise-delay' as string]: '280ms' }}
        >
          <CtaLink to={path('start')} size="lg">
            {t.hairBeauty.primaryCta}
            <ArrowRight />
          </CtaLink>
          <CtaLink to={path('review')} variant="secondary" size="lg">
            {t.hairBeauty.secondaryCta}
          </CtaLink>
        </div>
      </section>

      {/* Audience */}
      <section className="shell py-16 md:py-24">
        <Reveal as="h2" className="text-h2 text-ink">
          {t.hairBeauty.audienceTitle}
        </Reveal>
        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {t.hairBeauty.audience.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 60} className="bg-bone p-7">
              <h3 className="font-serif text-[1.35rem] text-ink">{a.title}</h3>
              <p className="mt-3 text-ink-soft">{a.blurb}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="shell py-16 md:py-24">
        <Reveal as="h2" className="max-w-2xl text-h2 text-ink">
          {t.hairBeauty.featuresTitle}
        </Reveal>
        <div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {t.hairBeauty.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 60} className="border-t border-ink pt-5">
              <h3 className="text-h3 text-ink">{f.title}</h3>
              <p className="mt-3 text-ink-soft">{f.blurb}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section className="bg-bone-deep/40">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-16">
            <Reveal>
              <h2 className="max-w-xl text-h2 leading-[1.1] text-ink">{t.hairBeauty.bookingTitle}</h2>
              <p className="mt-6 max-w-lg text-lead leading-relaxed text-ink-soft">
                {t.hairBeauty.bookingCopy}
              </p>
            </Reveal>
            <Reveal delay={100} className="flex flex-wrap gap-2.5">
              {['Treatwell', 'Fresha'].map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-line-strong bg-bone px-4 py-2 text-ink-soft"
                >
                  {p}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="shell py-16 md:py-24">
        <Reveal as="p" variant="fade" className="eyebrow mb-8">
          {t.hairBeauty.proofTitle}
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <Reveal as="h2" className="text-h2 text-ink">
              {t.hairBeauty.proofName}
            </Reveal>
            <Reveal as="p" delay={80} className="mt-2 font-serif text-h3 italic text-coral">
              {t.hairBeauty.proofRole}
            </Reveal>
            <Reveal as="p" delay={140} className="mt-6 max-w-md text-lead leading-relaxed text-ink-soft">
              {t.hairBeauty.proofBody}
            </Reveal>
            <Reveal delay={200} className="mt-7">
              <a
                href={ALEXANDROS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-2 font-medium text-ink"
              >
                {t.hairBeauty.proofVisit}
                <ArrowRight />
              </a>
            </Reveal>
          </div>
          <Reveal variant="fade">
            <a
              href={ALEXANDROS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.hairBeauty.proofName}, ${t.hairBeauty.proofVisit}`}
              className="group block rounded-xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <BrowserFrame url="alexandrosliakos.lovable.app">
                <img
                  src="/work/alexandros-liakos.webp"
                  alt="Alexandros Liakos Hair Expert and Educator website"
                  width={1600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </BrowserFrame>
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="shell pb-24 pt-6 md:pb-32">
        <Reveal className="rounded-3xl bg-ink px-8 py-14 text-center md:px-16 md:py-20">
          <h2 className="mx-auto max-w-2xl text-h2 text-bone">{t.hairBeauty.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-lg text-lead text-bone/75">{t.hairBeauty.ctaBody}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaLink to={path('start')} variant="invert" size="lg">
              {t.hairBeauty.primaryCta}
              <ArrowRight />
            </CtaLink>
            <CtaLink
              to={path('review')}
              size="lg"
              className="border border-bone/25 bg-transparent text-bone hover:border-bone hover:bg-transparent"
            >
              {t.hairBeauty.secondaryCta}
            </CtaLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
