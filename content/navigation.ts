// content/navigation.ts
//
// SINGLE-PAGE vs MULTI-PAGE NAV
// ─────────────────────────────
// Tier 1 — Single-page client (default):
//   All sections live on one page. Nav links use hash anchors so clicking
//   scrolls the user to the right section. Section components must have a
//   matching `id` prop (e.g. <Section id="services">).
//
//   Example:
//     { label: "Services", href: "/#services" }   ← EN
//     { label: "Servicios", href: "/es#services" } ← ES
//
// Tier 2 — Multi-page client:
//   Each section gets its own dedicated route. Nav links must point to the
//   real page path, NOT a hash anchor. Never mix the two for the same item.
//
//   Example:
//     { label: "Services", href: "/services" }    ← EN
//     { label: "Servicios", href: "/es/servicios" } ← ES
//
// This file is the single source of truth for nav. Update hrefs here when
// upgrading a client from single-page to multi-page — nowhere else.

import type { Locale } from "@/types/locale"

export type NavItem = {
    label: string
    href: string
}

// Currently set up for a SINGLE-PAGE (Tier 1) client.
// To switch to multi-page, replace hash hrefs with real route paths (see above).
export const navigation: Record<Locale, NavItem[]> = {
    en: [
        { label: "Home", href: "/" },
        { label: "About", href: "/#about" },
        { label: "Services", href: "/#services" },
        { label: "Contact", href: "/#contact" },
    ],
    es: [
        { label: "Inicio", href: "/es" },
        { label: "Sobre Nosotros", href: "/es#about" },
        { label: "Servicios", href: "/es#services" },
        { label: "Contacto", href: "/es#contact" },
    ],
}
