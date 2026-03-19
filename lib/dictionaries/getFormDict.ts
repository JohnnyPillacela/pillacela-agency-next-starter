import { formDict } from "@/content/dictionaries/form"
import type { Locale } from "@/types/locale"

export function getFormDict(locale: Locale) {
    return formDict[locale]
}
