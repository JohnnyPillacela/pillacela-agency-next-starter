// lib/rateLimit.ts

const ipHits = new Map<string, { count: number; resetAt: number }>()

const WINDOW_MS = 60 * 60 * 1000  // 1 hour
const MAX_HITS = 5                 // submissions per IP per window

// In memory rate limit for the contact form
export function checkRateLimit(ip: string): { allowed: boolean } {
    const now = Date.now()
    const entry = ipHits.get(ip)

    if (!entry || now > entry.resetAt) {
        ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
        return { allowed: true }
    }

    if (entry.count >= MAX_HITS) return { allowed: false }

    entry.count++
    return { allowed: true }
}
