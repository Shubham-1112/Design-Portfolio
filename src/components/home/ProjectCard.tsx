"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative bg-white rounded-2xl border border-surface-200 overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:border-ocean-200 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Thumbnail area — will-change promotes to GPU layer for smooth hover */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-gradient-ocean-subtle will-change-transform">
        {project.image ? (
          /* Project screenshot */
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-top transform-gpu group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <>
            {/* ── NDA Confidential Placeholder ── */}
            {/* Base tinted background */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(145deg, ${project.color}18 0%, ${project.color}08 40%, ${project.color}14 100%)`,
              }}
            />

            {/* Faux blurred wireframe mockup elements */}
            <div className="absolute inset-0 overflow-hidden" style={{ filter: "blur(6px)" }}>
              {/* Top nav bar */}
              <div
                className="absolute top-3 left-4 right-4 h-5 rounded-md opacity-[0.15]"
                style={{ backgroundColor: project.color }}
              />
              {/* Sidebar */}
              <div
                className="absolute top-11 left-4 w-16 bottom-4 rounded-md opacity-[0.08]"
                style={{ backgroundColor: project.color }}
              />
              {/* Content blocks */}
              <div
                className="absolute top-11 left-24 right-4 h-14 rounded-md opacity-[0.10]"
                style={{ backgroundColor: project.color }}
              />
              <div
                className="absolute top-28 left-24 w-[45%] h-8 rounded-md opacity-[0.07]"
                style={{ backgroundColor: project.color }}
              />
              <div
                className="absolute top-28 right-4 w-[30%] h-8 rounded-md opacity-[0.07]"
                style={{ backgroundColor: project.color }}
              />
              {/* Chart bars */}
              <div className="absolute bottom-4 left-24 right-4 h-12 flex items-end gap-1.5 opacity-[0.10]">
                {[40, 65, 50, 80, 55, 70, 45, 60, 75, 50].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ height: `${h}%`, backgroundColor: project.color }}
                  />
                ))}
              </div>
            </div>

            {/* Frosted glass overlay */}
            <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40" />

            {/* Dot-grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(${project.color} 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            />

            {/* Central NDA badge — glass-morphism */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-[1]">
              <div className="flex flex-col items-center gap-1.5 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-elevated group-hover:bg-white/75 group-hover:scale-[1.03] transition-all duration-500">
                {/* Lock SVG icon */}
                <svg
                  className="w-7 h-7 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                  style={{ color: project.color }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <span
                  className="text-[11px] font-bold tracking-[0.18em] uppercase opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ color: project.color }}
                >
                  Under NDA
                </span>
              </div>
              <span className="text-[9px] font-medium tracking-widest uppercase text-ink-400 opacity-0 group-hover:opacity-60 transition-opacity duration-500 mt-1">
                Confidential Project
              </span>
            </div>
          </>
        )}

        {/* Category badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-white/90 backdrop-blur-sm"
              style={{ color: project.color }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-ink-900 mb-1 group-hover:text-ocean-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-ink-500 mb-3">{project.subtitle}</p>
        <p className="text-sm text-ink-500 leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}

