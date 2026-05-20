"use client";

import { useState } from "react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    note: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = encodeURIComponent(`Discovery Call — ${form.firstName} ${form.lastName} (${form.company})`);
    const body = encodeURIComponent(
      `First name: ${form.firstName}\nLast name: ${form.lastName}\nEmail: ${form.email}\nCompany: ${form.company}\nWebsite: ${form.website || "—"}\n\n${form.note || ""}`
    );
    // Open user's mail client AND a Google Calendar appointment-booking placeholder.
    window.location.href = `mailto:hello@2pmfix.com?subject=${subject}&body=${body}`;
  };

  const handle = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <section style={{ paddingTop: 160, paddingBottom: 80, background: "var(--paper)" }}>
        <div className="container">
          <div className="book-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 22 }}><span className="gold-rule" />Discovery Call</div>
              <h1 style={{ marginBottom: 26, fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}>Thirty quiet minutes.<br/>No deck. No pitch.</h1>
              <p className="lede" style={{ marginBottom: 28 }}>
                Just a conversation about what's working, what's worth fixing, and what would change if it were. We listen. We share what we'd notice. You leave with something useful, whether or not we work together.
              </p>
              <ul style={{ listStyle: "none", borderTop: "1px solid var(--rule)", marginTop: 8 }}>
                {[
                  ["What to expect", "A real conversation with a senior partner — not an intake form."],
                  ["What we'll ask", "What the business is asking of you right now, and what's getting in the way."],
                  ["What you'll leave with", "A clearer read on the next move — and whether we are the right partner to make it with you."],
                ].map(([k, v]) => (
                  <li key={k} style={{ padding: "20px 0", borderBottom: "1px solid var(--rule)" }}>
                    <div className="eyebrow" style={{ marginBottom: 6 }}>{k}</div>
                    <div style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.6 }}>{v}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal" style={{ background: "var(--cream)", padding: "40px", border: "1px solid var(--rule)" }}>
              {!submitted ? (
                <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <Field label="First name" required>
                      <input name="firstName" required value={form.firstName} onChange={handle("firstName")} className="field" />
                    </Field>
                    <Field label="Last name" required>
                      <input name="lastName" required value={form.lastName} onChange={handle("lastName")} className="field" />
                    </Field>
                  </div>
                  <Field label="Email" required>
                    <input name="email" type="email" required value={form.email} onChange={handle("email")} className="field" />
                  </Field>
                  <Field label="Company name" required>
                    <input name="company" required value={form.company} onChange={handle("company")} className="field" />
                  </Field>
                  <Field label="Company website (optional)">
                    <input name="website" value={form.website} onChange={handle("website")} placeholder="https://" className="field" />
                  </Field>
                  <Field label="A line or two about what's prompting the conversation (optional)">
                    <textarea name="note" value={form.note} onChange={handle("note")} rows={4} className="field" style={{ resize: "vertical" }} />
                  </Field>

                  <div style={{ marginTop: 8, fontSize: "0.86rem", color: "var(--muted)", lineHeight: 1.5 }}>
                    After submitting, you'll be redirected to confirm a time on our Google Calendar. We never share your information.
                  </div>

                  <button type="submit" className="btn btn-gold" style={{ justifyContent: "center", marginTop: 4 }}>
                    Send and choose a time
                  </button>

                  <a
                    href="https://calendar.app.google/2pmfix-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", textAlign: "center", marginTop: 6, fontSize: "0.86rem", color: "var(--muted)" }}
                  >
                    Or browse open times on Google Calendar directly →
                  </a>
                </form>
              ) : (
                <div style={{ padding: "40px 12px", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: 16, color: "var(--gold-dark)" }}>Thank you, {form.firstName}.</div>
                  <p style={{ color: "var(--muted)", lineHeight: 1.65, marginBottom: 26 }}>
                    Your message is on its way to us. A partner will reply within one business day with a confirmed time — or pick a slot directly below.
                  </p>
                  <a
                    href="https://calendar.app.google/2pmfix-discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                  >
                    Pick a Time on Google Calendar
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <style>{`
          .field {
            width: 100%;
            background: var(--paper);
            border: 1px solid var(--rule);
            padding: 14px 16px;
            font-family: var(--font-inter), sans-serif;
            font-size: 1rem;
            color: var(--ink);
            transition: border-color 0.2s ease;
          }
          .field:focus { outline: none; border-color: var(--gold-dark); }
          @media (max-width: 900px) {
            .book-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>
    </>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <span className="eyebrow" style={{ fontSize: "0.7rem" }}>
        {label}{required && <span style={{ color: "var(--gold-dark)", marginLeft: 6 }}>*</span>}
      </span>
      {children}
    </label>
  );
}
