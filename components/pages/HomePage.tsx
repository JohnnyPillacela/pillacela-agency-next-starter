// /components/pages/HomePage.tsx

import BriefAbout from "@/components/briefs/BriefAbout"
import BriefContact from "@/components/briefs/BriefContact"
import BriefHero from "@/components/briefs/BriefHero"
import BriefServices from "@/components/briefs/BriefServices"
import {
    getAboutDict,
    getContactDict,
    getHeroDict,
    getServicesDict,
    getTestimonialsDict,
} from "@/lib/dictionaries"
import type { Locale } from "@/types/locale"
import BriefTestimonials from "../briefs/BriefTestimonials"

type Props = {
    locale: Locale
}

export default function HomePage({ locale }: Props) {
    const hero = getHeroDict(locale)
    const about = getAboutDict(locale)
    const services = getServicesDict(locale)
    const contact = getContactDict(locale)
    const testimonials = getTestimonialsDict(locale)

    return (
        <>
            <BriefHero dict={hero} />
            <BriefAbout dict={about} />
            <BriefServices dict={services} />
            <BriefTestimonials dict={testimonials} />
            <BriefContact dict={contact} />
        </>
    )
}