import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { ContactInfo } from "@/components/sections/contact/contact-info"
import { sectionBg } from "@/config/sections"
import type { ContactDict } from "@/types/dictionary"

type Props = {
    dict: ContactDict
}

// Tier 1 — single-page sites. No form, ever.
export default function BriefContact({ dict }: Props) {
    return (
        <Section id="contact" variant={sectionBg.contact}>
            <Container>
                <div className="mx-auto max-w-xl">
                    <SectionHeading title={dict.title} description={dict.description} />
                    <div className="mt-8">
                        <ContactInfo />
                    </div>
                </div>
            </Container>
        </Section>
    )
}