import type { ServicesDict } from "@/types/dictionary"

export const servicesDict = {
    en: {
        title: "Our Services",
        heroTitle: "What we offer",
        description: "We offer a wide range of services to help you grow your business.",
        items: [
            "Web Design & Development",
            "SEO & Performance Optimization",
            "Branding & Identity",
            "Landing Pages",
            "E-commerce Solutions",
        ],
        cta: "Book a Consultation",
        ctaHref: "#contact",
    } satisfies ServicesDict,
    es: {
        title: "Nuestros Servicios",
        heroTitle: "Qué ofrecemos",
        description: "Ofrecemos una amplia gama de servicios para ayudarte a crecer tu negocio.",
        items: [
            "Diseño y Desarrollo Web",
            "SEO y Optimización de Rendimiento",
            "Branding e Identidad",
            "Landing Pages",
            "Soluciones E-commerce",
        ],
        cta: "Reservar Consulta",
        ctaHref: "#contact",
    } satisfies ServicesDict,
}
