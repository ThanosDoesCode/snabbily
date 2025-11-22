import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import glowStudioDemo from "@/assets/glow-studio-demo.png";
import barberProDemo from "@/assets/barber-pro-demo.png";
import fadeFlowDemo from "@/assets/fade-flow-demo.png";
import masterCutsDemo from "@/assets/master-cuts-demo.png";
import classicCutsDemo from "@/assets/classic-cuts-demo.png";
import gildedRoseDemo from "@/assets/gilded-rose-demo.png";

import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Sparkles, ArrowRight } from "lucide-react";

// --- ASSET SETUP ---
// The local imports below are commented out because the files don't exist in this preview environment.
// To use your own images locally:
// 1. Place your .png files in 'src/assets/'
// 2. Uncomment the imports below
// 3. Remove the 'const' placeholder lines

// import glowStudioDemo from "@/assets/glow-studio-demo.png";
const glowStudioDemo = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80";

// import barberProDemo from "@/assets/barber-pro-demo.png";
const barberProDemo = "https://images.unsplash.com/photo-1503951914296-960fa8ea68f4?auto=format&fit=crop&w=800&q=80";

// import fadeFlowDemo from "@/assets/fade-flow-demo.png";
const fadeFlowDemo = "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80";

// import masterCutsDemo from "@/assets/master-cuts-demo.png";
const masterCutsDemo = "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80";

// import classicCutsDemo from "@/assets/classic-cuts-demo.png";
const classicCutsDemo = "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=800&q=80";

// import gildedRoseDemo from "@/assets/gilded-rose-demo.png";
const gildedRoseDemo = "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80";

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
    description: "Barbershop with online scheduling",
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

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Portfolio Gallery</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Demo Works</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore how I help local beauty and wellness businesses transform their digital presence with
            high-converting, elegant designs.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Wrapper = project.url ? "a" : "div";

            return (
              <Wrapper
                key={index}
                href={project.url || undefined}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                className={`group block h-full transition-all duration-700 ease-out transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                aria-label={project.title}
              >
                <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 group-hover:border-primary/20">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                    {/* Hover Overlay with Glassmorphism */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 bg-background/95 text-foreground px-6 py-3 rounded-full shadow-lg font-medium text-sm">
                        Visit Website <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Top Right Badge (Delivery Time) */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-md shadow-sm border border-white/10 gap-1.5 px-3 py-1.5"
                      >
                        <Clock className="w-3 h-3 text-primary" />
                        {project.deliveryTime}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow relative">
                    {/* Title & Arrow */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-xs text-primary font-medium uppercase tracking-wider mt-1 opacity-80">
                          Demo Project
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Industry</span>
                      <span className="font-semibold text-foreground bg-secondary/50 px-3 py-1 rounded-full">
                        {project.industry}
                      </span>
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
};

export default Portfolio;
