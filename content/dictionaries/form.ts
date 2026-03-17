import type { FormDict } from "@/types/dictionary"

export const formDict = {
    en: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit",
        sending: "Sending…",
    } satisfies FormDict,
    es: {
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        submit: "Enviar",
        sending: "Enviando…",
    } satisfies FormDict,
} as const
