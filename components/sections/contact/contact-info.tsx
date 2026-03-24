"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useContact } from "@/hooks/useContact"

// Shared sub-component — used by both BriefContact (Tier 1) and ContactSection (Tier 2+).
// Contact values come from useContact() so mailto/tel are not in SSR HTML.
export function ContactInfo() {
    const { email, phone, phoneHref, address } = useContact()

    return (
        <ul className="space-y-4">
            <li>
                <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <Mail className="size-4 shrink-0 text-primary" />
                    {email}
                </a>
            </li>

            {phone && (
                <li>
                    <a
                        href={phoneHref}
                        className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Phone className="size-4 shrink-0 text-primary" />
                        {phone}
                    </a>
                </li>
            )}

            {address && (
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {address}
                </li>
            )}
        </ul>
    )
}
