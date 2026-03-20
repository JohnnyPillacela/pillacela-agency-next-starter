import type { AboutDict } from "@/types/dictionary"

export const aboutDict = {
    en: {
        title: "About Us",
        tagline: "Small team. Real results.",
        description:
            "We are a small agency focused on helping businesses grow online. With years of experience in web design, development, and digital strategy, we craft solutions that are fast, simple, and built to last.",
        highlights: [
            "Fast turnaround — most sites launch in 2–3 weeks",
            "No bloated agency overhead — you work directly with us",
            "Built for performance, SEO, and long-term maintainability",
            "Bilingual support in English and Spanish",
        ],
        cta: "See what we can build for you",
        ctaHref: "#services",
    } satisfies AboutDict,
    es: {
        title: "Sobre Nosotros",
        tagline: "Equipo pequeño. Resultados reales.",
        description:
            "Somos una agencia pequeña enfocada en ayudar a las empresas a crecer en línea. Con años de experiencia en diseño web, desarrollo y estrategia digital, creamos soluciones rápidas, simples y hechas para durar.",
        highlights: [
            "Entrega rápida — la mayoría de los sitios se lanzan en 2–3 semanas",
            "Sin gastos de agencia inflados — trabajas directamente con nosotros",
            "Construido para rendimiento, SEO y mantenibilidad a largo plazo",
            "Soporte bilingüe en inglés y español",
        ],
        cta: "Mira lo que podemos construir para ti",
        ctaHref: "#services",
    } satisfies AboutDict,
} as const
