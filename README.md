# Vinhomes Platinum Living — *Where Luxury Meets Lifestyle*

A premium, CMS-ready, multi-page marketing website for **Vinhomes Platinum Living**, a luxury
real-estate developer in Lagos, Nigeria. The site blends an architectural-editorial aesthetic with
high-conversion property discovery — designed to feel custom-made, never like a template.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and a local, typed
**content layer** that mirrors the headless CMS collections, so the frontend updates automatically
when content changes and can be swapped to a hosted CMS with no code changes.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all routes statically generated)
npm run start      # serve the production build
```

Requires Node 18.17+ / 20+.

---

## Tech & design system

| Concern          | Choice                                                            |
| ---------------- | ----------------------------------------------------------------- |
| Framework        | Next.js 14 App Router (SSG/SSR), TypeScript                       |
| Styling          | Tailwind CSS with a bespoke luxury token set                      |
| Fonts            | Playfair Display (display serif), Cormorant Garamond (accent), Jost (body) |
| Icons            | `lucide-react` (thin, editorial line icons)                       |
| Imagery          | Generated editorial renders + the official supplied logo; all concept imagery is labelled |
| Motion           | IntersectionObserver reveals, ken-burns hero, hover states, reduced-motion support |

**Colour system** (`tailwind.config.ts` → `brand.*`):

- Deep forest/emerald greens — `green950…green600`
- Metallic champagne gold — `gold / goldLight / goldDeep`
- Warm ivory/cream — `ivory / cream / paper`
- Stone/architectural grey — `stone / stoneSoft / line`
- Charcoal/near-black — `ink / charcoal`

Gold is used sparingly (dividers, hairlines, accent typography) so the brand stays sophisticated
rather than flashy.

**Key conventions**

- Semantic HTML, a single `<h1>` per page and a clean H2/H3 hierarchy.
- Large editorial imagery, generous whitespace, thin gold rules, restrained shadows.
- CMS content lives under `content/` and types under `lib/types.ts`.

---

## Site map

| Route                          | Purpose                                                          |
| ------------------------------ | ---------------------------------------------------------------- |
| `/`                            | Home: hero, trust strip, featured developments & residences, philosophy, amenities, location & investment teasers, insights |
| `/properties`                  | Discovery: filters (location, development, type, bedrooms, availability, category), sort, search, empty/loading states |
| `/properties/[slug]`           | Reusable property detail with the home's own film, sticky enquiry panel |
| `/about`                       | Who we are, vision, mission, core values, philosophy             |
| `/services`                    | Development, land & property investment, sales, consultation, advisory, viewings |
| `/why-vinhomes`                | Trust page + *Built for Today. Positioned for Tomorrow.*         |
| `/investment`                  | Location/quality/development/payment guidance; fact-vs-positioning disclosure |
| `/insights` and `/insights/[slug]` | Editorial blog/insights                                        |
| `/faq`                         | Categorised FAQ with FAQPage schema                              |
| `/contact`                     | Enquiry form, phone/email/office/WhatsApp actions                |
| `/privacy`, `/terms`           | Legal pages                                                      |
| `/_not-found`                  | Elegant 404                                                      |

---

## Video showcase (the supplied films)

All five clips supplied by the client live in `public/media/videos/` and are registered once in
`content/films.ts` (type `FilmAsset` in `lib/types.ts`). Each record is verified from the file:
duration and pixel size read from the MP4, poster extracted from that same clip, and `shows`
describing only what is actually on screen — the copy never claims more than the footage shows.

| Film id | File | Cut | Shows |
| ------- | ---- | --- | ----- |
| `emerald-tour` | `vinhomes-film-01.mp4` | 0:24 portrait | The Emerald duplex interiors; on-screen titles list the 2/3/4-bed fully-detached options |
| `citadel-tour` | `vinhomes-film-02.mp4` | 0:39 landscape | Aerial pass over the Citadel Oasis terraces, location and stated payment structure |
| `emerald-investment` | `vinhomes-film-03.mp4` | 0:33 portrait | The Emerald "5 reasons" presentation deck, cut to film |
| `site-walk` | `vinhomes-film-04.mp4` | 1:12 portrait | Presenter walking the community on the ground, ending on the marketed-by card |
| `capital-loft-tour` | `vinhomes-film-05.mp4` | 1:31 landscape | Capital Loft interiors, surroundings, house types, amenities and payment structure |

Where each film appears — every property carries the footage filmed for it, via `filmIds` on the
Development and Property records (`content/developments.ts`):

- **Property page** — an "On Film" section under the hero (`FilmStrip`), a "Watch the film" jump
  button in the hero, a film chip in the sticky enquiry rail, and `VideoObject` JSON-LD +
  `og:video` / `twitter:player` metadata per clip.
- **Listing sections** — `PropertyCard` (used on `/properties` and in the home "Featured
  Residences" band) previews its film on hover and opens the lightbox player from the gold
  `Film · 0:24` chip; `DevelopmentCard` does the same on the home developments band.
- **`/properties` reel** — a "Footage for the homes you are viewing" band that follows the active
  filters, with a thumbnail index linking to each home.
- **`/about` and the home "On film" band** — the whole registry, each film labelled with the
  address it was shot at.
- **`/investment`** — the film for each development on its format card.

A development-level record with no `filmIds` of its own falls back to its development's films
(`getFilmsForProperty`), so a new home added in the CMS inherits the right footage automatically.

---

## Content layer & CMS architecture

Content collections are defined in `lib/types.ts` and populated in `content/`:

```
content/
  site.config.ts    # brand, contact, nav, social  (SiteConfig)
  developments.ts   # Developments + Properties     (single source; includes helpers)
  amenities.ts      # Amenity catalogue             (attached to developments/properties by id)
  services.ts       # Services
  values.ts         # Core values (Excellence…Sustainability)
  insights.ts       # Insights/Blog, FAQs, Testimonials
