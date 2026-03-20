import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CtaButton } from "@/components/shared/cta-button"
import { SectionHeading } from "../shared/section-heading"
import { sectionBg } from "@/config/sections"
import type { ServicesDict } from "@/types/dictionary"

type Props = {
    dict: ServicesDict
}

// Tier 1 — single-page sites. No form, no heavy interactions.
export default function BriefServices({ dict }: Props) {
    return (
        <Section id="services" variant={sectionBg.services}>
            <Container>
                <SectionHeading title={dict.title} description={dict.description} align="center" />
                <ul className="mx-auto max-w-xl divide-y divide-border">
                    {dict.items.map((item: string, index: number) => (
                        <li key={index} className="flex items-center gap-3 py-4">
                            <ArrowRight className="size-4 shrink-0 text-primary" />
                            <span className="text-sm font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
                {dict.cta && (
                    <div className="mt-8 text-center">
                        <CtaButton
                            href={dict.ctaHref ?? "#contact"}
                            variant="secondary"
                        >
                            {dict.cta}
                        </CtaButton>
                    </div>
                )}
            </Container>
        </Section>
    )
}