import type { Metadata } from "next"
import HomePage from "@/components/pages/HomePage"
import { generatePageMetadata } from "@/lib/seo/metadata"
import { getMetadataDict } from "@/lib/dictionaries"

export function generateMetadata(): Metadata {
    const { home } = getMetadataDict("en")
    return generatePageMetadata({ locale: "en", path: "/", ...home })
}

export default function Page() {
    return (
        <main>
            <HomePage locale="en" />
        </main>
    )
}