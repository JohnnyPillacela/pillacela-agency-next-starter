export const siteConfig = {
    name: "Pillacela Agency",
    description:
        "Modern websites for small businesses built with performance, SEO, and simplicity in mind.",

    url: "https://example.com",

    contact: {
        email: "hello@example.com",
        phone: "(555) 123-4567",
        phoneHref: "tel:+15551234567",
        address: "123 Business Street, City, State",
    },

    social: {
        instagram: "",
        facebook: "",
        linkedin: "",
    },

    ctas: {
        primary: {
            label: "Book a Consultation",
            href: "#contact",
        },
        secondary: {
            label: "View Services",
            href: "#services",
        },
    },
} as const

export type SiteConfig = typeof siteConfig