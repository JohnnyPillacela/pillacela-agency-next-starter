import { ctaBannerDict } from "@/content/dictionaries/cta-banner"
import type { Locale } from "@/types/locale"

export function getCtaBannerDict(locale: Locale) {
    return ctaBannerDict[locale]
}
