"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { shared } from "@/content/shared"
import { navigation } from "@/content/navigation"
import { Container } from "./container"

export function Navbar() {
    const pathname = usePathname()
    const locale = pathname?.startsWith("/es") ? "es" : "en"
    const navItems = navigation[locale]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <Container>
                <nav className="flex h-14 items-center justify-between">
                    <Link href={locale === "es" ? "/es" : "/"} className="font-semibold text-foreground">
                        {shared.siteName}
                    </Link>
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
        </header>
    )
}
