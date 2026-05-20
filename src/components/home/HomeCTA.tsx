"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import dynamic from "next/dynamic";

const SplineScene = dynamic(() => import("./SplineWrapper"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  ),
});

export default function HomeCTA() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="section-container">
        <ScrollReveal>
          {/*
            Parent container — blue gradient lives directly on this element.
            Mobile: children use normal flow (flex-col), no overlap.
            lg+: children switch to absolute positioning (3-layer stack).
          */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-ocean lg:min-h-[450px]">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

            {/*
              ========== TEXT CONTAINER ==========
              Mobile: relative (normal flow) → stacks on top.
              lg+: absolute overlay, left-aligned, vertically centered.
            */}
            <div className="relative lg:absolute lg:inset-0 z-[2] p-8 md:p-12 lg:p-16 lg:min-h-[450px] flex items-center justify-center lg:justify-start pointer-events-none">
              <div className="w-full lg:w-[50%] text-center lg:text-left flex flex-col items-center lg:items-start pointer-events-auto">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Have a project in mind?
                </h2>
                <p className="text-lg text-white/80 max-w-lg mb-8">
                  Let&apos;s collaborate to create something extraordinary.
                  I&apos;m always open to discussing new opportunities.
                </p>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  icon
                  className="!bg-white !text-ocean-700 !border-white hover:!bg-white/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  Start a Conversation
                </Button>
              </div>
            </div>

            {/*
              ========== SPLINE CONTAINER ==========
              Mobile: relative (normal flow) → stacks below text, explicit height.
              lg+: absolute layer, right-aligned, full container height, zero padding.
            */}
            <div className="relative lg:absolute lg:inset-0 z-[1] pointer-events-auto">
              <div className="h-[300px] sm:h-[350px] lg:h-auto lg:absolute lg:top-0 lg:bottom-0 lg:right-0 w-full lg:w-[55%] overflow-hidden">
                <div className="w-full h-full lg:absolute lg:inset-0 flex items-center justify-center [&>div]:w-full [&>div]:h-full [&_a]:!hidden [&_#logo]:!hidden">
                  <SplineScene scene="https://prod.spline.design/28KQbfJL2JNssjw3/scene.splinecode" />
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

