// lib/resend.ts

import { Resend } from "resend"
import { NewLeadEmail } from "@/components/emails/NewLead"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendLeadEmail(data: {
    name: string
    email: string
    message: string
}) {
    return resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.CONTACT_EMAIL!,
        subject: `New Lead - Pillacela Digital Agency (PDA)`,
        react: NewLeadEmail(data),
    })
}
