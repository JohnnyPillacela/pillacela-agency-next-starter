"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { shared } from "@/content/shared"
import { getNavigationDict } from "@/lib/dictionaries"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from "./container"
import { LanguageSwitcher } from "./language-switcher"

export function Navbar() {
    const pathname = usePathname()
    const locale = pathname?.startsWith("/es") ? "es" : "en"
    const navItems = getNavigationDict(locale)
    const [open, setOpen] = useState(false)
    const navCtaHref = shared.navCta.href.startsWith("#")
        ? `${locale === "es" ? "/es" : ""}${shared.navCta.href}`
        : shared.navCta.href

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <Container>
                <nav className="flex h-14 items-center justify-between">
                    <Link
                        href={locale === "es" ? "/es" : "/"}
                        className="font-semibold text-foreground"
                    >
                        {shared.siteName}
                    </Link>

                    {/* Desktop nav — hidden on mobile */}
                    <div className="hidden items-center gap-6 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button asChild size="sm">
                            <Link href={navCtaHref}>{shared.navCta.label}</Link>
                        </Button>
                        <LanguageSwitcher />
                    </div>

                    {/* Mobile controls — hidden on desktop */}
                    <div className="flex items-center gap-1 md:hidden">
                        <LanguageSwitcher />
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon-sm" aria-label="Open menu">
                                    <MenuIcon className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader className="border-b pb-4">
                                    <SheetTitle>{shared.siteName}</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col gap-1 p-4">
                                    {navItems.map((item) => (
                                        <SheetClose asChild key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                                                onClick={() => setOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                    <div className="mt-4 border-t pt-4">
                                        <Button asChild className="w-full">
                                            <Link href={navCtaHref} onClick={() => setOpen(false)}>
                                                {shared.navCta.label}
                                            </Link>
                                        </Button>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </Container>
        </header>
    )
}
