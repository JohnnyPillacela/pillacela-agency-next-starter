import { servicesDict } from "@/content/dictionaries/services"
import type { Locale } from "@/types/locale"

export function getServicesDict(locale: Locale) {
    return servicesDict[locale]
}
