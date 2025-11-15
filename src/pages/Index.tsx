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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WhyWebsite />
      <BookingIntegration />
      <Pricing />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;