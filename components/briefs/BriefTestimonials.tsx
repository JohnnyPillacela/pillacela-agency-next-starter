import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { TestimonialCard } from "@/components/sections/testimonials/testimonial-card"
import { sectionBg } from "@/config/sections"
import type { TestimonialItem, TestimonialsDict } from "@/types/dictionary"

type Props = {
    dict: TestimonialsDict
}

// Tier 1: same copy as TestimonialsSection; no portfolio screenshots (those live under Our Work).
export default function BriefTestimonials({ dict }: Props) {
    return (
        <Section id="testimonials" variant={sectionBg.testimonials}>
            <Container>
                <SectionHeading
                    title={dict.title}
                    description={dict.description}
                    align="center"
                />
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
