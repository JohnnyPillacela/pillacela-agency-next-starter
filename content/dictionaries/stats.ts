import type { StatsDict } from "@/types/dictionary"

export const statsDict = {
    en: {
        items: [
            { value: "50+", label: "Clients served" },
            { value: "3 wks", label: "Average launch" },
            { value: "2", label: "Languages supported" },
            { value: "100%", label: "Satisfaction guaranteed" },
        ],
    } satisfies StatsDict,
    es: {
        items: [
            { value: "50+", label: "Clientes atendidos" },
            { value: "3 sem", label: "Lanzamiento promedio" },
            { value: "2", label: "Idiomas disponibles" },
            { value: "100%", label: "Satisfacción garantizada" },
        ],
    } satisfies StatsDict,
} as const
