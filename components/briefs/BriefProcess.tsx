import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { sectionBg } from "@/config/sections"
import type { ProcessDict, ProcessStep } from "@/types/dictionary"

type Props = {
    dict: ProcessDict
}

function ProcessCard({ item }: { item: ProcessStep }) {
    return (
        <div className="flex flex-col gap-4 rounded-lg border border-border bg-muted/40 p-6">
            <span className="text-4xl font-bold tracking-tight text-primary/30">
                {item.step}
            </span>
            <div>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.description}</p>
            </div>
        </div>
    )
}

// Tier 1 — single-page sites. Answers "what's it like to work with you?" before the portfolio.
export default function BriefProcess({ dict }: Props) {
    return (
        <Section id="process" variant={sectionBg.process}>
            <Container>
                <SectionHeading
                    title={dict.title}
                    description={dict.description}
                    align="center"
                />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {dict.items.map((item, i) => (
                        <ProcessCard key={i} item={item} />
                    ))}
                </div>
            </Container>
        </Section>
    )
}
