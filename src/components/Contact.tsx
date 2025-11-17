import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-40 bg-secondary" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Website</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Ready to establish your professional online presence? Let's talk!
          </p>
          <p className="text-sm text-primary font-medium">I usually reply within 1–3 hours during business days.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Calendly Scheduling Widget */}
          <Card className="border border-border bg-card shadow-soft overflow-hidden">
            <CardHeader className="pb-3"></CardHeader>
            <CardContent className="p-0" style={{ overflow: "hidden" }}>
              <style>{`
                .calendly-inline-widget::-webkit-scrollbar {
                  display: none;
                }
                .calendly-inline-widget {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
                .calendly-inline-widget iframe {
                  overflow: hidden !important;
                }
              `}</style>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/thanos-xintarakis/new-meeting-1"
                style={{ minWidth: "320px", height: "700px", overflow: "hidden" }}
              />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border border-border bg-card shadow-soft hover:border-primary/40 dark:hover:shadow-[var(--glow-card)] transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">contact@example.se</p>
                    <a
                      href="mailto:contact@example.se"
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
                      Send an email →
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
                  <div>
                    <h3 className="font-semibold text-base mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+46 70 123 45 67</p>
                    <a href="tel:+46701234567" className="text-primary hover:underline text-sm mt-1 inline-block">
                      Call now →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-soft hover:border-primary/40 dark:hover:shadow-[var(--glow-card)] transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Quick response via WhatsApp</p>
                    <a
                      href="https://wa.me/46701234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
                      Message on WhatsApp →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-5 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Fast Response Time:</span> I typically reply within 1–3
                hours during business days (9 AM - 6 PM CET).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
