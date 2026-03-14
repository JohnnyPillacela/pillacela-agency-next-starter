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
- [Recommended Structure](#recommended-structure)

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
| `components/layout` | Layout and structural components |
| `components/sections` | Reusable marketing sections |
| `content` | Site copy, service data, testimonials, and structured content |
| `config` | Branding, business info, site metadata, navigation |
| `lib` | Helper functions, utilities, SEO helpers |

> The template should work like a **system of building blocks**, not a one-off project.

---

## Recommended Structure

```
pillacela-agency-next-starter/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── container.tsx
│   │   ├── section.tsx
│   │   ├── site-footer.tsx
│   │   └── site-header.tsx
│   ├── sections/
│   │   ├── about-section.tsx
│   │   ├── booking-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── cta-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── pricing-section.tsx
│   │   ├── services-section.tsx
│   │   └── testimonials-section.tsx
│   ├── shared/
│   │   └── section-heading.tsx
│   └── ui/
│       └── ...
├── config/
│   ├── navigation.ts
│   ├── site.ts
│   └── theme.ts
├── content/
│   ├── faqs.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── pages/
│       ├── about.ts
│       ├── contact.ts
│       ├── home.ts
│       └── services.ts
├── lib/
│   ├── metadata.ts
│   ├── schema.ts
│   ├── utils.ts
│   └── validations.ts
├── public/
│   ├── favicon/
│   └── images/
│       ├── brand/
│       ├── sections/
│       └── services/
├── types/
│   ├── navigation.ts
│   ├── sections.ts
│   └── site.ts
├── .env.example
├── README.md
├── components.json
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```
