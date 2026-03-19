import Link from "next/link"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import type { CtaBannerDict } from "@/types/dictionary"

type Props = {
    dict: CtaBannerDict
}

export function CtaBanner({ dict }: Props) {
    return (
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
            <Container>
                <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        {dict.title}
                    </h2>
                    {dict.description && (
                        <p className="text-primary-foreground/75 text-lg">
                            {dict.description}
                        </p>
                    )}
                    <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href={dict.ctaHref}>{dict.cta}</Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}
