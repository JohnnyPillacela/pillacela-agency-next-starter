// app/es/(marketing)/services/page.tsx

// This is for people who pay for a website with multiple pages. We can offer 1 page for free.
import ServicesPage from "@/components/pages/ServicesPage"
import { getHreflang } from "@/lib/seo/getHreflang"

export async function generateMetadata() {
    return getHreflang("/services", "es")
}

export default function Page() {
    return (
        <>
            <ServicesPage locale="es" />
        </>
    )
}