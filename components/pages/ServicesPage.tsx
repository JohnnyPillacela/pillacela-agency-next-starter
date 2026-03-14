// /components/pages/ServicesPage.tsx

import ServicesList from "../sections/services/services-list"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

type Props = {
    dict: any
}

export default function ServicesPage({ dict }: Props) {
    return (
        <>
            <Section>
                <Container>
                    <h1>{dict.heroTitle}</h1>
                    <p>{dict.description}</p>
                    <p>{dict.cta}</p>
                </Container>
            </Section>
            <ServicesList dict={dict} />
        </>
    )
}