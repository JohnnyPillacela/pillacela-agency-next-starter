import Image from "next/image"
import { UserCircle } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { CtaButton } from "@/components/shared/cta-button"
import { Badge } from "@/components/ui/badge"
import { sectionBg } from "@/config/sections"
import type { OwnerDict } from "@/types/dictionary"

type Props = {
    dict: OwnerDict
}

// Tier 1 — single-page sites. Human story behind the brand.
export default function BriefOwner({ dict }: Props) {
    return (
        <Section id="owner" variant={sectionBg.owner}>
            <Container>
                <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
                    {/* Left: photo */}
                    <div className="flex justify-center md:justify-start">
                        {dict.imageUrl ? (
                            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border">
                                <Image
                                    src={dict.imageUrl}
                                    alt={dict.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-border bg-background">
                                <UserCircle className="size-24 text-muted-foreground/30" />
                            </div>
                        )}
                    </div>

                    {/* Right: identity */}
                    <div>
                        {dict.title && (
                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                                {dict.title}
                            </p>
                        )}
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                            {dict.name}
                        </h2>
                        <p className="mt-4 text-muted-foreground">{dict.bio}</p>

                        {dict.credentials && dict.credentials.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {dict.credentials.map((c, i) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                        {c}
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {dict.cta && (
                            <div className="mt-8">
                                <CtaButton
                                    href={dict.ctaHref ?? "#contact"}
                                    variant="secondary"
                                >
                                    {dict.cta}
                                </CtaButton>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
