import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Eye, EyeOff, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Declare Cal type for window
declare global {
  interface Window {
    Cal: any;
  }
}

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const { t } = useLanguage();
  const [showFullNumber, setShowFullNumber] = useState(false);

  useEffect(() => {
    // Cal.com inline embed initialization
    (function (C, A, L) {
      let p = function (a, ar) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Add a small delay to ensure the element exists
    setTimeout(() => {
      try {
        window.Cal("init", "30min", { origin: "https://app.cal.com" });
        window.Cal.ns["30min"]("inline", {
          elementOrSelector: "#my-cal-inline-30min",
          config: { layout: "month_view" },
          calLink: "snabbily/30min",
        });
        window.Cal.ns["30min"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch (error) {
        console.error("Cal.com initialization error:", error);
      }
    }, 100);
  }, []);

  const phoneNumber = "+46 76 341 41 05";
  const maskedNumber = "+46 76 341 XX XX";

  return (
    <section className={cn("py-40 bg-secondary", className)} id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">{t("contact.subtitle")}</p>
          <p className="text-sm text-primary font-medium">{t("contact.responseTime")}</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <Card className="border border-border bg-card shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div id="my-cal-inline-30min" style={{ width: "100%", height: "700px", overflow: "scroll" }} />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border border-border bg-card shadow-soft hover:border-primary/40 dark:hover:shadow-[var(--glow-card)] transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{t("contact.email.title")}</h3>
                    <p className="text-muted-foreground text-sm">snabbily@gmail.com</p>
                    <a
                      href="mailto:snabbily@gmail.com"
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
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
                    <a href="tel:+46763414105" className="text-primary hover:underline text-sm mt-1 inline-block">
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
                      href="https://www.linkedin.com/company/your-company"
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
