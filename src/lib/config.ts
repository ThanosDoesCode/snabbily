/**
 * Central runtime configuration read from Vite env vars.
 * Every integration is optional. The UI checks these booleans and degrades
 * gracefully when a value is missing. Values are inlined at build time.
 */

function clean(value: string | undefined): string {
  return (value ?? '').trim();
}

export const SITE_URL = clean(import.meta.env.VITE_SITE_URL) || 'https://snabbily.com';

export const SUBMIT_ENDPOINT = clean(import.meta.env.VITE_SUBMIT_ENDPOINT);
export const isSubmitConfigured = SUBMIT_ENDPOINT.length > 0;

export const GA_MEASUREMENT_ID = clean(import.meta.env.VITE_GA_MEASUREMENT_ID);
export const isAnalyticsConfigured = /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID);

const rawCal = clean(import.meta.env.VITE_CAL_LINK);
export const isCalConfigured = rawCal.length > 0;
/** Normalise a Cal.com link into a full URL. Accepts "user/event" or a URL. */
export const CAL_URL = isCalConfigured
  ? rawCal.startsWith('http')
    ? rawCal
    : `https://cal.com/${rawCal.replace(/^\/+/, '')}`
  : '';

/** Public contact details (safe to expose). */
export const CONTACT_EMAIL = 'thanos@snabbily.com';

/** Live reference project shown as selected work. */
export const ALEXANDROS_URL = 'https://alexandrosliakos.lovable.app';
