"use client"

import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { shared } from "@/content/shared"
import { navigation } from "@/content/navigation"
import { getFooter } from "@/lib/getLayoutDict"
import { Container } from "./container"

const socialConfig = [
    { href: shared.social.instagram, label: "Instagram" },
    { href: shared.social.facebook, label: "Facebook" },
    { href: shared.social.linkedin, label: "LinkedIn" },
].filter((l) => l.href)

const linkStyles =
    "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-sm"

function SocialLinks() {
    if (socialConfig.length === 0) return null

    return (
        <div className="flex items-center gap-1">
            {socialConfig.map(({ href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-label={label}
                >
                    <ExternalLink className="size-4" aria-hidden />
                </a>
            ))}
        </div>
    )
}

export function SiteFooter() {
    const pathname = usePathname()
    const locale = pathname?.startsWith("/es") ? "es" : "en"
    const navItems = navigation[locale]
    const footer = getFooter(locale)
    const { contact } = shared

    return (
        <footer className="mt-auto w-full border-t border-border bg-muted/30">
            <Container>
                <div className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
                    <div className="space-y-3">
                        <Link
                            href={locale === "es" ? "/es" : "/"}
                            className="font-semibold text-foreground transition-colors hover:text-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-sm"
                        >
                            {shared.siteName}
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            {shared.siteDescription}
                        </p>
                        <SocialLinks />
                    </div>

                    <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
                        <nav className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                {footer.linksLabel}
                            </span>
                            <ul className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={linkStyles}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="space-y-2">
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                {footer.contactLabel}
                            </span>
                            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                                <li>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className={linkStyles}
                                    >
                                        {contact.email}
                                    </a>
                                </li>
                                {contact.phone && (
                                    <li>
                                        <a
                                            href={contact.phoneHref}
                                            className={linkStyles}
                                        >
                                            {contact.phone}
                                        </a>
                                    </li>
                                )}
                                {contact.address && (
                                    <li className="max-w-[200px] leading-relaxed">
                                        {contact.address}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border py-4">
                    <p className="text-center text-xs text-muted-foreground">
                        © {new Date().getFullYear()} {shared.siteName}.{" "}
                        {footer.rightsReserved}
                    </p>
                </div>
            </Container>
        </footer>
    )
}
