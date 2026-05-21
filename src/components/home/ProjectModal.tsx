"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Scroll to top when opening a new project
  useEffect(() => {
    if (project && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Fixed close button — always visible top-right */}
          <motion.button
            onClick={onClose}
            className="fixed top-5 right-5 z-[103] w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md flex items-center justify-center transition-colors duration-200 shadow-lg"
            aria-label="Close project"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <HiX className="w-5 h-5 text-white" />
          </motion.button>

          {/* Modal panel */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-start justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              ref={scrollRef}
              className="w-full h-full overflow-y-auto"
            >
              <div className="min-h-full flex flex-col items-center py-8 px-4 sm:px-6">
                {/* Header bar */}
                <div className="w-full max-w-[1400px] flex items-center gap-3 mb-6">
                  {/* Avatar with initials */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: project.color }}
                  >
                    S
                  </div>
                  <div>
                    <h2 className="text-white font-display font-semibold text-lg leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-white/60 text-xs">{project.subtitle}</p>
                  </div>
                </div>

                {/* Gallery images — stacked vertically, full content width */}
                <div className="w-full max-w-[1400px] flex flex-col">
                  {project.gallery?.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} — slide ${i + 1}`}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-auto block"
                    />
                  ))}
                </div>

                {/* Bottom spacer */}
                <div className="h-12" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
