import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import DesignPhilosophy from "@/components/about/DesignPhilosophy";
import SkillsSection from "@/components/about/SkillsSection";
import ToolsSection from "@/components/about/ToolsSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import UXProcess from "@/components/about/UXProcess";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Shubham Saurabh — a UI/UX Designer passionate about creating intuitive digital experiences through research-driven design.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <DesignPhilosophy />
      <SkillsSection />
      <ToolsSection />
      <UXProcess />
      <AchievementsSection />
    </>
  );
}
