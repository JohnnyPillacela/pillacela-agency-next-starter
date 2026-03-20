import { Mail, MapPin, Phone } from "lucide-react"
import { shared } from "@/content/shared"

const { contact } = shared

// Shared sub-component — used by both BriefContact (Tier 1) and ContactSection (Tier 2+).
// Pulls directly from shared.ts. No props needed.
export function ContactInfo() {
    return (
        <ul className="space-y-4">
            <li>
                <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <Mail className="size-4 shrink-0 text-primary" />
                    {contact.email}
                </a>
            </li>

            {contact.phone && (
                <li>
                    <a
                        href={contact.phoneHref}
                        className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Phone className="size-4 shrink-0 text-primary" />
                        {contact.phone}
                    </a>
                </li>
            )}

            {contact.address && (
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {contact.address}
                </li>
            )}
        </ul>
    )
}
