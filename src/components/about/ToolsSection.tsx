"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SiFigma, SiMiro, SiNotion } from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineCube,
  HiOutlineSparkles,
  HiOutlinePhotograph,
  HiOutlineTemplate,
  HiOutlineColorSwatch,
} from "react-icons/hi";
import { SiSurveymonkey, SiCanva } from "react-icons/si";

const tools = [
  {
    name: "Figma",
    icon: SiFigma,
    description: "Primary design tool",
    color: "#F24E1E",
  },
  {
    name: "Miro",
    icon: SiMiro,
    description: "Collaborative whiteboarding",
    color: "#FFD02F",
  },
  {
    name: "Notion",
    icon: SiNotion,
    description: "Documentation & planning",
    color: "#000000",
  },
  {
    name: "VS Code",
    icon: HiOutlineCode,
    description: "Code & development",
    color: "#007ACC",
  },
  {
    name: "Antigravity",
    icon: HiOutlineSparkles,
    description: "AI-powered development",
    color: "#8B5CF6",
  },
  {
    name: "Spline",
    icon: HiOutlineCube,
    description: "3D design & animation",
    color: "#6C63FF",
  },
  {
    name: "Photoshop",
    icon: HiOutlinePhotograph,
    description: "Image editing & graphics",
    color: "#31A8FF",
  },
  {
    name: "Adobe XD",
    icon: HiOutlineTemplate,
    description: "UI/UX design & prototyping",
    color: "#FF61F6",
  },
  {
    name: "SurveyMonkey",
    icon: SiSurveymonkey,
    description: "User research & feedback",
    color: "#00BF6F",
  },
  {
    name: "Stitch",
    icon: HiOutlineColorSwatch,
    description: "Design handoff & components",
    color: "#1E1E1E",
  },
  {
    name: "Canva",
    icon: SiCanva,
    description: "Quick graphics & presentations",
    color: "#00C4CC",
  },
];

export default function ToolsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="ocean-dot" />
            <span className="text-xs font-semibold text-ocean-600 tracking-widest uppercase">
              Toolkit
            </span>
          </div>
          <h2 className="heading-lg mb-4">Tools I Use</h2>
          <p className="body-lg max-w-2xl mb-12">
            A carefully selected set of tools that power my design and
            development workflow.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 0.06}>
              <div className="group p-6 bg-surface-50 rounded-2xl border border-surface-200 hover:bg-white hover:shadow-elevated hover:border-ocean-100 transition-all duration-400 text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tool.color}10` }}
                >
                  <tool.icon
                    className="w-6 h-6"
                    style={{ color: tool.color }}
                  />
                </div>
                <h3 className="font-display text-sm font-semibold text-ink-900 mb-1">
                  {tool.name}
                </h3>
                <p className="text-xs text-ink-400">{tool.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
