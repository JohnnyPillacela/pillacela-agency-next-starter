import type { AboutDict } from "@/types/dictionary"

export const aboutDict = {
    en: {
        title: "About Us",
        description:
            "We are a small agency focused on helping businesses grow online. With years of experience in web design, development, and digital strategy, we craft solutions that are fast, simple, and built to last.",
        cta: "Learn more about us",
        ctaHref: "#services",
    } satisfies AboutDict,
    es: {
        title: "Sobre Nosotros",
        description:
            "Somos una agencia pequeña enfocada en ayudar a las empresas a crecer en línea. Con años de experiencia en diseño web, desarrollo y estrategia digital, creamos soluciones rápidas, simples y hechas para durar.",
        cta: "Conoce más sobre nosotros",
        ctaHref: "#services",
    } satisfies AboutDict,
} as const
