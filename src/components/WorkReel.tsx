import { useRef, useState } from 'react';

export interface ReelPage {
  src: string;
  w: number;
  h: number;
  /** Short name shown on the page pill, e.g. "Collections". */
  label: string;
  /** Route shown on the seam between pages, e.g. "/collections". */
  path: string;
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

interface WorkReelProps {
  pages: ReelPage[];
  /** Group label for assistive tech. */
  ariaLabel: string;
  /** Use dot controls instead of text pills (for the narrow phone frame). */
  compact?: boolean;
  /** Duration of the full hover scroll-through. */
  tourMs?: number;
}

/** A framed device that shows one page at rest, plays a scroll-through of several
    real pages on hover, and lets you click a pill to jump straight to a page.
    Everything moves with a single GPU transform; offsets are measured from the
    DOM so no pixel heights are hard-coded. */
export function WorkReel({ pages, ariaLabel, compact = false, tourMs = 12000 }: WorkReelProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const pinnedRef = useRef(false);
  const [active, setActive] = useState(0);
  const [style, setStyle] = useState({ transform: 'translateY(0)', transition: `transform 1.2s ${EASE}` });

  const reduce = () =>
    typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const maxUp = () => {
    const root = rootRef.current;
    const reel = reelRef.current;
    if (!root || !reel) return 0;
    return Math.max(0, reel.scrollHeight - root.clientHeight);
  };
  const pageTop = (i: number) => Math.min(pageRefs.current[i]?.offsetTop ?? 0, maxUp());

  const enter = () => {
    if (pinnedRef.current || reduce()) return;
    setStyle({ transform: `translateY(-${maxUp()}px)`, transition: `transform ${tourMs}ms linear` });
  };
  const leave = () => {
    pinnedRef.current = false;
    setActive(0);
    setStyle({ transform: 'translateY(0)', transition: `transform 1.2s ${EASE}` });
  };
  const go = (i: number) => {
    pinnedRef.current = true;
    setActive(i);
    setStyle({ transform: `translateY(-${pageTop(i)}px)`, transition: reduce() ? 'none' : `transform 0.7s ${EASE}` });
  };

  return (
    <div
      ref={rootRef}
      role="group"
      aria-label={ariaLabel}
      className="reel-root"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <div ref={reelRef} className="work-reel" style={style}>
        {pages.map((p, i) => (
          <div key={p.src} ref={(el) => (pageRefs.current[i] = el)}>
            {i > 0 && (
              <div className="reel-sep" aria-hidden="true">
                <span className="reel-sep__pill">{p.path}</span>
              </div>
            )}
            <img src={p.src} alt="" width={p.w} height={p.h} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>

      <div className={compact ? 'reel-nav reel-nav--compact' : 'reel-nav'}>
        {pages.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className="reel-nav__btn"
            aria-current={active === i ? 'true' : undefined}
            aria-label={compact ? p.label : undefined}
            onClick={() => go(i)}
          >
            {compact ? <span className="reel-nav__dot" /> : p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
