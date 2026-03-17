import { shared } from "@/content/shared"

function trimTrailingSlash(url: string) {
    return url.endsWith("/") ? url.slice(0, -1) : url
}

function normalizePath(path: string) {
    if (path === "/") return "/"
    return path.startsWith("/") ? path : `/${path}`
}

export function getHreflang(path: string) {
    const baseUrl = trimTrailingSlash(shared.url)
    const normalizedPath = normalizePath(path)
    const isSpanishPath = normalizedPath.startsWith("/es")
    const enPath = isSpanishPath
        ? normalizedPath.replace(/^\/es/, "") || "/"
        : normalizedPath
    const esPath = isSpanishPath
        ? normalizedPath
        : normalizedPath === "/"
          ? "/es"
          : `/es${normalizedPath}`

    return {
        alternates: {
            canonical: `${baseUrl}${normalizedPath}`,
            languages: {
                en: `${baseUrl}${enPath}`,
                es: `${baseUrl}${esPath}`,
                "x-default": `${baseUrl}${enPath}`,
            },
        },
    }
}
