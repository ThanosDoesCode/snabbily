import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern web design illustration"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Fast, Affordable Websites for Local Businesses
            <span className="block mt-2 text-4xl md:text-6xl bg-gradient-primary bg-clip-text text-transparent">
              Delivered in 48–72 Hours
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional websites with booking integration for Swedish small businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 transition-all shadow-medium hover:shadow-large"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-secondary/50 transition-all"
              onClick={() => scrollToSection("contact")}
            >
              Get Your Website
            </Button>
          </div>

          <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 shadow-soft max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              <span className="text-primary">Google Maps</span> helps customers find you.
              <br />
              <span className="text-accent">A website</span> helps customers choose you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;