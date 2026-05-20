import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  intent: string;
  image: string;
  imageAlt: string;
};

export default function ServiceHero({ eyebrow, title, intent, image, imageAlt }: Props) {
  return (
    <section style={{ paddingTop: 160, paddingBottom: 60, background: "var(--paper)" }}>
      <div className="container">
        <div className="service-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "end" }}>
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: 22 }}><span className="gold-rule" />{eyebrow}</div>
            <h1 style={{ marginBottom: 28 }}>{title}</h1>
            <p className="lede">{intent}</p>
            <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/book" className="btn btn-gold">Book a Discovery Call</Link>
              <a href="#process" className="btn btn-ghost">View Our Process</a>
            </div>
          </div>
          <div className="reveal" style={{ position: "relative", aspectRatio: "5/6", overflow: "hidden", background: "var(--cream)" }}>
            <img
              src={image}
              alt={imageAlt}
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.92)" }}
              loading="eager"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(14,14,14,0.18))" }} />
            <div style={{ position: "absolute", left: 24, bottom: 24, color: "var(--paper)", fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.95rem", maxWidth: 260, lineHeight: 1.3 }}>
              Built quietly. Designed to last.
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .service-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
