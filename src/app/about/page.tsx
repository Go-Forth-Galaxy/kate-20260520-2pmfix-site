import Link from "next/link";
import CTABand from "@/components/CTABand";
import Testimonial from "@/components/Testimonial";
import { VALUES, QUOTES } from "@/lib/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (p: string) => `${basePath}${p}`;

export default function AboutPage() {
  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 80, background: "var(--paper)" }}>
        <div className="container">
          <div className="about-hero" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 72, alignItems: "end" }}>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 22 }}><span className="gold-rule" />About 2pmFIX</div>
              <h1 style={{ marginBottom: 28 }}>A consulting boutique for the work that decides the next decade.</h1>
              <p className="lede">We are the evolution of Performentor — a people-first practice with two decades of building high-performing teams and adaptive organizations, now operating at the intersection of People Ops, business strategy, and executive coaching.</p>
            </div>
            <div className="reveal" style={{ aspectRatio: "4/5", overflow: "hidden", background: "var(--cream)", position: "relative" }}>
              <img src={img("/images/about-studio.jpg")} alt="A studio of work — natural light on a long oak table, papers, intent." style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.92)" }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .about-hero { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      <section className="section-tight">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div className="reveal">
            <div className="eyebrow"><span className="gold-rule" />Why we exist</div>
          </div>
          <div className="reveal">
            <h2 style={{ marginBottom: 28 }}>The leaders we work with are creating something worth lasting.</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted)", marginBottom: 22, maxWidth: 720 }}>
              They are founders and organizational leaders running businesses that matter — to their families, their communities, their industries. Multi-generational jewelers. Bio-medical sciences and med-tech. Niche industrial. Automotive racing. The companies whose work shows up in the world.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted)", marginBottom: 22, maxWidth: 720 }}>
              Our job is the structural work that lets them lead — the People Operations architecture, the systems, the rhythms, the coaching — so the next decade is built, not improvised.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "var(--muted)", maxWidth: 720 }}>
              We are reverent about the work our clients are doing. We are energized about the impact it makes possible.
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { section.section-tight .container[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 32px !important; } }
        `}</style>
      </section>

      {/* FIX values, larger */}
      <section className="section" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 14 }}><span className="gold-rule" style={{ background: "var(--gold)" }} />FIX · Our name. Our values.</div>
            <h2 style={{ color: "var(--paper)", maxWidth: 820 }}>The acronym is the practice. The practice is the difference.</h2>
          </div>
          <div className="values-list" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {VALUES.map((v) => (
              <div key={v.letter} className="reveal" style={{ padding: "32px 0", borderTop: "1px solid rgba(251,250,246,0.18)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "6rem", lineHeight: 0.85, color: "var(--gold)", marginBottom: 24 }}>{v.letter}</div>
                <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.7rem", marginBottom: 18 }}>{v.word}</div>
                <p style={{ color: "rgba(251,250,246,0.78)", lineHeight: 1.7 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .values-list { grid-template-columns: 1fr !important; gap: 8px !important; } }
        `}</style>
      </section>

      {/* What we measure */}
      <section className="section">
        <div className="container">
          <div className="measure-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="gold-rule" />How we measure ourselves</div>
              <h2 style={{ marginBottom: 24 }}>In the outcomes only our clients can create.</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "1.05rem", marginBottom: 16 }}>
                Revenue protected. Capacity unlocked. Leaders developed. Cultures that compound. The integration that lands clean. The succession that strengthens the line. The market opened. The Saturday taken back.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: "1.05rem" }}>
                We work quietly. Most of our clients come from someone whose chapter we helped write.
              </p>
            </div>
            <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid var(--rule)" }}>
              {[
                { v: "20 yrs", l: "Of practice" },
                { v: "$10–50M", l: "Client revenue range" },
                { v: "4", l: "Service lines" },
                { v: "97%", l: "Retention through transitions" },
              ].map((m, i) => (
                <div key={m.l} style={{ padding: "36px 28px", borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none", borderBottom: i < 2 ? "1px solid var(--rule)" : "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.6rem", color: "var(--gold-dark)", lineHeight: 1, marginBottom: 10 }}>{m.v}</div>
                  <div className="eyebrow" style={{ fontSize: "0.7rem" }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .measure-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Quotes */}
      <section className="section-tight" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 28 }}><span className="gold-rule" />In their words</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {QUOTES.map((q) => (
              <Testimonial key={q.attribution + q.context} {...q} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Begin a conversation"
        title="If your next chapter deserves to be built, not improvised — let's talk."
      />
    </>
  );
}
