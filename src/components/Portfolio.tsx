import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import glowStudioDemo from "@/assets/glow-studio-demo.png";
import barberProDemo from "@/assets/barber-pro-demo.png";
import fadeFlowDemo from "@/assets/fade-flow-demo.png";
import masterCutsDemo from "@/assets/master-cuts-demo.png";
import classicCutsDemo from "@/assets/classic-cuts-demo.png";
import gildedRoseDemo from "@/assets/gilded-rose-demo.png";

const projects = [
  {
    image: glowStudioDemo,
    title: "Beauty Salon",
    industry: "Beauty & Wellness",
    deliveryTime: "3 days",
    description: "Modern salon website with seamless booking integration",
    url: "https://glow-studio-demo-swe.lovable.app",
  },
  {
    image: barberProDemo,
    title: "Barber Shop",
    industry: "Men's Grooming",
    deliveryTime: "4 days",
    description: "Elegant dark-themed barbershop with appointment scheduling",
    url: "https://barber-pro-prompt.lovable.app",
  },
  {
    image: fadeFlowDemo,
    title: "Barber Shop",
    industry: "Men's Grooming",
    deliveryTime: "4 days",
    description: "Premium barbershop with online booking system",
    url: "https://fade-flow-arts.lovable.app",
  },
  {
    image: masterCutsDemo,
    title: "Barber Shop",
    industry: "Men's Grooming",
    deliveryTime: "3 days",
    description: "",
    url: "https://classic-cut-crafters.lovable.app",
  },
  {
    image: classicCutsDemo,
    title: "Barber Shop",
    industry: "Men's Grooming",
    deliveryTime: "4 days",
    description: "Classic barbershop with modern booking integration",
    url: "https://classic-cut-crafters.lovable.app",
  },
  {
    image: gildedRoseDemo,
    title: "Hair Studio",
    industry: "Beauty & Styling",
    deliveryTime: "3 days",
    description: "Modern hair studio with seamless online booking",
    url: "https://gilded-rose-salon.lovable.app",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-40 bg-secondary">
    {/* Custom CSS animations */}
    <style>{`
      @keyframes fadeUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .fade-up {
        animation: fadeUp 0.7s ease forwards;
      }
      .fade-up-delayed {
        opacity: 0;
        animation-fill-mode: forwards;
        animation-name: fadeUp;
        animation-duration: 0.7s;
        animation-timing-function: ease;
        animation-delay: var(--delay);
      }
      .scale-hover:hover {
        transform: scale(1.05) rotate(1deg);
        transition: transform 0.4s ease;
        box-shadow: 0 10px 30px rgba(80, 80, 200, 0.15);
      }
      .img-hover-scale:hover {
        transform: scale(1.1) rotate(1.5deg);
        transition: transform 0.5s ease;
      }
    `}</style>

    <div className="container mx-auto px-6">
      <div className="text-center mb-20 fade-up" style={{ animationDelay: "0.15s" }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Demo Work</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how I could help local businesses establish their online presence
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const Wrapper = project.url ? "a" : "div";
          return (
            <Wrapper
              key={index}
              href={project.url || undefined}
              target={project.url ? "_blank" : undefined}
              rel={project.url ? "noopener noreferrer" : undefined}
              className="block"
              style={{ "--delay": `${0.25 + index * 0.1}s` } as React.CSSProperties}
              aria-label={project.title}
            >
              <div
                className="fade-up-delayed scale-hover rounded-lg overflow-hidden border border-border bg-card cursor-pointer h-full flex flex-col"
                style={{ animationDelay: `var(--delay)` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover img-hover-scale" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-40 pointer-events-none" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-left">{project.title} – Demo Project</h3>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {project.deliveryTime}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-left mb-3 flex-grow">{project.description}</p>
                  <div className="flex justify-between text-sm text-muted-foreground mt-auto">
                    <span>Industry:</span>
                    <span className="font-medium text-foreground">{project.industry}</span>
                  </div>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  </section>
);

export default Portfolio;
