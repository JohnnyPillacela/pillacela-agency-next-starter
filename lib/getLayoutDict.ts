import { footerDict } from "@/content/dictionaries/footer"
import type { Locale } from "@/types/dictionary"

/** Footer labels only — layout use, does not pull full dictionary. */
export function getFooter(locale: Locale) {
    return footerDict[locale]
}
