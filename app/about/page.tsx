import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Bio } from "@/sections/about/Bio";
import { SkillsTools } from "@/sections/about/SkillsTools";
import { EducationReferences } from "@/sections/about/EducationReferences";
import { Contact } from "@/sections/about/Contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "Results-driven Marketing Manager with 4+ years owning full-funnel digital strategy across PNG's top platforms. Paid acquisition, CRO, email and AI workflows.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Performance marketing,{" "}
            <span className="text-accent">done right.</span>
          </>
        }
        description="A data-driven Marketing Manager who's equally at home writing landing-page copy, pulling a GA4 report, or presenting quarterly strategy to the C-suite."
      />
      <Bio />
      <SkillsTools />
      <EducationReferences />
      <Contact />
    </>
  );
}
