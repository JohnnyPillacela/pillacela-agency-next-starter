import type { WorkDict } from "@/types/dictionary"

export const workDict = {
    en: {
        title: "Our Work",
        description: "A selection of projects we've built for local businesses.",
        visitSiteLabel: "Visit live site",
        items: [
            {
                title: "Ram Roofers",
                tag: "Web Design",
                image: "/website-screenshots/ram-roofers-hero.png",
                href: "https://www.ramroofers.com",
            },
            {
                title: "LPS Construction LLC",
                tag: "Website & SEO",
                image: "/website-screenshots/pillacela-hero.png",
                href: "https://www.pillacela.com",
            },
            {
                title: "Bloom Floral Studio",
                tag: "Web Design",
                // Placeholder — swap for a real project screenshot when you have it.
                image: "https://picsum.photos/seed/bloom-floral/800/450",
                href: "https://www.pillacela.com",
            },
            {
                title: "Reyes Auto Detailing",
                tag: "SEO",
                image: "https://picsum.photos/seed/reyes-auto/800/450",
                href: "https://www.ramroofers.com",
            },
        ],
    } satisfies WorkDict,
    es: {
        title: "Nuestro Trabajo",
        description: "Una selección de proyectos que hemos desarrollado para negocios locales.",
        visitSiteLabel: "Ver sitio en vivo",
        items: [
            {
                title: "Ram Roofers",
                tag: "Diseño Web",
                image: "/website-screenshots/ram-roofers-hero.png",
                href: "https://www.ramroofers.com",
            },
            {
                title: "LPS Construction LLC",
                tag: "Website & SEO",
                image: "/website-screenshots/pillacela-hero.png",
                href: "https://www.pillacela.com",
            },
            {
                title: "Bloom Floral Studio",
                tag: "Diseño Web",
                image: "https://picsum.photos/seed/bloom-floral/800/450",
                href: "https://www.pillacela.com",
            },
            {
                title: "Reyes Auto Detailing",
                tag: "SEO",
                image: "https://picsum.photos/seed/reyes-auto/800/450",
                href: "https://www.ramroofers.com",
            },
        ],
    } satisfies WorkDict,
} as const
