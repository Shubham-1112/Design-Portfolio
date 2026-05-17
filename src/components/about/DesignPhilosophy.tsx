"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { HiOutlineLightBulb, HiOutlineUsers, HiOutlineEye } from "react-icons/hi";

const principles = [
  {
    icon: HiOutlineUsers,
    title: "User-Centered",
    description:
      "Every design decision starts with understanding the people who will use the product. Research and empathy guide my creative process.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Purpose-Driven",
    description:
      "Design should solve real problems. I focus on creating meaningful solutions that deliver measurable impact for both users and businesses.",
  },
  {
    icon: HiOutlineEye,
    title: "Detail-Obsessed",
    description:
      "The difference between good and great design lives in the details. Typography, spacing, motion — every element matters.",
  },
];

export default function DesignPhilosophy() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="ocean-dot" />
            <span className="text-xs font-semibold text-ocean-600 tracking-widest uppercase">
              Philosophy
            </span>
          </div>
          <h2 className="heading-lg mb-4">My Design Philosophy</h2>
          <p className="body-lg max-w-2xl mb-12">
            Great design is invisible. It&apos;s the seamless experience that 
            users feel but never notice — intuitive, delightful, and effective.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, i) => (
            <ScrollReveal key={principle.title} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-surface-200 bg-surface-50 hover:bg-white hover:shadow-elevated hover:border-ocean-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-ocean-50 flex items-center justify-center mb-5 group-hover:bg-gradient-ocean transition-colors duration-500">
                  <principle.icon className="w-6 h-6 text-ocean-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-900 mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
