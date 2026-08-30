import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyWebsite from "@/components/WhyWebsite";
import BookingIntegration from "@/components/BookingIntegration";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FreeReviewCTA from "@/components/FreeReviewCTA";
import Footer from "@/components/Footer";
import StartProjectFlow from "@/components/flows/StartProjectFlow";
import FreeReviewFlow from "@/components/flows/FreeReviewFlow";
import AnimatedSection from "@/components/AnimatedSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main id="main-content" role="main" className="min-h-screen">
      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-3 py-2 rounded-md z-50" href="#contact">
        Skip to contact
      </a>
      <SEO />
      <Navbar />
      <Hero className="py-[80px] pt-[4px]" />
      <AnimatedSection>
        <Services className="mx-0 my-0 px-0 py-0" />
      </AnimatedSection>
      <AnimatedSection>
        <WhyWebsite className="py-[120px]" />
      </AnimatedSection>
      <AnimatedSection>
        <BookingIntegration className="py-[120px]" />
      </AnimatedSection>
      <AnimatedSection>
        <Pricing className="py-[120px]" />
      </AnimatedSection>
      <AnimatedSection>
        <Process className="py-0" />
      </AnimatedSection>
      <AnimatedSection>
        <Portfolio className="py-[120px]" />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ className="py-[120px]" />
      </AnimatedSection>
      <AnimatedSection>
        <Contact className="py-[120px]" />
      </AnimatedSection>
      <FreeReviewCTA />
      <Footer />
      <StartProjectFlow />
      <FreeReviewFlow />
    </main>
  );
};
export default Index;