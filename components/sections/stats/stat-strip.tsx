// /app/components/sections/stats/stat-strip.tsx

import type { StatItem } from "@/types/dictionary"

type Props = {
    items: StatItem[]
}

/** Shared stat grid — no tier awareness. Used by BriefStats (standalone) and BriefHero (embedded). */
export function StatStrip({ items }: Props) {
    return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {items.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1 text-center">
                    <span className="text-4xl font-bold tracking-tight md:text-5xl">
                        {item.value}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
            ))}
        </div>
    )
}
