import type { CtaBannerDict } from "@/types/dictionary"

export const ctaBannerDict = {
    en: {
        title: "Ready to grow your business?",
        description:
            "Let's build something great together. Reach out and we'll get started right away.",
        cta: "Book a Consultation",
        ctaHref: "#contact",
    } satisfies CtaBannerDict,
    es: {
        title: "¿Listo para hacer crecer tu negocio?",
        description:
            "Construyamos algo increíble juntos. Contáctanos y comenzamos de inmediato.",
        cta: "Reservar Consulta",
        ctaHref: "#contact",
    } satisfies CtaBannerDict,
} as const
