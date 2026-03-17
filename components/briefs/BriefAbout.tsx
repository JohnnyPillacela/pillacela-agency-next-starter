import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "../shared/section-heading"
import type { AboutDict } from "@/types/dictionary"

type Props = {
    dict: AboutDict
}
// This is for people who only pay for a single webpage.
export default function BriefAbout({ dict }: Props) {
    return (
        <Section id="about">
            <Container>
                <SectionHeading title={dict.title} description={dict.description} align="center" />
                {dict.cta && (
                    <div className="mt-6 text-center">
                        <Button asChild variant="outline">
                            <Link href={dict.ctaHref ?? "#services"}>{dict.cta}</Link>
                        </Button>
                    </div>
                )}
            </Container>
        </Section>
    )
}
