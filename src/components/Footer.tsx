const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Fast Websites for Local Businesses</h3>
          <p className="text-muted-foreground mb-6">Professional websites delivered in 3-4 days.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <a href="#booking" className="hover:text-primary transition-colors">
              Booking Integration
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm">© {currentYear} Snabbily. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
