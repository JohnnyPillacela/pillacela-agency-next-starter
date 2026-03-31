import type { ServiceAreasDict } from "@/types/dictionary"

export const serviceAreasDict = {
    en: {
        title: "Areas We Serve",
        description: "Based in Elizabeth, NJ — working with businesses across New Jersey and remotely nationwide.",
        items: [
            { city: "Elizabeth",        state: "NJ", slug: "elizabeth" },
            { city: "Newark",      state: "NJ", slug: "newark" },
            { city: "Union", state: "NJ", slug: "union" },
            { city: "Hillside", state: "NJ", slug: "hillside" },
            { city: "Roselle", state: "NJ", slug: "roselle" },
            { city: "Roselle Park", state: "NJ", slug: "roselle-park" },
            { city: "Cranford", state: "NJ", slug: "cranford" },
        ],
        note: "Serving clients remotely across New Jersey.",
    } satisfies ServiceAreasDict,
    es: {
        title: "Áreas que Atendemos",
        description: "Con base en Elizabeth, NJ — trabajamos con negocios en New Jersey y a distancia en todo el país.",
        items: [
            { city: "Elizabeth",        state: "NJ", slug: "elizabeth" },
            { city: "Newark",      state: "NJ", slug: "newark" },
            { city: "Union", state: "NJ", slug: "union" },
            { city: "Hillside", state: "NJ", slug: "hillside" },
            { city: "Roselle", state: "NJ", slug: "roselle" },
            { city: "Roselle Park", state: "NJ", slug: "roselle-park" },
            { city: "Cranford", state: "NJ", slug: "cranford" },
        ],
        note: "Atendemos clientes a distancia en todo New Jersey.",
    } satisfies ServiceAreasDict,
} as const
