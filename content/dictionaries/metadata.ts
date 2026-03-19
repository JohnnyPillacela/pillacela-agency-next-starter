import type { MetadataDict } from "@/types/dictionary"

export const metadataDict = {
    en: {
        home: {
            title: "Home",
            description:
                "Modern websites for small businesses built with performance, SEO, and simplicity in mind.",
        },
        services: {
            title: "Services",
            description:
                "Web design, SEO optimization, branding, landing pages, and e-commerce solutions tailored for your business.",
        },
    } satisfies MetadataDict,
    es: {
        home: {
            title: "Inicio",
            description:
                "Sitios web modernos para pequeñas empresas construidos con rendimiento, SEO y simplicidad.",
        },
        services: {
            title: "Servicios",
            description:
                "Diseño web, optimización SEO, branding, landing pages y soluciones e-commerce a medida para tu negocio.",
        },
    } satisfies MetadataDict,
} as const
