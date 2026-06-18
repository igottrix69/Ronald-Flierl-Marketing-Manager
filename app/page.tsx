import { Hero } from "@/sections/home/Hero";
import { TrustedBy } from "@/sections/home/TrustedBy";
import { Stats } from "@/sections/home/Stats";
import { Services } from "@/sections/home/Services";
import { FeaturedWork } from "@/sections/home/FeaturedWork";
import { FinalCTA } from "@/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <Services />
      <FeaturedWork />
      <FinalCTA />
    </>
  );
}
