# Client Onboarding Checklist

Use this checklist every time you clone this template for a new client. Work top to bottom — each section builds on the last.

---

## Phase 1 — Project Setup

- [ ] Clone the repo and rename the folder to the client's project name
****- [ ] Copy `.env.example` → `.env.local` and fill in all values (see Phase 2)
- [ ] Run `npm install`
- [ ] Run `npm run dev` and confirm the site loads at `localhost:3000`
- [ ] Create a new GitHub repo for the client and push the initial commit

---

## Phase 2 — Environment Variables

Open `.env.local` and fill in every value before touching content.

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Client's domain (no trailing slash) |
| `RESEND_API_KEY` | [resend.com](https://resend.com) — create a new API key per client |
| `CONTACT_EMAIL` | The inbox that receives form submissions |

---

## Phase 3 — Brand & Config

### `content/shared.ts` — The single source of truth for non-translatable data

- [ ] `siteName` — Client's business name (used in metadata title template and footer)
- [ ] `siteDescription` — One-sentence brand description (used in root metadata)
- [ ] `url` — Client's live domain, e.g. `https://clientdomain.com` (must match `NEXT_PUBLIC_SITE_URL`)
- [ ] `contact.email` — Client's contact email
- [ ] `contact.phone` — Display-formatted phone, e.g. `(305) 555-0100`
- [ ] `contact.phoneHref` — Machine-readable tel link, e.g. `tel:+13055550100`
- [ ] `contact.address` — Street address or city/state for footer
- [ ] `social.instagram` — Full URL or leave `""` to hide
- [ ] `social.facebook` — Full URL or leave `""` to hide
- [ ] `social.linkedin` — Full URL or leave `""` to hide

### `app/globals.css` — Brand colors

Update the CSS variables in `:root` to match the client's brand palette. The key ones:

- [ ] `--primary` — Main brand color (buttons, links, accents)
- [ ] `--primary-foreground` — Text color on top of primary (usually white)
- [ ] `--accent` — Subtle highlight color (section badges, backgrounds)
- [ ] `--accent-foreground` — Text on top of accent
- [ ] `--foreground` — Body text color
- [ ] `--background` — Page background

> Update the `.dark` block too if you're enabling dark mode for this client.

### `app/layout.tsx` — Fonts

The template ships with Inter (sans), Source Serif 4 (serif), and JetBrains Mono (mono). Swap as needed:

- [ ] Replace font imports if client has a specific typeface
- [ ] Update `--font-sans` / `--font-serif` variables in `globals.css` if fonts change

---

## Phase 4 — Content Dictionaries

Each file lives in `content/dictionaries/`. Every file has an `en` and `es` block — update both.

### `hero.ts`

- [ ] `title` — Client's name or headline (EN + ES)
- [ ] `subtitle` — Tagline or value proposition — **remove lorem ipsum** (EN + ES)
- [ ] `cta` — Button label (EN + ES)
- [ ] `ctaHref` — Where the button scrolls/links to (default `#contact`)

### `about.ts`

- [ ] `title` — Section heading (EN + ES)
- [ ] `description` — 2–3 sentences about the client's business (EN + ES)
- [ ] `cta` / `ctaHref` — Optional link below the description

### `services.ts`

- [ ] `title` — Section heading (EN + ES)
- [ ] `heroTitle` — Subheading on the Services page (EN + ES)
- [ ] `description` — Brief intro line (EN + ES)
- [ ] `items` — List of the client's actual services (EN + ES)
- [ ] `cta` / `ctaHref` — CTA at the bottom of the section

### `testimonials.ts`

- [ ] Replace all three placeholder testimonials with real client reviews (EN + ES)
  - `quote` — The review text
  - `author` — Full name
  - `role` — Job title / business name
- [ ] If fewer than 3 real reviews exist, use 1–2 real ones — don't leave fake names

### `work.ts`

- [ ] Replace placeholder projects with the client's actual portfolio items (EN + ES)
  - `title` — Project or client name
  - `tag` — Service category (e.g. "Web Design", "SEO")
  - `image` — Path relative to `/public`, e.g. `/images/work/project-name.jpg`
- [ ] Add corresponding images to `public/images/work/` (see Phase 5 — Assets)
- [ ] If the client has no portfolio yet, remove the `BriefWork` import from `HomePage.tsx`

### `faq.ts`

- [ ] Update or replace FAQ items to match the client's industry and pricing (EN + ES)
  - Most answers about process, revisions, and guarantees can stay as-is
  - **Must update**: pricing ranges, timeline, specific services offered
- [ ] `ctaTitle` / `ctaDescription` / `cta` — Confirm the CTA copy at the bottom is correct

### `pricing.ts`

- [ ] `tiers[].name` — Rename tiers if the client uses different labels (EN + ES)
- [ ] `tiers[].price` — Update prices to match the client's actual rates (EN + ES)
- [ ] `tiers[].description` — Short description per tier (EN + ES)
- [ ] `tiers[].features` — Features list per tier (EN + ES)
- [ ] `tiers[].highlighted` / `tiers[].badge` — Mark the recommended tier
- [ ] If client doesn't want a pricing section, remove `BriefPricing` from `HomePage.tsx`

### `contact.ts`

- [ ] `title` — Section heading (EN + ES)
- [ ] `description` — **Remove lorem ipsum** and write a real invite to reach out (EN + ES)

### `cta-banner.ts`

- [ ] `title` — CTA banner headline (EN + ES)
- [ ] `description` — Supporting copy (EN + ES)
- [ ] `cta` — Button label (EN + ES)
- [ ] `ctaHref` — Where the button points (default `#contact`)

### `metadata.ts` — Page SEO titles and descriptions

- [ ] `home.title` / `home.description` (EN + ES)
- [ ] `services.title` / `services.description` (EN + ES)
- [ ] `about.title` / `about.description` (EN + ES)
- [ ] `contact.title` / `contact.description` (EN + ES)

> These populate the `<title>` and `<meta name="description">` tags for each page. Write them as if you're writing ad copy — clear, specific, keyword-conscious.

### `navigation.ts`

- [ ] Confirm nav labels make sense for the client's language/brand (EN + ES)
- [ ] If going multi-page (Tier 2 client), replace hash anchors with real route paths (instructions are in the file comments)

---

## Phase 5 — Assets

- [ ] Replace `app/favicon.ico` with the client's favicon
  - Export a 32×32 or 64×64 `.ico` from the logo, or use a favicon generator
- [ ] Add portfolio/work images to `public/images/work/`
  - Format: `public/images/work/<project-slug>.jpg`
  - Recommended size: 800×600 px, compressed under 200 KB
  - Match the filenames referenced in `content/dictionaries/work.ts`
- [ ] If the client provides an OG image, add it as `public/og-image.jpg` (1200×630 px)

---

## Phase 6 — SEO & Deploy Checks

### Before deploying

- [ ] `app/robots.ts` — Confirm the `host` URL matches the client's domain
- [ ] `app/sitemap.ts` — Confirm the `baseUrl` matches the client's domain
- [ ] Run `npm run build` — zero errors, zero type errors
- [ ] Check `localhost:3000` in mobile view — confirm layout looks right
- [ ] Submit the contact form — confirm email arrives in the `CONTACT_EMAIL` inbox
- [ ] Check all nav links scroll to the correct section (or route to the correct page)
- [ ] Verify `<html lang="en">` on the EN route and `<html lang="es">` on `/es`
- [ ] Confirm hreflang tags appear in `<head>` on both routes

### After deploying to Vercel

- [ ] Set all env variables in the Vercel project dashboard (same as `.env.local`)
- [ ] Confirm the live URL resolves without `www` redirect issues
- [ ] Submit sitemap to Google Search Console: `https://clientdomain.com/sitemap.xml`
- [ ] Run a [PageSpeed Insights](https://pagespeed.web.dev) test — aim for 90+ on mobile
- [ ] Run a [meta tag preview](https://www.opengraph.xyz) check for the OG image and title

---

## Analytics Reference

This template ships with two Vercel packages already wired into `app/layout.tsx`. No configuration needed — they activate automatically on Vercel deployments and are no-ops in local dev.

### `@vercel/analytics` — Traffic & behavior

What it tracks:
- **Page views** — how many people visited and which pages they hit
- **Top pages** — home vs. services vs. contact, ranked by volume
- **Traffic over time** — see spikes after a social post, Google Business update, etc.
- **Referrers** — where visitors are coming from (Google, Instagram, direct link, etc.)
- **Countries/regions** — useful for bilingual clients to see the EN vs. ES audience split

What it does NOT need: cookies, consent banners. It's privacy-first and GDPR-compliant by default.

### `@vercel/speed-insights` — Real-world performance

Unlike PageSpeed Insights (which runs a lab test), Speed Insights collects data from actual visitors on their real devices and connections.

What it tracks:
- **Core Web Vitals** — LCP (load time), CLS (layout shift), INP (interaction responsiveness)
- **Performance over time** — did a new deploy make things faster or slower?
- **Device breakdown** — mobile vs. desktop scores separately

> Coming from AWS/CloudWatch: think of this as P50/P95 latency from real end-user sessions, not a synthetic probe. The scores you see are aggregated from actual page loads.

### Free tier limits

Vercel Analytics is free up to **2,500 events/month per project** on the Hobby plan. For a typical small business site that's plenty. If a client grows past that, it becomes part of Vercel's Pro plan ($20/mo).

### When to add Google Analytics instead (or alongside)

Stick with Vercel Analytics only unless the client specifically asks for:

| Need | Add this |
|---|---|
| Track specific button/form clicks as conversion events | GA4 |
| See what Google search keywords drive traffic | GA4 + Google Search Console |
| Audience demographics (age, interests) | GA4 (requires cookie consent banner) |
| Goal funnels (e.g. landing page → contact form → submit) | GA4 |

GA4 setup is a billable conversation — don't offer it for free.

### The retainer pitch

> "Every site I build includes real-time analytics. You can see how many people visit, which pages they read, where they're coming from, and how fast the site loads on their phones. No extra cost, no cookie popups."

Monthly retainer touch point: send a 3-bullet summary once a month — "340 visitors, 60% from Google, contact page was #2." Takes 5 minutes, keeps you top of mind, and demonstrates ongoing value.

---

## Quick Reference — File Map

| What to change | File |
|---|---|
| Business name, URL, contact, social | `content/shared.ts` |
| Brand colors | `app/globals.css` |
| Fonts | `app/layout.tsx` |
| Page SEO titles + descriptions | `content/dictionaries/metadata.ts` |
| Hero section | `content/dictionaries/hero.ts` |
| About section | `content/dictionaries/about.ts` |
| Services list | `content/dictionaries/services.ts` |
| Testimonials | `content/dictionaries/testimonials.ts` |
| Portfolio / work cards | `content/dictionaries/work.ts` |
| FAQ questions + answers | `content/dictionaries/faq.ts` |
| Pricing tiers | `content/dictionaries/pricing.ts` |
| Contact section | `content/dictionaries/contact.ts` |
| CTA banner | `content/dictionaries/cta-banner.ts` |
| Nav links | `content/navigation.ts` |
| Favicon | `app/favicon.ico` |
| Work images | `public/images/work/*.jpg` |
| Environment secrets | `.env.local` |
