export type Experience = {
  role: string;
  company: string;
  meta?: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Independent Marketing Consultant",
    company: "Self-Employed",
    location: "Port Moresby, PNG",
    period: "2025 — Present",
    summary:
      "Full-stack marketing for high-ticket auto, retail and insurance clients across Papua New Guinea.",
    highlights: [
      "Clients include Boroko Motors, Capital Insurance, Southern Cross Assurance and East Street Fitness.",
      "Full-funnel marketing audits and five/six-figure paid media management for high-ticket auto & retail.",
      "Built bespoke AI workflows across clients, reducing manual overhead by 40%+.",
      "Authored digital transformation roadmaps tying channels to revenue.",
    ],
  },
  {
    role: "Marketing Manager",
    company: "321 Group (321Lotto)",
    location: "Port Moresby, PNG",
    period: "Dec 2024 — Apr 2025",
    summary:
      "Owned end-to-end digital for a B2C platform with 100,000+ monthly active users.",
    highlights: [
      "Drove 35% platform growth in Q1 through coordinated acquisition campaigns.",
      "Ran multi-channel launch campaigns across radio, The National & Post Courier, Facebook and Instagram.",
      "Built executive ROI dashboards to tie spend directly to performance.",
    ],
  },
  {
    role: "Marketing Manager",
    company: "Hausples.com.pg",
    meta: "PNG's #1 Property Portal · Digital Classifieds Group (DCG) Australasian network",
    location: "Port Moresby, PNG",
    period: "Jan 2023 — Nov 2024",
    summary:
      "Led marketing for PNG's largest property portal, working with DCG CMO Salvatore Britti and CEO Matthew Care.",
    highlights: [
      "Managed five/six-figure budgets for Tier-1 partners — Kina Bank, BSP, Boroko Motors and Southern Cross Assurance.",
      "Marketed high-ticket products: home loans K50,000+, vehicles K120,000+ and insurance K50,000+.",
      "Generated ~500 qualified leads per client, per campaign cycle.",
      "Scaled the email list from 12,000 to 48,000 subscribers at a 12–15% click-through rate.",
      "Drove 50,000–85,000 monthly visitors to the platform.",
      "Led the Hausples Property Expo — the largest real estate event in PNG.",
    ],
  },
];
