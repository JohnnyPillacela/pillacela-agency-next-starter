import type { Locale } from "./locale"

export type HeroDict = {
    title: string
    subtitle: string
    cta?: string
    ctaHref?: string
}

export type AboutDict = {
    title: string
    description: string
    cta?: string
    ctaHref?: string
}

export type ServicesDict = {
    title: string
    description?: string
    heroTitle?: string
    cta?: string
    ctaHref?: string
    items: string[]
}

export type ContactDict = {
    title: string
    description: string
    cta?: string
    ctaHref?: string
}

export type FooterDict = {
    linksLabel: string
    contactLabel: string
    rightsReserved: string
}

export type FormDict = {
    name: string
    email: string
    message: string
    submit: string
    sending: string
    successMessage: string
    errorMessage: string
}

export type CommonDict = {
    learnMore: string
    viewMore: string
    backToTop: string
}

export type ErrorsDict = {
    pageNotFound: string
    goBackHome: string
}

export type WorkItem = {
    title: string
    tag: string
    image: string
    href?: string
}

export type WorkDict = {
    title: string
    description?: string
    items: WorkItem[]
}

export type TestimonialItem = {
    quote: string
    author: string
    role: string
    avatarUrl?: string
}

export type TestimonialsDict = {
    title: string
    description?: string
    items: TestimonialItem[]
}

export type PageMetaDict = {
    title: string
    description: string
}

export type MetadataDict = {
    home: PageMetaDict
    services: PageMetaDict
}

export type { Locale }

export type PricingTier = {
    name: string
    price: string
    description: string
    features: string[]
    cta: string
    ctaHref: string
    highlighted?: boolean
    badge?: string
}

export type PricingDict = {
    title: string
    description?: string
    badge?: string
    tiers: [PricingTier, PricingTier, PricingTier]
}

export type FaqItem = {
    question: string
    answer: string
}

export type FaqDict = {
    title: string
    badge?: string
    description?: string
    items: FaqItem[]
    ctaTitle?: string
    ctaDescription?: string
    cta?: string
    ctaHref?: string
}

export type CtaBannerDict = {
    title: string
    description?: string
    cta: string
    ctaHref: string
}

export type Dictionary = {
    hero: HeroDict
    about: AboutDict
    services: ServicesDict
    work: WorkDict
    contact: ContactDict
    footer: FooterDict
    form: FormDict
    common: CommonDict
    errors: ErrorsDict
    metadata: MetadataDict
    testimonials: TestimonialsDict
    faq: FaqDict
    pricing: PricingDict
    ctaBanner: CtaBannerDict
}
