import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Users,
  FlaskConical,
  Target,
  Repeat,
  BarChart3,
} from "lucide-react";

export const adsManagement = {
  route: "/ads-management",
  eyebrow: "Paid Ads Management",
  title: "Paid ads that print pipeline.",
  intro:
    "Managing five- and six-figure monthly budgets across Meta & Google with a relentless focus on ROAS, CPA and revenue — for Tier-1 PNG brands like Kina Bank, Southern Cross Assurance and Kenmore.",
} as const;

export type DashboardId = "meta" | "google";

export type Dashboard = {
  id: DashboardId;
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const dashboards: Dashboard[] = [
  {
    id: "meta",
    label: "Meta Ads",
    src: "/ads-management/meta-ads-dashboard.png",
    width: 1556,
    height: 1011,
    alt: "Meta Ads Manager campaigns dashboard showing spend, leads and ROAS",
  },
  {
    id: "google",
    label: "Google Ads",
    src: "/ads-management/google-ads-dashboard.png",
    width: 1556,
    height: 1011,
    alt: "Google Ads campaigns dashboard showing spend, conversions and ROAS",
  },
];

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    title: "Campaign Strategy & Account Structure",
    description:
      "Clean, scalable account architecture mapped to your funnel — built to spend efficiently and grow.",
    icon: LayoutGrid,
  },
  {
    title: "Audience Building & Lookalikes",
    description:
      "Segmentation, custom audiences and lookalikes that put budget in front of the people most likely to buy.",
    icon: Users,
  },
  {
    title: "Creative Testing & A/B",
    description:
      "Structured creative and copy testing to find the winners and kill the losers — fast.",
    icon: FlaskConical,
  },
  {
    title: "Conversion Tracking & Attribution",
    description:
      "GA4, Google Tag Manager, Meta Pixel & CAPI wired up correctly so every dollar is measured.",
    icon: Target,
  },
  {
    title: "Retargeting Funnels",
    description:
      "Full-funnel retargeting that re-engages warm traffic and converts considered, high-ticket buyers.",
    icon: Repeat,
  },
  {
    title: "Performance Reporting",
    description:
      "Executive-ready reporting on the metrics that matter — ROAS, CPA and LTV, not vanity numbers.",
    icon: BarChart3,
  },
];

export type AdStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
  sublabel?: string;
};

export const adStats: AdStat[] = [
  {
    value: 0,
    display: "5–6 fig",
    label: "Monthly budgets managed",
    sublabel: "Across Meta & Google",
  },
  {
    value: 500,
    suffix: "+",
    label: "Qualified leads",
    sublabel: "Per client, per campaign cycle",
  },
  {
    value: 0,
    display: "10.5x",
    label: "Peak campaign ROAS",
    sublabel: "Return on ad spend",
  },
  {
    value: 120000,
    prefix: "K",
    suffix: "+",
    label: "High-ticket products marketed",
    sublabel: "Loans, vehicles & insurance",
  },
];

export const adTools: string[] = [
  "Meta Ads Manager",
  "Google Ads",
  "LinkedIn Campaign Manager",
  "GA4",
  "Google Tag Manager",
  "Conversion Tracking & Attribution",
];
