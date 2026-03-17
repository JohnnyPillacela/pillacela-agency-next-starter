import type { CommonDict } from "@/types/dictionary"

export const commonDict = {
    en: {
        learnMore: "Learn more",
        viewMore: "View more",
        backToTop: "Back to top",
    } satisfies CommonDict,
    es: {
        learnMore: "Saber más",
        viewMore: "Ver más",
        backToTop: "Volver arriba",
    } satisfies CommonDict,
} as const
