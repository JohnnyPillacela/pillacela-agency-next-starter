// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations/contact"
import { checkRateLimit } from "@/lib/rateLimit"
import { sendLeadEmail } from "@/lib/resend"

// Response codes:
//   200 – success (also returned silently for honeypot hits so bots don't retry)
//   422 – Zod validation failed (invalid or missing fields)
//   429 – rate limit exceeded (5 submissions per IP per hour)
//   500 – Resend threw unexpectedly (email not delivered)
export async function POST(request: NextRequest) {
    const body = await request.json()

    // Honeypot: silently accept so bots do not retry with different payloads.
    const honeypot = (body as { website?: unknown }).website
    if (honeypot != null && String(honeypot).trim() !== "") {
        return NextResponse.json({ success: true })
    }

    const result = contactSchema.safeParse(body)

    if (!result.success) {
        return NextResponse.json(
            { error: "Invalid form data.", details: result.error.flatten() },
            { status: 422 }
        )
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
    const { allowed } = checkRateLimit(ip)

    if (!allowed) {
        return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
        )
    }

    // TODO: When adding a database, insert the lead here before sending the email.
    // The ID returned from the insert can be included in the success response.
    // Example: const lead = await db.lead.create({ data: result.data })

    try {
        await sendLeadEmail(result.data)
    } catch(error) {
        console.error(error)
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        )
    }

    return NextResponse.json({ success: true })
}