```

The content files are deliberately plain typed data. Because every page is **statically rendered
from these files at build time**, adding/editing a record regenerates the relevant page automatically.

**Swapping to a hosted CMS** (Sanity, Contentful, Strapi, Storyblok, etc.):

1. Reuse `lib/types.ts` as your schema — each collection mirrors your CMS.
2. Replace the `content/*.ts` reads with CMS queries that return the same shapes.
3. For content edited live, switch a page to `export const dynamic = 'force-dynamic'` or
   `revalidate = 60` to fetch fresh content on demand.
4. Pricing, availability and payment plans are fields on each Property/Development record — edit
   them in the CMS, never hard-code them in the UI.

**Trust / anti-fabrication guardrails**

- No invented prices, stats, awards, certifications, client counts, years in business, ROI %,
  testimonials or completion dates.
- Prices default to **“Pricing on request”** (CMS-managed); statuses use the controlled set
  `AVAILABLE / LIMITED AVAILABILITY / SOLD OUT / COMING SOON`.
- `content/insights.ts` exports an empty `testimonials` array — add only **approved** testimonials.
- Investment copy distinguishes **fact** vs **positioning** vs **estimate**, and repeats the
  disclaimer: *“Property values and investment returns are subject to market conditions and
  individual circumstances.”*
- No ROI calculator is shown because the underlying inputs were not supplied.

---

## Development data (from the supplied materials)

Three developments are represented, grounded in the supplied profile/brief:

| Development   | Type                                       | Key facts used                                                              |
| ------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| **The Emerald** | Fully-detached duplexes (2/3/4 Bed)      | “A perfect blend of style, comfort, and thoughtful design.”                  |
| **Citadel Oasis** | Secure, solar-powered community        | Abraham Adesanya Rd, Ajah; opposite CharterHouse School; pool, gym, drainage, clean water; **40% deposit, balance over 8 months** |
| **Capital Loft** | Investment terraces                     | 3 Bed Terrace; 2 Bed Terrace with BQ; prime location, ROI potential, flexible/outright purchase |

Company profile content (brand, vision, mission, values, address/phone/email) comes from `VPL.pdf`.
**Note:** financial/account details from the PDF (e.g. the UBA account number) are intentionally
**not** exposed on the public site, as required.

---

## Integrations (ready-to-wire)

- **WhatsApp** — contextual CTAs throughout (home, cards, property rail, contact, mobile float).
  Messages auto-fill, e.g. `Hi Vinhomes Platinum Living, I'm interested in [PROPERTY NAME]…`.
- **Enquiry API** — `app/api/enquiry/route.ts` validates + acknowledges leads. It includes a clear
  integration seam for **email notifications (SMTP/Resend/SendGrid/Brevo)**, **WhatsApp Business /
  CRM push (HubSpot/Zoho/Pipedrive)**, and **rate-limiting/CAPTCHA**.
- **Analytics / Search Console / social / newsletter** — placeholders wired in `content/site.config.ts`
  and `components/Newsletter.tsx` (add your tag/IDs via an `.env`/config).

---

## SEO

- Unique `<title>`/description per page (`lib/seo.ts`), clean URLs, canonical + Open Graph + Twitter metadata.
- `robots.txt` + auto-generated `sitemap.xml`.
- Structured data: `RealEstateAgent`, `LocalBusiness`-style Organization, `WebSite`,
  `BreadcrumbList`, `RealEstateListing` (on property pages), `Article` (blog), `FAQPage`.
- Semantic HTML, alt text, breadcrumbs, contextual internal links.
- Targets natural reader language for queries such as *luxury real estate Lagos*, *duplexes for
  sale Ajah*, *properties Abraham Adesanya*, *premium homes Lagos* — without keyword stuffing.

---

## Performance

- All routes prerendered to static HTML; small first-load JS (~87 KB shared).
- Responsive images via `next/image` with AVIF/WebP, `sizes`, lazy-loading below the fold and
  `priority` on LCP hero/logo.
- Optimised self-hosted fonts (Playfair, Cormorant, Jost via `@fontsource`).
- No heavy third-party scripts; no raw full-length video payloads (hero uses a cinematic image +
  ken-burns). Source walkthrough MP4s remain in the repo but are not auto-loaded.
- Motion honours `prefers-reduced-motion`; a `<noscript>` fallback keeps content visible.

---

## Repository notes

- Original supplied assets (`VPL.pdf`, WhatsApp media) remain at the repo root as source material.
- `public/media/images/…` and `public/media/brand/logo.jpg` are the web-ready assets referenced by
  the site.
- Large build output (`.next`, `node_modules`) is git-ignored.
