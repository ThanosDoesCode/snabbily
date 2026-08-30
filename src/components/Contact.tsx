import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Eye, EyeOff, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT_EMAIL, CONTACT_PHONE, CAL_LINK, COOKIE_CONSENT_KEY } from "@/config/site";

// Declare Cal type for window
declare global {
  interface Window {
    // Cal is the global loader provided by Cal.com embed script. Use `unknown` to avoid leaking `any`.
    Cal?: ((...args: unknown[]) => unknown) & { ns?: Record<string, unknown> };
  }
}

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const { t } = useLanguage();
  const [showFullNumber, setShowFullNumber] = useState(false);
  const [calLoaded, setCalLoaded] = useState(false);
  const calContainerRef = useRef<HTMLDivElement | null>(null);
  const [waitingForConsent, setWaitingForConsent] = useState(false);

  // Lazy-load Cal.com when the calendar card enters the viewport
  useEffect(() => {
    if (!calContainerRef.current || calLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Only load Cal if user has consented to non-essential cookies
          if (hasCookieConsent()) {
            loadCalInline();
          } else {
            setWaitingForConsent(true);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(calContainerRef.current);

    const onConsent = () => {
      if (waitingForConsent && hasCookieConsent()) loadCalInline();
    };

    window.addEventListener("cookie-consent-changed", onConsent);

    return () => {
      observer.disconnect();
      window.removeEventListener("cookie-consent-changed", onConsent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calLoaded, waitingForConsent]);

  const ensureFullUrl = (link: string) => {
    if (!link) return link;
    if (/^https?:\/\//i.test(link)) return link;
    return `https://${link}`;
  };

  const hasCookieConsent = () => {
    try {
      return (
        localStorage.getItem(COOKIE_CONSENT_KEY) === "true" ||
        (typeof document !== "undefined" && document.cookie.includes(`${COOKIE_CONSENT_KEY}=true`))
      );
    } catch (e) {
      return false;
    }
  };

  const loadCalInline = async () => {
    if (typeof window === "undefined") return;
    if (calLoaded) return;

    const calLink = ensureFullUrl(CAL_LINK);
    if (!calLink) return; // nothing to do

    try {
      const src = "https://app.cal.com/embed/embed.js";
      // avoid loading the script multiple times
      if (!document.querySelector(`script[src="${src}"]`)) {
        await new Promise<void>((resolve, reject) => {
          const s = document.createElement("script");
          s.src = src;
          s.async = true;
          s.onload = () => resolve();
          s.onerror = () => reject(new Error("Failed to load Cal.com script"));
          document.head.appendChild(s);
        });
      }

      // initialize Cal if available
      if (typeof window.Cal === "function") {
        window.Cal("init", "30min", { origin: "https://app.cal.com" });
        if (window.Cal.ns && typeof window.Cal.ns["30min"] === "function") {
          window.Cal.ns["30min"]("inline", {
            elementOrSelector: "#my-cal-inline-30min",
            config: { layout: "month_view", theme: "light" },
            calLink: calLink,
          });
          window.Cal.ns["30min"]("ui", {
            theme: "light",
            hideEventTypeDetails: false,
            layout: "month_view",
          });
        }
      }

      setCalLoaded(true);
    } catch (e) {
      // silently fail — booking will remain a contact CTA
      console.warn("Cal.com script failed to load", e);
    }
  };

  const phoneNumber = CONTACT_PHONE;
  const maskedNumber = phoneNumber.replace(/\d(?=\d{2})/g, "X");

  return (
    <section className={cn("py-40 bg-secondary", className)} id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">{t("contact.subtitle")}</p>
          <p className="text-sm text-primary font-medium">{t("contact.responseTime")}</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Booking calendar */}
          <Card className="border border-border bg-card shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div
                id="my-cal-inline-30min"
                ref={calContainerRef}
                style={{ width: "100%", height: "700px", overflow: "scroll" }}
              >
                {!calLoaded && (
                  <div className="w-full h-full flex items-center justify-center text-sm text-muted-foreground">
                    {waitingForConsent ? (
                      <div className="flex flex-col items-center gap-3">
                        <p>{t("contact.loadingRequiresConsent") ?? "Accept cookies to load the booking calendar."}</p>
                        <button
                          onClick={() => {
                            try {
                              localStorage.setItem(COOKIE_CONSENT_KEY, "true");
                              document.cookie = `${COOKIE_CONSENT_KEY}=true; path=/; max-age=${60 * 60 * 24 * 365}`;
                              window.dispatchEvent(new Event("cookie-consent-changed"));
                            } catch (e) {
                              // ignore storage/cookie write failures
                            }
                          }}
                          className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
                        >
                          {t("contact.acceptCookies") ?? "Accept cookies"}
                        </button>
                      </div>
                    ) : (
                      <div>{t("contact.loadingCalendar") ?? "Loading booking calendar..."}</div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contact cards */}
          <div className="space-y-6">
            <Card className="border border-border bg-card shadow-soft hover:border-primary/40 dark:hover:shadow-[var(--glow-card)] transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{t("contact.email.title")}</h3>
                    <p className="text-muted-foreground text-sm">{CONTACT_EMAIL}</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline text-sm mt-1 inline-block">
                      {t("contact.email.cta")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-soft hover:border-primary/40 dark:hover:shadow-[var(--glow-card)] transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-base mb-1">{t("contact.phone.title")}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-muted-foreground text-sm">{showFullNumber ? phoneNumber : maskedNumber}</p>
                      <button
                        onClick={() => setShowFullNumber(!showFullNumber)}
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={showFullNumber ? t("contact.phone.hide") : t("contact.phone.show")}
                      >
                        {showFullNumber ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`} className="text-primary hover:underline text-sm mt-1 inline-block">
                      {t("contact.phone.cta")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-soft hover:border-primary/40 dark:hover:shadow-[var(--glow-card)] transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{t("contact.linkedin.title")}</h3>
                    <p className="text-muted-foreground text-sm">{t("contact.linkedin.subtitle")}</p>
                    <a
                      href="https://www.linkedin.com/in/thanosxnt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
                      {t("contact.linkedin.cta")}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-5 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{t("contact.fastResponse")}</span>{" "}
                {t("contact.fastResponseText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
