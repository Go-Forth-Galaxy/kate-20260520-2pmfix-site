import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonial from "@/components/Testimonial";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABand from "@/components/CTABand";
import { SERVICES, SERVICE_PROCESS, QUOTES, CASE_STUDIES, type ServiceSlug } from "@/lib/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Props = {
  slug: ServiceSlug;
  image: string;
  imageAlt: string;
  caseIndex: number;
  quoteIndex: number;
  whatItLooksLike: string[];
  whatItIsFor: string[];
};

export default function ServicePage({ slug, image, imageAlt, caseIndex, quoteIndex, whatItLooksLike, whatItIsFor }: Props) {
  const svc = SERVICES.find((s) => s.slug === slug)!;
  const process = SERVICE_PROCESS[slug];
  const caseStudy = CASE_STUDIES[caseIndex];
  const quote = QUOTES[quoteIndex];

  return (
    <>
      <ServiceHero
        eyebrow={svc.eyebrow}
        title={svc.title}
        intent={svc.intent}
        image={`${basePath}${image}`}
        imageAlt={imageAlt}
      />

      {/* What it's for / what it looks like */}
      <section className="section-tight">
        <div className="container">
          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="gold-rule" />What this is for</div>
              <h3 style={{ marginBottom: 22, fontSize: "1.7rem" }}>The moments this work is built for</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 2 }}>
                {whatItIsFor.map((item) => (
                  <li key={item} style={{ padding: "16px 0", borderBottom: "1px solid var(--rule)", color: "var(--ink)", lineHeight: 1.55 }}>
                    <span style={{ color: "var(--gold-dark)", marginRight: 12, fontFamily: "var(--font-display)", fontStyle: "italic" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="gold-rule" />What this looks like</div>
              <h3 style={{ marginBottom: 22, fontSize: "1.7rem" }}>What the work delivers</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 2 }}>
                {whatItLooksLike.map((item) => (
                  <li key={item} style={{ padding: "16px 0", borderBottom: "1px solid var(--rule)", color: "var(--ink)", lineHeight: 1.55 }}>
                    <span style={{ color: "var(--gold-dark)", marginRight: 12, fontFamily: "var(--font-display)", fontStyle: "italic" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .svc-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        `}</style>
      </section>

      {/* Process timeline */}
      <section id="process" className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="gold-rule" />The Process</div>
              <h2 style={{ maxWidth: 760 }}>How we work — visualized.</h2>
            </div>
            <p style={{ color: "var(--muted)", maxWidth: 360, fontSize: "0.95rem", lineHeight: 1.6, fontStyle: "italic", fontFamily: "var(--font-display)" }}>
              Every engagement is tailored. The shape below is the rhythm we return to — yours becomes its own thing.
            </p>
          </div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Featured case study */}
      <section className="section">
        <div className="container">
          <div className="case-feature" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 56, alignItems: "stretch" }}>
            <CaseStudyCard {...caseStudy} />
            <div className="reveal" style={{ padding: 40, background: "var(--ink)", color: "var(--paper)", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
              <div className="eyebrow" style={{ color: "var(--gold)" }}>A note from the partner</div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", lineHeight: 1.45, fontStyle: "italic" }}>
                The work is reverent. The work is specific. And the work is measured by the outcomes only our clients can create.
              </p>
              <div style={{ display: "flex", gap: 14, alignItems: "baseline", color: "rgba(251,250,246,0.7)", fontSize: "0.9rem" }}>
                <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--gold)" }} />
                <span style={{ color: "var(--paper)" }}>The 2pmFIX Practice</span>
              </div>
              <Link href="/book" className="btn btn-gold" style={{ alignSelf: "flex-start", marginTop: 12 }}>
                Begin a Conversation
              </Link>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .case-feature { grid-template-columns: 1fr !important; gap: 24px !important; } }
        `}</style>
      </section>

      <section className="section-tight" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 28 }}><span className="gold-rule" />A client voice</div>
          <Testimonial {...quote} />
        </div>
      </section>

      <CTABand
        eyebrow={`${svc.eyebrow} · Discovery Call`}
        title="Tell us about the work."
        body="Thirty minutes with a senior partner. No deck. No pitch. Just an honest conversation about what would change if this part of the business worked the way it should."
      />
    </>
  );
}
