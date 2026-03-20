import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import { WorkItemCard } from "@/components/sections/work/work-item-card"
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
                <ul className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {dict.items.map((item: WorkItem, index: number) => (
                        <li key={index}>
                            <WorkItemCard item={item} visitSiteLabel={dict.visitSiteLabel} />
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}
