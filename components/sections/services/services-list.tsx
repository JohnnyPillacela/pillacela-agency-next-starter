import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"

type Props = {
    dict: any
}
// This is for people who pay for a website with multiple pages.
export default function ServicesList({ dict }: Props) {
    return (
        <Section id="services">
            <Container>
                <SectionHeading title={dict.title} description={dict.description} />
                <ul className="grid gap-4 md:grid-cols-2">
                    {dict.items.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}