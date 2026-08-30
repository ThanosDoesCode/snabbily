import type { ReactNode } from 'react';

interface BrowserFrameProps {
  url: string;
  children: ReactNode;
}

/** A restrained mock browser chrome around framed content. */
export function BrowserFrame({ url, children }: BrowserFrameProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line-strong bg-paper shadow-[0_24px_60px_-28px_rgba(28,24,21,0.35)] transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[0_40px_90px_-30px_rgba(28,24,21,0.45)]">
      <div className="flex items-center gap-2 border-b border-line bg-bone-deep/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="ml-3 truncate rounded-full bg-bone px-3 py-1 text-xs text-muted">{url}</span>
      </div>
      <div className="aspect-[16/10] w-full">{children}</div>
    </figure>
  );
}
