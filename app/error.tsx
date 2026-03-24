"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { errorsDict } from "@/content/dictionaries/errors"
import { shared } from "@/content/shared"

type Props = {
    reset: () => void
}

export default function Error({ reset }: Props) {
    const pathname = usePathname()
    const locale = pathname?.startsWith("/es") ? "es" : "en"
    const dict = errorsDict[locale]
    const homeHref = locale === "es" ? "/es" : "/"

    return (
        <main className="flex min-h-[calc(100svh-14rem)] flex-col items-center justify-center px-4 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {shared.siteName}
            </p>
            <h1 className="mt-4 text-8xl font-bold tracking-tight">500</h1>
            <p className="mt-4 text-lg text-muted-foreground">{dict.somethingWentWrong}</p>
            <div className="mt-8 flex items-center gap-4">
                <button
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
                >
                    {dict.tryAgain}
                </button>
                <span className="text-muted-foreground">·</span>
                <Link
                    href={homeHref}
                    className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
                >
                    ← {dict.goBackHome}
                </Link>
            </div>
        </main>
    )
}
