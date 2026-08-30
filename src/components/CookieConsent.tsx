import { useEffect, useState } from "react";
import { COOKIE_CONSENT_KEY } from "@/config/site";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState<boolean>(() => {
    try {
      return localStorage.getItem(COOKIE_CONSENT_KEY) === "true";
    } catch (e) {
      // ignore localStorage read errors in restrictive environments
      return false;
    }
  });

  useEffect(() => {
    if (!consent) setVisible(true);
  }, [consent]);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "true");
      document.cookie = `${COOKIE_CONSENT_KEY}=true; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch (e) {
      // ignore storage/cookie write failures
    }
    setConsent(true);
    setVisible(false);
    // notify other listeners
    window.dispatchEvent(new Event("cookie-consent-changed"));
  };

  const decline = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "false");
    } catch (e) {
      // ignore storage write failures
    }
    setConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-12 z-50">
      <div className="max-w-3xl mx-auto bg-card border border-border p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1 text-sm text-muted-foreground">
          This site uses cookies for analytics and to enable third-party booking widgets. Accept to load the booking calendar and analytics.
        </div>
        <div className="flex gap-2">
          <button onClick={decline} className="px-4 py-2 rounded-md border border-border text-sm">
            Decline
          </button>
          <button onClick={accept} className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
