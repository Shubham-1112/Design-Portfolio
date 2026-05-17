import type { Metadata } from "next";
import ExperienceHero from "@/components/experience/ExperienceHero";
import Timeline from "@/components/experience/Timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore Shubham Saurabh's professional experience in UI/UX design across product teams, agencies, and independent projects.",
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <Timeline />
    </>
  );
}
