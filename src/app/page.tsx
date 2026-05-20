import Link from "next/link";
import { SERVICES, QUOTES, CASE_STUDIES, VALUES } from "@/lib/content";
import Testimonial from "@/components/Testimonial";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (p: string) => `${basePath}${p}`;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", paddingTop: 140, paddingBottom: 0, background: "var(--paper)", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 80, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,162,39,0.18), transparent 60%)", pointerEvents: "none" }} />
        <div className="container" style={{ paddingTop: 40, paddingBottom: 80, position: "relative" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 64, alignItems: "end" }}>
            <div className="reveal in">
              <div className="eyebrow" style={{ marginBottom: 28 }}>
                <span className="gold-rule" />
                People Operations · Consulting Boutique
              </div>
              <h1 style={{ marginBottom: 32 }}>
                We create
                <br />
                <em style={{ fontStyle: "italic", color: "var(--gold-dark)" }}>CEO capacity.</em>
              </h1>
              <p className="lede" style={{ marginBottom: 38 }}>
                2pmFIX is a People Operations consulting partner for founders and organizational leaders building businesses worth lasting — through scaling, change, M&amp;A, succession, and the seasons in between.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <Link href="/book" className="btn btn-gold">Book a Discovery Call</Link>
                <Link href="#services" className="btn btn-ghost">Explore the Practice</Link>
              </div>
            </div>
            <div className="hero-art reveal in" style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", background: "var(--cream)", position: "relative", overflow: "hidden" }}>
                <img
                  src={img("/images/hero-portrait.jpg")}
                  alt="Founder at work in a quiet studio — hands shaping the next decision."
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.94)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(14,14,14,0.25))" }} />
              </div>
              <div style={{ position: "absolute", right: -10, bottom: -28, background: "var(--gold)", padding: "20px 24px", maxWidth: 260, color: "var(--ink)" }}>
                <div className="eyebrow" style={{ fontSize: "0.66rem", marginBottom: 8 }}>Reverent · Energized</div>
                <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.3 }}>
                  Built around the leader you intend to become.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee of values / industries */}
        <div style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "22px 0", marginTop: 80, background: "var(--cream)", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 60, animation: "marquee 36s linear infinite", whiteSpace: "nowrap", width: "max-content" }}>
            {Array.from({ length: 2 }).flatMap((_, i) =>
              ["Future-focused", "Inspire Curiosity", "eXtreme Impact", "Founders & Organizational Leaders", "Multi-generational Businesses", "Med-tech · Bio-medical · Industrial · Jewelers · Racing"].map((t) => (
                <span key={`${i}-${t}`} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.05rem", color: "var(--muted)" }}>
                  ✦ {t}
                </span>
              ))
            )}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
            .hero-art { max-width: 480px; }
          }
        `}</style>
      </section>

      {/* Intent / Philosophy */}
      <section className="section">
        <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div>
            <div className="eyebrow"><span className="gold-rule" />Our intent</div>
          </div>
          <div>
            <h2 style={{ marginBottom: 32 }}>
              We translate human potential into business outcomes — through structure quiet enough to lead through, and ambition specific enough to move on.
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--muted)", maxWidth: 720, marginBottom: 24 }}>
              The work we do sits beneath the headline. It is the People Operations strategy that lets the new market launch land. It is the leadership rhythm that turns a board ask into a result. It is the coaching conversation that makes the founder's next decade possible.
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--muted)", maxWidth: 720 }}>
              We work with leaders who are creating something worth lasting. We measure ourselves in the great things <em style={{ fontFamily: "var(--font-display)" }}>they</em> create.
            </p>
            <Link href="/about" className="link-underline" style={{ marginTop: 32, display: "inline-block" }}>
              About the practice →
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            section.section .container[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      {/* Values: FIX */}
      <section className="section-tight" style={{ background: "var(--cream)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div className="eyebrow"><span className="gold-rule" />Our name. Our values.</div>
            <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--gold-dark)", fontSize: "1.1rem" }}>F · I · X</div>
          </div>
          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--rule)" }}>
            {VALUES.map((v, i) => (
              <div key={v.letter} className="reveal" style={{ padding: "40px 32px", borderRight: i < 2 ? "1px solid var(--rule)" : "none", borderBottom: "1px solid var(--rule)", position: "relative" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "5rem", lineHeight: 0.9, color: "var(--gold-dark)", marginBottom: 12 }}>
                  {v.letter}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontStyle: "italic", marginBottom: 16 }}>{v.word}</div>
                <p style={{ color: "var(--muted)", fontSize: "0.98rem", lineHeight: 1.65 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .values-grid { grid-template-columns: 1fr !important; }
            .values-grid > div { border-right: none !important; }
          }
        `}</style>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, flexWrap: "wrap", gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="gold-rule" />The Practice</div>
              <h2 style={{ maxWidth: 720 }}>Four ways we work alongside the leaders building the next chapter.</h2>
            </div>
            <Link href="/book" className="link-underline">Begin a conversation →</Link>
          </div>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--ink)" }}>
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="reveal service-card"
                style={{
                  padding: "44px 36px",
                  borderRight: i % 2 === 0 ? "1px solid var(--ink)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--ink)" : i < SERVICES.length - 0 ? "1px solid var(--ink)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  background: "var(--paper)",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div className="eyebrow">{String(i + 1).padStart(2, "0")} · {s.eyebrow}</div>
                  <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--gold-dark)", fontSize: "1.4rem" }}>→</span>
                </div>
                <h3 style={{ fontSize: "1.8rem", marginTop: 8, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.6, marginBottom: 8 }}>{s.summary}</p>
                <span className="link-underline" style={{ marginTop: "auto", paddingTop: 18 }}>Explore →</span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          .service-card:hover { background: var(--cream) !important; }
          @media (max-width: 760px) {
            .services-grid { grid-template-columns: 1fr !important; }
            .services-grid > a { border-right: none !important; border-bottom: 1px solid var(--ink) !important; }
          }
        `}</style>
      </section>

      {/* Featured testimonial */}
      <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "120px 0" }}>
        <div className="container reveal" style={{ maxWidth: 1000 }}>
          <div className="eyebrow" style={{ color: "var(--gold)", marginBottom: 22 }}><span className="gold-rule" style={{ background: "var(--gold)" }} />A client voice</div>
          <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.32, marginBottom: 32, color: "var(--paper)" }}>
            “The business stopped being held together by my schedule. The system did the work I'd been doing — and I started being the leader my company actually needed.”
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, color: "var(--gold)", fontSize: "0.95rem" }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--gold)" }} />
            <span style={{ color: "var(--paper)", fontWeight: 500 }}>Founder & CEO</span>
            <span style={{ color: "rgba(251,250,246,0.6)" }}>— Multi-generational industrial · $42M revenue</span>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}><span className="gold-rule" />Selected work</div>
            <h2 style={{ maxWidth: 720 }}>The outcomes are what we measure. Quietly. With our clients.</h2>
          </div>
          <div className="case-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {CASE_STUDIES.map((c) => (
              <CaseStudyCard key={c.title} {...c} />
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) {
            .case-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Quotes carousel */}
      <section className="section-tight" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div style={{ marginBottom: 24 }}>
            <div className="eyebrow"><span className="gold-rule" />In their words</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {QUOTES.slice(0, 3).map((q) => (
              <Testimonial key={q.attribution + q.context} {...q} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
