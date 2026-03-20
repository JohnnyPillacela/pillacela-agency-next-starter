# Backlog

Future improvements and nice-to-haves for this template. These were intentionally deferred — not forgotten. Revisit when the need comes up on a real client project.

---

## Developer Experience

### Playwright Smoke Tests
End-to-end tests that assert each route returns 200 and the correct `lang` attribute is set (`en` on `/`, `es` on `/es`). Low effort, high confidence for catching broken routes after a refactor.

**When to add:** Once you've shipped 2–3 client sites and want a safety net before touching shared template code.

**What to test at minimum:**
- `GET /` → 200, `<html lang="en">`
- `GET /es` → 200, `<html lang="es">`
- `GET /services` → 200
- `GET /es/servicios` → 200
- Contact form POST → returns 200 (or mock Resend in tests)

### Storybook
Visual documentation of each `Brief` and `Section` component. Useful for showing clients a component library before building their site, or for onboarding a second developer.

**When to add:** If you hire a contractor or have a client who wants to preview components before committing to copy.

---

## Performance

### Bundle Analyzer
Add `@next/bundle-analyzer` as a dev script to inspect what's contributing to bundle size.

```bash
npm install --save-dev @next/bundle-analyzer
```

```js
// next.config.ts
const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" })
module.exports = withBundleAnalyzer({})
```

Run with: `ANALYZE=true npm run build`

**When to add:** If a client's PageSpeed score drops below 85 and you can't identify the cause.

---

## UI/UX

### Dark Mode Toggle
The CSS variables for dark mode are already defined in `globals.css`. `next-themes` is installed. All that's missing is wiring and a toggle in the Navbar.

**How to add:**
1. Wrap root layout in `<ThemeProvider>` from `next-themes`
2. Add a `<ModeToggle>` button to the Navbar (shadcn has a recipe for this)

**When to add:** If a client explicitly asks for it or if you want to offer it as an upsell.

### Entrance Animations
Subtle fade-up animations as sections enter the viewport. Two options:

- **CSS only** — use `tw-animate-css` (already installed) + Intersection Observer hook. Lightweight.
- **Framer Motion** — `npm install motion`. Adds ~30KB but enables staggered children, spring physics, more control.

**Recommendation:** Add per-client with Framer Motion only if the client specifically asks for it. Don't bake it into the starter — it can hurt Core Web Vitals scores if not done carefully.

---

## Advanced Features

### Resend Contact Form
The contact form API returns success but does not send email. Resend integration is commented out in `app/api/contact/route.ts`.

**How to enable:**
1. `npm install resend`
2. Uncomment the Resend block in `app/api/contact/route.ts`
3. Add `RESEND_API_KEY` and `CONTACT_EMAIL` to `.env.local`
4. Replace the `from` address with a verified Resend sender domain

**When to add:** Any client that needs contact form submissions delivered by email.

### CMS Integration
For clients who need to edit their own content without touching code. Two realistic options:

- **Sanity** — Hosted, generous free tier, great DX. Best for text-heavy sites.
- **Payload CMS** — Self-hosted, TypeScript-native, more control. Better for complex data models.

**How it would work:** Replace `content/dictionaries/` fetches with API calls to the CMS. The dictionary types in `types/dictionary.ts` stay — they become the shape you map CMS responses to.

**When to add:** When a client asks "can I update the content myself?" and is willing to pay for the setup time.

### Calendly / Cal.com Booking Embed
A `CalendlyEmbed` or `CalComEmbed` component that can be dropped into the contact section or a dedicated `/booking` page. Replaces or complements the contact form for service businesses that want scheduled consultations.

```tsx
// components/shared/calendly-embed.tsx
export function CalendlyEmbed({ url }: { url: string }) {
    return (
        <div
            className="calendly-inline-widget min-h-[700px] w-full"
            data-url={url}
        />
    )
}
```

Add `NEXT_PUBLIC_BOOKING_URL` to `.env.example` (already documented there).

**When to add:** Any client that does consultations, coaching, or appointment-based services.

### Blog with MDX
A `/blog` route with locale-aware slugs (`/blog/my-post` and `/es/blog/mi-post`). Uses `@next/mdx` or `next-mdx-remote` for content.

**When to add:** If a client wants to publish articles for SEO. Budget at least a full day — locale-aware MDX slugs have real complexity.

### Cookie Consent Banner
Required for EU clients (GDPR) and California clients (CCPA) who use any third-party tracking (GA4, Meta Pixel, etc.).

**Note:** Vercel Analytics (already installed) does NOT require a consent banner — it's cookie-free by design. You only need this if you add GA4, Meta Pixel, or similar.

**Libraries to consider:** `react-cookie-consent` (simple), `cookieyes` (managed, free tier), or a custom shadcn `Alert`-based banner.

**When to add:** Any client with EU visitors or when adding GA4.

### Additional Locale Support
The `Locale` type is `"en" | "es"`. To add a third locale (e.g. Portuguese):

1. Add `"pt"` to `types/locale.ts`
2. Add `app/pt/(marketing)/` route group
3. Add `pt` block to every file in `content/dictionaries/`
4. Add `pt` entries to `content/navigation.ts`
5. Update `app/sitemap.ts` and `app/robots.ts` to include `/pt` routes
6. Update hreflang in `lib/seo/getHreflang.ts`

**When to add:** Only if you pick up a client that needs a third language. EN + ES covers the target market for now.
