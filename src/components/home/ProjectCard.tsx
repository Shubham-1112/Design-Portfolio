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
            {/* Decorative elements */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, ${project.color} 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${project.color} 0%, transparent 50%)`,
              }}
            />
            {/* Fallback icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500">
                {project.icon}
              </span>
            </div>
          </>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-white/90 backdrop-blur-sm"
            style={{ color: project.color }}
          >
            {project.category}
          </span>
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

