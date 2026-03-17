// /components/pages/HomePage.tsx

import BriefAbout from "@/components/briefs/BriefAbout"
import BriefContact from "@/components/briefs/BriefContact"
import BriefServices from "@/components/briefs/BriefServices"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

type Props = {
    dict: any
}

export default function HomePage({ dict }: Props) {
    return (
        <>
            <Section id="hero">
                <Container>
                    <h1>{dict.hero.title}</h1>
                </Container>
            </Section>
            <BriefAbout dict={dict.about} />
            <BriefServices dict={dict.services} />
            <BriefContact dict={dict.contact} />
        </>
    )
}