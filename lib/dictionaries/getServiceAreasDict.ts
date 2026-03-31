import { serviceAreasDict } from "@/content/dictionaries/service-areas"
import type { Locale } from "@/types/locale"

export function getServiceAreasDict(locale: Locale) {
    return serviceAreasDict[locale]
}
