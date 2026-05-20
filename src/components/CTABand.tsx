import Link from "next/link";

export default function CTABand({
  eyebrow = "Begin a conversation",
  title = "We create CEO capacity.",
  body = "A discovery call is thirty minutes. No deck. No pitch. Just a quiet, useful conversation about what's working, what's worth fixing, and what would change if it were.",
  cta = "Book a Discovery Call",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="section" style={{ background: "var(--cream)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%, rgba(201,162,39,0.08), transparent 50%)" }} />
      <div className="container reveal" style={{ position: "relative", maxWidth: 920, textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 22 }}><span className="gold-rule" />{eyebrow}</div>
        <h2 style={{ marginBottom: 24 }}>{title}</h2>
        <p className="lede" style={{ margin: "0 auto 38px" }}>{body}</p>
        <Link href="/book" className="btn btn-gold">{cta}</Link>
      </div>
    </section>
  );
}
