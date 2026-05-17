"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative bg-white rounded-2xl border border-surface-200 overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:border-ocean-200 hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Thumbnail area */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-gradient-ocean-subtle">
        {/* Decorative elements */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, ${project.color} 0%, transparent 50%), radial-gradient(circle at 70% 60%, ${project.color} 0%, transparent 50%)`,
          }}
        />

        {/* Large icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500">
            {project.icon}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
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
        <p className="text-sm text-ink-500 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-medium text-ink-500 bg-surface-100 rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2.5 py-1 text-[11px] font-medium text-ink-400 bg-surface-100 rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-1.5 text-sm font-medium text-ocean-600 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          View Case Study
          <HiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.article>
  );
}
