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
- [Changes Needed](#changes-needed)

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

The architecture should **clearly separate responsibilities** between:

| Layer | Purpose |
|-------|---------|
| `components/ui` | Reusable design system primitives / shadcn-based components |
| `components/layout` | Layout and structural components (container, section, navbar, footer) |
| `components/briefs` | Compact sections for single-page sites (e.g. BriefHero, BriefAbout, BriefServices, BriefContact) |
| `components/pages` | Page-level compositions that assemble briefs and sections |
| `components/sections` | Full marketing sections for multi-page sites (nested by feature) |
| `components/shared` | Shared UI helpers (e.g. section-heading) |
| `content/dictionaries` | Modular i18n per section (hero, about, services, etc.); composed in `index.ts` |
| `content/shared` | Non-translatable config (siteName, contact, social, url) |
| `config` | Branding, business info, site metadata, locale-aware navigation |
| `lib` | Helper functions, utilities, getDictionary, SEO helpers |

> The template should work like a **system of building blocks**, not a one-off project.

---

## Current Structure

The following reflects the **actual** project structure as implemented.

```
pillacela-agency-next-starter/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Home (en)
│   │   └── services/
│   │       └── page.tsx
│   ├── es/(marketing)/
│   │   ├── page.tsx              # Home (es)
│   │   └── servicios/
│   │       └── page.tsx
│   ├── globals.css
│   └── layout.tsx               # Root layout + Navbar
├── components/
│   ├── briefs/                  # Single-page compact sections
│   │   ├── BriefAbout.tsx
│   │   ├── BriefContact.tsx
│   │   ├── BriefHero.tsx
│   │   └── BriefServices.tsx
│   ├── layout/
│   │   ├── container.tsx
│   │   ├── navbar.tsx           # Locale-aware header
│   │   ├── section.tsx
│   │   └── site-footer.tsx
│   ├── pages/                   # Page compositions
│   │   ├── HomePage.tsx
│   │   └── ServicesPage.tsx
│   ├── sections/                # Multi-page full sections
│   │   └── services/
│   │       └── services-list.tsx
│   ├── shared/
│   │   └── section-heading.tsx
│   └── ui/                      # shadcn primitives
├── config/
│   ├── routes.ts                # Route hrefs by locale (labels from dictionary)
│   └── site.ts                  # Re-exports shared
├── content/
│   ├── shared.ts                # Non-translatable: siteName, contact, social
│   └── dictionaries/
│       ├── index.ts             # Composes en/es dictionaries
│       ├── hero.ts
│       ├── about.ts
│       ├── services.ts
│       └── ... (navigation, footer, form, common, errors)
├── lib/
│   ├── getDictionary.ts
│   ├── buildNavigation.ts       # Routes + dict labels → nav items
│   └── utils.ts
└── ... (next.config, tailwind, postcss, etc.)
```

---

## Current Patterns

### i18n and Locale Routing

- **Routes:** `/` and `/services` for English; `/es` and `/es/servicios` for Spanish.
- **Dictionary:** `content/dictionaries/` — modular section files composed in `index.ts`; types in `types/dictionary.ts`.
- **Shared:** `content/shared.ts` — siteName, contact, social, url (non-translatable).
- **Resolution:** `lib/getDictionary.ts` returns full `Dictionary`; `lib/buildNavigation.ts` builds nav from routes + dict.
- **Navbar/Footer:** Use `getDictionary(locale)`, `buildNavigation(locale, dict.navigation)`, `shared`.

### Briefs vs Sections

Two tiers for different client budgets:

| Tier | Folder | Purpose |
|------|--------|---------|
| **Briefs** | `components/briefs/` | Compact sections for single-page sites. Minimal layout, scroll anchors (e.g. `#hero`, `#about`, `#services`, `#contact`). |
| **Sections** | `components/sections/` | Fuller sections for multi-page sites. Nested by feature (e.g. `services/services-list.tsx`). |

### Pages as Compositions

- `components/pages/HomePage.tsx` and `ServicesPage.tsx` receive a `dict` prop and compose briefs/sections.
- Route pages (e.g. `app/(marketing)/page.tsx`) call `getDictionary(locale)` and pass the result down.

### Config and Navigation

- `config/routes.ts` — Route hrefs by locale; labels come from `dict.navigation`.
- `lib/buildNavigation.ts` — Combines routes and dictionary labels into `{ label, href }[]`.

---

## Planned Additions / Changes Needed

Items to align with the full architecture:

| Priority | Item | Notes |
|----------|------|-------|
| 1 | ~~**Site footer**~~ | Done. `components/layout/site-footer.tsx` uses `getDictionary`, `buildNavigation`, `shared`, `dict.footer`. |
| 2 | **Nav links for multi-page** | Add `/services` to en nav and `/es/servicios` to es nav when offering multi-page; currently nav uses hash links. |
| 3 | **Metadata from site config** | Update `app/layout.tsx` to use `siteConfig.name` and `siteConfig.description` instead of placeholder text. |
| 4 | **Contact page** | Add `app/(marketing)/contact/page.tsx` and `app/es/(marketing)/contacto/page.tsx`; add to nav. |
| 5 | ~~**Dictionary typing**~~ | Done. Strongly typed in `types/dictionary.ts`; all components use typed props. |
| 6 | **Optional later** | `lib/metadata.ts` for `generateMetadata`, `app/not-found.tsx`, `robots.ts`, `sitemap.ts`, `app/api/contact/route.ts`, `.env.example`. |
