import ServicesPage from "@/components/pages/ServicesPage"
import { getHreflang } from "@/lib/seo/getHreflang"

export async function generateMetadata() {
    return getHreflang("/es/services")
}

export default function Page() {
    return (
        <>
            <ServicesPage locale="es" />
        </>
    )
}
