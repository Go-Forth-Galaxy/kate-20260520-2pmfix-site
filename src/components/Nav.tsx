"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  { href: "/services/people-operations-strategy", label: "People Operations Strategy" },
  { href: "/services/systems-and-process-implementation", label: "Systems & Process Implementation" },
  { href: "/services/emergent-projects", label: "Emergent Projects" },
  { href: "/services/leadership-development", label: "Leadership Development" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(251, 250, 246, 0.92)" : "transparent",
        backdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 32px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.4rem", letterSpacing: "-0.01em" }}>2pm</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.4rem", letterSpacing: "-0.01em", color: "var(--gold-dark)" }}>FIX</span>
        </Link>

        <nav className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <DropdownLink label="Services" items={services} />
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/book" className="btn btn-gold" style={{ padding: "12px 22px", fontSize: "0.74rem" }}>
            Book a Discovery Call
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <span style={{ display: "block", width: 24, height: 1, background: "var(--ink)", marginBottom: 6 }} />
          <span style={{ display: "block", width: 24, height: 1, background: "var(--ink)", marginBottom: 6 }} />
          <span style={{ display: "block", width: 16, height: 1, background: "var(--ink)" }} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu" style={{ background: "var(--paper)", padding: "20px 32px 40px", borderTop: "1px solid var(--rule)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="eyebrow" style={{ marginTop: 8 }}>Services</div>
            {services.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>
                {s.label}
              </Link>
            ))}
            <hr className="rule" />
            <Link href="/about" onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>About</Link>
            <Link href="/book" onClick={() => setOpen(false)} className="btn btn-gold" style={{ marginTop: 12, justifyContent: "center" }}>
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-size: 0.84rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink);
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: var(--gold-dark); }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-block !important; }
        }
      `}</style>
    </header>
  );
}

function DropdownLink({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ position: "relative" }}
    >
      <button
        className="nav-link"
        style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
      >
        {label} +
      </button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 14px)",
            right: -20,
            minWidth: 320,
            background: "var(--paper)",
            border: "1px solid var(--rule)",
            padding: 22,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            boxShadow: "0 30px 50px -20px rgba(0,0,0,0.18)",
          }}
        >
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", lineHeight: 1.2 }}
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
