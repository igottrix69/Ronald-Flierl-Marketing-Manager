import type { LucideIcon } from "lucide-react";
import {
  Facebook,
  Search,
  Filter,
  LayoutTemplate,
  Mail,
  Clapperboard,
  Bot,
  BarChart3,
} from "lucide-react";

export const workIntro = {
  eyebrow: "What I do",
  title: "Performance marketing, built for revenue.",
  paragraphs: [
    "I'm a Marketing Manager with 4+ years owning full-funnel digital strategy across some of Papua New Guinea's top platforms. I manage five- and six-figure monthly budgets across Meta and Google, with a relentless focus on ROAS, CPA, qualified leads and revenue.",
    "My specialty is high-ticket marketing — home loans (K50,000+), vehicles (K120,000+) and insurance (K50,000+) — for Tier-1 institutions like Kina Bank, BSP, Boroko Motors and Southern Cross Assurance. I'm an early adopter of AI-powered marketing workflows, and I'm equally at home writing landing-page copy, pulling a GA4 report, or presenting strategy to the C-suite.",
  ],
} as const;

export type WorkService = {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

export const workServices: WorkService[] = [
  {
    title: "Meta Ads Management",
    description:
      "Full-funnel paid social on Facebook & Instagram — five/six-figure monthly budgets with a relentless focus on ROAS, CPA and revenue.",
    icon: Facebook,
    href: "/ads-management",
  },
  {
    title: "Google Ads Management",
    description:
      "Search, Performance Max, Display and YouTube — high-ticket lead-gen with conversion tracking dialled in.",
    icon: Search,
    href: "/ads-management",
  },
  {
    title: "Sales Funnels & Lead Generation",
    description:
      "End-to-end funnel architecture engineered to convert — from first touch to qualified, sales-ready lead.",
    icon: Filter,
  },
  {
    title: "Landing Page Strategy & Copywriting",
    description:
      "High-converting pages with sharp copy, CRO and disciplined A/B testing. See the Boroko Motors & Kina Bank case studies below.",
    icon: LayoutTemplate,
    href: "#featured-work",
  },
  {
    title: "Email Marketing & List Growth",
    description:
      "Lifecycle campaigns, segmentation and subscriber growth — scaled the Hausples list from 12,000 to 48,000 subs at a 12–15% CTR.",
    icon: Mail,
  },
  {
    title: "Real Estate Marketing Media",
    description:
      "Pro photo editing and 30–60s property walkthrough videos that make listings sell faster.",
    icon: Clapperboard,
    href: "/real-estate-media",
  },
  {
    title: "AI Workflow Engineering",
    description:
      "Bespoke AI automations for content, research and reporting — cutting manual overhead by 40%+ across clients.",
    icon: Bot,
  },
  {
    title: "Analytics, Attribution & Reporting",
    description:
      "GA4, Google Tag Manager, Pixel/CAPI and executive ROI dashboards — every dollar measured.",
    icon: BarChart3,
  },
];
