import { faqDict } from "@/content/dictionaries/faq"
import type { Locale } from "@/types/locale"

export function getFaqDict(locale: Locale) {
    return faqDict[locale]
}
