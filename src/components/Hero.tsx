import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useConversionFlow } from "@/contexts/ConversionFlowContext";
interface HeroProps {
  className?: string;
}
const Hero = ({
  className
}: HeroProps) => {
  const {
    t
  } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const { openStart, openFreeReview } = useConversionFlow();
  return <section className={cn(
  // Normal section height with comfortable padding
  "relative flex items-start justify-center overflow-hidden py-16 sm:py-20 md:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-[40px] pb-[80px]">
        <div className="max-w-5xl mx-auto text-left md:text-left pb-0 pt-0">
          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] mb-6 leading-[1.02] tracking-tight opacity-0 animate-[fadeIn_0.8s_ease-out_0.1s_forwards] px-4">
            {t("hero.title")}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl leading-relaxed px-4">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start mb-10 px-4">
            <Button size="lg" onClick={() => openStart()} className="group text-base px-8 h-[52px] bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium w-full sm:w-auto rounded-sm">
              {t("hero.ctaPrimary")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="ghost" onClick={() => openFreeReview()} className="group text-base px-8 h-[52px] hover:bg-transparent hover:text-primary transition-colors font-medium w-full sm:w-auto rounded-sm underline underline-offset-8 decoration-1">
              {t("hero.ctaSecondary")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Value Proposition — editorial, no card */}
          <div className="max-w-xl px-4 mt-12 border-t border-border pt-8 space-y-3">
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="text-primary font-medium">{t("hero.mapsHighlight.line1Bold")}</span>{" "}
              <span className="text-muted-foreground">{t("hero.mapsHighlight.line1Rest")}</span>
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              <span className="text-foreground font-medium">{t("hero.mapsHighlight.line2Bold")}</span>{" "}
              <span className="text-muted-foreground">{t("hero.mapsHighlight.line2Rest")}</span>
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 px-4">
            <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" strokeWidth={1.5} />
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;