import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

type Props = {
    dict: any
}
// Compact hero for single-page sites. Above-the-fold intro with title and subtitle.
export default function BriefHero({ dict }: Props) {
    return (
        <Section id="hero" className="py-24 md:py-32">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        {dict.title}
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        {dict.subtitle}
                    </p>
                </div>
            </Container>
        </Section>
    )
}
