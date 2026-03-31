import { ownerDict } from "@/content/dictionaries/owner"
import type { Locale } from "@/types/locale"

export function getOwnerDict(locale: Locale) {
    return ownerDict[locale]
}
