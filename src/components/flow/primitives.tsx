import type { InputHTMLAttributes, ReactNode } from 'react';

/** Broad shape covering every step variant across both flows. */
export interface StepDef {
  key: string;
  question: string;
  type: string;
  options: string[];
  hint?: string;
  urlPrompt?: string;
  urlPlaceholder?: string;
  placeholder?: string;
}

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div
      className="h-1 w-full overflow-hidden rounded-full bg-line"
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
    >
      <div
        className="h-full rounded-full bg-coral transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function OptionButton({
  selected,
  multi = false,
  onClick,
  children,
}: {
  selected: boolean;
  multi?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={[
        'flex min-h-[52px] w-full items-center justify-between gap-3 rounded-xl border px-5 py-3.5 text-left text-[1.02rem] transition-colors duration-200',
        selected
          ? 'border-coral bg-coral/8 text-ink'
          : 'border-line-strong bg-paper text-ink-soft hover:border-ink hover:text-ink',
      ].join(' ')}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={[
          'flex h-5 w-5 shrink-0 items-center justify-center border transition-colors',
          multi ? 'rounded-md' : 'rounded-full',
          selected ? 'border-coral bg-coral text-white' : 'border-line-strong bg-transparent',
        ].join(' ')}
      >
        {selected && (
          <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
            <path d="M3 8.5l3.2 3.2L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    </button>
  );
}

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  optional?: string;
  error?: string;
  hideLabel?: boolean;
}

export function Field({ label, id, optional, error, hideLabel, ...rest }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className={
          hideLabel
            ? 'sr-only'
            : 'flex items-baseline justify-between text-sm font-medium text-ink'
        }
      >
        <span>{label}</span>
        {optional && !hideLabel && <span className="text-xs font-normal text-muted">{optional}</span>}
      </label>
      <input
        id={id}
        className={[
          hideLabel ? '' : 'mt-2',
          'min-h-[48px] w-full rounded-xl border bg-paper px-4 text-ink outline-none transition-colors placeholder:text-muted/70',
          error ? 'border-coral' : 'border-line-strong focus:border-ink',
        ].join(' ')}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-coral-ink">
          {error}
        </p>
      )}
    </div>
  );
}

export function FlowShell({ children }: { children: ReactNode }) {
  return (
    <div className="shell flex min-h-[calc(100svh-4rem)] items-center justify-center py-12 md:min-h-[calc(100svh-5rem)] md:py-16">
      <div className="w-full max-w-xl">{children}</div>
    </div>
  );
}
