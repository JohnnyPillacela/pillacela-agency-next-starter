import { en } from "@/content/locales/en"
import { es } from "@/content/locales/es"

export type Locale = "en" | "es"

export const dictionaries = {
    en,
    es,
}

export function getDictionary(locale: Locale) {
    return dictionaries[locale]
}