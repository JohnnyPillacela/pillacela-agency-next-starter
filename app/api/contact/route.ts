// app/api/contact/route.ts

import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations/contact"

export async function POST(request: Request) {
    const body = await request.json()

    const result = contactSchema.safeParse(body)

    if (!result.success) {
        return NextResponse.json(
            { error: "Invalid form data.", details: result.error.flatten() },
            { status: 422 }
        )
    }

    // TODO: Uncomment and configure to enable real email sending with Resend.
    // 1. Run: npm install resend
    // 2. Add RESEND_API_KEY and CONTACT_EMAIL to .env.local (see .env.example)
    // 3. Replace "from" with a verified Resend sender domain
    //
    // import { Resend } from "resend"
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //     from: "Contact Form <noreply@yourdomain.com>",
    //     to: process.env.CONTACT_EMAIL!,
    //     subject: `New message from ${result.data.name}`,
    //     text: [
    //         `Name: ${result.data.name}`,
    //         `Email: ${result.data.email}`,
    //         ``,
    //         `Message:`,
    //         result.data.message,
    //     ].join("\n"),
    // })

    return NextResponse.json({ success: true })
}
