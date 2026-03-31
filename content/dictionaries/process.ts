import type { ProcessDict } from "@/types/dictionary"

export const processDict = {
    en: {
        title: "How It Works",
        description: "A simple, proven process — from first conversation to live site.",
        items: [
            {
                step: "01",
                title: "Discovery",
                description:
                    "We learn about your business, goals, and customers in a quick 30-minute call.",
            },
            {
                step: "02",
                title: "Design",
                description:
                    "We build a clean, branded design tailored to your industry and client expectations.",
            },
            {
                step: "03",
                title: "Build",
                description:
                    "Your site is developed with performance, SEO, and mobile-first in mind — fast by default.",
            },
            {
                step: "04",
                title: "Launch",
                description:
                    "We go live, submit your sitemap to Google, and hand you full ownership of everything.",
            },
        ],
    } satisfies ProcessDict,
    es: {
        title: "Cómo Funciona",
        description:
            "Un proceso simple y probado — desde la primera conversación hasta el sitio en vivo.",
        items: [
            {
                step: "01",
                title: "Descubrimiento",
                description:
                    "Conocemos tu negocio, objetivos y clientes en una llamada rápida de 30 minutos.",
            },
            {
                step: "02",
                title: "Diseño",
                description:
                    "Creamos un diseño limpio y con tu identidad de marca, adaptado a tu industria.",
            },
            {
                step: "03",
                title: "Desarrollo",
                description:
                    "Tu sitio se construye con rendimiento, SEO y diseño móvil como prioridad — rápido por defecto.",
            },
            {
                step: "04",
                title: "Lanzamiento",
                description:
                    "Publicamos el sitio, enviamos tu mapa al buscador y te entregamos todo lo que es tuyo.",
            },
        ],
    } satisfies ProcessDict,
} as const
