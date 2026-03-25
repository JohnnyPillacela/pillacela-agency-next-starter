import { XCircle } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { sectionBg } from "@/config/sections"
import type { PainPointsDict } from "@/types/dictionary"

type Props = {
    dict: PainPointsDict
}

// Tier 1 — single-page sites. Opens with empathy before the pitch.
export default function BriefPainPoints({ dict }: Props) {
    return (
        <Section id="pain-points" variant={sectionBg.painPoints}>
            <Container>
                <div className="mx-auto max-w-2xl">
                    {dict.title && (
                        <SectionHeading title={dict.title} align="center" />
                    )}

                    <ul className="mt-8 space-y-4">
                        {dict.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <XCircle className="mt-0.5 size-5 shrink-0 text-destructive/70" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>

                    {dict.closing && (
                        <div className="mt-10 rounded-lg border border-border bg-background px-6 py-5">
                            <p className="text-sm font-medium leading-relaxed text-foreground">
                                {dict.closing}
                            </p>
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    )
}
