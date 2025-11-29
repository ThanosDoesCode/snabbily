import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Smartphone, Zap } from "lucide-react";
import glowStudioDemo from "@/assets/glow-studio-demo.webp";
import barberProDemo from "@/assets/barber-pro-demo.webp";
import fadeFlowDemo from "@/assets/fade-flow-demo.webp";
import alexandrosLiakosDemo from "@/assets/alexandros-liakos-demo.webp";
import classicCutsDemo from "@/assets/classic-cuts-demo.webp";
import gildedRoseDemo from "@/assets/gilded-rose-demo.webp";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    image: alexandrosLiakosDemo,
    title: "Elite Hairstylist Portfolio",
    subtitle: "Premium portfolio with multi-language support & booking",
    industry: "Hair Styling & Education",
    type: "client" as const,
    description: "Modern, dark theme with online booking",
    url: "https://alexandrosliakos.lovable.app",
    metrics: ["Multi-language", "98/100 Lighthouse", "SEO-optimized"],
    testimonial: "Professional website that showcases my work beautifully and attracts new clients.",
    features: ["Next.js", "Booking", "Gallery"],
  },
  {
    image: barberProDemo,
    title: "Elite Barber Lounge",
    subtitle: "Dark, premium aesthetic with elegant animations",
    industry: "Men's Grooming",
    type: "demo" as const,
    description: "Elegant dark-themed barbershop",
    url: "https://barber-pro-prompt.lovable.app",
    features: ["SEO-ready", "Mobile-first", "Booking integrated"],
  },
  {
    image: fadeFlowDemo,
    title: "Fresh Cuts Modern",
    subtitle: "Bold, vibrant design with contemporary vibe",
    industry: "Men's Grooming",
    type: "demo" as const,
    description: "Premium barbershop with online booking",
    url: "https://fade-flow-arts.lovable.app",
    features: ["SEO-ready", "Mobile-first", "Booking integrated"],
  },
  {
    image: glowStudioDemo,
    title: "Glow Beauty Studio",
    subtitle: "Light, airy design for wellness businesses",
    industry: "Beauty & Wellness",
    type: "demo" as const,
    description: "Modern salon with seamless booking",
    url: "https://glow-studio-demo-swe.lovable.app",
    features: ["SEO-ready", "Mobile-first", "Booking integrated"],
  },
  {
    image: classicCutsDemo,
    title: "Classic Cuts Heritage",
    subtitle: "Traditional barbershop feel with modern functionality",
    industry: "Men's Grooming",
    type: "demo" as const,
    description: "Classic barbershop design",
    url: "https://barber-pole-chronicles.lovable.app",
    features: ["SEO-ready", "Mobile-first", "Booking integrated"],
  },
  {
    image: gildedRoseDemo,
    title: "Gilded Rose Salon",
    subtitle: "Elegant styling with sophisticated color palette",
    industry: "Beauty & Styling",
    type: "demo" as const,
    description: "Modern hair studio design",
    url: "https://gilded-rose-salon.lovable.app",
    features: ["SEO-ready", "Mobile-first", "Booking integrated"],
  },
];

interface PortfolioProps {
  className?: string;
}

const Portfolio = ({ className }: PortfolioProps) => {
  const { t, lang } = useLanguage();

  const featuredProject = projects.find((p) => p.type === "client");
  const demoProjects = projects.filter((p) => p.type === "demo");

  return (
    <section id="portfolio" className={cn("py-40 bg-secondary", className)}>
      <style>{`
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .badge-corner {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: saturate(140%) blur(6px);
          z-index: 10;
        }
        .img-zoom {
          transition: transform 0.5s ease;
        }
        .card-hover:hover .img-zoom {
          transform: scale(1.05);
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* Keep fade-up for desktop, avoid unnecessary work on small screens */
        @media (min-width: 768px) {
          .fade-up {
            animation: fadeUp 0.7s ease forwards;
          }
        }
      `}</style>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 fade-up" key={lang}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("portfolio.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </div>

        {/* Featured Client Project */}
        {featuredProject && (
          <div className="max-w-7xl mx-auto mb-16 fade-up">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 bg-card rounded-2xl border-2 border-primary/20 shadow-lg card-hover">
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto">
                <div className="badge-corner bg-primary text-primary-foreground">{t("portfolio.badgeLiveClient")}</div>
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {featuredProject.industry}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{featuredProject.title}</h3>
                  <p className="text-base text-muted-foreground mb-4">{featuredProject.subtitle}</p>

                  {featuredProject.testimonial && (
                    <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-muted-foreground mb-4">
                      "{featuredProject.testimonial}"
                    </blockquote>
                  )}

                  {featuredProject.metrics && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {featuredProject.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-sm">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {featuredProject.features && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <a href={featuredProject.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("portfolio.viewLiveSite")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Demo Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">{t("portfolio.demosTitle")}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoProjects.map((project, index) => (
              <div key={index} className="fade-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                <div className="card-hover rounded-xl overflow-hidden border border-border bg-card h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <div className="badge-corner bg-background/75 text-foreground border border-border">
                      {t("portfolio.badgeInteractiveDemo")}
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover img-zoom"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <Badge variant="secondary" className="mb-3 w-fit text-xs">
                      {project.industry}
                    </Badge>

                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.subtitle}</p>

                    {project.features && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.features.map((feature, idx) => (
                          <span key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                            {idx === 0 && <Smartphone className="w-3 h-3" />}
                            {feature}
                            {idx < project.features.length - 1 && " •"}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button asChild variant="default" size="sm" className="flex-1">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          {t("portfolio.viewDemo")}
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href="#contact">{t("portfolio.useTemplate")}</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
