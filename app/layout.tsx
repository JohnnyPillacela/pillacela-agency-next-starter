import type { Metadata } from "next"
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Navbar } from "@/components/layout/navbar"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"
import { SiteFooter } from "@/components/layout/site-footer"
import { FloatingCta } from "@/components/layout/floating-cta"
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

/** Full contact in JSON-LD for local SEO; intentionally unobfuscated (see contact obfuscation plan). */
const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness" as const,
    name: shared.siteName,
    url: shared.url,
    telephone: shared.contact.phoneHref.replace(/^tel:/, ""),
    email: shared.contact.email,
    image: new URL(shared.images.ogImage, shared.url).href,
    address: {
        "@type": "PostalAddress" as const,
        streetAddress: shared.contact.address,
    },
}

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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessJsonLd),
                    }}
                />
                <Navbar />
                {children}
                <SiteFooter />
                <FloatingCta />
                <Toaster />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
