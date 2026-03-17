import { navigation } from "@/content/navigation"
import type { Locale } from "@/types/locale"

export function getNavigationDict(locale: Locale) {
    return navigation[locale]
}
