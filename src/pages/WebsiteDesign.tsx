import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { BrowserFrame } from '@/components/BrowserFrame';
import { AlexandrosShowcase } from '@/components/AlexandrosShowcase';
import { CtaLink, ArrowRight } from '@/components/Button';
import { SITE_URL, ALEXANDROS_URL } from '@/lib/config';
import { breadcrumbLd, serviceLd } from '@/lib/structuredData';
import { pagePath } from '@/i18n/routes';

const PAGE_COPY = {
  en: {
    title: 'Website Design for Small Businesses | Snabbily',
    description:
      'Custom website design for small businesses and independent professionals. Mobile-first builds, SEO foundations, analytics and enquiry tools. From €400.',
    h1: 'Website design for small businesses',
    breadcrumb: 'Website design for small businesses',
    eyebrow: 'Custom websites for service businesses',
    heroBody: 'Custom websites that explain your services clearly, build trust and turn visits into enquiries or bookings.',
    heroAlt: 'Custom business website for Alexandros Liakos shown on a desktop screen',
    includedCta: 'What is included',
    outcomesTitle: 'A professional website should support the way your business grows.',
    outcomes: [
      {
        title: 'Make your offer easy to understand',
        body: 'Visitors quickly see what you do, who it is for and why it is worth contacting you.',
      },
      {
        title: 'Give people confidence',
        body: 'Considered design, clear structure and real work help your business look established and credible.',
      },
      {
        title: 'Create a clear next step',
        body: 'Enquiry forms, calls to action and booking links sit where potential customers need them.',
      },
      {
        title: 'Show what is working',
        body: 'Analytics and conversion tracking connect visits with the actions that matter to your business.',
      },
    ],
    customTitle: 'A website shaped around your business.',
    customBody:
      'Every Snabbily website is custom designed. We start with your services, customers and goals, then build the structure and visual direction around them.',
    nicheLead: 'Run a salon, work as a hairstylist or offer beauty services? See our focused approach to',
    nicheLink: 'websites for Hair & Beauty businesses',
    audienceTitle: 'Who this is for',
    audiences: [
      'Service-based small businesses',
      'Independent professionals',
      'Consultants and educators',
      'Businesses driven by enquiries or appointments',
    ],
    includedId: 'included',
    includedTitle: 'What your small business website can include',
    includedIntro: 'Each project is scoped around the business. The foundations stay consistent.',
    includedGroups: [
      {
        title: 'Design and content',
        body: 'Custom website design, a clear service structure and practical support with page content and messaging.',
      },
      {
        title: 'Mobile and enquiries',
        body: 'Mobile optimisation, contact and enquiry forms, plus booking or other useful integrations on suitable plans.',
      },
      {
        title: 'SEO and measurement',
        body: 'SEO foundations, Google Analytics, Google Search Console and tracking for important customer actions.',
      },
    ],
    processTitle: 'From first conversation to launch',
    process: [
      {
        title: 'Understand the business',
        body: 'We discuss your services, customers and the action you want a potential client to take.',
      },
      {
        title: 'Plan the customer journey',
        body: 'We shape the pages, messages and contact points before moving into the final visual design.',
      },
      {
        title: 'Design and build',
        body: 'We create the website around your business and make sure it works clearly across screen sizes.',
      },
      {
        title: 'Review and launch',
        body: 'We complete the agreed refinements, connect the right tools and prepare the website for launch.',
      },
    ],
    pricingEyebrow: 'Pricing',
    pricePrefix: 'From',
    paymentNote: 'One project fee, split into two 50/50 payments.',
    pricingTitle: 'Start with what your business actually needs.',
    plansLink: 'See all plans',
    workEyebrow: 'Selected work',
    workRole: 'Hair Expert & Educator',
    workBody: 'A custom digital presence structured around services, bookings and professional education.',
    workVisit: 'Visit the live site',
    faqTitle: 'Frequently asked questions',
    faqIntro: 'Straightforward answers before we discuss your website project.',
    faq: [
      {
        q: 'How much does a small business website cost?',
        a: 'Snabbily website projects start at €400. The final price depends on the number of pages, content support, integrations and functionality your business needs.',
      },
      {
        q: 'Will my website use a ready-made template?',
        a: 'No. Every Snabbily website is custom designed around the business, its brand, services and customers.',
      },
      {
        q: 'Is SEO included?',
        a: 'We include essential technical and content foundations for SEO, together with Google Search Console. We do not promise specific Google rankings.',
      },
      {
        q: 'Can you connect a booking system?',
        a: 'Yes, when the project needs it. Suitable plans can include your existing booking system or another useful business integration.',
      },
      {
        q: 'Can I track enquiries and bookings?',
        a: 'We set up Google Analytics and basic conversion tracking. Depending on the plan, this can cover enquiries, important calls to action and bookings.',
      },
      {
        q: 'What happens after the website launches?',
        a: 'Optional hosting and support plans are available for security, technical updates and small content changes after launch.',
      },
    ],
    ctaTitle: 'Build the right website for your business.',
    ctaBody: 'Tell us what you offer and what the website needs to achieve. We will suggest the right next step.',
  },
  el: {
    title: 'Κατασκευή Ιστοσελίδων για Επιχειρήσεις | Snabbily',
    description:
      'Επαγγελματική κατασκευή ιστοσελίδων για μικρές επιχειρήσεις και επαγγελματίες στην Ελλάδα. Custom design, mobile, SEO και analytics. Τιμές από €400.',
    h1: 'Κατασκευή ιστοσελίδων για επιχειρήσεις',
    breadcrumb: 'Κατασκευή ιστοσελίδων',
    eyebrow: 'Website design για επιχειρήσεις',
    heroBody: 'Custom σχεδιασμός για ξεκάθαρη παρουσίαση, περισσότερες επικοινωνίες και μετρήσιμες ενέργειες πελατών.',
    heroAlt: 'Custom επαγγελματική ιστοσελίδα του Alexandros Liakos σε προβολή υπολογιστή',
    includedCta: 'Τι περιλαμβάνει',
    outcomesTitle: 'Μια επαγγελματική ιστοσελίδα πρέπει να δουλεύει για την επιχείρησή σας.',
    outcomes: [
      {
        title: 'Να εξηγεί καθαρά τι προσφέρετε',
        body: 'Ο επισκέπτης καταλαβαίνει γρήγορα τις υπηρεσίες σας και αν ταιριάζουν σε αυτό που χρειάζεται.',
      },
      {
        title: 'Να χτίζει εμπιστοσύνη',
        body: 'Συνεπής εικόνα, σωστή δομή και πραγματικά δείγματα δουλειάς παρουσιάζουν την επιχείρησή σας επαγγελματικά.',
      },
      {
        title: 'Να οδηγεί στην επόμενη ενέργεια',
        body: 'Επικοινωνία, αίτημα ή κράτηση βρίσκονται στο σωστό σημείο, χωρίς να μπερδεύουν τον πελάτη.',
      },
      {
        title: 'Να σας δίνει χρήσιμα δεδομένα',
        body: 'Βλέπετε την επισκεψιμότητα και τις βασικές ενέργειες που έχουν αξία για την επιχείρησή σας.',
      },
    ],
    customTitle: 'Σχεδιασμένη για τη δική σας επιχείρηση.',
    customBody:
      'Δεν προσαρμόζουμε απλώς ένα έτοιμο template. Ξεκινάμε από όσα προσφέρετε, ποιον εξυπηρετείτε και τι θέλετε να πετύχετε.',
    nicheLead: 'Για κομμωτήρια, hair stylists και επιχειρήσεις ομορφιάς υπάρχει και η εξειδικευμένη σελίδα μας για',
    nicheLink: 'ιστοσελίδες Hair & Beauty',
    audienceTitle: 'Για ποιους είναι',
    audiences: [
      'Μικρές επιχειρήσεις υπηρεσιών',
      'Ανεξάρτητοι επαγγελματίες',
      'Σύμβουλοι και εκπαιδευτές',
      'Επιχειρήσεις με ραντεβού ή αιτήματα',
    ],
    includedId: 'perilamvanei',
    includedTitle: 'Τι περιλαμβάνει η κατασκευή website',
    includedIntro: 'Οι ακριβείς ανάγκες αλλάζουν ανά project. Οι σωστές βάσεις όμως παραμένουν ίδιες.',
    includedGroups: [
      {
        title: 'Σχεδιασμός και περιεχόμενο',
        body: 'Custom σχεδιασμός γύρω από το brand, τις υπηρεσίες και τους πελάτες σας, με υποστήριξη στη δομή και τα κείμενα.',
      },
      {
        title: 'Mobile και επικοινωνία',
        body: 'Βελτιστοποίηση για κινητά, φόρμες επικοινωνίας και σύνδεση κρατήσεων ή άλλων εργαλείων στα κατάλληλα πλάνα.',
      },
      {
        title: 'SEO και μέτρηση',
        body: 'Βασικές ρυθμίσεις SEO, Google Analytics, Google Search Console και tracking σημαντικών ενεργειών.',
      },
    ],
    processTitle: 'Από την πρώτη συζήτηση μέχρι το launch',
    process: [
      {
        title: 'Καταλαβαίνουμε την επιχείρησή σας',
        body: 'Συζητάμε τις υπηρεσίες, το κοινό και την ενέργεια που θέλετε να κάνει ένας πιθανός πελάτης.',
      },
      {
        title: 'Οργανώνουμε τη σωστή διαδρομή',
        body: 'Σχεδιάζουμε τη δομή, τα μηνύματα και τα σημεία επικοινωνίας πριν περάσουμε στην τελική εμφάνιση.',
      },
      {
        title: 'Σχεδιάζουμε και υλοποιούμε',
        body: 'Δημιουργούμε το site αποκλειστικά για την επιχείρησή σας και το προσαρμόζουμε σε κάθε οθόνη.',
      },
      {
        title: 'Ελέγχουμε και δημοσιεύουμε',
        body: 'Κάνουμε τις συμφωνημένες διορθώσεις, συνδέουμε τα απαραίτητα εργαλεία και προχωράμε στο launch.',
      },
    ],
    pricingEyebrow: 'Τιμές',
    pricePrefix: 'Από',
    paymentNote: 'Εφάπαξ κόστος project, σε δύο δόσεις 50/50.',
    pricingTitle: 'Ξεκινήστε με όσα χρειάζεται πραγματικά η επιχείρησή σας.',
    plansLink: 'Δείτε όλα τα πλάνα',
    workEyebrow: 'Επιλεγμένο έργο',
    workRole: 'Ειδικός Μαλλιών & Εκπαιδευτής',
    workBody: 'Μια custom ψηφιακή παρουσία οργανωμένη γύρω από τις υπηρεσίες, τις κρατήσεις και την επαγγελματική εκπαίδευση.',
    workVisit: 'Δείτε το live site',
    faqTitle: 'Συχνές ερωτήσεις',
    faqIntro: 'Πρακτικές απαντήσεις πριν ξεκινήσουμε τη συζήτηση για το project σας.',
    faq: [
      {
        q: 'Πόσο κοστίζει η κατασκευή μιας ιστοσελίδας;',
        a: 'Τα project της Snabbily ξεκινούν από €400. Η τελική τιμή εξαρτάται από τις σελίδες, το περιεχόμενο, τις ενσωματώσεις και τις λειτουργίες που χρειάζεται η επιχείρησή σας.',
      },
      {
        q: 'Η ιστοσελίδα θα είναι έτοιμο template;',
        a: 'Όχι. Κάθε ιστοσελίδα σχεδιάζεται custom γύρω από την επιχείρηση, το brand, τις υπηρεσίες και τους πελάτες της.',
      },
      {
        q: 'Περιλαμβάνεται SEO;',
        a: 'Περιλαμβάνονται οι βασικές τεχνικές και περιεχομενικές βάσεις SEO, μαζί με Google Search Console. Δεν υποσχόμαστε συγκεκριμένη θέση στη Google.',
      },
      {
        q: 'Μπορεί να συνδεθεί σύστημα κρατήσεων;',
        a: 'Ναι, όταν το project το χρειάζεται. Στα κατάλληλα πλάνα μπορούμε να συνδέσουμε το υπάρχον σύστημα κρατήσεων ή άλλη χρήσιμη υπηρεσία.',
      },
      {
        q: 'Θα μπορώ να μετρώ επικοινωνίες και κρατήσεις;',
        a: 'Ρυθμίζουμε Google Analytics και βασικό conversion tracking. Ανάλογα με το πλάνο, μπορούμε να μετρήσουμε αιτήματα, CTA και κρατήσεις.',
      },
      {
        q: 'Τι γίνεται μετά τη δημοσίευση;',
        a: 'Μπορείτε να επιλέξετε προαιρετικό πλάνο hosting και υποστήριξης για ασφάλεια, ενημερώσεις και μικρές αλλαγές περιεχομένου.',
      },
    ],
    ctaTitle: 'Ας φτιάξουμε την ιστοσελίδα που χρειάζεται η επιχείρησή σας.',
    ctaBody: 'Πείτε μας τι προσφέρετε και τι θέλετε να πετύχετε. Θα σας προτείνουμε το σωστό επόμενο βήμα.',
  },
} as const;

