import type { Metadata } from "next"
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from "@/components/layout/navbar"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { SiteFooter } from "@/components/layout/site-footer"
import { shared } from "@/content/shared"

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

const fontSerif = Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-serif",
})

const fontMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const metadata: Metadata = {
    metadataBase: new URL(shared.url),
    title: {
        default: shared.siteName,
        template: `%s | ${shared.siteName}`,
    },
    description: shared.siteDescription,
    openGraph: {
        siteName: shared.siteName,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <SiteFooter />
                <Toaster />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
