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
  location: string;
  duration: string;
  type: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  responsibilities: (string | React.ReactNode)[];
  metrics?: string[];
}

const experiences: Experience[] = [
  {
    id: "jina-code",
    role: "UI/UX Designer",
    company: "Jina Code Systems",
    location: "Gurgaon, India",
    duration: "09/2025 - 04/2026",
    type: "Full-time",
    icon: HiOutlineOfficeBuilding,
    color: "#0ea5e9",
    responsibilities: [
      <>Designed solutions across <strong>6+ diverse platforms</strong>, including an <strong>Export-Import Trade System, CPaaS Communication Platform, AI-powered Educational Chatbot, Consumer Delivery Marketplace</strong> and <strong>B2B Legal & Compliance Tools</strong> handling varied workflows and user interactions.</>,
      <>Improved multiple <strong>website UI</strong> using AI-assisted, prompt-driven workflows directly in <strong>VS Code & Antigravity</strong> — reducing design-to-implementation time significantly.</>,
      <>Reduced <strong>frontend implementation ambiguity</strong> by designing developer-friendly UI systems and interaction flows, enabling smoother and faster feature implementation.</>,
      <>Improved <strong>feature clarity and usability</strong> by conducting competitive analysis and structuring user flows for complex systems including admin panels, chatbot interfaces, and workflow-driven platforms.</>,
      "Independently drove design decisions from requirement interpretation to final UI delivery across multiple product modules.",
      "Manage company LinkedIn presence — developing content strategy, planning posts, and driving organic reach to support brand visibility and audience growth.",
    ],
  },
  {
    id: "independent",
    role: "Product Designer (Independent)",
    company: "Independent Projects",
    location: "Mumbai, India",
    duration: "01/2025 - 09/2025",
    type: "Independent",
    icon: HiOutlineLightBulb,
    color: "#8b5cf6",
    responsibilities: [
      <>Designed an <strong>enterprise analytics SaaS dashboard</strong>, improving <strong>data clarity and usability by ~35%</strong> by simplifying dashboard hierarchy, structuring KPI visibility, and enabling real-time insights.</>,
      <>Built an integrated <strong>healthcare and fitness app</strong>, improving task completion efficiency through streamlined user flows across health plans, lab tests, pharmacy, and consultancy.</>,
      <>Created a <strong>habit tracker application</strong> with a <strong>virtual pet system</strong>, delivering a 28+ screen UI with structured habit flows, multi-level task management, and engagement features.</>,
      <>Designed a <strong>virtual venue booking platform</strong>, reducing <strong>decision-making time by ~50%</strong> by enabling immersive virtual tours, side-by-side comparisons, and customization-driven exploration.</>,
    ],
  },
  {
    id: "dextra-square-lead",
    role: "Design Executive / Lead Manager",
    company: "Dextra Square Private Limited",
    location: "Bangalore, India",
    duration: "12/2023 - 12/2024",
    type: "Full-time",
    icon: HiOutlineBriefcase,
    color: "#10b981",
    responsibilities: [
      "Created precise 2D and 3D model using AutoCAD and Blender 3D, consistently meeting client requirements and company standards.",
      <><strong>Increased user engagement by 50%</strong> through UI enhancements to the company website, improving overall visual consistency.</>,
      "Improved stakeholders' understanding of lead data by 45% by optimizing the CRM system, managing lead inflows/outflows, and reducing tracking errors.",
    ],
  },
  {
    id: "dextra-square-intern",
    role: "2D/3D CAD Intern",
    company: "Dextra Square Private Limited",
    location: "Bangalore, India",
    duration: "05/2023 - 07/2023",
    type: "Internship",
    icon: HiOutlineBriefcase,
    color: "#10b981",
    responsibilities: [
      "Modeled custom fences for gates, windows, and boundaries, ensuring accuracy and alignment with client requirements.",
      "Collaborated with customers to create tailored 3D panel, enhancing satisfaction and product clarity.",
      "Reduced customer decision-making time by 30% through detailed visualizations, which accelerated project approvals.",
    ],
  },
  {
    id: "western-railway",
    role: "Trainee CAD Engineer",
    company: "Western Railway",
    location: "Mumbai, India",
    duration: "08/2022 - 10/2022",
    type: "Internship",
    icon: HiOutlineCog,
    color: "#f59e0b",
    responsibilities: [
      "Modeled and developed conceptual solutions for mechanical formulated challenges, improving component efficiency and reliability.",
      "Gained hands-on experience in assembling mechanical parts and components, contributing to smoother prototyping and testing cycles.",
      "Created 3D animations in Fusion 360 that enhanced visualization and reduced review time by 25%.",
      "Learnt 30-day workshop, dismantling and assembling body parts of coaches, inspecting, constructing and painting different bogie parts.",
    ],
  },
];

export default function Timeline() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="w-full">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-surface-200" />

            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, i) => (
                <ScrollReveal
                  key={exp.id}
                  delay={i * 0.1}
                  direction="up"
                >
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-[14px] top-0 z-10">
                      <motion.div
                        className="w-[18px] h-[18px] rounded-full border-[3px] border-white shadow-md"
                        style={{ backgroundColor: exp.color }}
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      />
                    </div>

                    {/* Content card */}
                    <div className="ml-12 md:ml-16">
                      <div className="group p-6 md:p-8 bg-surface-50 rounded-2xl border border-surface-200 hover:bg-white hover:shadow-elevated hover:border-ocean-100 transition-all duration-400">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${exp.color}10` }}
                          >
                            {(() => {
                              const Icon = exp.icon as React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
                              return <Icon className="w-5 h-5" style={{ color: exp.color }} />;
                            })()}
                          </div>
                          <div className="flex-1 w-full pt-0.5">
                            {/* Top Line: Company & Location */}
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-1">
                              <h3 className="font-display text-lg font-semibold text-ocean-600 leading-tight">
                                {exp.company}
                              </h3>
                              <div className="flex items-center gap-2 sm:mt-0 flex-shrink-0">
                                <span
                                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap"
                                  style={{
                                    backgroundColor: `${exp.color}10`,
                                    color: exp.color,
                                  }}
                                >
                                  {exp.type}
                                </span>
                                <span className="text-sm text-ink-500 font-medium">
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                            
                            {/* Bottom Line: Role, Duration & Tag */}
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 w-full gap-2">
                              <p className="font-display text-[15px] font-semibold text-ink-900">
                                {exp.role}
                              </p>
                              <div className="flex items-center flex-shrink-0">
                                <span className="text-sm text-ink-500 font-medium">
                                  {exp.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-2 mb-5">
                          {exp.responsibilities.map((resp, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-ink-500 leading-relaxed"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                style={{ backgroundColor: exp.color }}
                              />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Metrics */}
                        {exp.metrics && exp.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.metrics.map((metric) => (
                              <span
                                key={metric}
                                className="px-3 py-1 text-[11px] font-medium text-ink-600 bg-white border border-surface-200 rounded-full"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
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
