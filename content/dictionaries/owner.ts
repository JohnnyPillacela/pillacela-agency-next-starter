import type { OwnerDict } from "@/types/dictionary"

export const ownerDict = {
    en: {
        name: "Johnny Pillacela",
        title: "Founder & Lead Developer",
        bio: "I started Pillacela Agency to give small businesses access to the same quality of web presence that large companies take for granted. Every site I build is fast, bilingual, and built to bring in real leads — not just look good in a portfolio.",
        imageUrl: "",
        credentials: [
            "Based in Elizabeth, NJ",
            "Bilingual — English & Spanish",
            "7+ years in web development",
        ],
        cta: "Let's work together",
        ctaHref: "#contact",
    } satisfies OwnerDict,
    es: {
        name: "Johnny Pillacela",
        title: "Fundador y Desarrollador Principal",
        bio: "Fundé Pillacela Agency para darle a los pequeños negocios acceso a la misma calidad de presencia web que las grandes empresas dan por sentado. Cada sitio que construyo es rápido, bilingüe y diseñado para generar clientes reales, no solo verse bien en un portafolio.",
        imageUrl: "",
        credentials: [
            "Basado en Elizabeth, NJ",
            "Bilingüe — Inglés y Español",
            "7+ años en desarrollo web",
        ],
        cta: "Trabajemos juntos",
        ctaHref: "#contact",
    } satisfies OwnerDict,
} as const
