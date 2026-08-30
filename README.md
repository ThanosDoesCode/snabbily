# Snabbily

Marketing website for **Snabbily** — a done-for-you website service for service
businesses in Greece (initial focus: hair & beauty). Fully bilingual (English /
Greek), statically prerendered for excellent SEO and Core Web Vitals.

> Positioning: **“Your website should bring you business.”**

## Stack

- **Vite 6** + **React 18** + **TypeScript**
- **[vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)** — static
  prerendering of every route to real HTML (great SEO, fast first paint)
- **Tailwind CSS v4** (CSS-first tokens, no component library)
- **react-router-dom** for routing
- No CMS, no database, no backend. Forms post directly to Formspree.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # static prerender → dist/
npm run preview    # serve the built site locally
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run gen:assets # regenerate og-image.png + app icons from scripts/gen-assets.mjs
```

## Environment variables

All are **optional** — the site degrades gracefully when a value is missing.
Copy `.env.example` → `.env.local` and fill in what you have.

| Variable                 | Purpose                                                        | If missing |
| ------------------------ | -------------------------------------------------------------- | ---------- |
| `VITE_SUBMIT_ENDPOINT`   | Formspree endpoint for enquiry / review forms                  | Forms show a friendly “not connected yet” message |
| `VITE_CAL_LINK`          | Cal.com link (`user/event` or full URL) for “Book a call”      | All booking UI is hidden |
| `VITE_GA_MEASUREMENT_ID` | GA4 measurement ID (`G-XXXX…`)                                 | Analytics + cookie banner never load |
| `VITE_SITE_URL`          | Public origin for canonical/sitemap/OG (default `https://snabbily.com`) | Falls back to the default |

**Production form recipient:** `snabbily@gmail.com` (configured in Formspree, not in code).
Never commit real secrets — `.env*` files are git-ignored.

## Routes

| English                        | Greek                                             |
| ------------------------------ | ------------------------------------------------- |
| `/`                            | `/el`                                             |
| `/websites-for-hair-beauty`    | `/el/kataskevi-istoselidon-gia-kommotiria`        |
| `/start` (noindex)             | `/el/start`                                       |
| `/review` (noindex)            | `/el/review`                                      |
| `/privacy`                     | `/el/privacy`                                     |
| `/cookies`                     | `/el/cookies`                                     |

Nav links (Work / Services / Pricing / Contact) are homepage section anchors.

## Structure

```
src/
  i18n/        locales, typed EN/EL dictionaries, LocaleProvider, route registry
  lib/         config, Formspree submit, GA4, consent store, structured data, parallax
  components/  Button, Reveal, Section, Seo, BrowserFrame, WorkPoster, LegalDoc,
               layout/ (Nav, Footer, ConsentBanner, Layout), flow/ (primitives)
  sections/    homepage sections (Hero, SelectedWork, Capabilities, …)
  pages/       Home, HairBeauty, StartProject, FreeReview, Privacy, Cookies, NotFound
  styles/      design tokens + reveal system
public/        favicon, icons, og-image, robots.txt, sitemap.xml, manifest
```

## Internationalisation

Route-based. English at the root, Greek under `/el`. Content lives in typed
dictionaries (`src/i18n/en.ts` is the source of truth; `el.ts` must match its
shape). `hreflang` alternates and a Greek-localised landing-page slug are wired
for locale SEO.

## Accessibility & motion

Semantic HTML, labelled forms, visible focus states, skip link, ~44px+ touch
targets. Scroll-reveal animations are transform/opacity only, gated behind
`prefers-reduced-motion`, reduced on mobile, and progressive (content is fully
visible without JS). The hero entrance is pure CSS so the LCP element never waits
for JavaScript.

## Deployment (Vercel)

Static output. `vercel.json` sets `buildCommand: npm run build`,
`outputDirectory: dist`, `cleanUrls`, and long-cache headers for assets. Add the
environment variables above in the Vercel project settings, then connect
`snabbily.com`.

## ⚠️ Legal review required

`Privacy Policy` and `Cookie Policy` are good-faith templates and are clearly
marked as requiring review by a qualified professional before launch (GDPR /
Greek & EU law).
