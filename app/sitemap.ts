import type { MetadataRoute } from "next"
import { shared } from "@/content/shared"

/** All page routes paired with their locale equivalents. */
const routes = [
    { en: "/", es: "/es" },
    { en: "/services", es: "/es/servicios" },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = shared.url.replace(/\/$/, "")

    return routes.flatMap(({ en, es }) => [
        {
            url: `${baseUrl}${en}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: en === "/" ? 1.0 : 0.8,
            alternates: {
                languages: {
                    en: `${baseUrl}${en}`,
                    es: `${baseUrl}${es}`,
                },
            },
        },
        {
            url: `${baseUrl}${es}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: es === "/es" ? 1.0 : 0.8,
            alternates: {
                languages: {
                    en: `${baseUrl}${en}`,
                    es: `${baseUrl}${es}`,
                },
            },
        },
    ])
}
