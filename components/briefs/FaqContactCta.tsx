"use client"

import { Button } from "@/components/ui/button"
import { useContact } from "@/hooks/useContact"
import { Mail, Phone } from "lucide-react"

export function FaqContactCta() {
    const { email, phone, phoneHref } = useContact()

    return (
        <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
                <a href={phoneHref}>
                    <Phone className="mr-2 size-4" />
                    {phone}
                </a>
            </Button>
            <Button variant="outline" asChild>
                <a href={`mailto:${email}`}>
                    <Mail className="mr-2 size-4" />
                    {email}
                </a>
            </Button>
        </div>
    )
}
