import type { LucideIcon } from "lucide-react";
import {
  Target,
  Filter,
  LayoutTemplate,
  Mail,
  Bot,
  Clapperboard,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  /** if set, the card links here and shows an open-in affordance */
  href?: string;
  /** subtly highlighted card */
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Meta Ads & Google Ads",
    description:
      "Paid acquisition across Meta and Google, managing five- and six-figure monthly budgets with relentless focus on ROAS, CPA and revenue.",
    icon: Target,
    tags: ["Paid Media", "ROAS", "CPA"],
  },
  {
    title: "Lead Generation & Sales Funnels",
    description:
      "Custom, end-to-end funnels engineered to convert — from first touch to qualified, sales-ready lead.",
    icon: Filter,
    tags: ["Funnels", "Conversion", "Demand Gen"],
  },
  {
    title: "Landing Page Strategy & Copywriting",
    description:
      "High-converting landing pages built on sharp copy, CRO principles and disciplined A/B testing.",
    icon: LayoutTemplate,
    tags: ["CRO", "Copywriting", "A/B Testing"],
  },
  {
    title: "Email Marketing & List Growth",
    description:
      "Lifecycle campaigns, segmentation and subscriber growth — turning a list into a compounding revenue channel.",
    icon: Mail,
    tags: ["Lifecycle", "Segmentation", "Retention"],
  },
  {
    title: "AI Workflow Engineering",
    description:
      "Bespoke AI automations for content, research and reporting. An early adopter since 2023, cutting manual overhead by 40%+.",
    icon: Bot,
    tags: ["Automation", "LLMs", "Reporting"],
  },
  {
    title: "Real Estate Media",
    description:
      "Pro photo editing and 30–60s cinematic walkthroughs that make listings sell faster — sky replacement, window pull, decluttering and a 24–48hr turnaround.",
    icon: Clapperboard,
    tags: ["Photo Editing", "Walkthrough Video", "Listings"],
    href: "/real-estate-media",
    featured: true,
  },
];
