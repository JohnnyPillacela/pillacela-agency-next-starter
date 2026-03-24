"use client"

import { shared } from "@/content/shared"

export type ContactInfo = {
    email: string
    phone: string
    phoneHref: string
    address: string
}

/** Returns contact info with email reassembled at runtime to avoid raw mailto: patterns in SSR HTML. */
export function useContact(): ContactInfo {
    const [user, domain] = shared.contact.email.split(String.fromCharCode(64))
    const email = [user, String.fromCharCode(64), domain].join("")
    return {
        email,
        phone: shared.contact.phone,
        phoneHref: shared.contact.phoneHref,
        address: shared.contact.address,
    }
}
