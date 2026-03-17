import { dictionaries } from "@/content/dictionaries"
import type { Dictionary, Locale } from "@/types/dictionary"

export type { Locale } from "@/types/dictionary"

/** Full dictionary — use for pages that need hero, about, services, contact, etc. */
export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale]
}