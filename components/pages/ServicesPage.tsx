import ServicesList from "../sections/services/services-list"
import { PageHero } from "@/components/shared/page-hero"
import { getServicesDict } from "@/lib/dictionaries"
import type { Locale } from "@/types/locale"

type Props = {
    locale: Locale
}

export default function ServicesPage({ locale }: Props) {
    const services = getServicesDict(locale)

    return (
        <main>
            <PageHero
                title={services.heroTitle}
                description={services.description}
                cta={services.cta}
                ctaHref={services.ctaHref}
            />
            <ServicesList dict={services} />
        </main>
    )
}