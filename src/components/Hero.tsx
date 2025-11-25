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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight opacity-0 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.2s_forwards] px-4">
            Fast, Affordable Websites for Local Businesses
            <span className="block mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-primary bg-clip-text text-transparent opacity-0 animate-[scaleIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_0.5s_forwards]">
              Delivered in 3-4 Days
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards] px-4">
            Get a professional website with your existing booking method integrated — no learning curve, no extra
            subscriptions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 md:mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards] px-4">
            <Button
              size="lg"
              className="group text-base sm:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 bg-gradient-primary hover:opacity-90 hover:scale-[1.02] transition-all duration-300 font-semibold overflow-hidden relative w-full sm:w-auto"
              onClick={() => scrollToSection("portfolio")}
            >
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group text-base sm:text-lg px-8 sm:px-10 md:px-12 py-5 sm:py-6 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/70 hover:scale-[1.02] transition-all duration-300 font-semibold w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Get Your Website
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>

          {/* Value Proposition Box */}
          <div className="bg-card/90 backdrop-blur-sm border-2 border-border rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-soft max-w-2xl mx-4 md:mx-auto opacity-0 animate-[slideUp_0.8s_ease-out_1.2s_forwards]">
            <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-foreground leading-relaxed space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2">
                <span className="text-primary font-bold text-base sm:text-lg md:text-xl">Google Maps</span>
                <span className="text-muted-foreground text-sm sm:text-base md:text-lg">helps customers find you.</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2">
                <span className="text-green-600 dark:text-green-400 font-bold text-base sm:text-lg md:text-xl">
                  A website
                </span>
                <span className="text-muted-foreground text-sm sm:text-base md:text-lg">
                  helps customers choose you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
