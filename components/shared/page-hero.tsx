// components/shared/page-hero.tsx

import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"

type PageHeroProps = {
    title: string
    description?: string
    cta?: string
    ctaHref?: string
}

export function PageHero({ title, description, cta, ctaHref }: PageHeroProps) {
    return (
        <Section className="border-b py-20 md:py-28">
            <Container>
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        {title}
                    </h1>
                    {description && (
                        <p className="mt-4 text-lg text-muted-foreground">
                            {description}
                        </p>
                    )}
                    {cta && ctaHref && (
                        <Button asChild className="mt-8" size="lg">
                            <Link href={ctaHref}>{cta}</Link>
                        </Button>
                    )}
                </div>
            </Container>
        </Section>
    )
}
