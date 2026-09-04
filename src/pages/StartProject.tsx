import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { Seo } from '@/components/Seo';
import { Button, ArrowRight } from '@/components/Button';
import { ProgressBar, OptionButton, Field, FlowShell, type StepDef } from '@/components/flow/primitives';
import { BonusReveal } from '@/components/flow/BonusReveal';
import { submitForm } from '@/lib/submit';
import { track } from '@/lib/analytics';
import { isSubmitConfigured } from '@/lib/config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_RE = /^([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;

interface Answers {
  need: string;
  business: string;
  businessOther: string;
  goalOther: string;
  hasWebsite: string;
  websiteUrl: string;
  goals: string[];
  timing: string;
  name: string;
  email: string;
  phone: string;
}

const EMPTY: Answers = {
  need: '',
  business: '',
  businessOther: '',
  goalOther: '',
  hasWebsite: '',
  websiteUrl: '',
  goals: [],
  timing: '',
  name: '',
  email: '',
  phone: '',
};

type Status = 'idle' | 'submitting' | 'error' | 'not-configured' | 'success';

export default function StartProject() {
  const { locale, t, path } = useI18n();
  const f = t.startFlow;
  const homeHref = path('home');
  const steps = f.steps;
  const total = steps.length;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (status === 'success') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [status]);

  // Source attribution: utm_source wins, then source, else "direct".
  const [searchParams] = useSearchParams();
  const source = useMemo(() => {
    const utm = (searchParams.get('utm_source') || '').trim();
    const src = (searchParams.get('source') || '').trim();
    return utm || src || 'direct';
  }, [searchParams]);

  useEffect(() => {
    track('start_project_started');
  }, []);

  const current: StepDef = steps[step];

  const validate = useMemo(
    () => (): string => {
      switch (current.key) {
        case 'need':
          return answers.need ? '' : f.validation.required;
        case 'business':
          if (!answers.business) return f.validation.required;
          if (
            (answers.business === 'Other' || answers.business === 'Άλλο') &&
            !answers.businessOther.trim()
          ) {
            return f.validation.required;
          }
          return '';
        case 'hasWebsite': {
          if (!answers.hasWebsite) return f.validation.required;
          if (answers.hasWebsite === current.options[0] && answers.websiteUrl && !URL_RE.test(answers.websiteUrl.trim()))
            return f.validation.url;
          return '';
        }
        case 'goals': {
          if (!answers.goals.length) return f.validation.required;
          const otherOption = current.options[current.options.length - 1];
          if (answers.goals.includes(otherOption) && !answers.goalOther.trim()) {
            return f.validation.required;
          }
          return '';
        }
        case 'timing':
          return answers.timing ? '' : f.validation.required;
        case 'contact':
          if (!answers.name.trim()) return f.validation.name;
          if (!EMAIL_RE.test(answers.email.trim())) return f.validation.email;
          return '';
        default:
          return '';
      }
    },
    [answers, current, f.validation],
  );

  const goNext = () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError('');
    track('start_project_step_completed', { step: step + 1 });
    if (step < total - 1) setStep((s) => s + 1);
    else void submit();
  };

  const goBack = () => {
    setError('');
    setStep((s) => Math.max(0, s - 1));
  };

  const submit = async () => {
    setStatus('submitting');
    // Human-readable payload for the notification email. Optional fields are
    // omitted when empty so the email stays clean. No analytics/consent/internal
    // data is included.
    const phone = answers.phone.trim();
    const websiteUrl = answers.websiteUrl.trim();
    const payload: Record<string, string> = {
      form_type: 'Start Project',
      name: answers.name.trim(),
      email: answers.email.trim(),
      need: answers.need,
      business: answers.business,
      has_website: answers.hasWebsite,
      goals: answers.goals.join(', '),
      timeline: answers.timing,
      locale,
    };
    if (
      answers.business === 'Other' ||
      answers.business === 'Άλλο'
    ) {
      payload.business_other = answers.businessOther.trim();
    }

    const goalsStep = steps.find((item) => item.key === 'goals');
    const otherGoalOption = goalsStep?.options[goalsStep.options.length - 1];

    if (otherGoalOption && answers.goals.includes(otherGoalOption)) {
      payload.goal_other = answers.goalOther.trim();
    }

    if (phone) payload.phone = phone;
    if (websiteUrl) payload.website_url = websiteUrl;
    const result = await submitForm('New Snabbily Project Enquiry', payload);
    if (result.ok) {
      setStatus('success');
      track('start_project_completed');
    } else {
      setStatus(result.reason === 'not-configured' ? 'not-configured' : 'error');
    }
  };

  if (status === 'success') {
    return (
      <>
        <Seo locale={locale} pageKey="start" title={f.metaTitle} description={f.metaDescription} />
        <FlowShell>
          <BonusReveal
            answers={{
              name: answers.name.trim(),
              email: answers.email.trim(),
              business:
                answers.business === 'Other' || answers.business === 'Άλλο'
                  ? answers.businessOther.trim()
                  : answers.business,
              need: answers.need,
              timing: answers.timing,
              phone: answers.phone.trim(),
            }}
            source={source}
          />
        </FlowShell>
      </>
    );
  }

  const notConfigured = status === 'not-configured' || (!isSubmitConfigured && status === 'error');

  return (
    <>
      <Seo locale={locale} pageKey="start" title={f.metaTitle} description={f.metaDescription} />
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
        {current.key === 'goals' && current.hint && (
          <p className="mt-2 text-ink-soft">{current.hint}</p>
        )}

        <div className="mt-7 space-y-2.5">
          {(current.type === 'single' || current.type === 'multi') &&
            current.options.map((opt) => {
              const selected =
                current.type === 'multi'
                  ? answers.goals.includes(opt)
                  : answers[current.key as 'need' | 'business' | 'hasWebsite' | 'timing'] === opt;
              return (
                <OptionButton
                  key={opt}
                  selected={selected}
                  multi={current.type === 'multi'}
                  onClick={() => {
                    setError('');
                    if (current.type === 'multi') {
                      setAnswers((a) => ({
                        ...a,
                        goals: a.goals.includes(opt)
                          ? a.goals.filter((g) => g !== opt)
                          : [...a.goals, opt],
                      }));
                    } else {
                      setAnswers((a) => ({ ...a, [current.key]: opt }));
                    }
                  }}
                >
                  {opt}
                </OptionButton>
              );
            })}

          {current.key === 'business' &&
            (answers.business === 'Other' || answers.business === 'Άλλο') && (
              <div className="pt-2">
                <Field
                  id="business-other"
                  label={locale === 'el' ? 'Ποιο είναι το επάγγελμά σας;' : 'What type of business is it?'}
                  placeholder={
                    locale === 'el'
                      ? 'π.χ. Γιατρός, φωτογράφος, λογιστής'
                      : 'e.g. Doctor, photographer, accountant'
                  }
                  value={answers.businessOther}
                  onChange={(e) =>
                    setAnswers((a) => ({ ...a, businessOther: e.target.value }))
                  }
                />
              </div>
            )}

          {current.key === 'goals' &&
            answers.goals.includes(current.options[current.options.length - 1]) && (
              <div className="pt-2">
                <Field
                  id="goal-other"
                  label={
                    locale === 'el'
                      ? 'Τι άλλο θέλετε να πετύχετε;'
                      : 'What else would you like to achieve?'
                  }
                  placeholder={
                    locale === 'el'
                      ? 'π.χ. Να προωθήσω μαθήματα ή μια νέα υπηρεσία'
                      : 'e.g. Promote training or launch a new service'
                  }
                  value={answers.goalOther}
                  onChange={(e) =>
                    setAnswers((a) => ({ ...a, goalOther: e.target.value }))
                  }
                />
              </div>
            )}

          {/* Conditional URL field for hasWebsite === Yes */}
          {current.key === 'hasWebsite' && answers.hasWebsite === current.options[0] && (
            <div className="pt-2">
              <Field
                id="website-url"
                label={current.urlPrompt ?? ''}
                optional={f.optional}
                type="url"
                inputMode="url"
                placeholder={current.urlPlaceholder}
                value={answers.websiteUrl}
                onChange={(e) => setAnswers((a) => ({ ...a, websiteUrl: e.target.value }))}
              />
            </div>
          )}

          {current.type === 'contact' && (
            <div className="space-y-4">
              <Field
                id="name"
                label={f.fields.name}
                autoComplete="name"
                placeholder={f.fields.namePlaceholder}
                value={answers.name}
                onChange={(e) => setAnswers((a) => ({ ...a, name: e.target.value }))}
                error={error === f.validation.name ? error : undefined}
              />
              <Field
                id="email"
                label={f.fields.email}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder={f.fields.emailPlaceholder}
                value={answers.email}
                onChange={(e) => setAnswers((a) => ({ ...a, email: e.target.value }))}
                error={error === f.validation.email ? error : undefined}
              />
              <Field
                id="phone"
                label={f.fields.phone}
                optional={f.optional}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder={f.fields.phonePlaceholder}
                value={answers.phone}
                onChange={(e) => setAnswers((a) => ({ ...a, phone: e.target.value }))}
              />
            </div>
          )}
        </div>

        {error && current.type !== 'contact' && (
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
              onClick={goBack}
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
                ? t.cta.sendRequest
                : t.cta.next}
            {status !== 'submitting' && <ArrowRight />}
          </Button>
        </div>
      </FlowShell>
    </>
  );
}
