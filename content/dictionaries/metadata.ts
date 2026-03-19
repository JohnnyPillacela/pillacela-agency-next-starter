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
        about: {
            title: "About",
            description:
                "Learn about who we are, what drives us, and how we help small businesses grow online.",
        },
        contact: {
            title: "Contact",
            description:
                "Get in touch to discuss your project. We'd love to hear about your business and how we can help.",
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
        about: {
            title: "Sobre Nosotros",
            description:
                "Conoce quiénes somos, qué nos impulsa y cómo ayudamos a las pequeñas empresas a crecer en línea.",
        },
        contact: {
            title: "Contacto",
            description:
                "Contáctanos para hablar de tu proyecto. Nos encantaría conocer tu negocio y cómo podemos ayudarte.",
        },
    } satisfies MetadataDict,
} as const
