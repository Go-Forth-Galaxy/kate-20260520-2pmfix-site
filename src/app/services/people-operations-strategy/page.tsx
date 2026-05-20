import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      slug="people-operations-strategy"
      image="/images/service-strategy.jpg"
      imageAlt="An architectural blueprint of a quiet, ambitious organization."
      caseIndex={1}
      quoteIndex={0}
      whatItIsFor={[
        "Change management at scale — restructures, integrations, new operating models",
        "Mergers & acquisitions, on either side of the deal",
        "Leadership transitions and succession (founder, CEO, C-suite)",
        "Growing and scaling — from $10M to $50M and the layers in between",
        "Opening new locations and entering new states",
        "Creating culture downstream of a parent entity",
      ]}
      whatItLooksLike={[
        "A People Operations strategy specific to this business",
        "Workforce planning and organizational design tied to the growth plan",
        "Change architecture — sequencing, communications, decision rights",
        "Multi-state expansion playbook (compliance, hiring, culture)",
        "Cultural integration plans built for the long arc",
        "A leadership team that knows what to do next, and why",
      ]}
    />
  );
}
