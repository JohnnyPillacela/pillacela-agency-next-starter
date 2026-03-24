import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/shared/section-heading"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FaqContactCta } from "./FaqContactCta"
import { sectionBg } from "@/config/sections"
import type { FaqDict } from "@/types/dictionary"

type Props = {
    dict: FaqDict
}

// This is for people who only pay for a single webpage.
export default function BriefFaq({ dict }: Props) {
    return (
        <Section id="faq" variant={sectionBg.faq}>
            <Container>
                <div className="flex flex-col items-center">
                    {dict.badge && (
                        <Badge variant="secondary" className="mb-4">
                            {dict.badge}
                        </Badge>
                    )}
                    <SectionHeading
                        title={dict.title}
                        description={dict.description}
                        align="center"
                    />
                </div>

                <Accordion
                    type="single"
                    collapsible
                    className="mx-auto w-full max-w-2xl"
                >
                    {dict.items.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {dict.ctaTitle && (
                    <Card className="mx-auto mt-12 w-full max-w-2xl">
                        <CardContent className="flex flex-col items-center gap-6 py-10 text-center">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">
                                    {dict.ctaTitle}
                                </h3>
                                {dict.ctaDescription && (
                                    <p className="text-sm text-muted-foreground">
                                        {dict.ctaDescription}
                                    </p>
                                )}
                            </div>
                            <FaqContactCta />
                        </CardContent>
                    </Card>
                )}
            </Container>
        </Section>
    )
}
