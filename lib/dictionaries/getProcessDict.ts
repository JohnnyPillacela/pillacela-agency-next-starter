import { processDict } from "@/content/dictionaries/process"
import type { Locale } from "@/types/locale"

export function getProcessDict(locale: Locale) {
    return processDict[locale]
}
