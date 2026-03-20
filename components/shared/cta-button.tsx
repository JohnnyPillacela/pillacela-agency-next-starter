import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CtaButtonVariant = "primary" | "secondary" | "inverted"

type CtaButtonProps = {
    href: string
    children: React.ReactNode
    variant?: CtaButtonVariant
    size?: "default" | "sm" | "lg"
    className?: string
}

const invertedClasses =
    "border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"

/**
 * Reusable CTA button for hero, CTA banner, brief sections, etc.
 * Use variant="primary" for main CTAs (hero), "secondary" for section CTAs,
 * "inverted" when the button sits on a primary/dark background (e.g. CtaBanner).
 */
export function CtaButton({
    href,
    children,
    variant = "primary",
    size = "default",
    className,
}: CtaButtonProps) {
    const isExternal = href.startsWith("http")
    const buttonVariant =
        variant === "inverted" || variant === "secondary" ? "outline" : "default"

    return (
        <Button
            asChild
            variant={buttonVariant}
            size={size}
            className={cn(variant === "inverted" && invertedClasses, className)}
        >
            <Link
                href={href}
                {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                })}
            >
                {children}
            </Link>
        </Button>
    )
}
