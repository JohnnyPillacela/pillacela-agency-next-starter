"use client"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/hooks/useLocale"

export function LanguageSwitcher() {
    const { locale, toggleLocale } = useLocale()

    return (
        <Button onClick={toggleLocale} variant="ghost" size="xs">
            {locale === "en" ? "ES" : "EN"}
        </Button>
    )
}
