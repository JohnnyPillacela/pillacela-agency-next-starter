import type { HeroDict } from "@/types/dictionary"

export const heroDict = {
    en: {
        title: "Pillacela Agency",
        subtitle:
            "Modern websites for small businesses. Built with performance, SEO, and simplicity in mind. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cta: "Book a Consultation",
        ctaHref: "#contact",
    } satisfies HeroDict,
    es: {
        title: "Pillacela Agency",
        subtitle:
            "Sitios web modernos para pequeñas empresas. Construidos con rendimiento, SEO y simplicidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        cta: "Reservar Consulta",
        ctaHref: "#contact",
    } satisfies HeroDict,
} as const
