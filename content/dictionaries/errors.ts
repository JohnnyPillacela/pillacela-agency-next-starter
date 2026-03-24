import type { ErrorsDict } from "@/types/dictionary"

export const errorsDict = {
    en: {
        pageNotFound: "Page not found",
        goBackHome: "Go back home",
        somethingWentWrong: "Something went wrong",
        tryAgain: "Try again",
    } satisfies ErrorsDict,
    es: {
        pageNotFound: "Página no encontrada",
        goBackHome: "Volver al inicio",
        somethingWentWrong: "Algo salió mal",
        tryAgain: "Intentar de nuevo",
    } satisfies ErrorsDict,
} as const
