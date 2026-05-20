export const SERVICES = [
  {
    slug: "people-operations-strategy",
    eyebrow: "People Operations Strategy",
    title: "The architecture beneath ambition.",
    intent:
      "A clear-eyed plan for the human side of growth — change, M&A, leadership transitions, new locations, new states, new culture rising out of a parent entity. We translate intent into structure so the next chapter is built, not improvised.",
    summary:
      "When the business is changing — scaling, restructuring, integrating, expanding — strategy is the difference between motion and momentum. We design the people architecture that lets ambition land.",
    deliverables: [
      "Change management & integration planning (M&A, leadership transitions)",
      "Scaling & multi-location playbooks",
      "Expansion into new states — compliance, hiring, culture",
      "Culture design downstream of a parent entity",
      "Workforce planning & organizational design",
    ],
  },
  {
    slug: "systems-and-process-implementation",
    eyebrow: "Systems & Process Implementation",
    title: "Make the machine quiet.",
    intent:
      "When the work gets done because of the system — not the heroics — leaders get their time back. We translate strategy into the rituals, rhythms, and tools that run the business while you are busy building it.",
    summary:
      "We turn the plan into running infrastructure. Onboarding that retains. Performance rhythms that actually develop. Tools that talk to each other. Documentation people use.",
    deliverables: [
      "HR & People Ops system selection and deployment",
      "Onboarding & lifecycle process design",
      "Performance rhythms (reviews, 1:1s, calibration)",
      "Compensation architecture & banding",
      "SOPs your team will actually open",
    ],
  },
  {
    slug: "emergent-projects",
    eyebrow: "Emergent Projects",
    title: "The work you didn't plan for, done well anyway.",
    intent:
      "Sometimes the work is shaped — a board ask, a regulatory shift, a leader who steps away, a moment that needs to be handled with grace. Emergent Projects is partnership for the unscripted.",
    summary:
      "A senior partner inside the work, sized to the moment. Discreet. Decisive. Designed to leave the organization stronger than we found it.",
    deliverables: [
      "Crisis & sensitive transitions",
      "Board-level people initiatives",
      "Founder & leader off-ramps",
      "Investigations & culture audits",
      "Interim People Ops leadership",
    ],
  },
  {
    slug: "leadership-development",
    eyebrow: "Leadership Development & Executive Coaching",
    title: "Develop the leaders the business is becoming.",
    intent:
      "We coach founders, executives, and emerging leaders to grow as quickly as the business asks them to. The work is reverent, specific, and built around the outcomes only you can create.",
    summary:
      "One-to-one coaching, cohort programs, and leadership offsites that move the work — not the slide deck. Built around the leader you intend to become.",
    deliverables: [
      "Executive coaching (CEO, founders, C-suite)",
      "Leadership team alignment & offsites",
      "Cohort programs for emerging leaders",
      "Succession & development planning",
      "360 reviews handled with care",
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export const SERVICE_PROCESS: Record<ServiceSlug, { n: string; title: string; body: string }[]> = {
  "people-operations-strategy": [
    { n: "01", title: "Listen", body: "We sit with the leadership team and the operators. We listen for what's being said — and what isn't. We map the moment the business is in." },
    { n: "02", title: "Map", body: "Org design, workforce plan, change landscape. We name the variables. Risks, dependencies, and the human cost of the path you're considering." },
    { n: "03", title: "Architect", body: "A People Operations strategy that fits this business — not a generic template. Phased, sequenced, and tied to the outcomes only leadership owns." },
    { n: "04", title: "Land", body: "We embed alongside your team to make the plan real. Communication, sequencing, decision rights, the small choices that decide everything." },
    { n: "05", title: "Hand off", body: "We leave behind a team that can run it without us. We measure the impact and write the playbook for the next chapter." },
  ],
  "systems-and-process-implementation": [
    { n: "01", title: "Diagnose", body: "We audit the current state — what's running, what's improvised, what's burning the senior team's time. We measure the friction." },
    { n: "02", title: "Design", body: "We design the rituals, rhythms, and tooling that will replace the friction. Built for adoption, not for the org chart on paper." },
    { n: "03", title: "Build", body: "We configure the systems. Compensation architecture. Performance rhythms. Onboarding flows. The plumbing that runs the business." },
    { n: "04", title: "Adopt", body: "We work alongside managers until the new system feels native. Coaching, documentation, and the kind of follow-through software companies don't do." },
    { n: "05", title: "Refine", body: "We return at agreed intervals to measure and tune. The system gets better as the business does." },
  ],
  "emergent-projects": [
    { n: "01", title: "Triage", body: "Within days, we understand the shape of the situation. We ask what success looks like. We name what cannot be touched and what must move." },
    { n: "02", title: "Stabilize", body: "We carry the immediate weight — communications, decisions, sensitive conversations — so leadership can stay present to the business." },
    { n: "03", title: "Resolve", body: "We work the situation to its right ending. Discreetly, with the dignity owed every person involved." },
    { n: "04", title: "Strengthen", body: "We leave the organization with the structure, language, and learning that ensures the moment becomes inflection, not pattern." },
  ],
  "leadership-development": [
    { n: "01", title: "Assess", body: "We meet the leader where they are. 360 input, business context, and the leader's own honest read on what's hard right now." },
    { n: "02", title: "Anchor", body: "We define the development arc — three to four moves that, if made, change the leader and the business." },
    { n: "03", title: "Coach", body: "Biweekly or weekly sessions, paired with field work. Real situations, real reps, real reflection." },
    { n: "04", title: "Iterate", body: "We check in with the system around the leader — board, peers, team — and adjust the work to what the business is asking next." },
    { n: "05", title: "Compound", body: "Coaching ends; capacity remains. We hand off the practices that will keep the leader growing without us." },
  ],
};

export const QUOTES = [
  {
    quote:
      "They didn't hand us a deck and disappear. They sat at the table while we made the hard calls — and made us better at making them.",
    attribution: "Founder & CEO",
    role: "Multi-generational jeweler",
    context: "Leadership transition",
  },
  {
    quote:
      "Our integration after the acquisition was the cleanest anyone on either side had ever seen. 2pmFIX is the reason.",
    attribution: "Chief Operating Officer",
    role: "Bio-medical sciences",
    context: "M&A integration",
  },
  {
    quote:
      "I got my Saturdays back. The business didn't slow down — the system did the work I'd been doing.",
    attribution: "President",
    role: "Niche industrial manufacturer",
    context: "Systems implementation",
  },
  {
    quote:
      "They coach with reverence for the work and zero patience for self-pity. Exactly what I needed.",
    attribution: "CEO",
    role: "Automotive racing",
    context: "Executive coaching",
  },
];

export const CASE_STUDIES = [
  {
    eyebrow: "Med-tech · Series B",
    title: "Building the People Ops function as the headcount tripled.",
    industry: "Medical Technology",
    metric: "0 → 1",
    metricLabel: "Built the function",
    body: "Stood up the People Operations function from first hire to fully operational team — including HRIS, compensation architecture, manager rhythms, and the onboarding flow that retained 96% of Year-1 hires through the scale-up.",
  },
  {
    eyebrow: "Multi-generational jewelry house",
    title: "Translating founder authority into a leadership team.",
    industry: "Jewelers",
    metric: "4 gen",
    metricLabel: "Continuity preserved",
    body: "Designed the succession architecture that allowed the founding family to step back without losing the cultural authority the business had been built on. The next generation now leads with their own voice — and the business is growing.",
  },
  {
    eyebrow: "Bio-medical · Acquisition",
    title: "Integrating two cultures inside one operating system.",
    industry: "Bio-medical sciences",
    metric: "97%",
    metricLabel: "Retention through integration",
    body: "Led the people-side integration for an acquisition that doubled headcount overnight. Designed the unified org, compensation bands, and the rhythms of leadership that made one team out of two.",
  },
  {
    eyebrow: "Performance racing",
    title: "Building executive bench before the founder needed it.",
    industry: "Automotive racing",
    metric: "3 / 3",
    metricLabel: "Leaders ready in 18 months",
    body: "Coached three high-potential operators into ready-now executives. The founder traveled for a month without a single escalation — the first time in fifteen years.",
  },
];

export const VALUES = [
  {
    letter: "F",
    word: "Future-focused",
    body: "We build for the business you are becoming. The work today serves the leader you intend to be — not the operator you are right now.",
  },
  {
    letter: "I",
    word: "Inspire Curiosity",
    body: "We ask the questions that turn certainty into possibility. Assumptions tested, defaults questioned, the path widened — without losing the line.",
  },
  {
    letter: "X",
    word: "eXtreme Impact",
    body: "We measure ourselves in the outcomes only our clients can create — revenue protected, capacity unlocked, leaders developed, cultures that compound.",
  },
];
