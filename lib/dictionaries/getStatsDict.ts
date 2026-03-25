import { statsDict } from "@/content/dictionaries/stats"
import type { Locale } from "@/types/locale"

export function getStatsDict(locale: Locale) {
    return statsDict[locale]
}
