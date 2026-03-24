# Pillacela Agency Next Starter

A Next.js starter template for building small business marketing websites. Used as the base for new client projects at Pillacela Agency.

---

## Purpose

This is a **starter repository**—not a shared library. Each new client project starts as a fresh clone. The template provides:

- A clean, reusable architecture for agency sites
- Built-in i18n (English / Spanish)
- Brief-style sections (Hero, About, Services, Work, Testimonials, Pricing, FAQ, Contact) for single-page sites
- Full section variants (contact form, testimonials, work) for richer layouts
- Config-driven branding ([`content/shared.ts`](./content/shared.ts)), navigation ([`content/navigation.ts`](./content/navigation.ts)), and section backgrounds ([`config/sections.ts`](./config/sections.ts))
- Fast setup so you can scaffold a new site in 30–60 minutes

See [context.md](./context.md) for architecture details. For typography and layout scale guidance (`Regular`, `Zoomed In`, `Elegant Luxury Premium`), see [docs/UI-SCALE-GUIDE.md](./docs/UI-SCALE-GUIDE.md). This starter defaults to `Regular`. For how contact info is shown, how JSON-LD and the contact-form honeypot fit in, and client-facing talking points, see [docs/CONTACT-OBFUSCATION.md](./docs/CONTACT-OBFUSCATION.md).

---

## New Client Setup

When starting a new client website, you want an **independent project** with its own git history—no connection to this starter, so you never accidentally push or open PRs back to the template.

**Workflow:**

1. Clone the starter into a new folder:

   ```bash
   git clone https://github.com/YOUR_USERNAME/pillacela-agency-next-starter.git my-client-website
   cd my-client-website
   ```

2. Remove the existing git history (this detaches the project from the starter):

   ```bash
   rm -rf .git
   ```

3. Initialize a fresh repository for the client project:

   ```bash
   git init
   git add .
   git commit -m "Initial commit from Pillacela Agency Next Starter"
   ```

4. Add your remote (e.g. the client’s repo or your agency’s copy):

   ```bash
   git remote add origin https://github.com/YOUR_ORG/client-repo.git
   ```

The new project now has its own history and is fully independent of the starter template.

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Customizing for a Client

Once the dev server is running, here's what to update for each new client project.

### 0. Decide: single-page or multi-page?

This is the first decision for every client. It determines which components you use and how nav links are written.

| | Tier 1 — Single-page | Tier 2 — Multi-page |
|-|----------------------|---------------------|
| **When to use** | Most clients. Everything on one scroll. | Client wants distinct URLs per section (e.g. `/services`, `/about`). |
| **Components** | `components/briefs/` | `components/sections/` + `components/pages/` |
| **Nav links** | Hash anchors: `/#services` | Real routes: `/services` |
| **Section IDs** | Required — `<Section id="services">` so anchors scroll correctly | Not needed for dedicated pages |

**To set the nav mode**, edit [`content/navigation.ts`](./content/navigation.ts):

```ts
// Tier 1 — single-page (default)
{ label: "Services", href: "/#services" }

// Tier 2 — multi-page
{ label: "Services", href: "/services" }
```

Never mix hash anchors and real routes for the same nav item. If a dedicated page exists, its nav link must point to the route.

> See [`context.md`](./context.md) → "Briefs vs Sections" for the full breakdown.

---

### 1. Branding & contact info

Edit [`content/shared.ts`](./content/shared.ts):

- `siteName` — the client's business name
- `url` — the live production URL (used for SEO canonicals and hreflang alternates)
- `contact.email`, `contact.phone`, `contact.phoneHref`, `contact.address`
- `social.instagram`, `social.facebook`, `social.linkedin` — leave empty strings to hide from the footer

Email and phone links in the UI use [`hooks/useContact.ts`](./hooks/useContact.ts); full contact for SEO is also in JSON-LD in [`app/layout.tsx`](./app/layout.tsx). See [docs/CONTACT-OBFUSCATION.md](./docs/CONTACT-OBFUSCATION.md) for the full model (scrapers, honeypot, what to tell clients).

### 2. Site metadata

