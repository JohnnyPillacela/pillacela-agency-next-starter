// components/emails/NewLead.tsx

export function NewLeadEmail(props: {
    name: string
    email: string
    message: string
}) {
    const { name, email, message } = props

    return (
        <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", backgroundColor: "#f4f4f5", padding: "40px 20px" }}>
            <div style={{ maxWidth: "560px", margin: "0 auto" }}>

                {/* Header */}
                <div style={{ backgroundColor: "#18181b", borderRadius: "8px 8px 0 0", padding: "28px 32px" }}>
                    <p style={{ margin: 0, fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a1a1aa" }}>
                        New Inquiry
                    </p>
                    <h1 style={{ margin: "6px 0 0 0", fontSize: "22px", fontWeight: 700, color: "#ffffff" }}>
                        You have a new lead
                    </h1>
                </div>

                {/* Body */}
                <div style={{ backgroundColor: "#ffffff", padding: "32px", borderLeft: "1px solid #e4e4e7", borderRight: "1px solid #e4e4e7" }}>

                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: "12px 0", borderBottom: "1px solid #f4f4f5", width: "80px", verticalAlign: "top" }}>
                                    <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#a1a1aa" }}>Name</span>
                                </td>
                                <td style={{ padding: "12px 0 12px 16px", borderBottom: "1px solid #f4f4f5", verticalAlign: "top" }}>
                                    <span style={{ fontSize: "15px", color: "#18181b", fontWeight: 500 }}>{name}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "12px 0", borderBottom: "1px solid #f4f4f5", verticalAlign: "top" }}>
                                    <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#a1a1aa" }}>Email</span>
                                </td>
                                <td style={{ padding: "12px 0 12px 16px", borderBottom: "1px solid #f4f4f5", verticalAlign: "top" }}>
                                    <a href={`mailto:${email}`} style={{ fontSize: "15px", color: "#2563eb", textDecoration: "none", fontWeight: 500 }}>{email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: "16px 0 0 0", verticalAlign: "top" }}>
                                    <span style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#a1a1aa" }}>Message</span>
                                </td>
                                <td style={{ padding: "16px 0 0 16px", verticalAlign: "top" }}>
                                    <p style={{ margin: 0, fontSize: "15px", color: "#3f3f46", lineHeight: "1.6" }}>{message}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div style={{ backgroundColor: "#fafafa", borderRadius: "0 0 8px 8px", padding: "20px 32px", border: "1px solid #e4e4e7", borderTop: "none" }}>
                    <p style={{ margin: 0, fontSize: "12px", color: "#a1a1aa" }}>
                        Submitted via your website contact form &middot; {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                </div>

            </div>
        </div>
    )
}
