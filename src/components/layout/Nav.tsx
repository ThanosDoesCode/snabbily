import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { CtaLink, ArrowRight } from '@/components/Button';

// The wordmark, split into letters for the one-time page-load intro animation.
// The link carries the accessible name via aria-label, so the decorative
// per-letter spans are hidden from assistive tech and the name is read once.
const WORDMARK_LETTERS = 'Snabbily'.split('');

function Wordmark({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="font-serif text-2xl leading-none tracking-tight text-ink"
      aria-label="Snabbily home"
    >
      <span className="name-intro" aria-hidden="true">
        {WORDMARK_LETTERS.map((ch, i) => (
          <span key={i} className="name-intro__letter" style={{ '--i': i } as CSSProperties}>
            {ch}
          </span>
        ))}
        <span
          className="name-intro__letter text-coral"
          style={{ '--i': WORDMARK_LETTERS.length } as CSSProperties}
        >
          .
        </span>
      </span>
    </Link>
  );
}

function LanguageSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const { locale, altPath, otherLocale, t } = useI18n();
  return (
    <Link
      to={altPath}
      onClick={onNavigate}
      hrefLang={otherLocale}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
      aria-label={locale === 'en' ? t.langSwitch.toGreek : t.langSwitch.toEnglish}
    >
      <span className={locale === 'en' ? 'text-ink' : ''}>{t.langSwitch.en}</span>
      <span aria-hidden="true" className="text-line-strong">/</span>
      <span className={locale === 'el' ? 'text-ink' : ''}>{t.langSwitch.el}</span>
    </Link>
  );
}

export function Nav() {
  const { t, path } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const home = path('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  // Lock body scroll + Escape to close while menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const links: { label: string; hash: string }[] = [
    { label: t.nav.work, hash: 'work' },
    { label: t.nav.services, hash: 'services' },
    { label: t.nav.pricing, hash: 'pricing' },
    { label: t.nav.contact, hash: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-bone/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between md:h-20" aria-label="Main">
        <Wordmark to={home} />

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.hash}>
                <Link
                  to={`${home === '/' ? '' : home}#${l.hash}`}
                  className="link-underline text-sm font-medium text-ink-soft hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="h-4 w-px bg-line-strong" aria-hidden="true" />
          <LanguageSwitcher />
          <CtaLink to={path('start')} size="md" className="text-sm">
            {t.nav.startProject}
            <ArrowRight />
          </CtaLink>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu}
            className="group -mr-2 inline-flex h-11 w-11 items-center justify-center text-ink"
          >
            <span className="relative block h-4 w-[26px]" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full origin-center rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.5px] -translate-y-1/2 rounded-full bg-ink transition-[width,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? 'w-full opacity-0' : 'w-[60%] opacity-100 group-hover:w-full'
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full origin-center rounded-full bg-ink transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bone lg:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.hash}
                to={`${home === '/' ? '' : home}#${l.hash}`}
                className="flex min-h-[48px] items-center border-b border-line/60 font-serif text-xl text-ink"
              >
                {l.label}
              </Link>
            ))}
            <CtaLink to={path('start')} size="lg" className="mt-4 w-full">
              {t.nav.startProject}
              <ArrowRight />
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
