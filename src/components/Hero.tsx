import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight opacity-0 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.2s_forwards]">
            Fast, Affordable Websites for Local Businesses
            <span className="block mt-3 text-4xl md:text-6xl bg-gradient-primary bg-clip-text text-transparent opacity-0 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.5s_forwards]">
              Delivered in 3-4 Days
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            Delivered in 3-4 Days with your existing booking method integrated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            <Button
              size="lg"
              className="group text-lg px-12 py-6 bg-gradient-primary hover:opacity-90 hover:scale-[1.02] transition-all duration-300 font-semibold overflow-hidden relative"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group text-lg px-12 py-6 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/70 hover:scale-[1.02] transition-all duration-300 font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Get Your Website
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-5 shadow-soft max-w-2xl mx-auto opacity-0 animate-[slideUp_0.8s_ease-out_1.2s_forwards]">
            <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              <span className="text-primary">Google Maps</span> helps customers find you.
              <br />
              <span className="text-green-600 dark:text-green-400">A website</span> helps customers choose you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
