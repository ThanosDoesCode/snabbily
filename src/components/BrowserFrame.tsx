interface BrowserFrameProps {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
}

/** A restrained mock browser chrome around a project screenshot. */
export function BrowserFrame({ src, alt, url, priority = false }: BrowserFrameProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line-strong bg-paper shadow-[0_24px_60px_-28px_rgba(28,24,21,0.35)]">
      <div className="flex items-center gap-2 border-b border-line bg-bone-deep/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" aria-hidden="true" />
        <span className="ml-3 truncate rounded-full bg-bone px-3 py-1 text-xs text-muted">{url}</span>
      </div>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </figure>
  );
}
