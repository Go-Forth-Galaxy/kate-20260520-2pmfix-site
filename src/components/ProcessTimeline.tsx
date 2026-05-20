type Step = { n: string; title: string; body: string };

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className="reveal" style={{ position: "relative", paddingTop: 40 }}>
      <div className="process-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: 0 }}>
        {steps.map((step, i) => (
          <div key={step.n} style={{ position: "relative", padding: "32px 28px 28px", borderLeft: i === 0 ? "1px solid var(--rule)" : "none", borderRight: "1px solid var(--rule)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", background: i % 2 === 0 ? "var(--paper)" : "var(--cream)" }}>
            <div style={{ position: "absolute", top: -16, left: 24, background: "var(--gold)", color: "var(--ink)", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem" }}>
              {step.n}
            </div>
            <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", marginTop: 14, marginBottom: 12 }}>{step.title}</h4>
            <p style={{ color: "var(--muted)", fontSize: "0.94rem", lineHeight: 1.6 }}>{step.body}</p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
