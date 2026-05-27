"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-ocean-subtle pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-ocean-100/30 rounded-full blur-[100px] pointer-events-none" />

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
              Get in Touch
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s create
            <br />
            <span className="gradient-text">something great</span>
          </motion.h1>

          <motion.p
            className="body-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            I&apos;m always open to discussing new projects, creative ideas,
            or opportunities to be part of your design journey.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
