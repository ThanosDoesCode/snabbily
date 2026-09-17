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

const disableKey = `ga-disable-${GA_MEASUREMENT_ID}`;

export function loadAnalytics(): void {
  if (!isAnalyticsConfigured || typeof window === 'undefined') return;

  // Re-enable measurement if it was previously turned off in this session.
  (window as unknown as Record<string, unknown>)[disableKey] = false;

  if (loaded) return;
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
  // send_page_view: false so the SPA controls page views itself (see
  // trackPageView) and the initial view is never double counted.
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true, send_page_view: false });

  // Record the page the visitor is on right now (first view after consent).
  trackPageView(currentPath());
}

function currentPath(): string {
  if (typeof window === 'undefined') return '/';
  // Pathname only. Query strings are intentionally excluded because future URLs
  // could carry identifiers or PII, which must never reach Google Analytics.
  return window.location.pathname;
}

/**
 * Send a GA4 page_view for a client-side navigation. No-op until analytics has
 * been loaded (i.e. consent granted), so navigation before consent is never
 * tracked. Sends only the path (query strings excluded for privacy) and title,
 * never PII.
 */
export function trackPageView(path: string): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.origin + path,
    page_title: document.title,
  });
}

/**
 * Stop Google Analytics from sending data in the current session, using GA's
 * official `ga-disable-<ID>` flag. Used when consent is withdrawn without a
 * page reload. On the next load, GA simply is not injected while consent is
 * denied, so the choice is respected either way.
 */
export function disableAnalytics(): void {
  if (!isAnalyticsConfigured || typeof window === 'undefined') return;
  (window as unknown as Record<string, unknown>)[disableKey] = true;
}

export type AnalyticsEvent =
  | 'start_project_started'
  | 'start_project_step_completed'
  | 'start_project_completed'
  | 'free_review_started'
  | 'free_review_completed'
  | 'book_call_clicked'
  | 'bonus_revealed';

/** Track a conversion event. Params must never contain personal data. */
export function track(event: AnalyticsEvent, params?: Record<string, string | number>): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params ?? {});
}
