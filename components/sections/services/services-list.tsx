type Props = {
    dict: any
}
// This is for people who pay for a website with multiple pages. 
export default function ServicesList({ dict }: Props) {
    return (
        <section id="services" className="py-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">
                    {dict.title}
                </h2>

                <ul className="grid gap-4 md:grid-cols-2">
                    {dict.items.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}