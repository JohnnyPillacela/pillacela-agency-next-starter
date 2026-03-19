import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import type { ContactDict, FormDict } from "@/types/dictionary"
import { ContactForm } from "./contact-form"

type Props = {
    dict: ContactDict
    form: FormDict
}

export function ContactSection({ dict, form }: Props) {
    return (
        <Section id="contact">
            <Container>
                <SectionHeading
                    title={dict.title}
                    description={dict.description}
                />
                <ContactForm form={form} />
            </Container>
        </Section>
    )
}
