import { shared } from "@/content/shared"

/** Re-exports from shared. Use shared directly for new code. */
export const siteConfig = {
    name: shared.siteName,
    description: shared.siteDescription,
    url: shared.url,
    contact: shared.contact,
    social: shared.social,
} as const

export type SiteConfig = typeof siteConfig