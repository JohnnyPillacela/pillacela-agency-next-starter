// content/navigation.ts

import type { Locale } from "@/types/locale"

export type NavItem = {
    label: string
    href: string
}

export const navigation: Record<Locale, NavItem[]> = {
    en: [
        { label: "Home", href: "/" },
        { label: "About", href: "/#about" },
        { label: "Services", href: "/#services" },
        { label: "Contact", href: "/#contact" },
    ],
    es: [
        { label: "Inicio", href: "/es" },
        { label: "Sobre Nosotros", href: "/es#about" },
        { label: "Servicios", href: "/es#services" },
        { label: "Contacto", href: "/es#contact" },
    ],
}
