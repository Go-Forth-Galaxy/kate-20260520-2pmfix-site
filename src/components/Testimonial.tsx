type Props = {
  quote: string;
  attribution: string;
  role?: string;
  context?: string;
};

export default function Testimonial({ quote, attribution, role, context }: Props) {
  return (
    <figure className="reveal" style={{ padding: "44px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <span style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--gold-dark)", lineHeight: 0.4, verticalAlign: "top" }}>“</span>
      <blockquote style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.4rem, 2.4vw, 2rem)", lineHeight: 1.32, margin: "12px 0 26px", color: "var(--ink)", maxWidth: 880 }}>
        {quote}
      </blockquote>
      <figcaption style={{ display: "flex", alignItems: "baseline", gap: 14, color: "var(--muted)", fontSize: "0.95rem" }}>
        <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--gold-dark)" }} />
        <span style={{ color: "var(--ink)", fontWeight: 500 }}>{attribution}</span>
        {role && <span style={{ color: "var(--muted)" }}>— {role}</span>}
        {context && <span style={{ color: "var(--muted)", marginLeft: "auto", fontStyle: "italic", fontFamily: "var(--font-display)" }}>{context}</span>}
      </figcaption>
    </figure>
  );
}
