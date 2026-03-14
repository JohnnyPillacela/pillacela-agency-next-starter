// /app/(marketing)/services/page.tsx

import ServicesPage from "@/components/pages/ServicesPage"
import { getDictionary } from "@/lib/getDictionary"

// This is for people who pay for a website with multiple pages. We can offer 1 page for free.
export default function Page() {
    const dict = getDictionary("en")

    return (
        <>
            <ServicesPage dict={dict.services} />
        </>
    )
}