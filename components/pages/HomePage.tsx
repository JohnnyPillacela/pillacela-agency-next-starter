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
} from "@/lib/dictionaries"
import type { Locale } from "@/types/locale"

type Props = {
    locale: Locale
}

export default function HomePage({ locale }: Props) {
    const hero = getHeroDict(locale)
    const about = getAboutDict(locale)
    const services = getServicesDict(locale)
    const contact = getContactDict(locale)

    return (
        <>
            <BriefHero dict={hero} />
            <BriefAbout dict={about} />
            <BriefServices dict={services} />
            <BriefContact dict={contact} />
        </>
    )
}