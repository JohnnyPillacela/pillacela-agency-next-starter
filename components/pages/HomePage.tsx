// /components/pages/HomePage.tsx

import BriefServices from "@/components/briefs/BriefServices"
import BriefContact from "../briefs/BriefContact"
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
            <BriefServices dict={dict.services} />
            <BriefContact dict={dict.contact} />
        </>
    )
}