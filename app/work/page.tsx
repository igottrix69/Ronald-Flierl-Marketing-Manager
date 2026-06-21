import type { Metadata } from "next";
import { WorkIntro } from "@/sections/work/WorkIntro";
import { WorkServices } from "@/sections/work/WorkServices";
import { Timeline } from "@/sections/work/Timeline";
import { FeaturedProjects } from "@/sections/work/FeaturedProjects";
import { ClientsGrid } from "@/sections/work/ClientsGrid";
import { FinalCTA } from "@/sections/home/FinalCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Full-funnel marketing services, career timeline and featured projects — high-ticket lead generation, paid acquisition and CRO across PNG's leading institutions.",
};

export default function WorkPage() {
  return (
    <>
      <WorkIntro />
      <WorkServices />
      <Timeline />
      <FeaturedProjects />
      <ClientsGrid />
      <FinalCTA />
    </>
  );
}
