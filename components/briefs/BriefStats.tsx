import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { StatStrip } from "@/components/sections/stats/stat-strip"
import { sectionBg } from "@/config/sections"
import type { StatsDict } from "@/types/dictionary"

type Props = {
    dict: StatsDict
}

// Tier 1 — standalone section wrapper. Use when stats are not embedded in another section.
export default function BriefStats({ dict }: Props) {
    return (
        <Section id="stats" variant={sectionBg.owner}>
            <Container>
                <StatStrip items={dict.items} />
            </Container>
        </Section>
    )
}
