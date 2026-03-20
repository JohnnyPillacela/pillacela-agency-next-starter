import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { toExternalHref } from "@/lib/utils"
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

/** Tier 1 / landing: compact card. Tier 2 uses `TestimonialSectionCard` instead. */
export function TestimonialCard({ item, visitSiteLabel }: Props) {
    const linkLabel = visitSiteLabel?.trim() || "Visit site"

    return (
        <Card className="h-full">
            <CardContent className="flex h-full flex-col justify-between gap-5 pt-6">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{item.quote}&rdquo;
                </blockquote>
                {item.websiteUrl && (
                    <Link
                        href={toExternalHref(item.websiteUrl)}
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={false}
                        className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                        aria-label={`${linkLabel} (opens in a new tab)`}
                    >
                        {linkLabel}
                        <ExternalLink className="size-3.5 shrink-0 opacity-70" aria-hidden />
                    </Link>
                )}
                <div className="flex items-center gap-3">
                    <Avatar size="lg">
                        {item.avatarUrl && (
                            <AvatarImage src={item.avatarUrl} alt={item.author} />
                        )}
                        <AvatarFallback>{getInitials(item.author)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{item.author}</p>
                        <p className="truncate text-xs text-muted-foreground">{item.role}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
