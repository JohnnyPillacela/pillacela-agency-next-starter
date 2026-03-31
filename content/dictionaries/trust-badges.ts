import type { TrustBadgesDict } from "@/types/dictionary"

export const trustBadgesDict = {
    en: {
        items: [
            { label: "No long-term contracts" },
            { label: "30-day satisfaction guarantee" },
            { label: "Launch in 2–3 weeks" },
            { label: "You own everything we build" },
        ],
    } satisfies TrustBadgesDict,
    es: {
        items: [
            { label: "Sin contratos a largo plazo" },
            { label: "Garantía de satisfacción de 30 días" },
            { label: "Lanzamiento en 2–3 semanas" },
            { label: "Eres dueño de todo lo que construimos" },
        ],
    } satisfies TrustBadgesDict,
} as const
