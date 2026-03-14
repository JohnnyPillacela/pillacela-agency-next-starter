type Props = {
    dict: any
}
// This is for people who only pay for a singel webpage. 
export default function BriefContact({ dict }: Props) {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">
                    {dict.title}
                </h2>

                <p>{dict.description}</p>
            </div>
        </section>
    )
}