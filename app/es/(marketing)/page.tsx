import type { Metadata } from "next"
import HomePage from "@/components/pages/HomePage"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { getMetadataDict } from "@/lib/dictionaries"

export function generateMetadata(): Metadata {
    const { home } = getMetadataDict("es")
    return generatePageMetadata({ locale: "es", path: "/es", ...home })
}

export default function Page() {
    return (
        <main>
            <HomePage locale="es" />
        </main>
    )
}