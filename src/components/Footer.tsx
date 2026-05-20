import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", padding: "80px 0 40px" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 60 }} >
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.8rem" }}>2pm</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.8rem", color: "var(--gold)" }}>FIX</span>
          </div>
          <p style={{ marginTop: 18, color: "rgba(251,250,246,0.7)", maxWidth: 320, fontSize: "0.95rem", lineHeight: 1.6 }}>
            We create CEO capacity. A People Operations consulting boutique for founders building something worth lasting.
          </p>
          <div style={{ marginTop: 26, display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--gold)", fontSize: "0.95rem" }}>
              Future-focused · Inspire Curiosity · eXtreme Impact
            </span>
          </div>
        </div>

        <div>
          <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 18 }}>Services</div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            <li><Link href="/services/people-operations-strategy" className="ftr-link">People Operations Strategy</Link></li>
            <li><Link href="/services/systems-and-process-implementation" className="ftr-link">Systems & Process Implementation</Link></li>
            <li><Link href="/services/emergent-projects" className="ftr-link">Emergent Projects</Link></li>
            <li><Link href="/services/leadership-development" className="ftr-link">Leadership Development</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 18 }}>Company</div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            <li><Link href="/about" className="ftr-link">About</Link></li>
            <li><Link href="/book" className="ftr-link">Discovery Call</Link></li>
            <li><a href="mailto:hello@2pmfix.com" className="ftr-link">hello@2pmfix.com</a></li>
            <li><a href="tel:+13362688762" className="ftr-link">(336) 268-8762</a></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 18 }}>Studio</div>
          <p style={{ color: "rgba(251,250,246,0.7)", fontSize: "0.95rem", lineHeight: 1.7 }}>
            P.O. Box 11534<br />
            Charlotte, NC 28220
          </p>
          <div style={{ marginTop: 26 }}>
            <Link href="/book" className="btn btn-gold" style={{ padding: "12px 18px", fontSize: "0.72rem" }}>
              Begin a Conversation
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(251,250,246,0.16)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, color: "rgba(251,250,246,0.5)", fontSize: "0.82rem" }}>
        <span>© {new Date().getFullYear()} 2pm FIX. All rights reserved.</span>
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>The evolution of Performentor.</span>
      </div>

      <style>{`
        .ftr-link {
          color: rgba(251,250,246,0.7);
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }
        .ftr-link:hover { color: var(--gold); }
        @media (max-width: 900px) {
          footer .container[style*="grid-template-columns"] {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 560px) {
          footer .container[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
