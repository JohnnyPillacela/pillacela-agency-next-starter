# Next.js Agency Starter — Architecture Context

> Architecture and planning context for a reusable, scalable website starter for freelance agency work.

---

## Table of Contents

- [Role](#role)
- [Goal](#goal)
- [Project Context](#project-context)
- [Business Use Case](#business-use-case)
- [Technical Requirements](#technical-requirements)
- [Design Principles](#design-principles)
- [Current Structure](#current-structure)
- [Current Patterns](#current-patterns)
- [Future Additions](#future-additions)

---

## Role

You are a **senior frontend architect** and **Next.js systems designer**. Your job is to help design a **reusable, scalable website starter architecture** for a freelance agency workflow focused on building small business websites quickly.

> **Do not** optimize for enterprise complexity.

### Optimize For

| Priority |
|----------|
| Fast setup |
| Clean separation of concerns |
| Repeatable client customization |
| Strong defaults |
| Easy long-term reuse across many projects |

---

## Goal

Generate a **detailed architecture plan** for a reusable **Next.js agency template** that can be used as a starter repository for future client websites.

### Success Criteria

- Scaffold new client websites quickly
- Reuse components and sections across projects
- Swap branding/content with minimal effort
- Keep projects organized as they scale
- Maintain a clean Git/GitHub-based workflow

The final architecture should feel **practical** for a solo freelance developer building many similar marketing sites for small businesses.

---

## Project Context

### Tech Stack

| Technology |
|------------|
| Next.js (App Router) |
| React |
| TypeScript |
| Tailwind CSS |
| shadcn/ui |

### Workflow

1. Maintain a reusable **starter repository**
2. For each new client:
   - Clone the starter
   - Remove `.git`
   - Initialize a fresh repository
   - Customize branding, content, and config
   - Deploy quickly (e.g. Vercel)

**Target:** Reduce setup time so a new site can be scaffolded in **30–60 minutes** and customized in a few hours.

---

## Business Use Case

These websites are typically **simple small business marketing sites**.

### Pricing / Service Model

| Item | Details |
|------|---------|
| Website build | ~ **$500** |
| Domain | Client usually buys their own |
| Hosting | Initially provided through my setup |
| Optional maintenance | **$25/month** for small edits |

### Typical Clients

- Accountant
- Consultant
- Local service business
- Solo professional

### Typical Site Structure

1. **Hero**
2. **About**
3. **Services**
4. **Booking / CTA**
5. **Contact**
6. **Footer**

> **Note:** Booking functionality should be handled with a third-party tool such as **Calendly**, not built from scratch.

---

## Technical Requirements

The architecture should support:

| Requirement |
|-------------|
| Static Site Generation (SSG) where appropriate |
| Strong SEO defaults |
| Minimal client-side JavaScript |
| Client components only when necessary |
| Reusable UI primitives |
| Reusable section blocks |
| Easy branding customization |
| Easy deployment to Vercel or similar platforms |
| Maintainability across dozens of client sites |

---

## Design Principles

The architecture **clearly separates responsibilities** between:

| Layer | Purpose |
|-------|---------|
| `components/ui` | Reusable design system primitives / shadcn-based components |
| `components/layout` | Layout and structural components (container, section, navbar, footer, language-switcher, page-skeleton) |
| `components/briefs` | Compact sections for single-page sites (BriefHero, BriefAbout, BriefServices, BriefWork, BriefTestimonials, BriefPricing, BriefFaq, BriefContact) |
| `components/pages` | Page-level compositions that assemble briefs and sections |
| `components/sections` | Full marketing sections (contact, testimonials, work, services) — can be used on home page or dedicated routes |
| `components/shared` | Shared UI helpers (section-heading, page-hero, cta-banner) |
| `content/dictionaries` | Modular i18n per section; composed in `index.ts`; types in `types/dictionary.ts` |
| `content/shared` | Non-translatable config (siteName, siteDescription, contact, social, url, images) |
| `content/navigation` | Single source of truth for nav labels and hrefs per locale |
| `config` | Section backgrounds (`sections.ts`), site re-exports (`site.ts`) |
| `lib/dictionaries` | Per-section getters (`getHeroDict`, `getNavigationDict`, etc.) |
| `lib/seo` | `metadata.ts` (generatePageMetadata), `getHreflang.ts` |

> The template works like a **system of building blocks**, not a one-off project.

---

## Current Structure

The following reflects the **actual** project structure as implemented.

```
pillacela-agency-next-starter/
├── app/
│   ├── (marketing)/
│   │   ├── loading.tsx
│   │   ├── page.tsx              # Home (en)
│   │   └── services/
│   │       └── page.tsx
│   ├── es/(marketing)/
│   │   ├── loading.tsx
│   │   ├── page.tsx              # Home (es)
│   │   └── servicios/
│   │       └── page.tsx
│   ├── api/contact/
│   │   └── route.ts              # Contact form handler (Resend optional)
│   ├── globals.css
│   ├── layout.tsx                # Root layout, metadata from shared, Navbar, Footer
│   ├── not-found.tsx
│   ├── robots.ts                 # Uses shared.url for sitemap
│   └── sitemap.ts                # Uses shared.url, locale alternates
├── components/
│   ├── briefs/
│   │   ├── BriefAbout.tsx
│   │   ├── BriefContact.tsx
│   │   ├── BriefFaq.tsx
│   │   ├── BriefHero.tsx
│   │   ├── BriefPricing.tsx
│   │   ├── BriefServices.tsx
│   │   ├── BriefTestimonials.tsx
│   │   └── BriefWork.tsx
│   ├── layout/
│   │   ├── container.tsx
│   │   ├── language-switcher.tsx
│   │   ├── navbar.tsx            # Uses getNavigationDict, shared
│   │   ├── page-skeleton.tsx
│   │   ├── section.tsx
│   │   └── site-footer.tsx       # Uses getFooterDict, getNavigationDict, shared
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── ServicesPage.tsx
│   ├── sections/
│   │   ├── contact/              # contact-section, contact-form, contact-info
│   │   ├── services/
│   │   │   └── services-list.tsx
│   │   ├── testimonials/
│   │   └── work/
│   ├── shared/
│   │   ├── cta-banner.tsx
│   │   ├── page-hero.tsx
│   │   └── section-heading.tsx
│   └── ui/                       # shadcn primitives
├── config/
│   ├── sections.ts               # Section background variants
│   └── site.ts                   # Re-exports from shared
├── content/
│   ├── navigation.ts             # Nav labels + hrefs per locale — single source of truth
│   ├── shared.ts                 # siteName, siteDescription, url, contact, social, images
│   └── dictionaries/
│       ├── index.ts              # Composes en/es dictionaries
│       ├── hero.ts, about.ts, services.ts, work.ts
│       ├── testimonials.ts, pricing.ts, faq.ts, contact.ts
│       ├── cta-banner.ts, metadata.ts
│       ├── footer.ts, form.ts, common.ts, errors.ts
│       └── ...
├── lib/
│   ├── dictionaries/
│   │   ├── get*Dict.ts           # One getter per section (getHeroDict, getNavigationDict, etc.)
│   │   └── index.ts              # Re-exports
│   ├── getLayoutDict.ts
│   ├── seo/
│   │   ├── metadata.ts           # generatePageMetadata
│   │   └── getHreflang.ts
│   ├── validations/contact.ts
│   └── utils.ts
├── types/
│   ├── dictionary.ts
│   └── locale.ts
├── docs/
│   └── UI-SCALE-GUIDE.md        # Typography and layout scale guidance (Regular / Large / Hero)
└── ... (next.config, tailwind, postcss, etc.)
```

---

## Current Patterns

### i18n and Locale Routing

- **Routes:** `/` and `/services` for English; `/es` and `/es/servicios` for Spanish.
- **Dictionary:** `content/dictionaries/` — modular section files composed in `index.ts`; types in `types/dictionary.ts`.
- **Shared:** `content/shared.ts` — siteName, siteDescription, url, contact, social, images (non-translatable).
- **Resolution:** Per-section getters in `lib/dictionaries/` (e.g. `getHeroDict(locale)`, `getNavigationDict(locale)`). No monolithic `getDictionary`.
- **Navbar/Footer:** Use `getNavigationDict(locale)`, `getFooterDict(locale)`, and `shared`. Navigation comes from `content/navigation.ts` (labels and hrefs together).

### Metadata and SEO

- **Root layout** (`app/layout.tsx`): Sets `metadataBase`, title template, description from `shared.siteName` and `shared.siteDescription`.
- **Page-level metadata:** Route pages call `generatePageMetadata` from `lib/seo/metadata.ts` with locale, path, title, description from `getMetadataDict`.
- **Hreflang:** `lib/seo/getHreflang.ts` builds alternates from `shared.url` and path.
- **Sitemap / robots:** `app/sitemap.ts` and `app/robots.ts` use `shared.url` — no separate env var. Keep `content/shared.ts → shared.url` in sync with the client domain.
- **Contact (spam reduction):** Real values stay in `content/shared.ts` only. Clickable email/phone in the UI go through `hooks/useContact` (client-side assembly). JSON-LD `LocalBusiness` in `app/layout.tsx` exposes full contact for search engines. The contact form includes a honeypot field; the API silently accepts those submissions without processing. See [docs/CONTACT-OBFUSCATION.md](./docs/CONTACT-OBFUSCATION.md).

### Briefs vs Sections — Tier 1 vs Tier 2

The template supports two client tiers. **This choice drives both the component used and the nav link format.**

| Tier | Client Type | Components | Nav Links |
|------|-------------|------------|-----------|
| **Tier 1** | Single-page site | `components/briefs/` — compact sections, all on one page | Hash anchors: `/#services`, `/es#servicios` |
| **Tier 2** | Multi-page site | `components/sections/` + dedicated `components/pages/` | Real routes: `/services`, `/es/servicios` |

**Rules:**
- Brief components must have a matching `id` on their `<Section>` (e.g. `<Section id="services">`) so anchor links scroll correctly.
- Dedicated page components live in `components/pages/` (e.g. `ServicesPage.tsx`), wrap in `<main>`, and use `PageHero` for the `<h1>`.
- Never mix hash anchors and real routes for the same nav item. If a page has a dedicated route, its nav link must use the route.
- `content/navigation.ts` is the **only** place to update hrefs when upgrading a client from Tier 1 to Tier 2.

**Note:** Tier 2 sections (e.g. `ContactSection`, `TestimonialsSection`) can appear on the home page alongside briefs. The default HomePage renders both brief and full variants for testimonials and contact.

### Home Page Composition

`components/pages/HomePage.tsx` composes:

1. **BriefHero** — Hero block
2. **BriefAbout** — About section
3. **BriefServices** — Services list
4. **BriefWork** — Portfolio/work cards
5. **BriefTestimonials** — Compact testimonials (Tier 1)
6. **TestimonialsSection** — Full testimonials section (Tier 2) — *both variants rendered*
7. **BriefPricing** — Pricing tiers
8. **CtaBanner** — Call-to-action banner
9. **BriefFaq** — FAQ accordion
10. **BriefContact** — Contact info only (Tier 1)
11. **ContactSection** — Contact info + form (Tier 2) — *both variants rendered*

For a lean single-page client, remove `TestimonialsSection` and `ContactSection` from HomePage and keep only the brief variants.

### Pages as Compositions

- `HomePage` and `ServicesPage` receive a `locale` prop and compose briefs/sections.
- Route pages (e.g. `app/(marketing)/page.tsx`) pass `locale` down and export `generateMetadata` using `generatePageMetadata` from `lib/seo/metadata.ts` and titles/descriptions from `getMetadataDict`.
- All dedicated page components wrap their content in `<main>` and use `PageHero` (`components/shared/page-hero.tsx`) for the page-level `<h1>` intro block.

### Loading Skeletons

- **`components/layout/page-skeleton.tsx`** — `PageSkeleton`: animated pulse placeholder.
- **`app/(marketing)/loading.tsx`** — Active at the `(marketing)` group level.

To add a skeleton for a new route, create `loading.tsx` in that route folder and use `<PageSkeleton />`.

### Navigation

- **`content/navigation.ts`** — Single source of truth for all nav links. Contains both `label` and `href` per locale. Consumed via `getNavigationDict(locale)`.
- **Tier 1 (single-page):** hrefs are hash anchors (`/#about`, `/es#about`).
- **Tier 2 (multi-page):** hrefs are real page routes (`/about`, `/es/acerca`).

### Design Guidance

- **`docs/UI-SCALE-GUIDE.md`** — Typography and layout scale modes (Regular, Large, Hero) for matching the site feel to the brand. Use when tuning hero, sections, and form density for a new client.

---

## Future Additions

Items not yet implemented or intentionally deferred:

| Priority | Item | Notes |
|----------|------|-------|
| 1 | **Contact page** | Add `app/(marketing)/contact/page.tsx` and `app/es/(marketing)/contacto/page.tsx`; add to nav. |
| 2 | **Resend integration** | Uncomment and configure email sending in `app/api/contact/route.ts`; run `npm install resend`. |
| 3 | **Nav links for multi-page** | When offering multi-page, update `content/navigation.ts` to use real routes for Services, About, etc. |

See `BACKLOG.md` for additional future work (Playwright, Storybook, dark mode, CMS, etc.).
