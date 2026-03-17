import { heroDict } from "@/content/dictionaries/hero"
import type { Locale } from "@/types/locale"

export function getHeroDict(locale: Locale) {
    return heroDict[locale]
}
