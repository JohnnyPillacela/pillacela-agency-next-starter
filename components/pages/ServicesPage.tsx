// /components/pages/ServicesPage.tsx

type Props = {
    dict: any
}

export default function ServicesPage({ dict }: Props) {
    return (
        <>
            <h1>{dict.title2}</h1>
            <p>{dict.subtitle2}</p>
            <p>{dict.cta}</p>
        </>
    )
}