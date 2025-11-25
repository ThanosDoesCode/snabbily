import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
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
    <section className={cn("py-40 bg-secondary", className)} id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Website</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Ready to establish your professional online presence? Let's talk!
          </p>
          <p className="text-sm text-primary font-medium">We usually reply within 3-5 hours during business days.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Calendly Scheduling Widget */}
          <Card className="border border-border bg-card shadow-soft overflow-hidden">
            <CardContent
              className="p-0"
              style={{
                overflow: "hidden",
              }}
            >
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
                style={{
                  minWidth: "320px",
                  height: "700px",
                  overflow: "hidden",
                }}
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
                    <p className="text-muted-foreground text-sm">+46 76 341 41 05</p>
                    <a href="tel:+46701234567" className="text-primary hover:underline text-sm mt-1 inline-block">
                      Call now →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card shadow-soft hover:border-primary/40 dark:hover:shadow-[var(--glow-card)] transition-all duration-300"></Card>

            <Card className="border border-border bg-card shadow-soft hover:border-primary/40 dark:hover:shadow-[var(--glow-card)] transition-all duration-300">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-primary-foreground"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">TikTok</h3>
                    <p className="text-muted-foreground text-sm">Watch short web tips</p>
                    <a
                      href="https://tiktok.com/@yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mt-1 inline-block"
                    >
                      Follow on TikTok →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-5 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Fast Response Time:</span> We typically reply within 3–5
                hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
