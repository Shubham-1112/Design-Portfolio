"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const skills = [
  {
    name: "UI/UX Design",
    level: 95,
    description: "End-to-end interface design",
  },
  {
    name: "SaaS Design",
    level: 90,
    description: "Enterprise software interfaces",
  },
  {
    name: "Design Systems",
    level: 88,
    description: "Scalable component libraries",
  },
  {
    name: "Wireframing",
    level: 92,
    description: "Low to high-fidelity wireframes",
  },
  {
    name: "Prototyping",
    level: 90,
    description: "Interactive clickable prototypes",
  },
  {
    name: "UX Research",
    level: 85,
    description: "User interviews & testing",
  },
  {
    name: "Responsive Web Design",
    level: 93,
    description: "Mobile-first adaptive layouts",
  },
  {
    name: "Product Design",
    level: 88,
    description: "Full product lifecycle design",
  },
];

export default function SkillsSection() {
  return (
    <section className="section-padding bg-surface-50">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="ocean-dot" />
            <span className="text-xs font-semibold text-ocean-600 tracking-widest uppercase">
              Expertise
            </span>
          </div>
          <h2 className="heading-lg mb-4">Skills & Specializations</h2>
          <p className="body-lg max-w-2xl mb-12">
            Core competencies honed through years of designing products
            across diverse industries and platforms.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.name} delay={i * 0.06}>
              <div className="group p-6 bg-white rounded-2xl border border-surface-200 hover:border-ocean-200 hover:shadow-elevated transition-all duration-400">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-sm font-semibold text-ink-900">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-semibold text-ocean-600">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-surface-100 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-ocean transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="text-xs text-ink-400">{skill.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
