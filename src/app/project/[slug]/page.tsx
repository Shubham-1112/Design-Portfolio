"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import { useEffect } from "react";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const project = projects.find((p) => p.id === slug);

  // Redirect if project is not found
  useEffect(() => {
    if (!project && slug) {
      router.push("/");
    }
  }, [project, slug, router]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-surface-50 pt-28 pb-20"
    >
      {/* Floating Back Button */}
      <Link
        href="/#projects"
        className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 flex items-center gap-2 px-5 py-3 bg-ink-900 text-white rounded-full shadow-elevated hover:bg-ocean-600 transition-all duration-300 group hover:-translate-y-1"
        aria-label="Back to Portfolio"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-medium text-sm">Back to Portfolio</span>
      </Link>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Top inline back button for initial view */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-ink-500 hover:text-ink-900 mb-8 transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to Portfolio</span>
        </Link>

        {/* Header */}
        <div className="flex items-center gap-5 mb-12">
          <div className="w-14 h-14 rounded-full bg-surface-200 flex items-center justify-center text-ink-900 font-bold text-xl shadow-sm">
            S
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink-900 leading-tight">
              {project.title}
            </h1>
            <p className="text-base text-ink-500 mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="flex flex-col w-full shadow-2xl rounded-2xl overflow-hidden bg-white border border-surface-200">
          {project.gallery && project.gallery.length > 0 ? (
            project.gallery.map((imgUrl, index) => (
              <div
                key={index}
                className="relative w-full flex flex-col"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgUrl}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto block"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding={index < 2 ? "sync" : "async"}
                  {...(index === 0 ? { fetchPriority: "high" } as any : {})}
                />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center bg-white rounded-2xl border border-surface-200 shadow-sm">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-lg font-medium text-ink-900 mb-2">
                No detailed case study available yet
              </h3>
              <p className="text-ink-500">
                More details about this project will be added soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
