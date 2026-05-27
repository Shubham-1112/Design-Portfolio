"use client";

import { motion } from "framer-motion";

export default function ExperienceHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-ocean-subtle pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-ocean-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative section-container">
        <div className="max-w-3xl">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-ocean-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="ocean-dot" />
            <span className="text-sm font-medium text-ocean-700">
              Career Journey
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Professional
            <br />
            <span className="gradient-text">Experience</span>
          </motion.h1>

          <motion.p
            className="body-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            A timeline of my design career — from enterprise product teams
            to independent design projects, each role shaping my approach to
            user-centered design.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
