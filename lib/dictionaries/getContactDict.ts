import { contactDict } from "@/content/dictionaries/contact"
import type { Locale } from "@/types/locale"

export function getContactDict(locale: Locale) {
    return contactDict[locale]
}
