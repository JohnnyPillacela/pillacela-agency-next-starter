import type { PainPointsDict } from "@/types/dictionary"

export const painPointsDict = {
    en: {
        title: "Sound familiar?",
        items: [
            "Your website isn't showing up on Google searches",
            "Visitors land on your site and leave without calling",
            "Your site looks outdated compared to your competitors",
            "You paid for a website once but never got real results from it",
            "You don't have a bilingual site and you're missing Spanish-speaking customers",
        ],
        closing:
            "If any of these sound familiar, you're in the right place. We built this agency to fix exactly these problems — fast timelines, bilingual support, and results you can measure.",
    } satisfies PainPointsDict,
    es: {
        title: "¿Te suena conocido?",
        items: [
            "Tu sitio web no aparece en las búsquedas de Google",
            "Los visitantes llegan a tu sitio y se van sin llamar",
            "Tu sitio se ve desactualizado comparado con el de tus competidores",
            "Pagaste por un sitio web una vez pero nunca obtuviste resultados reales",
            "No tienes un sitio bilingüe y estás perdiendo clientes de habla inglesa",
        ],
        closing:
            "Si algo de esto te suena familiar, estás en el lugar correcto. Creamos esta agencia para resolver exactamente estos problemas — plazos rápidos, soporte bilingüe y resultados medibles.",
    } satisfies PainPointsDict,
} as const
