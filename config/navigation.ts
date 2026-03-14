export type NavItem = {
    label: string
    href: string
}

export const navigation = {
    en: [
        { label: "Home", href: "/#hero" },
        { label: "Services", href: "/#services" },
        { label: "Contact", href: "/#contact" },
    ],

    es: [
        { label: "Inicio", href: "/es#hero" },
        { label: "Servicios", href: "/es#services" },
        { label: "Contacto", href: "/es#contact" },
    ],
}