# Pillacela Agency Next Starter

A Next.js starter template for building small business marketing websites. Used as the base for new client projects at Pillacela Agency.

---

## Purpose

This is a **starter repository**—not a shared library. Each new client project starts as a fresh clone. The template provides:

- A clean, reusable architecture for agency sites
- Built-in i18n (English / Spanish)
- Brief-style sections (Hero, About, Services, Contact) for single-page sites
- Config-driven branding and navigation
- Fast setup so you can scaffold a new site in 30–60 minutes

See [context.md](./context.md) for architecture details.

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

### 1. Branding & contact info

Edit [`content/shared.ts`](./content/shared.ts):

- `siteName` — the client's business name
- `url` — the live production URL (used for SEO canonicals and hreflang alternates)
- `contact.email`, `contact.phone`, `contact.phoneHref`, `contact.address`
- `social.instagram`, `social.facebook`, `social.linkedin` — leave empty strings to hide from the footer

### 2. Site metadata

Edit [`app/layout.tsx`](./app/layout.tsx):

Update the `metadata` export to use the client's name and description:

```ts
export const metadata: Metadata = {
  title: shared.siteName,
  description: shared.siteDescription,
};
```

### 3. Page copy (i18n dictionaries)

Edit files in [`content/dictionaries/`](./content/dictionaries/):

Each file (`hero.ts`, `about.ts`, `services.ts`, `contact.ts`, etc.) exports `{ en, es }`. Update both locales with the client's content. Types are enforced by [`types/dictionary.ts`](./types/dictionary.ts).

### 4. Design tokens

Edit [`app/globals.css`](./app/globals.css):

- Update `--color-blue-primary` (and its dark-mode counterpart) to the client's brand color
- Fonts are loaded via `next/font/google` in `app/layout.tsx` — swap Inter / Source Serif 4 if needed

### 5. Deploy

Push to GitHub and connect to [Vercel](https://vercel.com) — zero-config with Next.js App Router. Update `shared.url` to the production URL before launch.
