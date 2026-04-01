"use client"

import { MessageCircle, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import { shared } from "@/content/shared"
import { useContact } from "@/hooks/useContact"

/**
 * Sticky bottom bar — mobile only (hidden at md breakpoint and up).
 * Desktop is covered by the sticky navbar CTA.
 *
 * Phone href is sourced via useContact (runtime-assembled, obfuscated in SSR HTML).
 * navCta label/href pulled from shared.ts — no obfuscation needed for anchor links.
 *
 * Uses scrollIntoView for the CTA button so repeated clicks always scroll,
 * even when #contact is already in the URL.
 */
export function FloatingCta() {
    const { phoneHref } = useContact()
    const pathname = usePathname()
    const isHome = pathname === "/" || pathname === "/es"

    // Current approach:
    // - CTA only renders on homepage routes ("/" and "/es") to avoid being pushy site-wide.
    // - Hash URL uses current pathname + "#contact" so locale stays correct automatically.
    // If you ever want CTA on all pages, remove the guard and point navCtaHref to a canonical target.
    const navCtaHref = pathname ? `${pathname}#contact` : "#contact"

    if (!isHome) return null

    function scrollToTarget() {
        const id = shared.navCta.href.replace(/^#/, "")
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        window.history.replaceState(null, "", navCtaHref)
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80 md:hidden">
            <a
                href={phoneHref}
                className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-medium text-foreground transition-colors hover:bg-muted active:bg-muted"
            >
                <Phone className="size-4 shrink-0" />
                <span>Call Now</span>
            </a>

            <div className="w-px self-stretch bg-border" />

            <button
                type="button"
                onClick={scrollToTarget}
                className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-semibold text-primary transition-colors hover:bg-muted active:bg-muted"
            >
                <MessageCircle className="size-4 shrink-0" />
                <span>{shared.navCta.label}</span>
            </button>
        </div>
    )
}
