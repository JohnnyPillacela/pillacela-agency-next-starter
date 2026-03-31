import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { ServiceAreasStrip } from "@/components/sections/service-areas/service-areas-strip"
import { sectionBg } from "@/config/sections"
import type { ServiceAreasDict } from "@/types/dictionary"

type Props = {
    dict: ServiceAreasDict
}

// Tier 1 — standalone section wrapper. Shows a scrollable pill list of cities served.
export default function BriefServiceAreas({ dict }: Props) {
    return (
        <Section id="service-areas" variant={sectionBg.serviceAreas}>
            <Container>
                <SectionHeading
                    title={dict.title}
                    description={dict.description}
                    align="center"
                />
                <ServiceAreasStrip items={dict.items} note={dict.note} />
            </Container>
        </Section>
    )
}
