import { GA_MEASUREMENT_ID, isAnalyticsConfigured } from './config';

/**
 * Lightweight GA4 loader. Loads only after analytics consent is granted and a
 * measurement ID is configured. Never sends personal data (names, emails,
 * phone numbers or form answers), only event names.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let loaded = false;

export function loadAnalytics(): void {
  if (loaded || !isAnalyticsConfigured || typeof window === 'undefined') return;
  loaded = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export type AnalyticsEvent =
  | 'start_project_started'
  | 'start_project_step_completed'
  | 'start_project_completed'
  | 'free_review_started'
  | 'free_review_completed'
  | 'book_call_clicked';

/** Track a conversion event. Params must never contain personal data. */
export function track(event: AnalyticsEvent, params?: Record<string, string | number>): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params ?? {});
}
