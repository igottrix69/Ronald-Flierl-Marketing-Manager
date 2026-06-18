import { videos } from "@/data/realEstateMedia";
import { VideoPlayer } from "@/components/VideoPlayer";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { GlowAccent } from "@/components/Backgrounds";
import { scaleIn } from "@/lib/motion";

export function Walkthroughs() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <GlowAccent className="right-[-10%] top-1/4 h-[360px] w-[520px]" />
      <div className="container-px">
        <SectionHeading
          eyebrow="Walkthrough video"
          title="30–60s tours, built to be watched."
          description="Short-form, vertical-ready property walkthroughs with pacing, music and motion — made for Reels, TikTok, YouTube Shorts and listing pages."
        />

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2" stagger={0.12}>
          {videos.map((video) => (
            <RevealItem key={video.id} variants={scaleIn}>
              <VideoPlayer video={video} />
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-6 text-center text-xs text-muted">
          Sample reels coming soon — real walkthroughs drop straight into this
          section.
        </p>
      </div>
    </section>
  );
}
