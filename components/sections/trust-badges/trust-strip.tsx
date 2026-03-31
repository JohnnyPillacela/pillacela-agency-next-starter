import { ShieldCheck } from "lucide-react"
import type { TrustBadgeItem } from "@/types/dictionary"

type Props = {
    items: TrustBadgeItem[]
}

/** Shared trust badge row — no tier awareness. Used by BriefTrustBadges (standalone) and BriefPricing (embedded). */
export function TrustStrip({ items }: Props) {
    return (
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ShieldCheck className="size-4 shrink-0 text-primary" />
                    <span>{item.label}</span>
                </div>
            ))}
        </div>
    )
}
