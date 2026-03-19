"use client"

import { Suspense } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { errorsDict } from "@/content/dictionaries/errors"
import { shared } from "@/content/shared"

function NotFoundContent() {
    const pathname = usePathname()
    const locale = pathname?.startsWith("/es") ? "es" : "en"
    const dict = errorsDict[locale]
    const homeHref = locale === "es" ? "/es" : "/"

    return (
        <>
            <p className="mt-4 text-lg text-muted-foreground">{dict.pageNotFound}</p>
            <Link
                href={homeHref}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
            >
                ← {dict.goBackHome}
            </Link>
        </>
    )
}

export default function NotFound() {
    return (
        <main className="flex min-h-[calc(100svh-14rem)] flex-col items-center justify-center px-4 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {shared.siteName}
            </p>
            <h1 className="mt-4 text-8xl font-bold tracking-tight">404</h1>
            <Suspense
                fallback={
                    <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
                }
            >
                <NotFoundContent />
            </Suspense>
        </main>
    )
}
