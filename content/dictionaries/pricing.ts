import type { PricingDict } from "@/types/dictionary"

export const pricingDict = {
    en: {
        title: "Simple, Transparent Pricing",
        description: "Choose the tier that fits your project. No hidden fees.",
        badge: "Pricing",
        tiers: [
            {
                name: "Tier 1",
                price: "$199",
                description: "A clean, single-page website to get you online fast.",
                features: [
                    "One-page website",
                    "English or Spanish (single language)",
                    "Basic on-page SEO",
                    "Mobile responsive",
                ],
                cta: "Get Started",
                ctaHref: "#contact",
            },
            {
                name: "Tier 2",
                price: "$499",
                description: "A bilingual, multi-page site built to be found.",
                features: [
                    "Multi-page website",
                    "English + Spanish (bilingual)",
                    "SEO in both languages",
                    "Performance optimized",
                    "Contact form included",
                ],
                cta: "Get Started",
                ctaHref: "#contact",
                highlighted: true,
                badge: "Most Popular",
            },
            {
                name: "Tier 3",
                price: "From $999",
                description: "A fully custom build for complex or e-commerce needs.",
                features: [
                    "Custom or e-commerce website",
                    "Bilingual (English + Spanish)",
                    "Advanced SEO + analytics setup",
                    "CMS integration",
                    "Priority support",
                ],
                cta: "Let's Talk",
                ctaHref: "#contact",
            },
        ],
    } satisfies PricingDict,
    es: {
        title: "Precios Simples y Transparentes",
        description: "Elige el nivel que se ajuste a tu proyecto. Sin costos ocultos.",
        badge: "Precios",
        tiers: [
            {
                name: "Nivel 1",
                price: "$199",
                description: "Un sitio web de una sola página para que estés en línea rápidamente.",
                features: [
                    "Sitio web de una página",
                    "Inglés o español (un solo idioma)",
                    "SEO básico en la página",
                    "Diseño adaptable a móviles",
                ],
                cta: "Comenzar",
                ctaHref: "#contact",
            },
            {
                name: "Nivel 2",
                price: "$499",
                description: "Un sitio bilingüe de varias páginas diseñado para ser encontrado.",
                features: [
                    "Sitio web de varias páginas",
                    "Inglés + español (bilingüe)",
                    "SEO en ambos idiomas",
                    "Optimizado para rendimiento",
                    "Formulario de contacto incluido",
                ],
                cta: "Comenzar",
                ctaHref: "#contact",
                highlighted: true,
                badge: "Más Popular",
            },
            {
                name: "Nivel 3",
                price: "Desde $999",
                description: "Un desarrollo personalizado para necesidades complejas o e-commerce.",
                features: [
                    "Sitio personalizado o e-commerce",
                    "Bilingüe (inglés + español)",
                    "SEO avanzado + configuración de analítica",
                    "Integración con CMS",
                    "Soporte prioritario",
                ],
                cta: "Hablemos",
                ctaHref: "#contact",
            },
        ],
    } satisfies PricingDict,
} as const
