const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Fast Websites for Local Businesses</h3>
          <p className="text-background/80 mb-6">
            Professional websites delivered in 48–72 hours
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#services" className="hover:text-background/80 transition-colors">
              Services
            </a>
            <a href="#booking" className="hover:text-background/80 transition-colors">
              Booking Integration
            </a>
            <a href="#pricing" className="hover:text-background/80 transition-colors">
              Pricing
            </a>
            <a href="#portfolio" className="hover:text-background/80 transition-colors">
              Portfolio
            </a>
            <a href="#faq" className="hover:text-background/80 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-background/80 transition-colors">
              Contact
            </a>
          </div>
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/70 text-sm">
              © {currentYear} Local Business Web Design Sweden. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;