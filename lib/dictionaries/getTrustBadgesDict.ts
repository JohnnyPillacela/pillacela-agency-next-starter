import { trustBadgesDict } from "@/content/dictionaries/trust-badges"
import type { Locale } from "@/types/locale"

export function getTrustBadgesDict(locale: Locale) {
    return trustBadgesDict[locale]
}
