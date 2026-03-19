import Image from "next/image"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { WorkDict, WorkItem } from "@/types/dictionary"

type Props = {
    dict: WorkDict
}

// This is for people who pay for a website with multiple pages.
export function WorkSection({ dict }: Props) {
    return (
        <Section id="work">
            <Container>
                <SectionHeading title={dict.title} description={dict.description} />
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {dict.items.map((item: WorkItem, index: number) => (
                        <li key={index}>
                            <Card className="overflow-hidden">
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <CardContent className="flex items-center justify-between gap-3 pt-4">
                                    <p className="text-sm font-medium">{item.title}</p>
                                    <Badge variant="secondary">{item.tag}</Badge>
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}
