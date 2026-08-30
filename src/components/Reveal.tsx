import { createElement, useEffect, useRef, type ElementType, type ReactNode } from 'react';

let observer: IntersectionObserver | null = null;
const seen = new WeakSet<Element>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
  }
  return observer;
}

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** "fade" reveals opacity only (no translate). */
  variant?: 'rise' | 'fade';
}

export function Reveal({ as = 'div', children, className, delay = 0, variant = 'rise' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || seen.has(node)) return;
    const obs = getObserver();
    if (!obs) {
      node.classList.add('is-visible');
      return;
    }
    seen.add(node);
    obs.observe(node);
    return () => obs.unobserve(node);
  }, []);

  return createElement(
    as,
    {
      ref,
      className,
      'data-reveal': variant === 'fade' ? 'fade' : true,
      style: delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined,
    },
    children,
  );
}
