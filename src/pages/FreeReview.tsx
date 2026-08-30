import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { Seo } from '@/components/Seo';
import { Button, CtaLink, ArrowRight } from '@/components/Button';
import { ProgressBar, OptionButton, Field, FlowShell, type StepDef } from '@/components/flow/primitives';
import { submitForm } from '@/lib/submit';
import { track } from '@/lib/analytics';
import { isSubmitConfigured } from '@/lib/config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;

interface Answers {
  url: string;
  improve: string;
  name: string;
  email: string;
}

type Status = 'idle' | 'submitting' | 'error' | 'not-configured' | 'success';

export default function FreeReview() {
  const { locale, t, path } = useI18n();
  const f = t.reviewFlow;
  const steps = f.steps;
  const total = steps.length;
  const homeHref = path('home');

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ url: '', improve: '', name: '', email: '' });
  const [error, setError] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    track('free_review_started');
  }, []);

  const current: StepDef = steps[step];

  const validate = (): string => {
    switch (current.key) {
      case 'url':
        if (!answers.url.trim()) return f.validation.url;
        if (!URL_RE.test(answers.url.trim())) return f.validation.url;
        return '';
      case 'improve':
        return answers.improve ? '' : f.validation.required;
      case 'contact':
        if (!answers.name.trim()) return f.validation.name;
        if (!EMAIL_RE.test(answers.email.trim())) return f.validation.email;
        return '';
      default:
        return '';
    }
  };

  const goNext = () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError('');
    if (step < total - 1) setStep((s) => s + 1);
    else void submit();
  };

  const submit = async () => {
    setStatus('submitting');
    const result = await submitForm('New Free Website Review Request', {
      locale,
      website: answers.url.trim(),
      improve: answers.improve,
      name: answers.name.trim(),
      email: answers.email.trim(),
    });
    if (result.ok) {
      setStatus('success');
      track('free_review_completed');
    } else {
      setStatus(result.reason === 'not-configured' ? 'not-configured' : 'error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <Seo locale={locale} pageKey="review" title={f.metaTitle} description={f.metaDescription} />
        <FlowShell>
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-coral/12">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7" stroke="var(--color-coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="mt-6 text-h2 text-ink">{f.successTitle}</h1>
            <p className="mx-auto mt-4 max-w-md text-lead text-ink-soft">{f.successBody}</p>
            <div className="mt-8">
              <CtaLink to={homeHref} variant="secondary" size="md">
                {f.backHome}
              </CtaLink>
            </div>
          </div>
        </FlowShell>
      </>
    );
  }

  const notConfigured = status === 'not-configured' || (!isSubmitConfigured && status === 'error');

  return (
    <>
      <Seo locale={locale} pageKey="review" title={f.metaTitle} description={f.metaDescription} />
      <FlowShell>
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between text-sm text-muted">
            <span className="eyebrow">{f.kicker}</span>
            <span>
              {f.stepLabel} {step + 1} {f.ofLabel} {total}
            </span>
          </div>
          <ProgressBar current={step} total={total} />
        </div>

        <h1 className="text-[length:clamp(1.6rem,1.2rem+1.6vw,2.3rem)] font-medium leading-tight text-ink">
          {current.question}
        </h1>

        <div className="mt-7 space-y-2.5">
          {current.type === 'url' && (
            <Field
              id="review-url"
              label={current.question}
              hideLabel
              type="url"
              inputMode="url"
              placeholder={current.placeholder}
              value={answers.url}
              onChange={(e) => setAnswers((a) => ({ ...a, url: e.target.value }))}
              error={error ? error : undefined}
            />
          )}

          {current.type === 'single' &&
            current.options.map((opt) => (
              <OptionButton
                key={opt}
                selected={answers.improve === opt}
                onClick={() => {
                  setError('');
                  setAnswers((a) => ({ ...a, improve: opt }));
                }}
              >
                {opt}
              </OptionButton>
            ))}

          {current.type === 'contact' && (
            <div className="space-y-4">
              <Field
                id="review-name"
                label={f.fields.name}
                autoComplete="name"
                placeholder={f.fields.namePlaceholder}
                value={answers.name}
                onChange={(e) => setAnswers((a) => ({ ...a, name: e.target.value }))}
                error={error === f.validation.name ? error : undefined}
              />
              <Field
                id="review-email"
                label={f.fields.email}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={f.fields.emailPlaceholder}
                value={answers.email}
                onChange={(e) => setAnswers((a) => ({ ...a, email: e.target.value }))}
                error={error === f.validation.email ? error : undefined}
              />
            </div>
          )}
        </div>

        {error && current.type === 'single' && (
          <p className="mt-4 text-sm text-coral-ink" role="alert">
            {error}
          </p>
        )}

        {notConfigured && (
          <p className="mt-4 rounded-lg border border-line-strong bg-bone-deep/50 px-4 py-3 text-sm text-ink-soft" role="alert">
            {f.notConfigured}
          </p>
        )}
        {status === 'error' && !notConfigured && (
          <p className="mt-4 rounded-lg border border-coral/40 bg-coral/8 px-4 py-3 text-sm text-coral-ink" role="alert">
            {f.error}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          {step > 0 ? (
            <button
              type="button"
              onClick={() => {
                setError('');
                setStep((s) => Math.max(0, s - 1));
              }}
              className="link-underline text-sm font-medium text-ink-soft hover:text-ink"
            >
              ← {t.cta.back}
            </button>
          ) : (
            <Link to={homeHref} className="link-underline text-sm font-medium text-muted hover:text-ink">
              ← {f.backHome}
            </Link>
          )}
          <Button onClick={goNext} disabled={status === 'submitting'} size="md">
            {status === 'submitting'
              ? f.submitting
              : step === total - 1
                ? t.cta.getReview
                : t.cta.next}
            {status !== 'submitting' && <ArrowRight />}
          </Button>
        </div>
      </FlowShell>
    </>
  );
}
