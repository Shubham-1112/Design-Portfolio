"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineStar } from "react-icons/hi";

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
    icon: HiOutlineAcademicCap,
    title: "Autodesk Certified User",
    issuer: "Autodesk",
    description:
      "Professional certification in Autodesk design tools, demonstrating proficiency in industry-standard design software.",
    color: "#10b981",
  },
  {
    icon: HiOutlineStar,
    title: "CAD Competition Achievements",
    issuer: "Various Competitions",
    description:
      "Recognized for excellence in Computer-Aided Design competitions, showcasing technical design skills and creative problem-solving.",
    color: "#f59e0b",
  },
];

const education = [
  {
    degree: "Design & Engineering Background",
    institution: "Focused on blending technical skills with creative design thinking",
    description:
      "A multidisciplinary education that provides a strong foundation in both engineering principles and design aesthetics.",
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
