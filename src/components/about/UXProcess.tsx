"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  HiOutlineSearch,
  HiOutlinePencilAlt,
  HiOutlineCube,
  HiOutlineBeaker,
  HiOutlineChartBar,
} from "react-icons/hi";

const steps = [
  {
    icon: HiOutlineSearch,
    step: "01",
    title: "Research & Discovery",
    description:
      "Understanding the problem space through user research, stakeholder interviews, and competitive analysis.",
  },
  {
    icon: HiOutlinePencilAlt,
    step: "02",
    title: "Ideation & Wireframing",
    description:
      "Exploring solutions through sketching, information architecture, and low-fidelity wireframes.",
  },
  {
    icon: HiOutlineCube,
    step: "03",
    title: "Visual Design & Prototyping",
    description:
      "Creating high-fidelity designs with interactive prototypes for testing and stakeholder review.",
  },
  {
    icon: HiOutlineBeaker,
    step: "04",
    title: "Testing & Validation",
    description:
      "Validating designs through usability testing, A/B tests, and iterating based on feedback.",
  },
  {
    icon: HiOutlineChartBar,
    step: "05",
    title: "Handoff & Iteration",
    description:
      "Collaborating with developers for pixel-perfect implementation and continuous improvement.",
  },
];

export default function UXProcess() {
  return (
    <section className="section-padding bg-surface-50">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="ocean-dot" />
            <span className="text-xs font-semibold text-ocean-600 tracking-widest uppercase">
              Process
            </span>
          </div>
          <h2 className="heading-lg mb-4">My UX Process</h2>
          <p className="body-lg max-w-2xl mb-12">
            A structured yet flexible approach that adapts to each
            project&apos;s unique requirements and constraints.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-surface-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div className="relative group text-center p-6 bg-white rounded-2xl border border-surface-200 hover:shadow-elevated hover:border-ocean-100 transition-all duration-400">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-ocean-50 text-ocean-600 text-[11px] font-bold rounded-full border border-ocean-100">
                    {step.step}
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-ocean-50 flex items-center justify-center mx-auto mb-4 mt-2 group-hover:bg-gradient-ocean transition-colors duration-500">
                    <step.icon className="w-6 h-6 text-ocean-600 group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="font-display text-sm font-semibold text-ink-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
