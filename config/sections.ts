import type { SectionVariant } from "@/components/layout/section"

/**
 * Section background variants — edit this file per client.
 *
 * Variants:
 *   "default" → bg-background  (plain white / dark)
 *   "muted"   → bg-muted/40    (subtle gray)
 *   "accent"  → bg-accent      (brand tint)
 *   "primary" → bg-primary     (full brand color)
 *
 * Colors are driven by CSS variables in app/globals.css,
 * so they automatically reflect the client's brand palette.
 */
export const sectionBg = {
    hero:         "default",
    painPoints:   "muted",
    about:        "default",
    services:     "muted",
    process:      "default",
    work:         "muted",
    testimonials: "muted",
    trustBadges:  "muted",
    stats:        "muted",
    pricing:      "default",
    faq:          "muted",
    contact:      "default",
    owner:        "muted",
} as const satisfies Record<string, SectionVariant>
