import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Comparisons } from "@/sections/real-estate/Comparisons";
import { Gallery } from "@/sections/real-estate/Gallery";
import { Walkthroughs } from "@/sections/real-estate/Walkthroughs";
import { IncludedProcess } from "@/sections/real-estate/IncludedProcess";
import { Cta } from "@/sections/real-estate/Cta";
import { realEstateMedia } from "@/data/realEstateMedia";

export const metadata: Metadata = {
  title: "Real Estate Media",
  description:
    "Professional real estate photo editing and 30–60s cinematic property walkthroughs — listings that sell faster. Sky replacement, window pull, virtual decluttering, 24–48hr turnaround.",
};

export default function RealEstateMediaPage() {
  return (
    <>
      <PageHeader
        eyebrow={realEstateMedia.eyebrow}
        title={
          <>
            Listings that sell faster —{" "}
            <span className="text-accent">pro photo editing</span> &amp;
            cinematic walkthroughs.
          </>
        }
        description={realEstateMedia.intro}
      />
      <Comparisons />
      <Gallery />
      <Walkthroughs />
      <IncludedProcess />
      <Cta />
    </>
  );
}
