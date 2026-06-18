import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Timeline } from "@/sections/work/Timeline";
import { FeaturedProjects } from "@/sections/work/FeaturedProjects";
import { ClientsGrid } from "@/sections/work/ClientsGrid";
import { FinalCTA } from "@/sections/home/FinalCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Career timeline and featured projects — high-ticket lead generation, paid acquisition and CRO across PNG's leading institutions.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Work that drives{" "}
            <span className="text-accent">real results.</span>
          </>
        }
        description="Four years of full-funnel marketing for Papua New Guinea's biggest brands — measured in qualified leads, revenue and growth."
      />
      <FeaturedProjects />
      <Timeline />
      <ClientsGrid />
      <FinalCTA />
    </>
  );
}
