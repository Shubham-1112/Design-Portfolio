"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  HiOutlineBriefcase,
  HiOutlineOfficeBuilding,
  HiOutlineLightBulb,
  HiOutlineCog,
} from "react-icons/hi";

interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  responsibilities: string[];
  metrics: string[];
}

const experiences: Experience[] = [
  {
    id: "jina-code",
    role: "UI/UX Designer",
    company: "Jina Code Systems",
    duration: "2024 — Present",
    type: "Full-time",
    icon: HiOutlineOfficeBuilding,
    color: "#0ea5e9",
    responsibilities: [
      "Lead UI/UX design for enterprise SaaS products including analytics dashboards and communication platforms",
      "Established and maintained a comprehensive design system ensuring consistency across multiple products",
      "Conducted user research and usability testing to inform design decisions and improve user satisfaction",
      "Collaborated closely with development teams for pixel-perfect implementation of designs",
      "Created interactive prototypes and design documentation for stakeholder presentations",
    ],
    metrics: [
      "Designed 5+ enterprise products",
      "Improved user task completion by 40%",
      "Reduced design-to-dev handoff time by 60%",
    ],
  },
  {
    id: "independent",
    role: "Independent Product Designer",
    company: "Freelance & Personal Projects",
    duration: "2023 — Present",
    type: "Independent",
    icon: HiOutlineLightBulb,
    color: "#8b5cf6",
    responsibilities: [
      "Designed end-to-end product experiences for healthcare, education, and event management verticals",
      "Built complete UX case studies from research through final high-fidelity prototypes",
      "Explored innovative design patterns including gamification, AI-powered interfaces, and immersive booking systems",
      "Developed a personal design methodology combining user research with rapid prototyping",
    ],
    metrics: [
      "Completed 8+ case studies",
      "Explored 4 different industries",
      "Built a comprehensive design portfolio",
    ],
  },
  {
    id: "dextra-square",
    role: "UI/UX Design Intern",
    company: "Dextra Square Pvt Ltd",
    duration: "2023",
    type: "Internship",
    icon: HiOutlineBriefcase,
    color: "#10b981",
    responsibilities: [
      "Contributed to the design of client-facing web applications and mobile interfaces",
      "Assisted in creating wireframes, user flows, and interactive prototypes using Figma",
      "Participated in design reviews and incorporated feedback from senior designers",
      "Supported UX research initiatives including user interviews and competitive analysis",
    ],
    metrics: [
      "Contributed to 3+ client projects",
      "Created 20+ wireframe screens",
      "Conducted 10+ user interviews",
    ],
  },
  {
    id: "western-railway",
    role: "Technical Trainee",
    company: "Western Railway",
    duration: "2022",
    type: "Training",
    icon: HiOutlineCog,
    color: "#f59e0b",
    responsibilities: [
      "Gained exposure to large-scale systems and infrastructure operations",
      "Developed an understanding of complex system requirements and user workflows",
      "Applied technical knowledge to understand industrial design challenges",
      "Built foundational skills in systematic thinking and process optimization",
    ],
    metrics: [
      "Studied large-scale system workflows",
      "Enhanced systematic design thinking",
      "Cross-disciplinary learning experience",
    ],
  },
];

export default function Timeline() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-surface-200" />

            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, i) => (
                <ScrollReveal
                  key={exp.id}
                  delay={i * 0.1}
                  direction={i % 2 === 0 ? "left" : "right"}
                >
                  <div
                    className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                      i % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse md:text-right"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                      <motion.div
                        className="w-[18px] h-[18px] rounded-full border-[3px] border-white shadow-md"
                        style={{ backgroundColor: exp.color }}
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                    </div>

                    {/* Content card */}
                    <div className="flex-1 ml-12 md:ml-0">
                      <div className="group p-6 md:p-8 bg-surface-50 rounded-2xl border border-surface-200 hover:bg-white hover:shadow-elevated hover:border-ocean-100 transition-all duration-400">
                        {/* Header */}
                        <div
                          className={`flex items-start gap-4 mb-4 ${
                            i % 2 !== 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${exp.color}10` }}
                          >
                            {(() => {
                              const Icon = exp.icon as React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
                              return <Icon className="w-5 h-5" style={{ color: exp.color }} />;
                            })()}
                          </div>
                          <div className={i % 2 !== 0 ? "md:text-right" : ""}>
                            <h3 className="font-display text-lg font-semibold text-ink-900">
                              {exp.role}
                            </h3>
                            <p className="text-sm text-ocean-600 font-medium">
                              {exp.company}
                            </p>
                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                              <span className="text-xs text-ink-400">
                                {exp.duration}
                              </span>
                              <span className="text-xs text-ink-300">·</span>
                              <span
                                className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: `${exp.color}10`,
                                  color: exp.color,
                                }}
                              >
                                {exp.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <ul
                          className={`space-y-2 mb-5 ${
                            i % 2 !== 0 ? "md:text-left" : ""
                          }`}
                        >
                          {exp.responsibilities.map((resp, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-ink-500"
                            >
                              <span
                                className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: exp.color }}
                              />
                              {resp}
                            </li>
                          ))}
                        </ul>

                        {/* Metrics */}
                        <div
                          className={`flex flex-wrap gap-2 ${
                            i % 2 !== 0 ? "md:justify-end" : ""
                          }`}
                        >
                          {exp.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="px-3 py-1 text-[11px] font-medium text-ink-600 bg-white border border-surface-200 rounded-full"
                            >
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
