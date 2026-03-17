// /app/(marketing)/services/page.tsx

import ServicesPage from "@/components/pages/ServicesPage"
import { getHreflang } from "@/lib/seo/getHreflang"

export async function generateMetadata() {
    return getHreflang("/services", "en")
}

// This is for people who pay for a website with multiple pages. We can offer 1 page for free.
export default function Page() {
    return (
        <>
            <ServicesPage locale="en" />
        </>
    )
}