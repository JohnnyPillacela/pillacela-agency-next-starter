import { testimonialsDict } from "@/content/dictionaries/testimonials"
import type { Locale } from "@/types/locale"

export function getTestimonialsDict(locale: Locale) {
    return testimonialsDict[locale]
}
