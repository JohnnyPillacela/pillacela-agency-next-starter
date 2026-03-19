/**
 * Full-page loading skeleton shown during route transitions.
 * Mirrors the rough visual weight of the marketing page sections.
 */
export function PageSkeleton() {
    return (
        <div className="animate-pulse" aria-hidden="true">
            {/* Hero */}
            <div className="py-24 px-4">
                <div className="mx-auto max-w-6xl space-y-5">
                    <div className="h-4 w-24 rounded bg-muted" />
                    <div className="h-12 w-3/4 rounded bg-muted" />
                    <div className="h-6 w-1/2 rounded bg-muted" />
                    <div className="h-6 w-2/5 rounded bg-muted" />
                    <div className="mt-4 h-10 w-36 rounded bg-muted" />
                </div>
            </div>

            {/* Section rows */}
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border-t py-16 px-4">
                    <div className="mx-auto max-w-6xl space-y-4">
                        <div className="h-8 w-1/3 rounded bg-muted" />
                        <div className="h-4 w-full rounded bg-muted" />
                        <div className="h-4 w-5/6 rounded bg-muted" />
                        <div className="h-4 w-4/6 rounded bg-muted" />
                    </div>
                </div>
            ))}
        </div>
    )
}
