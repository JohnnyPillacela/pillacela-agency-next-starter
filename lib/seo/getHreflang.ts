import { shared } from "@/content/shared"
import type { Locale } from "@/types/locale"

function trimTrailingSlash(url: string) {
    return url.endsWith("/") ? url.slice(0, -1) : url
}

function normalizePath(path: string) {
    if (path === "/") return "/"
    return path.startsWith("/") ? path : `/${path}`
}

export function getHreflang(path: string, locale: Locale = "en") {
    const baseUrl = trimTrailingSlash(shared.url)
    const normalizedPath = normalizePath(path)
    const enPath = normalizedPath.replace(/^\/es(?=\/|$)/, "") || "/"
    const esPath = enPath === "/" ? "/es" : `/es${enPath}`
    const canonicalPath = locale === "es" ? esPath : enPath

    return {
        alternates: {
            canonical: `${baseUrl}${canonicalPath}`,
            languages: {
                en: `${baseUrl}${enPath}`,
                es: `${baseUrl}${esPath}`,
                "x-default": `${baseUrl}${enPath}`,
            },
        },
    }
}
