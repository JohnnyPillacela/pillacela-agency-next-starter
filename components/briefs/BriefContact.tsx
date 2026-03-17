import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import type { ContactDict } from "@/types/dictionary"

type Props = {
    dict: ContactDict
}
// This is for people who only pay for a single webpage.
export default function BriefContact({ dict }: Props) {
    return (
        <Section id="contact">
            <Container>
                <h2 className="text-3xl font-bold mb-8">{dict.title}</h2>
                <p>{dict.description}</p>
                {dict.cta && (
                    <Button asChild className="mt-6">
                        <Link href={dict.ctaHref ?? "#contact"}>{dict.cta}</Link>
                    </Button>
                )}
            </Container>
        </Section>
    )
}