import type { Metadata } from "next"
import ServicesPage from "@/components/pages/ServicesPage"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { getMetadataDict } from "@/lib/dictionaries"

export function generateMetadata(): Metadata {
    const { services } = getMetadataDict("es")
    return generatePageMetadata({ locale: "es", path: "/es/servicios", ...services })
}

export default function Page() {
    return <ServicesPage locale="es" />
}