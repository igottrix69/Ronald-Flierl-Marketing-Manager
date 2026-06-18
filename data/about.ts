export const bio: string[] = [
  "I'm a results-driven Marketing Manager with 4+ years owning full-funnel digital strategy across some of Papua New Guinea's top platforms. I manage five- and six-figure monthly budgets across Meta and Google, with a relentless focus on the numbers that matter — ROAS, CPA, qualified leads and revenue.",
  "My specialty is high-ticket marketing — home loans, vehicles and insurance in the K50,000–K120,000+ range — for Tier-1 PNG institutions like Kina Bank, BSP, Boroko Motors and Southern Cross Assurance. Through the Digital Classifieds Group (DCG) Australasian network, I've worked alongside world-class leadership and brought that standard back to every campaign.",
  "An early AI-workflow adopter, I build bespoke automations that cut manual overhead by 40%+. And I'm equally comfortable writing landing-page copy, pulling a GA4 report, or presenting quarterly strategy to the C-suite.",
];

export type Education = {
  qualification: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    qualification: "Bachelor of Business Management",
    institution: "Griffith University Online",
    period: "2019 — 2022",
  },
  {
    qualification: "Secondary School Certificate",
    institution: "POM International School",
    period: "2015 — 2018",
  },
];

export type Reference = {
  name: string;
  title: string;
};

export const references: Reference[] = [
  { name: "Mr Tom Snelling", title: "General Manager, Hausples.com.pg" },
  { name: "Todd Emanuelli", title: "CEO, 321 Group" },
];