The root layout reads from [`content/shared.ts`](./content/shared.ts) (`siteName`, `siteDescription`). Per-page SEO titles and descriptions come from [`content/dictionaries/metadata.ts`](./content/dictionaries/metadata.ts). Update both locales when customizing.

### 3. Page copy (i18n dictionaries)

Edit files in [`content/dictionaries/`](./content/dictionaries/):

Each file (`hero.ts`, `about.ts`, `services.ts`, `contact.ts`, etc.) exports `{ en, es }`. Update both locales with the client's content. Types are enforced by [`types/dictionary.ts`](./types/dictionary.ts).

### 4. Design tokens

Edit [`app/globals.css`](./app/globals.css):

- Update `--primary` (and `.dark` block) to the client's brand color
- Section backgrounds are controlled in [`config/sections.ts`](./config/sections.ts) — `"default"`, `"muted"`, `"accent"`, or `"primary"`
- Fonts are loaded via `next/font/google` in `app/layout.tsx` — swap Inter / Source Serif 4 if needed

### 5. Adding a new dedicated page

Dedicated pages (like `/services`) follow this pattern:

1. Create the route file: `app/(marketing)/your-page/page.tsx` (and `app/es/(marketing)/tu-pagina/page.tsx` for ES)
2. Create a page component: `components/pages/YourPage.tsx` — wrap in `<main>`, use `PageHero` for the `<h1>` intro
3. Add metadata entries to `content/dictionaries/metadata.ts` (both `en` and `es`)
4. Update `content/navigation.ts` to link to the real route (not a hash anchor)

**Optional: loading skeleton for the route**

To show a loading placeholder during navigation to the new page, add a `loading.tsx` next to the route file:

```tsx
// app/(marketing)/your-page/loading.tsx
import { PageSkeleton } from "@/components/layout/page-skeleton"

export default function Loading() {
    return <PageSkeleton />
}
```

`PageSkeleton` is a generic animated pulse layout that works for any marketing page. No changes needed unless the page has a very different visual weight.

### 6. Deploy

Push to GitHub and connect to [Vercel](https://vercel.com) — zero-config with Next.js App Router. Update `shared.url` in [`content/shared.ts`](./content/shared.ts) to the production URL before launch. The sitemap and robots files use this value.

---

## Performance Monitoring

No extra tooling needed. Use these two built-in signals to catch problems early.

### Build output — catch regressions immediately

Every `npm run build` prints per-route sizes. For a static marketing site these are healthy targets:

| Metric | Healthy | Investigate |
|---|---|---|
| First Load JS per route | < 150 KB | > 200 KB |
| Route size (your code only) | < 10 KB | > 50 KB |

Example of a healthy build output:
```
○ /           4.2 kB   101 kB
○ /services   3.8 kB    98 kB
○ /es         4.2 kB   101 kB
```

The second column is your code. The third column is first load JS (your code + shared framework chunks). Watch the third column — if it jumps significantly after adding a dependency, that's your signal to investigate.

**Common causes of bundle bloat:**
- Installing a large library and only using one function from it (e.g. importing all of `lodash` instead of `lodash/get`)
- Adding a component library that doesn't support tree-shaking
- Accidentally importing a server-only module into a client component

### Vercel Speed Insights — catch real-world slowness

After deploying, Speed Insights in your Vercel dashboard shows Core Web Vitals from actual visitor devices. The one to watch most:

| Metric | What it measures | Good | Needs work |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | How fast the main content loads | < 2.5s | > 4s |
| **CLS** (Cumulative Layout Shift) | Does the page jump around while loading | < 0.1 | > 0.25 |
| **INP** (Interaction to Next Paint) | How fast the page responds to taps/clicks | < 200ms | > 500ms |

For a static marketing site with no heavy images, LCP should be well under 2s on desktop. Mobile is harder — if LCP goes above 3s on mobile, check image sizes first (unoptimized hero or work section images are the most common culprit).

> If something looks wrong and you need to dig deeper, see `BACKLOG.md` → Bundle Analyzer for how to install and run `@next/bundle-analyzer` as a one-time diagnostic.
