"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

export default function HomeCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-gradient-ocean p-12 md:p-16 lg:p-20 text-center overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Have a project in mind?
              </h2>
              <p className="text-lg text-white/80 max-w-lg mx-auto mb-8">
                Let&apos;s collaborate to create something extraordinary.
                I&apos;m always open to discussing new opportunities.
              </p>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon
                className="!bg-white !text-ocean-700 !border-white hover:!bg-white/90"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
