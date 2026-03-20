import Link from "next/link"
import { Check } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "../shared/section-heading"
import { sectionBg } from "@/config/sections"
import type { AboutDict } from "@/types/dictionary"

type Props = {
    dict: AboutDict
}

// Tier 1 — single-page sites. No form, no heavy interactions.
export default function BriefAbout({ dict }: Props) {
    return (
        <Section id="about" variant={sectionBg.about}>
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <SectionHeading
                        title={dict.title}
                        description={dict.description}
                        align="center"
                    />

                    {dict.tagline && (
                        <p className="mt-2 text-lg font-medium text-foreground">
                            {dict.tagline}
                        </p>
                    )}

                    {dict.highlights && dict.highlights.length > 0 && (
                        <ul className="mt-8 space-y-3 text-left">
                            {dict.highlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {dict.cta && (
                        <div className="mt-8">
                            <Button asChild variant="outline">
                                <Link href={dict.ctaHref ?? "#services"}>{dict.cta}</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    )
}
