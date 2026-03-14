// /components/pages/HomePage.tsx

import BriefServices from "@/components/briefs/BriefServices"

type Props = {
    dict: any
}

export default function HomePage({ dict }: Props) {
    return (
        <>
            <h1>{dict.hero.title}</h1>
            <BriefServices dict={dict.services} />
        </>
    )
}