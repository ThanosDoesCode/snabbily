import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type ConsentState = 'unset' | 'granted' | 'denied';

const STORAGE_KEY = 'snabbily.consent.analytics';

interface ConsentContextValue {
  consent: ConsentState;
  setConsent: (value: 'granted' | 'denied') => void;
}

const ConsentContext = createContext<ConsentContextValue>({
  consent: 'unset',
  setConsent: () => {},
});

function readStored(): ConsentState {
  if (typeof window === 'undefined') return 'unset';
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === 'granted' || v === 'denied') return v;
  } catch {
    /* storage may be unavailable */
  }
  return 'unset';
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>('unset');

  // Read persisted choice after mount (keeps SSR output deterministic).
  useEffect(() => {
    setConsentState(readStored());
  }, []);

  const setConsent = useCallback((value: 'granted' | 'denied') => {
    setConsentState(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
  }, []);

  return <ConsentContext.Provider value={{ consent, setConsent }}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  return useContext(ConsentContext);
}
