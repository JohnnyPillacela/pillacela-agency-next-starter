import type { Metadata } from "next"
import ServicesPage from "@/components/pages/ServicesPage"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { getMetadataDict } from "@/lib/dictionaries"

export function generateMetadata(): Metadata {
    const { services } = getMetadataDict("en")
    return generatePageMetadata({ locale: "en", path: "/services", ...services })
}

export default function Page() {
    return <ServicesPage locale="en" />
}