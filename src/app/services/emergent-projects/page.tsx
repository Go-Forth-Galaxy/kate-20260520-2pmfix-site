import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      slug="emergent-projects"
      image="/images/service-emergent.jpg"
      imageAlt="A still pool — quiet under pressure, exact in motion."
      caseIndex={3}
      quoteIndex={3}
      whatItIsFor={[
        "Sensitive transitions — a leader steps away, a team is restructured",
        "Crisis & culture moments that demand discretion and care",
        "Board-level people initiatives that need senior hands",
        "Founder or CEO off-ramps that must be done with dignity",
        "Investigations, audits, and the work no one wants to lead",
        "Interim People Ops leadership while you hire your own",
      ]}
      whatItLooksLike={[
        "A senior partner inside the work — sized to the moment",
        "Discreet communications and decision support",
        "Stakeholder management at board and leadership levels",
        "A clear, ethical resolution — and a stronger organization after",
        "Documentation of the learning, where appropriate",
        "Quiet, capable, decisive partnership",
      ]}
    />
  );
}
