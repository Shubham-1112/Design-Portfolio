"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-ocean-subtle pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ocean-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative section-container">
        <div className="max-w-4xl">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-ocean-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="ocean-dot" />
            <span className="text-sm font-medium text-ocean-700">
              About Me
            </span>
          </motion.div>

          <motion.h1
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Crafting digital
            <br />
            <span className="gradient-text">experiences with purpose</span>
          </motion.h1>

          <motion.p
            className="body-lg max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            I&apos;m Shubham Saurabh, a UI/UX Designer based in Bihar, India. 
            I believe in the power of thoughtful design to solve real problems. 
            My journey spans enterprise SaaS platforms, mobile applications, 
            and complex systems — always with a focus on making technology 
            more human.
          </motion.p>

          <motion.p
            className="body-md max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With a background in both design and engineering, I bridge the gap 
            between aesthetics and functionality. Every project I take on 
            is an opportunity to create experiences that are not just visually 
            compelling, but genuinely useful and delightful.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
