# Contact display & spam reduction

This template reduces how easily **simple bots and HTML scrapers** harvest a client’s **email** and **phone** from the public site. It does **not** replace good operational habits (alias inboxes, not posting the owner’s personal cell everywhere, etc.).

---

## What we’re trying to prevent

| Risk | What happens |
|------|----------------|
| **Mailto / tel harvesting** | Scripts download raw HTML and grep for `mailto:`, `tel:`, or obvious `@domain` strings to build spam lists. |
| **Dumb form bots** | Bots POST to `/api/contact` with garbage or phishing payloads. |

---

## What this template does (three layers)

### 1. Client-side contact rendering (`useContact`)

- **Single source of truth:** [`content/shared.ts`](../content/shared.ts) still holds the real `contact.email`, `contact.phone`, `contact.phoneHref`, and `contact.address`. You only edit that file per client.
- **Display:** Phone and email links are built in the browser via [`hooks/useContact.ts`](../hooks/useContact.ts). Components that show clickable email/phone import that hook instead of printing `shared.contact` directly in server-rendered markup.
- **Why:** Naive scrapers that only fetch HTML (no JavaScript) do not see intact `mailto:` / `tel:` strings in the first response the way they would if those values were inlined in a Server Component.

**Server vs client:** Parent sections (e.g. `BriefContact`) can stay Server Components; they render child components (`ContactInfo`, footer, FAQ CTA) that are Client Components and call the hook.

### 2. JSON-LD for search engines (`app/layout.tsx`)

- **LocalBusiness** structured data includes full phone and email from `shared` so **Google** (and similar) can still associate the business with contact details for local SEO.
- **Why:** Search engines are the intended consumer of that block. Typical email/phone harvesters do not rely on JSON-LD the way they rely on visible links in HTML.

### 3. Honeypot on the contact form

- A hidden field (`website`) is in [`components/sections/contact/contact-form.tsx`](../components/sections/contact/contact-form.tsx). Humans never see it; many bots fill every field.
- [`app/api/contact/route.ts`](../app/api/contact/route.ts) treats a non-empty honeypot as a bot: it returns **success** with no processing so the bot is less likely to retry with variants.

---

## Files to know (maintenance)

| Area | Files |
|------|--------|
| Config | [`content/shared.ts`](../content/shared.ts) — update once per client |
| Hook | [`hooks/useContact.ts`](../hooks/useContact.ts) — obfuscation logic in one place |
| UI using the hook | [`components/sections/contact/contact-info.tsx`](../components/sections/contact/contact-info.tsx), [`components/layout/site-footer.tsx`](../components/layout/site-footer.tsx), [`components/briefs/FaqContactCta.tsx`](../components/briefs/FaqContactCta.tsx) |
| SEO (full contact) | [`app/layout.tsx`](../app/layout.tsx) — JSON-LD block |
| Form + API | [`components/sections/contact/contact-form.tsx`](../components/sections/contact/contact-form.tsx), [`app/api/contact/route.ts`](../app/api/contact/route.ts), [`lib/validations/contact.ts`](../lib/validations/contact.ts) |

---

## What this does **not** guarantee

- **Headless browsers** (real JS execution) can still read whatever appears in the DOM after load.
- **Visible text** on the page can still be scraped if the bot parses rendered content.
- **Spam calls and phishing** can still happen via leaked lists, data brokers, or other sites—this stack only **reduces cheap automated harvesting** from *this* site’s HTML patterns.

---

## Talking points for clients (short)

You can say something like:

- We keep your contact info in **one config file** and show it clearly to real visitors.
- We **avoid putting raw mailto/tel strings in the initial HTML** in the way simple scrapers expect, and we add a **hidden field** on the form to catch naive bots.
- **Google** can still read your business details via **structured data** on the page so local search isn’t sacrificed.
- **No extra friction** for users: no CAPTCHA on the marketing form by default.

---

## When you clone this for a new client

1. Fill in [`content/shared.ts`](../content/shared.ts) (`contact.*`, `url`, etc.) as in [CUSTOMIZE.md](../CUSTOMIZE.md).
2. Do **not** duplicate email/phone in components—use the hook for display links or rely on JSON-LD + `shared` for layout metadata only where documented.
3. After enabling real email sending (Resend), keep the honeypot check in the API route so junk POSTs stay cheap to drop.
