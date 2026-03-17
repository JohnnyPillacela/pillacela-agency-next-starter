import { footerDict } from "@/content/dictionaries/footer"
import type { Locale } from "@/types/locale"

export function getFooterDict(locale: Locale) {
    return footerDict[locale]
}
