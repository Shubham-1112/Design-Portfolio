"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "@/components/ui/SectionHeader";
import { projects, categories } from "@/data/projects";
import type { Project } from "@/data/projects";

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section className="section-padding bg-surface-50" id="projects">
      <div className="section-container">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="A curated selection of design work spanning SaaS platforms, mobile applications, and enterprise systems."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "text-white"
                  : "text-ink-500 hover:text-ink-800 bg-white border border-surface-200 hover:border-surface-300"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="category-bg"
                  className="absolute inset-0 rounded-full bg-gradient-ocean shadow-glass"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => project.gallery && setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Project portfolio modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
