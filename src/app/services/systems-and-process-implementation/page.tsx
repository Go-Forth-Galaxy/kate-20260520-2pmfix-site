import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      slug="systems-and-process-implementation"
      image="/images/service-systems.jpg"
      imageAlt="A finely tuned mechanism — the quiet machine of a well-run business."
      caseIndex={2}
      quoteIndex={2}
      whatItIsFor={[
        "Businesses where the work depends on heroics, not the system",
        "Founders ready to step out of the daily operating loop",
        "Teams that have outgrown improvised processes",
        "Organizations selecting and deploying their first HRIS / People Ops stack",
        "Performance and compensation rhythms that need redesigning",
        "Onboarding that should be retaining — and isn't yet",
      ]}
      whatItLooksLike={[
        "HRIS / People Ops platform selection and full deployment",
        "Onboarding & employee lifecycle design",
        "Performance rhythms — reviews, 1:1s, calibration cadences",
        "Compensation architecture and banding",
        "SOPs and playbooks the team will actually open",
        "A senior team that gets its calendar back",
      ]}
    />
  );
}
