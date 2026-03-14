// /components/pages/HomePage.tsx

import BriefServices from "@/components/briefs/BriefServices"
import BriefContact from "../briefs/BriefContact"

type Props = {
    dict: any
}

export default function HomePage({ dict }: Props) {
    return (
        <>
            <h1>{dict.hero.title}</h1>
            <BriefServices dict={dict.services} />
            <BriefContact dict={dict.contact} />
        </>
    )
}