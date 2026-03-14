"use client"

import { siteConfig } from "@/config/site"
import { Container } from "./container"
import { usePathname } from "next/navigation"
import { navigation } from "@/config/navigation"
import Link from "next/link"

export function SiteFooter() {
    const pathname = usePathname()
    const locale = pathname?.startsWith("/es") ? "es" : "en"
    const navItems = navigation[locale]

    return (
        <footer className="w-full border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <Container>
                <nav className="flex h-14 items-center justify-between">
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            </Container>
        </footer>
    )
}