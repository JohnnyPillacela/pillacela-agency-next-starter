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
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { shared } from "@/content/shared"
import type { FaqDict } from "@/types/dictionary"
import { Mail, Phone } from "lucide-react"

type Props = {
    dict: FaqDict
}

// This is for people who only pay for a single webpage.
export default function BriefFaq({ dict }: Props) {
    return (
        <Section id="faq">
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
                            <div className="flex flex-wrap justify-center gap-3">
                                <Button asChild>
                                    <a href={shared.contact.phoneHref}>
                                        <Phone className="mr-2 size-4" />
                                        {shared.contact.phone}
                                    </a>
                                </Button>
                                <Button variant="outline" asChild>
                                    <a href={`mailto:${shared.contact.email}`}>
                                        <Mail className="mr-2 size-4" />
                                        {shared.contact.email}
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </Container>
        </Section>
    )
}
