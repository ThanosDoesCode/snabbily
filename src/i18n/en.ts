export const en = {
  htmlLang: 'en',
  dir: 'ltr',

  brand: 'Snabbily',

  nav: {
    work: 'Work',
    services: 'Services',
    pricing: 'Pricing',
    contact: 'Contact',
    startProject: 'Start a project',
    menu: 'Menu',
    close: 'Close',
  },

  cta: {
    startProject: 'Start a project',
    freeReview: 'Get a free website review',
    requestQuote: 'Request a quote',
    bookCall: 'Book a call',
    back: 'Back',
    next: 'Continue',
    sendRequest: 'Send my request',
    getReview: 'Get my free review',
    retry: 'Try again',
    skip: 'Skip for now',
  },

  langSwitch: {
    label: 'Language',
    en: 'EN',
    el: 'ΕΛ',
    toGreek: 'Διαβάστε στα Ελληνικά',
    toEnglish: 'Read in English',
  },

  hero: {
    headlineLead: 'Your website should bring you ',
    headlineEmphasis: 'business',
    headlineTail: '.',
    supporting:
      'We build modern websites for service businesses designed to turn visitors into bookings, enquiries and customers. From design and copy to Google setup and integrations, we handle the entire process.',
    supportingLineA: 'Google Maps helps customers find you.',
    supportingLineB: 'A website helps customers choose you.',
  },

  work: {
    eyebrow: 'Selected work',
    index: '01',
    projectName: 'Alexandros Liakos',
    role: 'Hair Expert & Educator',
    capabilities: ['Website', 'Copywriting', 'SEO', 'Booking', 'Education'],
    description:
      'A complete digital presence designed around services, bookings and professional education.',
    visit: 'Visit the live site',
    previewAlt: 'Preview of the Alexandros Liakos website',
    metricsNote: 'Verified performance metrics will be added here.',
  },

  capabilities: {
    eyebrow: 'What we handle',
    index: '02',
    title: 'Three things we take off your plate.',
    items: [
      {
        no: '01',
        title: 'Website design & build',
        blurb: 'A professional website built around your business, brand and customers.',
        points: [
          'Modern design tailored to the business',
          'Mobile-first responsive design',
          'Copywriting support',
          'Performance-focused implementation',
        ],
      },
      {
        no: '02',
        title: 'Visibility & conversion',
        blurb: 'Make it easy for people to find you, trust you and take action.',
        points: [
          'SEO foundation',
          'Google setup',
          'Booking and enquiry integrations',
          'Analytics and conversion tracking',
        ],
      },
      {
        no: '03',
        title: 'Hosting & ongoing care',
        blurb: 'We keep your website online, secure and up to date after launch.',
        points: [
          'Reliable hosting',
          'Security and technical updates',
          'Backups',
          'Small content changes and personal support',
        ],
      },
    ],
  },

  why: {
    eyebrow: 'Why a website',
    index: '03',
    lead: 'Social media gets attention. Your website turns that attention into trust.',
    items: [
      {
        title: 'Professional presence',
        blurb: 'Show your services, work and brand properly.',
      },
      {
        title: 'Trust & credibility',
        blurb: 'Give customers confidence before they contact or book.',
      },
      {
        title: 'One destination',
        blurb: 'One place for your services, bookings, contact details and content.',
      },
      {
        title: 'Built for action',
        blurb: 'Guide visitors toward bookings, enquiries and calls.',
      },
    ],
  },

  niche: {
    eyebrow: 'Areas of focus',
    index: '04',
    headline: 'Built for businesses where reputation matters.',
    body: 'Snabbily works with service businesses of every kind. Right now we work especially well with hair and beauty professionals, where presentation, trust and easy booking make the difference.',
    focusLabel: 'Hair & Beauty',
    audience: ['Salons', 'Hairstylists', 'Educators', 'Barbers', 'Beauty professionals'],
    cta: 'Explore hair & beauty',
  },

  booking: {
    eyebrow: 'Booking',
    index: '05',
    heading: 'Keep the booking system you already use.',
    copy: 'Already use Treatwell, Fresha or another booking platform? We’ll connect your existing booking journey directly to your website.',
    benefits: [
      'Keep your existing workflow',
      'No new system to learn',
      'Included with Professional',
    ],
  },

  process: {
    eyebrow: 'How it works',
    index: '06',
    title: 'A calm, four-step process.',
    steps: [
      {
        no: '01',
        title: 'Understand',
        blurb: 'Tell us about your business and what you want the website to achieve.',
      },
      {
        no: '02',
        title: 'Create',
        blurb: 'We handle structure, design, copy and technical setup.',
      },
      {
        no: '03',
        title: 'Review',
        blurb: 'You review the website and we refine it together.',
      },
      {
        no: '04',
        title: 'Launch',
        blurb: 'We launch, connect your analytics and keep everything running.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    index: '07',
    title: 'Clear pricing. No surprises.',
    subtitle: 'One project fee, split 50/50. Optional yearly care after launch.',
    mostPopular: 'Most popular',
    fromLabel: 'from',
    plans: [
      {
        id: 'essential',
        name: 'Essential',
        price: '€600',
        tagline: 'For businesses that need a professional, modern website and a strong online presence.',
        features: [
          'Up to 4 core pages',
          'Custom modern design',
          'Mobile-friendly website',
          'Basic copywriting support',
          'Contact form',
          'Basic SEO setup',
          'Google Analytics setup',
          'Google Search Console setup',
        ],
        cta: 'Start a project',
        action: 'start' as const,
        popular: false,
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '€900',
        tagline: 'For businesses that want their website to help generate bookings, enquiries and new customers.',
        badge: 'Launch bonus: Google Business Profile setup included',
        includesPrevious: 'Everything in Essential, plus:',
        features: [
          'More pages and sections',
          'Full copywriting support',
          'Booking system integration',
          'Conversion tracking',
          'Stronger SEO setup',
          'Service pages structured around enquiries',
          'Priority support during launch',
        ],
        cta: 'Start a project',
        action: 'start' as const,
        popular: true,
      },
      {
        id: 'growth',
        name: 'Growth',
        price: '€1,300+',
        tagline: 'For businesses with more complex requirements or a bigger growth plan.',
        includesPrevious: 'Everything in Professional, plus:',
        features: [
          'Landing pages and funnels',
          'Course or training sections',
          'Advanced integrations',
          'Custom workflows',
          'More advanced lead and booking structure',
          'Deeper SEO architecture',
          'Custom functionality depending on the project',
        ],
        cta: 'Request a quote',
        action: 'quote' as const,
        popular: false,
      },
    ],
    hosting: {
      title: 'Hosting & support',
      price: '€300',
      per: '/year',
      lead: 'Optional after launch. Keeps your site online and looked after.',
      features: [
        'Hosting',
        'SSL and security',
        'Backups',
        'Technical updates',
        'Small content changes',
        'Personal support',
      ],
      note: 'New pages, major redesigns, advanced integrations and major functionality are quoted separately.',
    },
    payment: {
      title: 'How payment works',
      points: [
        '50% to start, 50% when the website is approved and ready to launch.',
        'Clear scope agreed before any work begins.',
        'No surprise charges.',
        'You keep ownership of your domain and content.',
        'Personal support after launch.',
      ],
    },
  },

  review: {
    eyebrow: 'Free website review',
    index: '09',
    heading: 'Not ready for a project? Start with a free review.',
    copy: 'We’ll show you 3 practical improvements that could make your website clearer, faster and more effective at generating bookings or enquiries.',
    cta: 'Get a free website review',
  },

  contact: {
    eyebrow: 'Get in touch',
    index: '10',
    heading: 'Let’s make your website work for you.',
    copy: 'Start a project when you’re ready, or reach out first. Whatever suits you.',
    primaryLabel: 'Start a project',
    secondaryLabel: 'Get a free website review',
    alternativeLabel: 'Or reach out directly',
    emailLabel: 'Email',
    phoneLabel: 'Phone / WhatsApp',
    bookLabel: 'Book a 15-minute call',
  },

  faq: {
    eyebrow: 'FAQ',
    index: '08',
    title: 'The questions we get most.',
    items: [
      {
        q: 'How much does a website for a small business cost in Greece?',
        a: 'Our packages currently start from €600. The final price depends on the number of pages, the features you need and any integrations, so we agree a clear scope before we begin.',
      },
      {
        q: 'How long does it take to build a professional website?',
        a: 'A straightforward website can usually be ready fairly quickly. Larger projects take longer, depending on the scope, the content, any integrations and how quickly we get your feedback.',
      },
      {
        q: 'Do I need to write the text for my website myself?',
        a: 'No. You do not need to arrive with finished text. We can help structure and write the content of your website, based on your services and your business.',
      },
      {
        q: 'Can you connect Treatwell or Fresha to my website?',
        a: 'Yes. If you already use Treatwell, Fresha or another system, we connect it to your website, so you keep managing bookings exactly as you do now.',
      },
      {
        q: 'Do I need a website if I already have Instagram and Google Maps?',
        a: 'They work together. Social media helps people discover you and Google Maps helps them find you. Your website gives them one professional place to understand your services, trust you and take the next step.',
      },
      {
        q: 'Will I own the website after it is finished?',
        a: 'Yes. You keep ownership of your domain, your content and your website. It is yours.',
      },
      {
        q: 'Can you improve my existing website instead of building a new one?',
        a: 'Often, yes. We can review your current website and tell you honestly whether improving it or rebuilding it makes more sense for your goals.',
      },
      {
        q: 'Can you help my business appear better on Google?',
        a: 'We set up strong SEO foundations, Google Search Console and your Google setup so people can find you. We cannot promise specific rankings, but we give your site a solid, honest start.',
      },
    ],
  },

  footer: {
    tagline: 'You focus on your business. We handle the website.',
    servicesTitle: 'Services',
    companyTitle: 'Snabbily',
    legalTitle: 'Legal',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    cookieSettings: 'Cookie settings',
    rights: 'All rights reserved.',
    builtNote: 'Websites for service businesses in Greece.',
  },

  consent: {
    title: 'Cookies',
    body: 'We use essential cookies to run this site. With your consent we also use analytics cookies to understand how the site is used. You can change your mind at any time.',
    accept: 'Accept analytics',
    decline: 'Essential only',
    more: 'Cookie Policy',
  },

  // ---- Conversion flows -------------------------------------------------
  startFlow: {
    metaTitle: 'Start a project',
    metaDescription: 'Tell us about your business and what you need. A few quick questions, no long forms.',
    kicker: 'Start a project',
    heading: 'A few quick questions.',
    subheading: 'No long forms, no account needed. This takes about a minute.',
    stepLabel: 'Step',
    ofLabel: 'of',
    optional: 'optional',
    steps: [
      {
        key: 'need',
        question: 'What do you need help with?',
        type: 'single',
        options: ['A new website', 'Improve my current website', 'I’m not sure yet'],
      },
      {
        key: 'business',
        question: 'What type of business do you have?',
        type: 'single',
        options: ['Hair salon', 'Hairstylist', 'Barber', 'Beauty business', 'Other'],
      },
      {
        key: 'hasWebsite',
        question: 'Do you currently have a website?',
        type: 'single',
        options: ['Yes', 'No'],
        urlPrompt: 'What’s the address?',
        urlPlaceholder: 'yourwebsite.com',
      },
      {
        key: 'goals',
        question: 'What would you like your website to help you with?',
        type: 'multi',
        hint: 'Choose as many as you like.',
        options: [
          'Get more bookings',
          'Get more enquiries',
          'Look more professional',
          'Be found more easily on Google',
          'Promote my services',
          'Something else',
        ],
      },
      {
        key: 'timing',
        question: 'When would you ideally like to start?',
        type: 'single',
        options: ['As soon as possible', 'Within a month', '1–3 months', 'Just exploring'],
      },
      {
        key: 'contact',
        question: 'Where should I contact you?',
        type: 'contact',
        options: [],
      },
    ],
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
      phonePlaceholder: '+30 …',
    },
    validation: {
      required: 'Please choose an option to continue.',
      name: 'Please add your name.',
      email: 'Please add a valid email address.',
      url: 'Please enter a valid website address.',
    },
    submitting: 'Sending…',
    error:
      'Something went wrong sending your request. Your answers are saved. Please try again.',
    notConfigured:
      'The enquiry form isn’t connected yet. Please email snabbily@gmail.com and we’ll take it from there.',
    successTitle: 'Thanks, {name}.',
    successBody: 'I’ll review your answers and get back to you shortly.',
    successBook: 'Want to talk sooner? Book a 15-minute call.',
    backHome: 'Back to homepage',
  },

  reviewFlow: {
    metaTitle: 'Free website review',
    metaDescription:
      'Get 3 practical improvements to make your website clearer, faster and better at generating bookings or enquiries.',
    kicker: 'Free website review',
    heading: 'Let’s take a look at your website.',
    subheading: 'Three quick questions and I’ll send you three practical improvements.',
    stepLabel: 'Step',
    ofLabel: 'of',
    steps: [
      {
        key: 'url',
        question: 'What’s your current website?',
        type: 'url',
        options: [],
        placeholder: 'yourwebsite.com',
      },
      {
        key: 'improve',
        question: 'What would you most like to improve?',
        type: 'single',
        options: [
          'More bookings',
          'More enquiries',
          'Look more professional',
          'Google visibility',
          'I’m not sure',
        ],
      },
      {
        key: 'contact',
        question: 'Where should I send your review?',
        type: 'contact',
        options: [],
      },
    ],
    fields: {
      name: 'Name',
      email: 'Email',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@example.com',
    },
    validation: {
      required: 'Please choose an option to continue.',
      name: 'Please add your name.',
      email: 'Please add a valid email address.',
      url: 'Please enter a valid website address.',
    },
    submitting: 'Sending…',
    error:
      'Something went wrong sending your request. Your answers are saved. Please try again.',
    notConfigured:
      'The review form isn’t connected yet. Please email snabbily@gmail.com and we’ll take it from there.',
    successTitle: 'Got it, thank you.',
    successBody: 'Your review request has been received. I’ll be in touch by email soon.',
    backHome: 'Back to homepage',
  },

  notFound: {
    title: 'Page not found',
    body: 'The page you’re looking for doesn’t exist or has moved.',
    cta: 'Back to homepage',
  },

  // ---- SEO metadata -----------------------------------------------------
  meta: {
    home: {
      title: 'Website Design for Service Businesses in Greece | Snabbily',
      description:
        'Snabbily builds modern websites for service businesses in Greece, designed to generate bookings, enquiries and customers. Website design, SEO setup, integrations and ongoing care.',
    },
    hairBeauty: {
      title: 'Websites for Hair Salons, Barbers & Beauty Businesses in Greece | Snabbily',
      description:
        'Modern websites built for hair and beauty professionals in Greece: salons, hairstylists, barbers and educators. Service presentation, galleries, booking integration and Google visibility.',
    },
    privacy: {
      title: 'Privacy Policy | Snabbily',
      description: 'How Snabbily collects, uses and protects your personal data.',
    },
    cookies: {
      title: 'Cookie Policy | Snabbily',
      description: 'How Snabbily uses cookies and how you can control them.',
    },
  },

  // ---- Hair & Beauty landing page --------------------------------------
  hairBeauty: {
    breadcrumb: 'Hair & Beauty',
    eyebrow: 'Hair & Beauty',
    heading: 'Websites built for hair professionals.',
    intro:
      'Your work is visual, personal and built on reputation. Your website should be too. We build modern websites for hair and beauty businesses in Greece, designed around your services, your galleries and easy booking.',
    primaryCta: 'Start a project',
    secondaryCta: 'Get a free website review',
    audienceTitle: 'Who we build for',
    audience: [
      { title: 'Hair salons', blurb: 'Present your services, team and space with a site that matches your standards.' },
      { title: 'Hairstylists', blurb: 'A personal, professional home for your work, prices and bookings.' },
      { title: 'Barbers', blurb: 'A clean, fast website that makes booking a cut effortless.' },
      { title: 'Hair educators', blurb: 'Showcase courses and education alongside your services.' },
      { title: 'Beauty professionals', blurb: 'For beauty businesses where presentation and trust matter.' },
    ],
    featuresTitle: 'What your website does for you',
    features: [
      {
        title: 'Professional online presence',
        blurb: 'A website that reflects the quality of your work and your brand.',
      },
      {
        title: 'Clear service presentation',
        blurb: 'Show exactly what you offer, so clients arrive already knowing what they want.',
      },
      {
        title: 'Galleries that sell',
        blurb: 'Let your work speak: organised, fast-loading galleries built for mobile.',
      },
      {
        title: 'Booking integration',
        blurb: 'Connect Treatwell, Fresha or your current system directly to your site.',
      },
      {
        title: 'Google visibility foundation',
        blurb: 'Proper SEO setup and Google configuration so people can find you.',
      },
      {
        title: 'Made for mobile',
        blurb: 'Most clients find you on their phone. Your site is built for them first.',
      },
      {
        title: 'More enquiries',
        blurb: 'Clear calls to action guide visitors toward booking or getting in touch.',
      },
      {
        title: 'Ongoing website care',
        blurb: 'We keep everything online, secure and up to date after launch.',
      },
    ],
    bookingTitle: 'Keep the booking system you already use',
    bookingCopy:
      'Treatwell, Fresha or another platform: we connect your existing booking journey to your website, so there’s no new system to learn.',
    proofTitle: 'Selected work',
    proofName: 'Alexandros Liakos',
    proofRole: 'Hair Expert & Educator',
    proofBody:
      'A complete digital presence for a hair expert and educator: services, bookings and professional education in one place.',
    proofVisit: 'Visit the live site',
    ctaTitle: 'Ready when you are.',
    ctaBody: 'Start a project, or get a free website review first.',
  },

  // ---- Legal (clearly marked as needing review) ------------------------
  legal: {
    lastUpdatedLabel: 'Last updated',
    lastUpdated: 'August 2026',
    privacy: {
      title: 'Privacy Policy',
      intro:
        'This Privacy Policy explains how Snabbily collects, uses and protects personal data when you visit snabbily.com, submit a form or contact us.',
      sections: [
        {
          h: 'Who we are',
          blocks: [
            'Snabbily provides website design and development, SEO, integrations, hosting and technical support.',
            'For any question about the protection of personal data, you can contact us at snabbily@gmail.com.',
            'Once Snabbily’s business registration in Sweden is complete, the full details of the data controller will be added here.',
          ],
        },
        {
          h: 'What data we collect',
          blocks: [
            'When you complete an enquiry form or request a free website review, we may collect:',
            [
              'name',
              'email address',
              'optionally a phone or WhatsApp number',
              'your website address',
              'information about your business and your needs',
              'the answers you give in our forms',
            ],
            'If you give your consent for analytics, we may also collect technical and statistical data about how the website is used.',
          ],
        },
        {
          h: 'Why we use your data',
          blocks: [
            'We use your personal data to:',
            [
              'respond to your request',
              'prepare a free website review',
              'contact you about a possible project',
              'provide services agreed with you',
              'improve how the website works and the experience of using it, when you have consented to analytics',
            ],
            'We do not sell your personal data.',
          ],
        },
        {
          h: 'Legal basis for processing',
          blocks: [
            'Depending on the situation, processing is based on:',
            [
              'your consent, for example for analytics cookies',
              'taking steps at your request before entering into a contract',
              'the performance of a contract, once you become a client',
              'legal obligations that may apply',
              'a legitimate business interest, where this is permitted and your rights do not override it',
            ],
          ],
        },
        {
          h: 'Forms and Formspree',
          blocks: [
            'The website’s forms are sent through Formspree, which acts as a technical infrastructure provider for receiving requests.',
            'The data you enter in the form is transmitted to Formspree and then forwarded to Snabbily.',
            'Formspree’s processing of the data is also governed by its own terms and privacy policies.',
          ],
        },
        {
          h: 'Google Analytics',
          blocks: [
            'With your consent, we use Google Analytics 4 to understand how the website is used.',
            'We do not send your name, email, phone number or the answers you submit in the forms to Google Analytics.',
            'Google Analytics may use cookies and technical identifiers to measure use of the website.',
            'Analytics is only enabled after the required consent is given.',
            'You can change or withdraw your consent through the cookie settings.',
          ],
        },
        {
          h: 'Cookies',
          blocks: [
            'The website uses essential cookies for basic functionality and, only with your consent, cookies or similar technologies for analytics.',
            'You can find more information in the Cookie Policy.',
          ],
        },
        {
          h: 'Who has access to the data',
          blocks: [
            'Your data may be processed by service providers that are necessary for running the website and communicating with you, such as:',
            ['Formspree', 'Google Analytics', 'hosting and infrastructure provider', 'email provider'],
            'We only use the data that is necessary for each purpose.',
          ],
        },
        {
          h: 'Transfers outside the EEA',
          blocks: [
            'Some service providers may process data outside the European Economic Area.',
            'Where required, such transfers must rely on appropriate safeguards under the GDPR, such as adequacy decisions or approved contractual clauses.',
          ],
        },
        {
          h: 'How long we keep the data',
          blocks: [
            'We keep the details of requests only for as long as necessary to respond, to discuss a possible collaboration or to provide agreed services.',
            'Data that must be kept for tax, accounting or other legal reasons may be retained for longer, in line with the applicable obligations.',
          ],
        },
        {
          h: 'Your rights',
          blocks: [
            'Under the GDPR, and depending on the situation, you have the right to:',
            [
              'access to your personal data',
              'rectification of inaccurate data',
              'erasure',
              'restriction of processing',
              'objection to processing',
              'data portability',
              'withdrawal of consent at any time, where processing is based on consent',
              'lodging a complaint with the competent data protection authority',
            ],
            'To exercise any of these rights, contact us at snabbily@gmail.com.',
          ],
        },
        {
          h: 'Changes to this Privacy Policy',
          blocks: [
            'This Privacy Policy may be updated when our services, the tools we use or legal requirements change.',
            'The date of the last update is shown at the top of the page.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      intro:
        'This Cookie Policy explains how snabbily.com uses cookies and similar technologies.',
      sections: [
        {
          h: 'What cookies are',
          blocks: [
            'Cookies are small files stored on your device when you visit a website. They can be used for basic functionality, to store your preferences or to measure how the website is used.',
          ],
        },
        {
          h: 'Essential cookies',
          blocks: [
            'Some cookies or similar technologies are necessary for the basic operation of the site and to remember your choice about cookies.',
            'These are always active and are not used for analytics or advertising purposes.',
          ],
        },
        {
          h: 'Analytics cookies',
          blocks: [
            'With your consent, we use Google Analytics 4 to understand how the website is used.',
            'Analytics is only enabled after you choose to accept it through the cookie banner.',
            'Cookies or other technical identifiers may be used to measure visits, page views and general usage patterns.',
            'We do not send your name, email, phone number or the answers you submit in the forms to Google Analytics.',
          ],
        },
        {
          h: 'Managing your choices',
          blocks: [
            'When you visit the site, you can accept or decline analytics cookies through the relevant banner.',
            'You can also change or withdraw your consent at any time by reopening Cookie settings from the site footer.',
            'You can also delete cookies through your browser settings.',
          ],
        },
        {
          h: 'Third-party cookies',
          blocks: [
            'When you have consented to analytics, cookies or similar technologies from Google may be used to provide the Google Analytics service.',
            'The use of these technologies is also governed by Google’s policies.',
          ],
        },
        {
          h: 'Changes to this Cookie Policy',
          blocks: [
            'This Cookie Policy may be updated when the tools we use, the way the site works or the relevant legal requirements change.',
            'The date of the last update is shown at the top of the page.',
          ],
        },
      ],
    },
  },
};

export type Dictionary = typeof en;
