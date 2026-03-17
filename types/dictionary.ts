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

export type { Locale }

export type Dictionary = {
    hero: HeroDict
    about: AboutDict
    services: ServicesDict
    contact: ContactDict
    footer: FooterDict
    form: FormDict
    common: CommonDict
    errors: ErrorsDict
}
