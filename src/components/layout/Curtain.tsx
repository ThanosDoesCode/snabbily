import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

// The name written across the curtain, split for the left-to-right reveal.
// The curtain is aria-hidden, so these letters are decorative; the accessible
// name comes from the header wordmark link, read once.
const CURTAIN_LETTERS = 'Snabbily'.split('');

/**
 * One-time page-load intro curtain.
 *
 * A full-viewport ink panel is rendered into the prerendered HTML, so it covers
 * the page from the very first paint (no white flash) without blocking the real
 * content underneath for crawlers or no-JS visitors. The website name is written
 * across it letter by letter, held briefly, then the panel slides away to reveal
 * the page. It is shown and animated only under the `.js` class (set in <head>)
 * and skipped under `prefers-reduced-motion`. All motion is pure CSS (transform
 * and opacity), so it never delays interactivity.
 *
 * It lives in the persistent Layout, so it plays once per real page load and
 * never on SPA route changes, language switches or scrolling. After the reveal
 * finishes it unmounts entirely, so it can never trap clicks or scrolling.
 */
export function Curtain() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // With reduced motion the panel is hidden by CSS; remove it right away so
    // nothing lingers. Otherwise keep a fallback timer in case animationend is
    // missed (e.g. the tab was backgrounded during the animation).
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDone(true);
      return;
    }
    const timer = window.setTimeout(() => setDone(true), 3600);
    return () => window.clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <div
      className="curtain"
      aria-hidden="true"
      onAnimationEnd={(e) => {
        // Only the curtain's own reveal ends the intro; ignore the letter and
        // fade animations bubbling up from the name.
        if (e.target === e.currentTarget) setDone(true);
      }}
    >
      <span className="curtain-name">
        {CURTAIN_LETTERS.map((ch, i) => (
          <span key={i} className="curtain-name__letter" style={{ '--i': i } as CSSProperties}>
            {ch}
          </span>
        ))}
        <span
          className="curtain-name__letter curtain-name__dot"
          style={{ '--i': CURTAIN_LETTERS.length } as CSSProperties}
        >
          .
        </span>
      </span>
    </div>
  );
}
