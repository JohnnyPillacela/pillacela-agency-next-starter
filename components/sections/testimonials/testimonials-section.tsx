import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import type { TestimonialItem, TestimonialsDict } from "@/types/dictionary"

type Props = {
    dict: TestimonialsDict
}

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
}

// This is for people who pay for a website with multiple pages.
export function TestimonialsSection({ dict }: Props) {
    return (
        <Section id="testimonials">
            <Container>
                <SectionHeading title={dict.title} description={dict.description} />
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {dict.items.map((item: TestimonialItem, index: number) => (
                        <li key={index}>
                            <Card className="h-full">
                                <CardContent className="flex h-full flex-col justify-between gap-6 pt-6">
                                    <blockquote className="text-sm leading-relaxed text-muted-foreground">
                                        &ldquo;{item.quote}&rdquo;
                                    </blockquote>
                                    <div className="flex items-center gap-3">
                                        <Avatar size="lg">
                                            {item.avatarUrl && (
                                                <AvatarImage src={item.avatarUrl} alt={item.author} />
                                            )}
                                            <AvatarFallback>{getInitials(item.author)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-medium">{item.author}</p>
                                            <p className="text-xs text-muted-foreground">{item.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}
