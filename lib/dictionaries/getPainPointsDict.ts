import { painPointsDict } from "@/content/dictionaries/pain-points"
import type { Locale } from "@/types/locale"

export function getPainPointsDict(locale: Locale) {
    return painPointsDict[locale]
}
