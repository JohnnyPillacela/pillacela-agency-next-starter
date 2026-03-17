"use client"

import { usePathname, useRouter } from "next/navigation"
import type { Locale } from "@/types/locale"

export function useLocale() {
    const pathname = usePathname() || "/"
    const router = useRouter()

    const isSpanish = pathname.startsWith("/es")
    const locale: Locale = isSpanish ? "es" : "en"

    function getLocalizedPath(path: string, target: Locale) {
        if (target === "es") {
            if (path.startsWith("/es")) return path
            return `/es${path === "/" ? "" : path}`
        }

        if (!path.startsWith("/es")) return path
        return path.replace(/^\/es/, "") || "/"
    }

    function toggleLocale() {
        const target: Locale = locale === "en" ? "es" : "en"
        const newPath = getLocalizedPath(pathname, target)
        router.push(newPath)
    }

    return {
        locale,
        toggleLocale,
        getLocalizedPath,
    }
}
