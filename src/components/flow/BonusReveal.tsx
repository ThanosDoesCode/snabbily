import { useRef, useState } from 'react';
import { useI18n } from '@/i18n';
import type { Locale } from '@/i18n/routes';
import { CtaLink } from '@/components/Button';
import { submitForm } from '@/lib/submit';
import { track } from '@/lib/analytics';
import { CAL_URL, isCalConfigured } from '@/lib/config';

interface BonusAnswers {
  name: string;
  email: string;
  business: string;
  need: string;
  timing: string;
  phone: string;
}

// Excludes ambiguous characters (O, 0, I, 1) for a readable code.
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function generateCode(): string {
  const n = 4;
  let out = '';
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const buf = new Uint32Array(n);
    crypto.getRandomValues(buf);
    for (let i = 0; i < n; i++) out += CODE_ALPHABET[buf[i] % CODE_ALPHABET.length];
  } else {
    for (let i = 0; i < n; i++) out += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return `SNAB-${out}`;
}

function isoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function formatDate(d: Date, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === 'el' ? 'el-GR' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d);
  } catch {
    return isoDate(d);
  }
}

interface Reveal {
  code: string;
  validUntilISO: string;
  validUntilLabel: string;
}

export function BonusReveal({ answers, source }: { answers: BonusAnswers; source: string }) {
  const { t, locale, path } = useI18n();
  const b = t.bonus;
  const [selected, setSelected] = useState<number | null>(null);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const firedRef = useRef(false);
  const homeHref = path('home');

  const onSelect = (i: number) => {
    // One selection only; the notification fires exactly once.
    if (selected !== null || firedRef.current) return;
    firedRef.current = true;

    const code = generateCode();
    const d = new Date();
    d.setDate(d.getDate() + 7);
    const validUntilISO = isoDate(d);
    const validUntilLabel = formatDate(d, locale);
    const cardNo = String(i + 1).padStart(2, '0');

    setSelected(i);
    setReveal({ code, validUntilISO, validUntilLabel });

    // Analytics: only fires if GA is loaded (i.e. analytics consent granted). No PII.
    track('bonus_revealed', { locale, source, bonus_value: 100, selected_card: cardNo });

    // Second Formspree submission. The bonus stays regardless of the outcome.
    const payload: Record<string, string> = {
      form_type: 'Bonus Unlocked',
      name: answers.name,
      email: answers.email,
      business: answers.business,
      bonus: '€100',
      bonus_code: code,
      selected_card: cardNo,
      eligible_packages: 'Professional, Growth',
      valid_until: validUntilISO,
      locale,
      source,
      original_need: answers.need,
      original_timeline: answers.timing,
    };
    if (answers.phone) payload.phone = answers.phone;

    void submitForm('Snabbily Bonus Unlocked', payload).then((res) => {
      if (!res.ok) {
        // Non-sensitive developer log only; never expose the endpoint or block the bonus.
        console.error('[snabbily] bonus notification did not send:', res.reason);
      }
    });
  };

  return (
    <div className="text-center">
      <h1 className="text-h2 text-ink">{b.heading}</h1>
      <p className="mx-auto mt-3 max-w-md text-lead text-ink-soft">{b.pick}</p>

      <div className="mx-auto mt-9 grid max-w-md grid-cols-3 gap-3 sm:gap-4">
        {[0, 1, 2].map((i) => {
          const isSel = selected === i;
          const isOther = selected !== null && !isSel;
          const no = String(i + 1).padStart(2, '0');
          return (
            <button
              key={i}
              type="button"
              disabled={selected !== null}
              aria-label={`${b.cardAria} ${no}`}
              aria-pressed={isSel}
              onClick={() => onSelect(i)}
              className={[
                'group flex aspect-[4/5] flex-col items-center justify-center rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2',
                selected === null
                  ? 'cursor-pointer border-line-strong bg-paper hover:-translate-y-1 hover:border-ink'
                  : 'cursor-default',
                isSel ? 'border-coral bg-coral/8' : '',
                isOther ? 'border-line bg-paper opacity-40' : '',
              ].join(' ')}
            >
              {isSel ? (
                <span className="flex flex-col items-center">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                    <path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="var(--color-coral)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mt-1.5 font-serif text-2xl text-ink">{b.amount}</span>
                </span>
              ) : (
                <span
                  className="font-serif text-3xl leading-none text-ink transition-colors duration-300 group-hover:text-coral md:text-4xl"
                  aria-hidden="true"
                >
                  S<span className="text-coral">.</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {reveal && (
        <div className="hero-rise mx-auto mt-10 max-w-md">
          <h2 className="text-h3 text-ink">{b.reward}</h2>
          <p className="mx-auto mt-3 max-w-sm leading-relaxed text-ink-soft">{b.rewardSupport}</p>

          <div className="mt-6 inline-block rounded-xl border border-line-strong bg-bone px-5 py-3">
            <span className="text-sm text-muted">{b.codeLabel}: </span>
            <span className="font-mono text-base font-medium tracking-wider text-ink">{reveal.code}</span>
          </div>

          <p className="mt-4 text-sm text-muted">
            {b.validUntilLabel} {reveal.validUntilLabel}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {isCalConfigured && (
              <CtaLink href={CAL_URL} size="md" onClick={() => track('book_call_clicked')}>
                {t.startFlow.successBook}
              </CtaLink>
            )}
            <CtaLink to={homeHref} variant="secondary" size="md">
              {t.startFlow.backHome}
            </CtaLink>
          </div>
        </div>
      )}
    </div>
  );
}
