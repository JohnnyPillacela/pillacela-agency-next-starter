import { pricingDict } from "@/content/dictionaries/pricing"
import type { Locale } from "@/types/locale"

export function getPricingDict(locale: Locale) {
    return pricingDict[locale]
}
