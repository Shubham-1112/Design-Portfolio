"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineStar } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";

const achievements = [
  {
    icon: HiOutlineBadgeCheck,
    title: "Google UX Design Professional Certificate",
    issuer: "Google / Coursera",
    description:
      "Completed Google's comprehensive UX design program covering the full UX process from research through prototyping and testing.",
    color: "#0ea5e9",
  },
  {
    icon: HiOutlineStar,
    title: "Autodesk Certified User",
    issuer: "Autodesk",
    description:
      "Professional certification in Autodesk design tools, demonstrating proficiency in industry-standard design software.",
    color: "#f59e0b",
  },
  {
    icon: HiOutlineTrophy,
    title: "First Prize — CAD War, AARAMBH-2022",
    issuer: "National Level Technical Symposium",
    description:
      "Won first prize in a National level Technical symposium, AARAMBH-2022, in CAD war.",
    color: "#10b981",
  },
  {
    icon: HiOutlineTrophy,
    title: "Fifth Place — Creative Bicycle Model",
    issuer: "Design Competition",
    description:
      "Fifth place in competition for creative model of bicycle with luggage rack.",
    color: "#8b5cf6",
  },
  {
    icon: HiOutlineTrophy,
    title: "Top 10 — 3D Drone Concept",
    issuer: "Design Competition",
    description:
      "Ranked in top 10 for conceptualizing a unique 3D model of drone with eagle claw.",
    color: "#ec4899",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Go Kart Design & Dynamics Training",
    issuer: "Professional Training",
    description:
      "Specialized training on Go Kart design and dynamics, strengthening engineering and mechanical design skills.",
    color: "#6366f1",
  },
];

const education = [
  {
    degree: "B.E. in Mechanical Engineering",
    institution: "Dayananda Sagar College of Engineering, Bangalore",
    description:
      "2019 – 2023",
  },
];

export default function AchievementsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="ocean-dot" />
            <span className="text-xs font-semibold text-ocean-600 tracking-widest uppercase">
              Achievements & Education
            </span>
          </div>
          <h2 className="heading-lg mb-4">Certifications & Recognition</h2>
          <p className="body-lg max-w-2xl mb-12">
            Professional certifications and accomplishments that validate my
            design expertise.
          </p>
        </ScrollReveal>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, i) => (
            <ScrollReveal key={achievement.title} delay={i * 0.1}>
              <div className="group h-full p-8 bg-surface-50 rounded-2xl border border-surface-200 hover:bg-white hover:shadow-elevated hover:border-ocean-100 transition-all duration-400">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${achievement.color}10` }}
                >
                  <achievement.icon
                    className="w-6 h-6"
                    style={{ color: achievement.color }}
                  />
                </div>
                <h3 className="font-display text-base font-semibold text-ink-900 mb-1">
                  {achievement.title}
                </h3>
                <p className="text-xs text-ocean-600 font-medium mb-3">
                  {achievement.issuer}
                </p>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <ScrollReveal>
          <div className="p-8 md:p-10 bg-gradient-ocean-subtle rounded-2xl border border-ocean-100">
            <div className="flex items-center gap-2 mb-4">
              <HiOutlineAcademicCap className="w-5 h-5 text-ocean-600" />
              <span className="text-xs font-semibold text-ocean-600 tracking-widest uppercase">
                Education
              </span>
            </div>
            {education.map((edu) => (
              <div key={edu.degree}>
                <h3 className="font-display text-lg font-semibold text-ink-900 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-ocean-600 font-medium mb-3">
                  {edu.institution}
                </p>
                <p className="text-sm text-ink-500 leading-relaxed max-w-2xl">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
