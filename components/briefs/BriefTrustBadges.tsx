import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { TrustStrip } from "@/components/sections/trust-badges/trust-strip"
import { sectionBg } from "@/config/sections"
import type { TrustBadgesDict } from "@/types/dictionary"

type Props = {
    dict: TrustBadgesDict
}

// Tier 1 — standalone section wrapper. Use when trust badges are not embedded in another section.
export default function BriefTrustBadges({ dict }: Props) {
    return (
        <Section id="trust-badges" variant={sectionBg.trustBadges}>
            <Container>
                <TrustStrip items={dict.items} />
            </Container>
        </Section>
    )
}
