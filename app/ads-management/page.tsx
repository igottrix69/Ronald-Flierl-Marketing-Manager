import type { Metadata } from "next";
import { AdsManagementShowcase } from "@/sections/ads/AdsManagementShowcase";
import { Capabilities } from "@/sections/ads/Capabilities";
import { Results } from "@/sections/ads/Results";
import { Cta } from "@/sections/ads/Cta";

export const metadata: Metadata = {
  title: "Paid Ads Management",
  description:
    "Meta Ads & Google Ads management — five- and six-figure monthly budgets with a relentless focus on ROAS, CPA and revenue. Campaign strategy, audience building, creative testing, conversion tracking and reporting.",
};

export default function AdsManagementPage() {
  return (
    <>
      <AdsManagementShowcase />
      <Capabilities />
      <Results />
      <Cta />
    </>
  );
}
