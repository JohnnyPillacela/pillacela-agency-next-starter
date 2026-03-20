import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { TestimonialCard } from "@/components/sections/testimonials/testimonial-card"
import type { TestimonialItem, TestimonialsDict } from "@/types/dictionary"

type Props = {
    dict: TestimonialsDict
}

// This is for people who pay for a website with multiple pages.
export function TestimonialsSection({ dict }: Props) {
    return (
        <Section id="testimonials">
            <Container>
                <SectionHeading title={dict.title} description={dict.description} />
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {dict.items.map((item: TestimonialItem, index: number) => (
                        <li key={index}>
                            <TestimonialCard item={item} visitSiteLabel={dict.visitSiteLabel} />
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}
