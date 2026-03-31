// /components/pages/HomePage.tsx

import BriefAbout from "@/components/briefs/BriefAbout"
import BriefOwner from "@/components/briefs/BriefOwner"
import BriefContact from "@/components/briefs/BriefContact"
import BriefFaq from "@/components/briefs/BriefFaq"
import BriefHero from "@/components/briefs/BriefHero"
import BriefPainPoints from "@/components/briefs/BriefPainPoints"
import BriefPricing from "@/components/briefs/BriefPricing"
import BriefServices from "@/components/briefs/BriefServices"
import BriefWork from "@/components/briefs/BriefWork"
import { CtaBanner } from "@/components/shared/cta-banner"
import {
    getAboutDict,
    getContactDict,
    getCtaBannerDict,
    getFaqDict,
    getFormDict,
    getHeroDict,
    getPainPointsDict,
    getStatsDict,
    getOwnerDict,
    getPricingDict,
    getServicesDict,
    getTestimonialsDict,
    getWorkDict,
} from "@/lib/dictionaries"
import type { Locale } from "@/types/locale"
import { ContactSection } from "../sections/contact/contact-section"
import { TestimonialsSection } from "../sections/testimonials/testimonials-section"
import BriefTestimonials from "../briefs/BriefTestimonials"
type Props = {
    locale: Locale
}

export default function HomePage({ locale }: Props) {
    const hero = getHeroDict(locale)
    const painPoints = getPainPointsDict(locale)
    const stats = getStatsDict(locale)
    const about = getAboutDict(locale)
    const owner = getOwnerDict(locale)
    const services = getServicesDict(locale)
    const work = getWorkDict(locale)
    const contact = getContactDict(locale)
    const testimonials = getTestimonialsDict(locale)
    const faq = getFaqDict(locale)
    const pricing = getPricingDict(locale)
    const ctaBanner = getCtaBannerDict(locale)
    const form = getFormDict(locale)

    return (
        <>
            <BriefHero dict={hero} />
            <BriefPainPoints dict={painPoints} />
            <BriefAbout dict={about} />
            <BriefServices dict={services} stats={stats} />
            <BriefWork dict={work} />
            <BriefTestimonials dict={testimonials} />
            <TestimonialsSection dict={testimonials} />
            <BriefPricing dict={pricing} />
            <CtaBanner dict={ctaBanner} />
            <BriefFaq dict={faq} />
            <BriefContact dict={contact} />
            <ContactSection dict={contact} form={form}/>
            <BriefOwner dict={owner} />
        </>
    )
}