import { SITE_URL, CONTACT_EMAIL } from './config';

/** Truthful Organization data, no ratings, reviews or unverified claims. */
export function organizationLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Snabbily',
    url: SITE_URL,
    email: CONTACT_EMAIL,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      'Snabbily builds modern websites for service businesses in Greece, designed to generate bookings, enquiries and customers.',
    areaServed: 'GR',
  };
}

export function websiteLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Snabbily',
    url: SITE_URL,
    inLanguage: ['en', 'el'],
  };
}

export function serviceLd(name: string, description: string, url: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website design and development',
    name,
    description,
    url,
    provider: { '@type': 'Organization', name: 'Snabbily', url: SITE_URL },
    areaServed: { '@type': 'Country', name: 'Greece' },
  };
}

/** FAQ structured data. Must mirror the FAQ questions/answers visible on the page. */
export function faqPageLd(items: { q: string; a: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
