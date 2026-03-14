type SectionHeadingProps = {
    title: string
    description?: string
    align?: "left" | "center"
}

export function SectionHeading({
    title,
    description,
    align = "left",
}: SectionHeadingProps) {
    const alignment =
        align === "center"
            ? "text-center mx-auto"
            : "text-left"

    return (
        <div className={`max-w-2xl ${alignment} mb-10`}>
            <h2 className="text-3xl font-bold md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    )
}