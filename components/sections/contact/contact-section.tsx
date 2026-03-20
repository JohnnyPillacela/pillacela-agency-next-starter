import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import type { ContactDict, FormDict } from "@/types/dictionary"
import { ContactForm } from "./contact-form"
import { ContactInfo } from "./contact-info"

type Props = {
    dict: ContactDict
    form: FormDict
}

// Tier 2+ — multi-page sites. Two-column: contact info left, form right.
export function ContactSection({ dict, form }: Props) {
    return (
        <Section id="contact">
            <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <SectionHeading
                            title={dict.title}
                            description={dict.description}
                        />
                        <div className="mt-8">
                            <ContactInfo />
                        </div>
                    </div>
                    <div>
                        <ContactForm form={form} />
                    </div>
                </div>
            </Container>
        </Section>
    )
}
