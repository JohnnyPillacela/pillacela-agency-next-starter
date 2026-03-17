import { commonDict } from "@/content/dictionaries/common"
import type { Locale } from "@/types/locale"

export function getCommonDict(locale: Locale) {
    return commonDict[locale]
}
