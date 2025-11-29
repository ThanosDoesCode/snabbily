import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQProps {
  className?: string;
}

const FAQ = ({ className }: FAQProps) => {
  const { t, lang } = useLanguage();

  const faqs = [
    {
      question: t("faq.questions.0.question"),
      answer: t("faq.questions.0.answer"),
    },
    {
      question: t("faq.questions.1.question"),
      answer: t("faq.questions.1.answer"),
    },
    {
      question: t("faq.questions.2.question"),
      answer: t("faq.questions.2.answer"),
    },
    {
      question: t("faq.questions.3.question"),
      answer: t("faq.questions.3.answer"),
    },
    {
      question: t("faq.questions.4.question"),
      answer: t("faq.questions.4.answer"),
    },
    {
      question: t("faq.questions.5.question"),
      answer: t("faq.questions.5.answer"),
    },
    {
      question: t("faq.questions.6.question"),
      answer: t("faq.questions.6.answer"),
    },
    {
      question: t("faq.questions.7.question"),
      answer: t("faq.questions.7.answer"),
    },
    {
      question: t("faq.questions.8.question"),
      answer: t("faq.questions.8.answer"),
    },
  ];

  return (
    <section className={cn("py-40 bg-background", className)} id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in" key={lang}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("faq.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("faq.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-primary/40 transition-all duration-300 bg-card shadow-soft dark:hover:shadow-[var(--glow-card)]"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-1 pb-5 leading-relaxed">
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
