"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <>
      {/* Hero Section — Full-bleed image banner, maintains 1920:522 aspect ratio */}
      <section className="relative w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/about-hero.png"
            alt="Shubham Saurabh — UI/UX Designer"
            width={1920}
            height={522}
            className="w-full h-auto block"
            priority
          />
        </motion.div>
      </section>

      {/* Content Section — Heading + Body */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="section-container">
          <>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-ocean-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="ocean-dot" />
              <span className="text-sm font-medium text-ocean-700">
                About Me
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] font-bold tracking-tight text-ink-900 leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              A designer experimenting with{" "}
              <span className="gradient-text">vibe coding</span>
            </motion.h2>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="body-md">
                Born and raised in Patna, I&apos;m a Google-certified UI/UX
                Designer who left his first job to chase something that felt more
                like a calling than a career.
              </p>

              <p className="body-md">
                My journey started in mechanical engineering. During my first
                internship at Western Railway, I designed an anti-theft dustbin
                for AC2-tier coaches — my first real taste of solving a human
                problem through design. At Dextra Square, I wore multiple hats:
                leading design work, managing teams, and rebuilding the CRM
                workflow. That mix of design, leadership, and collaboration
                taught me how products actually get built — and broke.
              </p>

              <p className="body-md">
                Today, I work as a UI/UX Designer with 2+ years of experience
                across 14+ projects spanning trade systems, CPaaS platforms,
                educational chatbots, legal-tech, and delivery apps. I care
                deeply about usability, system clarity, and clean developer
                handoff — and I&apos;m currently experimenting with AI-assisted,
                prompt-driven design workflows in VS Code and Antigravity,
                blurring the line between designing and shipping.
              </p>

              <p className="body-md">
                I take pride in building things that are not just visually
                compelling, but genuinely useful.
              </p>
            </motion.div>
          </>
        </div>
      </section>
    </>
  );
}
