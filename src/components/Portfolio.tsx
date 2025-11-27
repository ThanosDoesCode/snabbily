import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Smartphone, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import glowStudioDemo from "@/assets/glow-studio-demo.png";
import barberProDemo from "@/assets/barber-pro-demo.png";
import fadeFlowDemo from "@/assets/fade-flow-demo.png";
import alexandrosLiakosDemo from "@/assets/alexandros-liakos-demo.png";
import classicCutsDemo from "@/assets/classic-cuts-demo.png";
import gildedRoseDemo from "@/assets/gilded-rose-demo.png";

interface PortfolioProjectConfig {
  image: string;
  type: "client" | "demo";
  url: string;
  tKey: string; // base key in JSON, e.g. "portfolio.projects.0"
}

const projectConfigs: PortfolioProjectConfig[] = [
  {
    image: alexandrosLiakosDemo,
    type: "client",
    url: "https://alexandrosliakos.lovable.app",
    tKey: "portfolio.projects.0",
  },
  {
    image: barberProDemo,
    type: "demo",
    url: "https://barber-pro-prompt.lovable.app",
    tKey: "portfolio.projects.1",
  },
  {
    image: fadeFlowDemo,
    type: "demo",
    url: "https://fade-flow-arts.lovable.app",
    tKey: "portfolio.projects.2",
  },
  {
    image: glowStudioDemo,
    type: "demo",
    url: "https://glow-studio-demo-swe.lovable.app",
    tKey: "portfolio.projects.3",
  },
  {
    image: classicCutsDemo,
    type: "demo",
    url: "https://barber-pole-chronicles.lovable.app",
    tKey: "portfolio.projects.4",
  },
  {
    image: gildedRoseDemo,
    type: "demo",
    url: "https://gilded-rose-salon.lovable.app",
    tKey: "portfolio.projects.5",
  },
];

interface PortfolioProps {
  className?: string;
}

const Portfolio = ({ className }: PortfolioProps) => {
  const { t } = useLanguage();

  const projects = projectConfigs.map((p) => ({
    ...p,
    title: t(`${p.tKey}.title`),
    subtitle: t(`${p.tKey}.subtitle`),
    industry: t(`${p.tKey}.industry`),
    description: t(`${p.tKey}.description`),
    testimonial: t(`${p.tKey}.testimonial`),
    metrics: [t(`${p.tKey}.metrics.0`), t(`${p.tKey}.metrics.1`), t(`${p.tKey}.metrics.2`)].filter(
      (m) => m && m !== `${p.tKey}.metrics.0`,
    ), // ignore missing
    features: [t(`${p.tKey}.features.0`), t(`${p.tKey}.features.1`), t(`${p.tKey}.features.2`)].filter(
      (f) => f && f !== `${p.tKey}.features.0`,
    ),
  }));

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
        .fade-up {
          animation: fadeUp 0.7s ease forwards;
        }
      `}</style>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20 fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("portfolio.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
        </div>

        {/* Featured Client Project */}
        {featuredProject && (
          <div className="max-w-7xl mx-auto mb-16 fade-up">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 bg-card rounded-2xl border-2 border-primary/20 shadow-lg card-hover">
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto">
                <div className="badge-corner bg-primary text-primary-foreground">{t("portfolio.featuredBadge")}</div>
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <Badge variant="secondary" className="mb-3">
                    {featuredProject.industry}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{featuredProject.title}</h3>
                  <p className="text-base text-muted-foreground mb-4">{featuredProject.subtitle}</p>

                  {featuredProject.testimonial &&
                    featuredProject.testimonial !== "portfolio.projects.0.testimonial" && (
                      <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-muted-foreground mb-4">
                        “{featuredProject.testimonial}”
                      </blockquote>
                    )}

                  {featuredProject.metrics && featuredProject.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {featuredProject.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-sm">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {featuredProject.features && featuredProject.features.length > 0 && (
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
                      {t("portfolio.ctaViewLive")}
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
                      {t("portfolio.demoBadge")}
                    </div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover img-zoom" />
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <Badge variant="secondary" className="mb-3 w-fit text-xs">
                      {project.industry}
                    </Badge>

                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.subtitle}</p>

                    {project.features && project.features.length > 0 && (
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
                          {t("portfolio.ctaViewDemo")}
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href="#contact">{t("portfolio.ctaUseTemplate")}</a>
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
