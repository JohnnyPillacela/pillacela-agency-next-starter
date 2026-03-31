import { MapPin } from "lucide-react"
import type { ServiceAreaItem } from "@/types/dictionary"

type Props = {
    items: ServiceAreaItem[]
    note?: string
}

/** Shared service areas strip — no tier awareness. Used by BriefServiceAreas (standalone). */
export function ServiceAreasStrip({ items, note }: Props) {
    return (
        <div>
            <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm"
                    >
                        <MapPin className="size-3.5 shrink-0 text-primary" />
                        <span>{item.city}{item.state ? `, ${item.state}` : ""}</span>
                    </div>
                ))}
            </div>
            {note && (
                <p className="mt-4 text-center text-xs text-muted-foreground">{note}</p>
            )}
        </div>
    )
}
