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
