import { workDict } from "@/content/dictionaries/work"
import type { Locale } from "@/types/locale"

export function getWorkDict(locale: Locale) {
    return workDict[locale]
}
