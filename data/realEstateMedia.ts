import type { LucideIcon } from "lucide-react";
import {
  CloudSun,
  Blinds,
  Tv,
  Palette,
  Aperture,
  Wand2,
  Timer,
  Send,
  Sparkles,
  PackageCheck,
} from "lucide-react";

export const realEstateMedia = {
  route: "/real-estate-media",
  eyebrow: "Real Estate Media",
  title: "Listings that sell faster — pro photo editing & cinematic walkthroughs.",
  intro:
    "Drawn from years inside PNG's #1 property portal, I turn raw agent photos and phone footage into scroll-stopping listing media — bright, true-to-life images and 30–60s walkthroughs that get more clicks, more enquiries and faster sales.",
} as const;

export type BeforeAfter = {
  id: string;
  title: string;
  caption: string;
  /** cropped left half */
  before: string;
  /** cropped right half */
  after: string;
  /** full side-by-side fallback */
  full: string;
  width: number;
  height: number;
};

export const beforeAfter: BeforeAfter[] = [
  {
    id: "beachfront-living",
    title: "Beachfront living room",
    caption:
      "Window pull to recover the ocean view, sky and TV screen replacement, plus colour and brightness correction.",
    before: "/real-estate/before-after-beachfront-living-before.jpg",
    after: "/real-estate/before-after-beachfront-living-after.jpg",
    full: "/real-estate/before-after-beachfront-living.jpg",
    width: 1000,
    height: 606,
  },
  {
    id: "kitchen-daylight",
    title: "Open-plan kitchen",
    caption:
      "White-balance correction, brighter daylight, crisper windows and a clean, true-to-life finish.",
    before: "/real-estate/before-after-kitchen-daylight-before.jpg",
    after: "/real-estate/before-after-kitchen-daylight-after.jpg",
    full: "/real-estate/before-after-kitchen-daylight.jpg",
    width: 1000,
    height: 607,
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const gallery: GalleryItem[] = [
  {
    src: "/real-estate/finished-openplan-kitchen-staircase.jpg",
    alt: "Edited open-plan kitchen with spiral staircase and hardwood floors",
    caption: "Open-plan kitchen · light & lens correction",
    width: 2000,
    height: 1333,
  },
  {
    src: "/real-estate/finished-navy-gold-kitchen.jpg",
    alt: "Staged navy-and-gold living and kitchen space",
    caption: "Navy & gold living space · staged & edited",
    width: 2000,
    height: 1333,
  },
  {
    src: "/real-estate/finished-staged-bedroom.jpg",
    alt: "Staged bedroom with styled bedding and artwork",
    caption: "Staged bedroom · colour & white balance",
    width: 2000,
    height: 1333,
  },
];

export type WalkthroughVideo = {
  id: string;
  title: string;
  caption: string;
  /** poster image shown before play */
  poster: string;
  /** direct MP4 url — leave empty to render the placeholder state */
  src?: string;
  /** OR an embed url (YouTube/Vimeo) — leave empty for placeholder */
  embedUrl?: string;
  duration: string;
};

export const videos: WalkthroughVideo[] = [
  {
    id: "walkthrough-apartment",
    title: "Beachfront apartment walkthrough",
    caption: "A 45-second cinematic tour — hook, flow, and the hero view.",
    poster: "/real-estate/finished-navy-gold-kitchen.jpg",
    src: "",
    duration: "0:45",
  },
  {
    id: "walkthrough-family-home",
    title: "Family home walkthrough",
    caption: "30 seconds, vertical-ready for Reels, TikTok and Stories.",
    poster: "/real-estate/finished-openplan-kitchen-staircase.jpg",
    src: "",
    duration: "0:30",
  },
];

export type Included = { label: string; icon: LucideIcon };

export const included: Included[] = [
  { label: "Sky replacement", icon: CloudSun },
  { label: "Window pull / view enhancement", icon: Blinds },
  { label: "TV screen replacement", icon: Tv },
  { label: "Colour & white balance correction", icon: Palette },
  { label: "Brightness & lens correction", icon: Aperture },
  { label: "Virtual decluttering", icon: Wand2 },
  { label: "24–48hr turnaround", icon: Timer },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Send photos / footage",
    description: "Upload your raw agent photos or phone footage — any device, any format.",
    icon: Send,
  },
  {
    step: "02",
    title: "Pro edit",
    description: "I edit, enhance and cut — sky, windows, colour, decluttering and a tight walkthrough.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Delivered ready-to-list",
    description: "Web-ready images and video back in your inbox within 24–48 hours.",
    icon: PackageCheck,
  },
];
