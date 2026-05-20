import ServicePage from "@/components/ServicePage";

export default function Page() {
  return (
    <ServicePage
      slug="leadership-development"
      image="/images/service-leadership.jpg"
      imageAlt="A leader in stillness — preparing for what the work is about to ask."
      caseIndex={0}
      quoteIndex={1}
      whatItIsFor={[
        "Founders and CEOs growing as quickly as their business asks",
        "C-suite leaders stepping into expanded scope",
        "Leadership teams that need to operate as one, faster",
        "Emerging leaders the business needs ready in 12–24 months",
        "Boards investing in the development of named successors",
        "Family-business leaders carrying generational responsibility",
      ]}
      whatItLooksLike={[
        "1:1 executive coaching tailored to the business outcomes you own",
        "Leadership team alignment, offsites, and operating-cadence design",
        "Cohort programs for emerging and high-potential leaders",
        "360 reviews handled with reverence — useful, not performative",
        "Succession and development planning, with the board where appropriate",
        "A leader who compounds — and a bench that does the same",
      ]}
    />
  );
}
