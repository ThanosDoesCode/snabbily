import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'accent' | 'invert';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const sizes: Record<Size, string> = {
  md: 'min-h-[44px] px-6 py-3 text-[0.95rem]',
  lg: 'min-h-[52px] px-8 py-4 text-base',
};

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-bone hover:bg-coral',
  secondary: 'border border-line-strong text-ink hover:border-ink bg-transparent',
  accent: 'bg-coral text-white hover:bg-coral-ink',
  invert: 'bg-bone text-ink hover:bg-coral hover:text-white',
};

function classes(variant: Variant, size: Size, extra?: string): string {
  return [base, sizes[size], variants[variant], extra].filter(Boolean).join(' ');
}

interface CtaLinkProps {
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

/** Navigation CTA: internal router link, or external/hash anchor. */
export function CtaLink({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  ariaLabel,
}: CtaLinkProps) {
  const cls = classes(variant, size, className);
  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  const external = href?.startsWith('http');
  return (
    <a
      href={href}
      className={cls}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

/** Native button for form actions. */
export function Button({ variant = 'primary', size = 'md', className, children, ...rest }: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" width="16" height="16" aria-hidden="true" className={className}>
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
