import { Resend } from "resend";
import { NewLeadEmail } from "@/components/emails/NewLead";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    try {
        const emailContent = NewLeadEmail({ name, email, message });

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["johnnybelesaca@gmail.com"],
            subject: "New Lead - Pillacela Digital Agency (PDA)",
            react: emailContent
        });

        return NextResponse.json({ success: true, data: response });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}