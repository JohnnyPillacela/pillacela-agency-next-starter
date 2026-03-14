// /components/pages/ServicesPage.tsx

import ServicesList from "../sections/services/services-list"

type Props = {
    dict: any
}

export default function ServicesPage({ dict }: Props) {
    return (
        <>
            <h1>{dict.title2}</h1>
            <p>{dict.subtitle2}</p>
            <p>{dict.cta}</p>
            <ServicesList dict={dict} />
        </>
    )
}