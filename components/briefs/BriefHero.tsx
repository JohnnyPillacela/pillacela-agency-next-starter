import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CtaButton } from "@/components/shared/cta-button"
import { sectionBg } from "@/config/sections"
import type { HeroDict } from "@/types/dictionary"

type Props = {
    dict: HeroDict
}

// Compact hero for single-page sites. Above-the-fold intro with title and subtitle.
// TODO: Consider adding a hero image — full-width background or side-by-side layout.
//       Options: full-bg (background-image with overlay), two-col (text left + image/mockup right).
// TODO: Create reusable hero templates (e.g. centered, two-col, full-bg) for different clients.
export default function BriefHero({ dict }: Props) {
    return (
        <Section id="hero" variant={sectionBg.hero} className="py-24 md:py-32">
            <Container>
                <div
                    className={
                        dict.sideContent
                            ? "grid items-center gap-12 md:grid-cols-2 md:gap-16"
                            : "mx-auto max-w-2xl text-center"
                    }
                >
                    <div className={dict.sideContent ? "text-left" : ""}>
                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                            {dict.title}
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            {dict.subtitle}
                        </p>
                        {dict.cta && (
                            <CtaButton
                                href={dict.ctaHref ?? "#contact"}
                                variant="primary"
                                size="lg"
                                className="mt-8"
                            >
                                {dict.cta}
                            </CtaButton>
                        )}
                    </div>
                    {dict.sideContent && (
                        <div className="rounded-lg border border-border bg-muted/50 p-6 text-muted-foreground md:p-8">
                            <p className="text-base leading-relaxed">
                                {dict.sideContent}
                            </p>
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    )
}
