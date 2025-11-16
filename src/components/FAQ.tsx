import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "We already appear on Google Maps — why need a website?",
      answer:
        "Google Maps shows where you are. A website shows who you are. It presents your services, prices, photos, and brand professionally. Customers are more likely to choose a business with a website over one without.",
    },
    {
      question: "We already use Bokadirekt — why add a website?",
      answer:
        "Booking platforms are great for scheduling, but they don't present your business. A website increases trust, showcases your work, explains your services, and makes customers more confident before they book. Think of it as your digital storefront.",
    },
    {
      question: "Is this SEO heavy?",
      answer:
        "No — it's presentation-focused. While I include basic SEO, the main goal isn't to rank #1 on Google for every search. It's to look professional and trustworthy when customers find you through any channel — Maps, social media, word of mouth, or search.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "Most websites are delivered within 48–72 hours. Simpler sites (up to 3 pages) typically take 48 hours, while more complex sites (up to 6 pages with custom branding) take up to 72 hours. I'll give you an exact timeline after we discuss your needs.",
    },
    {
      question: "Do I need new software or subscriptions?",
      answer:
        "No. I integrate the booking method you already use — Bokadirekt, WhatsApp, calls, or a simple form.",
    },
    {
      question: "What if I don't have professional photos?",
      answer:
        "No problem! I can work with smartphone photos and offer professional photo editing as an add-on service. Good photos help, but they're not required to get started.",
    },
    {
      question: "Can I update the website myself later?",
      answer:
        "Yes! With the optional maintenance subscription, I can help you with updates. Or I can show you how to make simple changes yourself. The choice is yours.",
    },
    {
      question: "What happens after the website is live?",
      answer:
        "Your website is yours! You can choose the optional monthly maintenance plan for hosting, updates, and support, or manage it yourself. I'm here to help either way.",
    },
  ];

  return (
    <section className="py-40 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about websites for local businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-primary/30 transition-all duration-300 bg-card shadow-soft"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pt-1 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;