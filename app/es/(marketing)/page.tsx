import HomePage from "@/components/pages/HomePage"
import { getHreflang } from "@/lib/seo/getHreflang"

export async function generateMetadata() {
    return getHreflang("/es")
}

export default function Page() {
    return (
        <>
            <HomePage locale="es" />
        </>
    )
}