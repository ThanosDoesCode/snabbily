import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function Section({
  id,
  children,
  className = '',
  tone = 'default',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Full-bleed background tone. */
  tone?: 'default' | 'sunk' | 'ink';
}) {
  const bg =
    tone === 'ink'
      ? 'bg-ink text-bone'
      : tone === 'sunk'
        ? 'bg-bone-deep/50'
        : '';
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-32 ${bg} ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

/** Editorial index marker: hairline + number + label. */
export function IndexMarker({
  index,
  label,
  onDark = false,
}: {
  index: string;
  label: string;
  onDark?: boolean;
}) {
  return (
    <Reveal
      variant="fade"
      className={`index-rule flex items-baseline gap-4 ${onDark ? 'index-rule--dark' : ''}`}
    >
      <span className="font-mono text-sm font-medium tabular-nums text-coral" aria-hidden="true">
        {index}
      </span>
      <span className={onDark ? 'eyebrow text-bone/55' : 'eyebrow'}>{label}</span>
    </Reveal>
  );
}
