import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "../shared/section-heading"

type Props = {
    dict: any
}
// This is for people who only pay for a single webpage.
export default function BriefAbout({ dict }: Props) {
    return (
        <Section id="about">
            <Container>
                <SectionHeading title={dict.title} description={dict.description} align="center" />
            </Container>
        </Section>
    )
}
