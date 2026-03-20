import { cn } from "@/lib/utils"

export type SectionVariant = "default" | "muted" | "accent" | "primary"

const variantClasses: Record<SectionVariant, string> = {
    default: "bg-background",
    muted:   "bg-secondary",
    accent:  "bg-accent text-accent-foreground",
    primary: "bg-primary text-primary-foreground",
}

type SectionProps = {
    id?: string
    children: React.ReactNode
    className?: string
    variant?: SectionVariant
}

export function Section({ id, children, className, variant = "default" }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24",
                variantClasses[variant],
                className
            )}
        >
            {children}
        </section>
    )
}