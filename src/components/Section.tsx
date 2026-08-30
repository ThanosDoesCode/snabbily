import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`shell scroll-mt-24 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

/** Editorial index marker: hairline + number + label. */
export function IndexMarker({ index, label }: { index: string; label: string }) {
  return (
    <Reveal variant="fade" className="index-rule flex items-baseline gap-4">
      <span className="font-mono text-sm font-medium tabular-nums text-coral" aria-hidden="true">
        {index}
      </span>
      <span className="eyebrow">{label}</span>
    </Reveal>
  );
}
