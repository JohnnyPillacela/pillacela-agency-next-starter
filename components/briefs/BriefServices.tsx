import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CtaButton } from "@/components/shared/cta-button"
import { StatStrip } from "@/components/sections/stats/stat-strip"
import { sectionBg } from "@/config/sections"
import type { ServicesDict, StatsDict } from "@/types/dictionary"

type Props = {
    dict: ServicesDict
    stats?: StatsDict
}

// Tier 1 — single-page sites. No form, no heavy interactions.
// Pass `stats` to show key numbers after the service list — reinforces delivery confidence.
export default function BriefServices({ dict, stats }: Props) {
    return (
        <Section id="services" variant={sectionBg.services}>
            <Container>
                <div className="grid gap-12 md:grid-cols-2 md:items-start md:gap-16">
                    {/* Left: heading + description + CTA */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                            {dict.title}
                        </h2>
                        {dict.description && (
                            <p className="mt-4 text-muted-foreground">{dict.description}</p>
                        )}
                        {dict.cta && (
                            <div className="mt-8">
                                <CtaButton href={dict.ctaHref ?? "#contact"} variant="secondary">
                                    {dict.cta}
                                </CtaButton>
                            </div>
                        )}
                    </div>

                    {/* Right: service cards */}
                    <ul className="space-y-3 md:pt-1">
                        {dict.items.map((item: string, index: number) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
                            >
                                <ArrowRight className="size-4 shrink-0 text-primary" />
                                <span className="text-sm font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {stats && (
                    <div className="mt-14">
                        <StatStrip items={stats.items} />
                    </div>
                )}
            </Container>
        </Section>
    )
}