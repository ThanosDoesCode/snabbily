import { SUBMIT_ENDPOINT, isSubmitConfigured } from './config';

export type SubmitResult =
  | { ok: true }
  | { ok: false; reason: 'not-configured' | 'network' | 'server' };

/**
 * Send a submission to the configured Formspree endpoint.
 * Success is reported only on a 2xx response. Failures are surfaced to the
 * caller so answers can be preserved and a retry offered. We never silently
 * "queue" a failed submission and pretend it will send later.
 */
export async function submitForm(
  subject: string,
  data: Record<string, unknown>,
): Promise<SubmitResult> {
  if (!isSubmitConfigured) return { ok: false, reason: 'not-configured' };

  try {
    const res = await fetch(SUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ _subject: subject, ...data }),
    });

    if (res.ok) return { ok: true };
    return { ok: false, reason: 'server' };
  } catch {
    return { ok: false, reason: 'network' };
  }
}
