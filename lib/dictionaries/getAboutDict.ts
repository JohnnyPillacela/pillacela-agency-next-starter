import { aboutDict } from "@/content/dictionaries/about"
import type { Locale } from "@/types/locale"

export function getAboutDict(locale: Locale) {
    return aboutDict[locale]
}
