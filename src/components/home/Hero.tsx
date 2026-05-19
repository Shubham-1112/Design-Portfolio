"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { HiOutlineArrowDown } from "react-icons/hi";

const SplineScene = dynamic(() => import("./SplineWrapper"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[400px] lg:min-h-[500px]" />
  ),
});

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: "Years Experience" },
  { value: "5", label: "Industry Domains" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const scrollOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium Atmospheric Background */}
      <div className="absolute inset-0 bg-surface-50 pointer-events-none" />

      {/* Symmetric Deep Atmospheric Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[80%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ocean-900/90 via-ocean-700/40 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-5%] w-[80%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ocean-900/90 via-ocean-700/40 to-transparent blur-[120px] pointer-events-none" />

      {/* Symmetric Bright Cyan Core Lights */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />

      {/* Symmetric Deep Anchor Shadow Glows */}
      <div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-ocean-950/60 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-ocean-950/60 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative w-full max-w-none px-0 sm:max-w-7xl sm:mx-auto sm:px-8 sm:pr-0 lg:px-12 lg:pr-0 pt-32 pb-20">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-8 sm:gap-0">
          {/* Left side — textual content */}
          <div className="w-full sm:w-[50%] px-6 sm:px-0 relative z-10">

            {/* Headline */}
            <motion.h1
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Designing experiences
              <br />
              <span className="text-ocean-900">that people love</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="body-lg max-w-xl mb-10 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              I craft intuitive, scalable digital products for SaaS, mobile, and
              enterprise platforms — turning complex problems into experiences
              users actually enjoy.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button href="#projects" variant="primary" size="lg" icon>
                View My Work
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-10 md:gap-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-ink-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — Spline 3D Asset */}
          <motion.div
            className="w-full sm:w-[50%] h-[600px] z-0 flex items-center justify-center overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <div
              className="absolute w-[1050px] h-[1050px] top-1/2 left-1/2 -translate-x-[54%] -translate-y-1/2 pointer-events-auto scale-[0.67] origin-center flex items-center justify-center [&>div]:w-full [&>div]:h-full [&_a]:!hidden [&_#logo]:!hidden"
            >
              <SplineScene scene="https://prod.spline.design/03USCTROg4TrNTtL/scene.splinecode" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: scrollOpacity }}
        >
          <span className="text-[11px] text-ink-400 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiOutlineArrowDown className="w-4 h-4 text-ink-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
