import HomePage from "@/components/pages/HomePage"
import { getHreflang } from "@/lib/seo/getHreflang"

export async function generateMetadata() {
    return getHreflang("/")
}

export default function Page() {
    return (
        <main>
            <HomePage locale="en" />
        </main>
    )
}