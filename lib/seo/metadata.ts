import type { Metadata } from "next"
import type { Locale } from "@/types/locale"
import { shared } from "@/content/shared"
import { getHreflang } from "./getHreflang"

type PageMetadataOptions = {
    locale: Locale
    path: string
    title: string
    description?: string
}

/**
 * Builds a full Next.js Metadata object for a page.
 * Merges hreflang alternates with title, description, OpenGraph, and Twitter cards.
 * The root layout sets `metadataBase` and the title template, so `title` here
 * should be the short page name (e.g. "Home", "Services").
 */
export function generatePageMetadata({
    locale,
    path,
    title,
    description,
}: PageMetadataOptions): Metadata {
    const hreflang = getHreflang(path, locale)
    const pageDescription = description ?? shared.siteDescription
    const canonical = hreflang.alternates?.canonical as string

    return {
        title,
        description: pageDescription,
        ...hreflang,
        openGraph: {
            title: `${title} | ${shared.siteName}`,
            description: pageDescription,
            url: canonical,
            siteName: shared.siteName,
            locale: locale === "es" ? "es_ES" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | ${shared.siteName}`,
            description: pageDescription,
        },
    }
}
