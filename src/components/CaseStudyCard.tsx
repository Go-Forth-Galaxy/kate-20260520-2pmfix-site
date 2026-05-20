type Props = {
  eyebrow: string;
  title: string;
  industry: string;
  metric: string;
  metricLabel: string;
  body: string;
};

export default function CaseStudyCard({ eyebrow, title, industry, metric, metricLabel, body }: Props) {
  return (
    <article className="reveal" style={{ background: "var(--paper)", border: "1px solid var(--rule)", padding: 40, display: "flex", flexDirection: "column", gap: 18 }}>
      <div className="eyebrow"><span className="gold-rule" />{eyebrow}</div>
      <h3 style={{ fontSize: "1.6rem" }}>{title}</h3>
      <div style={{ display: "flex", gap: 32, alignItems: "baseline", paddingTop: 8 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: "var(--gold-dark)", lineHeight: 1 }}>{metric}</div>
          <div className="eyebrow" style={{ fontSize: "0.66rem", marginTop: 6 }}>{metricLabel}</div>
        </div>
        <div style={{ flex: 1, height: 1, background: "var(--rule)" }} />
      </div>
      <p style={{ color: "var(--muted)", fontSize: "0.98rem", lineHeight: 1.65 }}>{body}</p>
      <div style={{ marginTop: "auto", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
        <span>{industry}</span>
        <span style={{ fontFamily: "var(--font-display)", textTransform: "none", letterSpacing: 0, color: "var(--gold-dark)", fontStyle: "italic" }}>case study</span>
      </div>
    </article>
  );
}
