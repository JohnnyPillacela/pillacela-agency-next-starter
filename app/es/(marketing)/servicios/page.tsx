// app/es/(marketing)/servicios/page.tsx

// This is for people who pay for a website with multiple pages. We can offer 1 page for free.
import ServicesPage from "@/components/pages/ServicesPage"
import { getDictionary } from "@/lib/getDictionary"

export default function Page() {
    const dict = getDictionary("es")

    return (
        <>
            <ServicesPage dict={dict.services} />
        </>
    )
}