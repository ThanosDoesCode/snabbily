import { useEffect, useState } from 'react';

/**
 * One-time page-load intro curtain.
 *
 * A full-viewport ink panel is rendered into the prerendered HTML, so it covers
 * the page from the very first paint (no white flash) without blocking the real
 * content underneath for crawlers or no-JS visitors. It is shown and animated
 * only under the `.js` class (set synchronously in <head>) and is skipped under
 * `prefers-reduced-motion`. All motion is pure CSS (transform only), so it never
 * delays interactivity.
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
    const timer = window.setTimeout(() => setDone(true), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  if (done) return null;

  return <div className="curtain" aria-hidden="true" onAnimationEnd={() => setDone(true)} />;
}
