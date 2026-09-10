# Snabbily

Snabbily is a bilingual web design service for small businesses in Greece, with an initial focus on hair and beauty businesses.

This repository contains the production marketing website for Snabbily. It is built with React, TypeScript, Vite, static prerendering, and a mobile-first responsive design.

[View live website](https://snabbily.com)

## Overview

The Snabbily website is designed to convert visitors into enquiries while remaining fast, accessible, and search-engine friendly.

The site is fully bilingual in English and Greek, with static prerendering for SEO, fast first paint, and strong Core Web Vitals.

It uses a deliberately lightweight architecture with no CMS, database, or custom backend. Enquiry forms submit directly through Formspree.

## Stack

- Vite 6
- React 18
- TypeScript
- Tailwind CSS v4
- vite-react-ssg
- react-router-dom
- Formspree
- Vercel

## Key Features

- Fully bilingual English and Greek experience
- Route-based internationalisation
- Static prerendering of every route
- SEO-friendly metadata and canonical URLs
- hreflang alternates
- Structured data
- Responsive mobile-first design
- Lead-generation forms
- Cal.com booking integration
- Optional GA4 analytics
- Cookie consent handling
- Accessible forms and navigation
- Reduced-motion support
- Open Graph metadata
- Sitemap and robots configuration
- PWA-style manifest and generated icons

## Architecture

The website is intentionally built without a CMS, database, or custom backend.

Content is stored directly inside typed locale dictionaries and the React application.

Forms submit to Formspree, booking links can connect to Cal.com, and analytics are loaded only when configured and permitted through consent.

Static prerendering produces real HTML for every public route, improving search indexing and initial rendering performance.

## Getting Started

### Requirements

- Node.js
- npm

Clone the repository:

```bash
git clone https://github.com/ThanosDoesCode/snabbily.git
cd snabbily
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The local development server runs at:

```text
http://localhost:5173
```

## Available Commands

Run a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run typecheck
```

Regenerate Open Graph and application icon assets:

```bash
npm run gen:assets
```

## Environment Variables

All environment variables are optional.

Copy the example environment file:

```bash
cp .env.example .env.local
```

Then configure the variables you need.

| Variable | Purpose | If missing |
| --- | --- | --- |
| `VITE_SUBMIT_ENDPOINT` | Formspree endpoint for enquiry and review forms | Forms show a friendly unavailable message |
| `VITE_CAL_LINK` | Cal.com booking link | Booking UI is hidden |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID | Analytics and cookie banner do not load |
| `VITE_SITE_URL` | Public site origin used for canonical URLs, sitemap, and Open Graph metadata | Falls back to `https://snabbily.com` |

Real secrets should never be committed to the repository.

Environment files are ignored by Git, while `.env.example` contains safe placeholder configuration.

## Routes

| English | Greek |
| --- | --- |
| `/` | `/el` |
| `/website-design-for-small-businesses` | `/el/kataskevi-istoselidon` |
| `/websites-for-hair-beauty` | `/el/kataskevi-istoselidon-gia-kommotiria` |
| `/start` | `/el/start` |
| `/review` | `/el/review` |
| `/privacy` | `/el/privacy` |
| `/cookies` | `/el/cookies` |

The `/start` and `/review` routes are configured as `noindex`.

Homepage navigation links such as Work, Services, Pricing, and Contact use section anchors.

## Project Structure

```text
src/
  i18n/
    en.ts
    el.ts
    route registry
    LocaleProvider

  lib/
    configuration
    Formspree submission
    GA4
    consent store
    structured data
    parallax utilities

  components/
    Button
    Reveal
    Section
    Seo
    BrowserFrame
    WorkPoster
    LegalDoc

    layout/
      Nav
      Footer
      ConsentBanner
      Layout

    flow/
      shared UI primitives

  sections/
    homepage sections

  pages/
    Home
    HairBeauty
    StartProject
    FreeReview
    Privacy
    Cookies
    NotFound

  styles/
    design tokens
    reveal system

public/
  favicon
  icons
  og-image
  robots.txt
  sitemap.xml
  manifest
```

## Internationalisation

Internationalisation is route-based.

English content is available from the root routes, while Greek content uses the `/el` prefix.

Content is stored in typed dictionaries:

```text
src/i18n/en.ts
src/i18n/el.ts
```

The English dictionary acts as the source structure, and the Greek dictionary matches the same shape.

The application also includes locale-specific SEO configuration, including:

- hreflang alternates
- canonical URLs
- Greek-localised route slugs
- translated metadata

## SEO

The website uses static prerendering so every public route is generated as real HTML during the build process.

SEO features include:

- Unique page titles
- Meta descriptions
- Canonical URLs
- hreflang tags
- Open Graph metadata
- Sitemap
- robots.txt
- Structured data
- Localised route slugs
- Static HTML output

The goal is to maintain strong search visibility without introducing unnecessary runtime complexity.

## Accessibility

The interface includes:

- Semantic HTML
- Labelled form fields
- Visible keyboard focus states
- Skip navigation link
- Large mobile touch targets
- Reduced-motion support
- Progressive enhancement

Interactive content remains usable even when animations are disabled.

## Motion and Performance

Animations are intentionally lightweight.

Scroll reveal effects use transform and opacity only.

Motion is reduced on smaller devices and disabled when the user has enabled:

```css
prefers-reduced-motion
```

The hero entrance is implemented with CSS so the Largest Contentful Paint element does not depend on JavaScript execution.

## Forms

The enquiry and website review forms submit directly to Formspree.

No form-processing backend is maintained inside this repository.

When `VITE_SUBMIT_ENDPOINT` is not configured, the interface fails gracefully and informs the user rather than sending a broken request.

## Analytics and Consent

Google Analytics 4 support is optional.

Analytics only load when a GA4 measurement ID is configured and the relevant consent state allows it.

If analytics are not configured, the website functions normally without them.

## Deployment

The production site is deployed with Vercel.

The project uses `vercel.json` to configure:

- `npm run build` as the build command
- `dist` as the output directory
- clean URLs
- long-lived cache headers for static assets

Production environment variables are configured through Vercel rather than committed to the repository.

## Development Approach

Snabbily is developed using a combination of:

- React and TypeScript
- Git and GitHub
- Vercel
- AI-assisted development workflows
- Manual testing
- SEO and performance iteration

The project is continuously refined based on real business requirements, conversion goals, responsive behaviour, and search visibility.

## Project Status

Snabbily is actively developed and used as the main website for the Snabbily service.

Current areas of focus include:

- SEO expansion
- Industry-specific landing pages
- Conversion improvements
- Portfolio and demo presentation
- Performance
- Accessibility
- Lead-generation workflows
- English and Greek content refinement

## Author

**Thanos Xyntarakis**

Computer Science student in Sweden building web applications, client projects, and AI-assisted software products.

[GitHub](https://github.com/ThanosDoesCode)

[LinkedIn](https://www.linkedin.com/in/thanosxnt)
