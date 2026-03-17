// /components/pages/HomePage.tsx

import BriefAbout from "@/components/briefs/BriefAbout"
import BriefContact from "@/components/briefs/BriefContact"
import BriefHero from "@/components/briefs/BriefHero"
import BriefServices from "@/components/briefs/BriefServices"
import type { Dictionary } from "@/types/dictionary"

type Props = {
    dict: Dictionary
}

export default function HomePage({ dict }: Props) {
    return (
        <>
            <BriefHero dict={dict.hero} />
            <BriefAbout dict={dict.about} />
            <BriefServices dict={dict.services} />
            <BriefContact dict={dict.contact} />
        </>
    )
}