import type { ContactDict } from "@/types/dictionary"

export const contactDict = {
    en: {
        title: "Contact Us",
        description:
            "Reach out today for a free consultation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. We'd love to hear about your project.",
        cta: "Send a message",
        ctaHref: "#contact",
    } satisfies ContactDict,
    es: {
        title: "Contáctanos",
        description:
            "Contáctanos hoy para una consulta gratuita. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos encantaría conocer tu proyecto.",
        cta: "Enviar mensaje",
        ctaHref: "#contact",
    } satisfies ContactDict,
} as const
