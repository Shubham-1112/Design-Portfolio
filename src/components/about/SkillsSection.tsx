"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiOutlineLightBulb, HiOutlineDeviceMobile } from "react-icons/hi";

const skillCategories = [
  {
    title: "UX Process",
    icon: HiOutlineLightBulb,
    skills: [
      "User Flows",
      "Wireframing",
      "Design System",
      "Prototyping",
      "UX Research",
      "Usability testing"
    ],
    color: "#0ea5e9" // Ocean
  },
  {
    title: "Product Specialization",
    icon: HiOutlineDeviceMobile,
    skills: [
      "SaaS",
      "B2B CPaaS Platform",
      "App Design",
      "Responsive Web Design"
    ],
    color: "#8b5cf6" // Purple
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.1}>
              <div className="h-full p-8 bg-white rounded-2xl border border-surface-200 hover:border-ocean-200 hover:shadow-elevated transition-all duration-400">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${category.color}10` }}
                  >
                    <category.icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink-900">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-surface-50 border border-surface-200 rounded-lg text-sm font-medium text-ink-700 hover:border-ocean-300 hover:text-ocean-700 hover:bg-ocean-50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
