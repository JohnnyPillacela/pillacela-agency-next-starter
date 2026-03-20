import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn, toExternalHref } from "@/lib/utils"
import type { WorkItem } from "@/types/dictionary"
import { ExternalLink } from "lucide-react"

type Props = {
    item: WorkItem
    visitSiteLabel?: string
}

export function WorkItemCard({ item, visitSiteLabel }: Props) {
    const siteLinkLabel = visitSiteLabel?.trim() || "Visit site"
    const hasLiveSite = Boolean(item.href)

    const imageBlock = (
        <div className="relative aspect-16/10 w-full bg-muted">
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
        </div>
    )

    const linkBar = hasLiveSite && (
        <div className="flex items-center justify-between gap-2 border-t border-border/30 bg-muted/40 px-4 py-2.5 text-xs font-medium tracking-wide text-muted-foreground uppercase transition-colors group-hover:bg-muted/55 group-hover:text-foreground">
            <span>{siteLinkLabel}</span>
            <ExternalLink
                className="size-3.5 shrink-0 opacity-70 transition-opacity group-hover:opacity-100"
                aria-hidden
            />
        </div>
    )

    const media = hasLiveSite && item.href ? (
        <Link
            href={toExternalHref(item.href)}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className="group block overflow-hidden rounded-t-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`${item.title}: ${siteLinkLabel} (opens in a new tab)`}
        >
            {imageBlock}
            {linkBar}
        </Link>
    ) : (
        <div className="overflow-hidden rounded-t-xl">{imageBlock}</div>
    )

    return (
        <Card
            className={cn(
                "group/work w-full gap-0 overflow-hidden rounded-xl border-0 py-0 shadow-sm ring-1 ring-border/50",
                "transition-[box-shadow,ring-color] duration-200 hover:shadow-md hover:ring-border",
            )}
        >
            {media}
            <CardContent className="flex flex-col gap-0 border-t border-border/40 px-5 pt-4 pb-5">
                <div className="flex items-start justify-between gap-3">
                    <p className="min-w-0 text-base font-semibold leading-snug tracking-tight text-foreground">
                        {item.title}
                    </p>
                    <Badge
                        variant="outline"
                        className={cn(
                            "shrink-0 rounded-full border-primary/25 bg-linear-to-b from-primary/12 to-primary/5 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary shadow-[0_1px_2px_rgba(0,0,0,0.05)] ring-1 ring-primary/10 ring-inset",
                            "dark:border-primary/35 dark:from-primary/18 dark:to-primary/8 dark:text-primary dark:ring-primary/20",
                            "transition-[box-shadow,background-color,border-color] duration-200",
                            "group-hover/work:border-primary/35 group-hover/work:from-primary/16 group-hover/work:to-primary/8 group-hover/work:shadow-[0_2px_6px_rgba(0,0,0,0.06)] dark:group-hover/work:from-primary/22 dark:group-hover/work:to-primary/12",
                        )}
                    >
                        {item.tag}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}
