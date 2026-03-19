import type { WorkDict } from "@/types/dictionary"

export const workDict = {
    en: {
        title: "Our Work",
        description: "A selection of projects we've built for local businesses.",
        items: [
            {
                title: "Bloom Floral Studio",
                tag: "Web Design",
                image: "/images/work/bloom-floral-studio.jpg",
            },
            {
                title: "Okafor Electric",
                tag: "Branding",
                image: "/images/work/okafor-electric.jpg",
            },
            {
                title: "Reyes Auto Detailing",
                tag: "SEO",
                image: "/images/work/reyes-auto-detailing.jpg",
            },
        ],
    } satisfies WorkDict,
    es: {
        title: "Nuestro Trabajo",
        description: "Una selección de proyectos que hemos desarrollado para negocios locales.",
        items: [
            {
                title: "Bloom Floral Studio",
                tag: "Diseño Web",
                image: "/images/work/bloom-floral-studio.jpg",
            },
            {
                title: "Okafor Electric",
                tag: "Identidad de Marca",
                image: "/images/work/okafor-electric.jpg",
            },
            {
                title: "Reyes Auto Detailing",
                tag: "SEO",
                image: "/images/work/reyes-auto-detailing.jpg",
            },
        ],
    } satisfies WorkDict,
} as const
