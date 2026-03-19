import type { FormDict } from "@/types/dictionary"

export const formDict = {
    en: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Submit",
        sending: "Sending…",
        successMessage: "Message sent! We'll be in touch soon.",
        errorMessage: "Something went wrong. Please try again.",
    } satisfies FormDict,
    es: {
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        submit: "Enviar",
        sending: "Enviando…",
        successMessage: "¡Mensaje enviado! Te contactaremos pronto.",
        errorMessage: "Algo salió mal. Por favor intenta de nuevo.",
    } satisfies FormDict,
} as const