const rise = (delay: number): CSSProperties => ({ ['--rise-delay' as string]: `${delay}ms` });

export default function WebsiteDesign() {
  const { locale, t, path } = useI18n();
  const copy = PAGE_COPY[locale];
  const startingPlan = t.pricing.plans[0];
  const home = path('home');
  const canonicalPath = pagePath('websiteDesign', locale);
  const canonical = `${SITE_URL}${canonicalPath}`;
  const homeUrl = `${SITE_URL}${home === '/' ? '' : home}`;

  return (
    <>
      <Seo
        locale={locale}
        pageKey="websiteDesign"
        title={copy.title}
        description={copy.description}
        jsonLd={[
          serviceLd(copy.h1, copy.description, canonical),
          breadcrumbLd([
            { name: 'Snabbily', url: homeUrl },
            { name: copy.breadcrumb, url: canonical },
          ]),
        ]}
      />

      <section className="shell pb-16 pt-10 md:pb-24 md:pt-16">
        <nav className="hero-rise mb-8 flex items-center gap-2 text-sm text-muted" aria-label="Breadcrumb" style={rise(0)}>
          <Link to={home} className="hover:text-ink">Snabbily</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{copy.breadcrumb}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
          <div>
            <p className="hero-rise eyebrow mb-6" style={rise(60)}>{copy.eyebrow}</p>
            <h1 className="hero-rise max-w-[18ch] text-[length:clamp(2.65rem,4.1vw,3.45rem)] leading-[1.02] text-ink [text-wrap:pretty]" style={rise(120)}>{copy.h1}</h1>
            <p className="hero-rise mt-6 max-w-xl text-lead leading-relaxed text-ink-soft" style={rise(200)}>
              {copy.heroBody}
            </p>
            <div className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row" style={rise(280)}>
              <CtaLink to={path('start')} size="lg">
                {t.cta.startProject}
                <ArrowRight />
              </CtaLink>
              <CtaLink href={`#${copy.includedId}`} variant="secondary" size="lg">{copy.includedCta}</CtaLink>
            </div>
          </div>

          <div className="hero-rise min-w-0" style={rise(220)}>
            <BrowserFrame url="alexandrosliakos.lovable.app" contentClassName="aspect-[4/3] overflow-hidden bg-paper">
              <img
                src="/work/alexandros-home.webp"
                alt={copy.heroAlt}
                width="1280"
                height="2018"
                className="h-full w-full object-cover object-top"
              />
            </BrowserFrame>
          </div>
        </div>
      </section>

      <section className="bg-bone-deep/45 py-20 md:py-28">
        <div className="shell">
          <Reveal as="h2" className="max-w-3xl text-h2 text-ink">{copy.outcomesTitle}</Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {copy.outcomes.map((item, index) => (
              <Reveal key={item.title} delay={index * 60} className="border-t border-line-strong pt-6">
                <h3 className="text-h3 text-ink">{item.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="text-h2 text-ink">{copy.customTitle}</h2>
            <p className="mt-6 max-w-lg text-lead leading-relaxed text-ink-soft">
              {copy.customBody}
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
              {copy.nicheLead}{' '}
              <Link to={path('hairBeauty')} className="link-underline font-medium text-ink">{copy.nicheLink}</Link>.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-h3 text-ink">{copy.audienceTitle}</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {copy.audiences.map((audience) => (
                <li key={audience} className="rounded-xl border border-line bg-paper px-5 py-5 font-medium text-ink">{audience}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id={copy.includedId} className="scroll-mt-24 py-20 md:py-28">
        <div className="shell">
          <Reveal as="h2" className="max-w-2xl text-h2 text-ink">{copy.includedTitle}</Reveal>
          <Reveal as="p" delay={60} className="mt-5 max-w-2xl text-lead leading-relaxed text-ink-soft">
            {copy.includedIntro}
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="rounded-2xl bg-ink p-8 text-bone md:p-10 lg:row-span-2">
              <h3 className="text-h2 text-bone">{copy.includedGroups[0].title}</h3>
              <p className="mt-5 max-w-lg text-lead leading-relaxed text-bone/75">{copy.includedGroups[0].body}</p>
            </Reveal>
            {copy.includedGroups.slice(1).map((group, index) => (
              <Reveal key={group.title} delay={(index + 1) * 70} className="rounded-2xl border border-line-strong bg-paper p-7 md:p-8">
                <h3 className="text-h3 text-ink">{group.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{group.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone-deep/45 py-20 md:py-28">
        <div className="shell">
          <Reveal as="h2" className="max-w-2xl text-h2 text-ink">{copy.processTitle}</Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {copy.process.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="border-t-2 border-ink pt-5">
                <h3 className="text-h3 text-ink">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-soft">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-10 rounded-2xl border border-line-strong bg-paper p-7 md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-10 lg:p-14">
          <Reveal>
            <p className="eyebrow">{copy.pricingEyebrow}</p>
            <p className="mt-5 font-serif text-6xl leading-none text-ink">{copy.pricePrefix} {startingPlan.price}</p>
            <p className="mt-3 text-sm text-muted">{copy.paymentNote}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-h2 text-ink">{copy.pricingTitle}</h2>
            <p className="mt-5 max-w-xl text-lead leading-relaxed text-ink-soft">{startingPlan.tagline}</p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CtaLink to={path('start')} size="lg">{t.cta.startProject}<ArrowRight /></CtaLink>
              <Link to={`${home}#pricing`} className="link-underline w-fit font-medium text-ink">{copy.plansLink}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16">
          <Reveal>
            <p className="eyebrow">{copy.workEyebrow}</p>
            <h2 className="mt-6 text-h2 text-ink">Alexandros Liakos</h2>
            <p className="mt-3 pb-1 font-serif text-h3 italic leading-[1.15] text-coral">{copy.workRole}</p>
            <p className="mt-6 max-w-lg text-lead leading-relaxed text-ink-soft">
              {copy.workBody}
            </p>
            <a href={ALEXANDROS_URL} target="_blank" rel="noopener noreferrer" className="link-underline mt-7 inline-flex items-center gap-2 font-medium text-ink">
              {copy.workVisit}
              <ArrowRight />
            </a>
          </Reveal>
          <AlexandrosShowcase />
        </div>
      </section>

      <section className="bg-bone-deep/45 py-20 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <h2 className="text-h2 text-ink">{copy.faqTitle}</h2>
            <p className="mt-5 max-w-sm text-ink-soft">{copy.faqIntro}</p>
          </Reveal>
          <Reveal className="border-b border-line-strong">
            {copy.faq.map((item) => (
              <details key={item.q} className="group border-t border-line-strong">
                <summary className="cursor-pointer list-none py-6 font-serif text-[1.2rem] leading-snug text-ink marker:hidden md:text-[1.35rem]">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span aria-hidden="true" className="text-coral transition-transform duration-300 group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="shell pb-24 pt-20 md:pb-32 md:pt-28">
        <Reveal className="rounded-2xl bg-ink px-7 py-14 text-center md:px-14 md:py-20">
          <h2 className="mx-auto max-w-2xl text-h2 text-bone">{copy.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lead leading-relaxed text-bone/75">{copy.ctaBody}</p>
          <div className="mt-8">
            <CtaLink to={path('start')} variant="invert" size="lg">{t.cta.startProject}<ArrowRight /></CtaLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
