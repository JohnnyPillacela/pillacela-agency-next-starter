export type NavItem = {
    label: string
    href: string
}

export const navigation = {
    en: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/#services" },
        { label: "Contact", href: "/#contact" },
    ],

    es: [
        { label: "Inicio", href: "/es" },
        { label: "Servicios", href: "/es#services" },
        { label: "Contacto", href: "/es#contact" },
    ],
}