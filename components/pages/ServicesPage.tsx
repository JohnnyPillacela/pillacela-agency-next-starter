// /components/pages/ServicesPage.tsx

import ServicesList from "../sections/services/services-list"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { getCommonDict, getServicesDict } from "@/lib/dictionaries"
import type { Locale } from "@/types/locale"

type Props = {
    locale: Locale
}

export default function ServicesPage({ locale }: Props) {
    const services = getServicesDict(locale)
    const common = getCommonDict(locale)

    return (
        <>
            <Section>
                <Container>
                    <h1>{services.heroTitle}</h1>
                    <p>{services.description}</p>
                    <p>{services.cta ?? common.learnMore}</p>
                </Container>
            </Section>
            <ServicesList dict={services} />
        </>
    )
}