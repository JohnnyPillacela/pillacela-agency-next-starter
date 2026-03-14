import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

type Props = {
    dict: any
}
// This is for people who only pay for a single webpage.
export default function BriefContact({ dict }: Props) {
    return (
        <Section id="contact">
            <Container>
                <h2 className="text-3xl font-bold mb-8">{dict.title}</h2>
                <p>{dict.description}</p>
            </Container>
        </Section>
    )
}