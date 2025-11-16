import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyWebsite from "@/components/WhyWebsite";
import BookingIntegration from "@/components/BookingIntegration";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
const Index = () => {
  return <div className="min-h-screen">
      <Hero className="bg-[#171d24]" />
      <AnimatedSection>
        <Services className="bg-[#171d24]" />
      </AnimatedSection>
      <AnimatedSection>
        <WhyWebsite />
      </AnimatedSection>
      <AnimatedSection>
        <BookingIntegration />
      </AnimatedSection>
      <AnimatedSection>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>;
};
export default Index;