import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CtaButton } from "@/components/shared/cta-button"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { sectionBg } from "@/config/sections"
import type { PricingDict, PricingTier } from "@/types/dictionary"
import { Check } from "lucide-react"

type Props = {
    dict: PricingDict
}

function PricingCard({ tier }: { tier: PricingTier }) {
    return (
        <Card
            className={
                tier.highlighted
                    ? "ring-2 ring-foreground relative overflow-visible"
                    : "relative"
            }
        >
            {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <Badge>{tier.badge}</Badge>
                </div>
            )}
            <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-muted-foreground uppercase tracking-wide">
                    {tier.name}
                </CardTitle>
                <div className="mt-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <CardDescription className="mt-2">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <CtaButton
                    href={tier.ctaHref}
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                >
                    {tier.cta}
                </CtaButton>
            </CardFooter>
        </Card>
    )
}

export default function BriefPricing({ dict }: Props) {
    return (
        <Section id="pricing" variant={sectionBg.pricing}>
            <Container>
                <div className="flex flex-col items-center">
                    {dict.badge && (
                        <Badge variant="secondary" className="mb-4">
                            {dict.badge}
                        </Badge>
                    )}
                    <SectionHeading
                        title={dict.title}
                        description={dict.description}
                        align="center"
                    />
                </div>
                <div className="grid gap-8 pt-5 md:grid-cols-3">
                    {dict.tiers.map((tier, i) => (
                        <PricingCard key={i} tier={tier} />
                    ))}
                </div>
            </Container>
        </Section>
    )
}
