import { metadataDict } from "@/content/dictionaries/metadata"
import type { Locale } from "@/types/locale"

export function getMetadataDict(locale: Locale) {
    return metadataDict[locale]
}
