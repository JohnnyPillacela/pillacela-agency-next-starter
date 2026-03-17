import type { ErrorsDict } from "@/types/dictionary"

export const errorsDict = {
    en: {
        pageNotFound: "Page not found",
        goBackHome: "Go back home",
    } satisfies ErrorsDict,
    es: {
        pageNotFound: "Página no encontrada",
        goBackHome: "Volver al inicio",
    } satisfies ErrorsDict,
} as const
