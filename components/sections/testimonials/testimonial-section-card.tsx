import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { cn, toExternalHref } from "@/lib/utils"
import type { TestimonialItem } from "@/types/dictionary"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
}

type Props = {
    item: TestimonialItem
    visitSiteLabel?: string
}

/** Tier 2+ / multi-page: richer layout than BriefTestimonials — hierarchy, attribution strip, hover. */
export function TestimonialSectionCard({ item, visitSiteLabel }: Props) {
    const linkLabel = visitSiteLabel?.trim() || "Visit site"

    return (
        <Card
            className={cn(
                "group/testimonial h-full gap-0 overflow-hidden border-0 py-0 shadow-sm ring-1 ring-border/50",
                "transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-border",
            )}
        >
            <div className="relative px-6 pt-8 pb-6">
                <blockquote className="relative text-[15px] leading-[1.65] text-foreground">
                    <span
                        className="mb-1 block font-serif text-4xl leading-none text-primary/30 select-none"
                        aria-hidden
                    >
                        &ldquo;
                    </span>
                    <span className="text-pretty">{item.quote}</span>
                    <span className="sr-only">&rdquo;</span>
                </blockquote>
                {item.websiteUrl && (
                    <div className="mt-5">
                        <Link
                            href={toExternalHref(item.websiteUrl)}
                            target="_blank"
                            rel="noopener noreferrer"
                            prefetch={false}
                            className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:border-primary/35 hover:bg-primary/10"
                            aria-label={`${linkLabel} (opens in a new tab)`}
                        >
                            {linkLabel}
                            <ExternalLink className="size-3.5 shrink-0 opacity-80" aria-hidden />
                        </Link>
                    </div>
                )}
            </div>

            <div className="border-t border-border/50 bg-muted/25 px-6 py-5">
                <div className="flex items-center gap-4">
                    <Avatar
                        size="lg"
                        className="ring-2 ring-background shadow-md ring-offset-2 ring-offset-muted/40"
                    >
                        {item.avatarUrl && (
                            <AvatarImage src={item.avatarUrl} alt={item.author} />
                        )}
                        <AvatarFallback className="text-sm font-semibold">
                            {getInitials(item.author)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1 space-y-0.5">
                        <p className="text-sm font-semibold leading-tight tracking-tight text-foreground">
                            {item.author}
                        </p>
                        <p className="text-pretty text-xs leading-snug text-muted-foreground">
                            {item.role}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    )
}
