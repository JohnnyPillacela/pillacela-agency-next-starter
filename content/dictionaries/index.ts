import type { Dictionary } from "@/types/dictionary"
import type { Locale } from "@/types/locale"
import { heroDict } from "./hero"
import { aboutDict } from "./about"
import { servicesDict } from "./services"
import { contactDict } from "./contact"
import { footerDict } from "./footer"
import { formDict } from "./form"
import { commonDict } from "./common"
import { errorsDict } from "./errors"
import { metadataDict } from "./metadata"
import { testimonialsDict } from "./testimonials"
import { workDict } from "./work"
import { faqDict } from "./faq"

/** Composed dictionaries per locale. Single source for all translated copy. */
export const dictionaries: Record<Locale, Dictionary> = {
    en: {
        hero: heroDict.en,
        about: aboutDict.en,
        services: servicesDict.en,
        work: workDict.en,
        contact: contactDict.en,
        footer: footerDict.en,
        form: formDict.en,
        common: commonDict.en,
        errors: errorsDict.en,
        metadata: metadataDict.en,
        testimonials: testimonialsDict.en,
        faq: faqDict.en,
    },
    es: {
        hero: heroDict.es,
        about: aboutDict.es,
        services: servicesDict.es,
        work: workDict.es,
        contact: contactDict.es,
        footer: footerDict.es,
        form: formDict.es,
        common: commonDict.es,
        errors: errorsDict.es,
        metadata: metadataDict.es,
        testimonials: testimonialsDict.es,
        faq: faqDict.es,
    },
}
