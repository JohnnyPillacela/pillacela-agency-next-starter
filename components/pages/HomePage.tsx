// /components/pages/HomePage.tsx

import BriefAbout from "@/components/briefs/BriefAbout"
import BriefContact from "@/components/briefs/BriefContact"
import BriefFaq from "@/components/briefs/BriefFaq"
import BriefHero from "@/components/briefs/BriefHero"
import BriefPricing from "@/components/briefs/BriefPricing"
import BriefServices from "@/components/briefs/BriefServices"
import BriefTestimonials from "@/components/briefs/BriefTestimonials"
import BriefWork from "@/components/briefs/BriefWork"
import {
    getAboutDict,
    getContactDict,
    getFaqDict,
    getHeroDict,
    getPricingDict,
    getServicesDict,
    getTestimonialsDict,
    getWorkDict,
} from "@/lib/dictionaries"
import type { Locale } from "@/types/locale"

type Props = {
    locale: Locale
}

export default function HomePage({ locale }: Props) {
    const hero = getHeroDict(locale)
    const about = getAboutDict(locale)
    const services = getServicesDict(locale)
    const work = getWorkDict(locale)
    const contact = getContactDict(locale)
    const testimonials = getTestimonialsDict(locale)
    const faq = getFaqDict(locale)
    const pricing = getPricingDict(locale)

    return (
        <>
            <BriefHero dict={hero} />
            <BriefAbout dict={about} />
            <BriefServices dict={services} />
            <BriefWork dict={work} />
            <BriefTestimonials dict={testimonials} />
            <BriefPricing dict={pricing} />
            <BriefFaq dict={faq} />
            <BriefContact dict={contact} />
        </>
    )
}