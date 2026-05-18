"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import ParticleSphere from "./ParticleSphere";

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  // Coordinate high-contrast theme colors for maximum visibility on off-white backgrounds
  const themeColors = {
    colorA: "#0284c7", // Deep Ocean Blue (ocean-600)
    colorB: "#0891b2", // Deep Cyan (cyan-600)
  };

  // 1. WebGL Availability & Context Protection
  useEffect(() => {
    try {
      const testCanvas = document.createElement("canvas");
      const isWebGLAvailable = !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
      );
      if (!isWebGLAvailable) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  // 3. IntersectionObserver Throttling (Pauses GPU when canvas leaves viewport)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 } // Trigger pause when less than 5% is on screen
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  // ─── WebGL Missing Fallback Visual ───
  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center relative min-h-[400px] lg:min-h-[500px]">
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-ocean-500/20 via-cyan-400/20 to-sky-300/10 blur-3xl animate-float" />
        <div className="relative w-64 h-64 rounded-full border border-ocean-200/40 bg-white/40 backdrop-blur-md shadow-glass flex items-center justify-center animate-pulse-slow">
          <div className="absolute inset-4 rounded-full border border-cyan-100/30 bg-gradient-to-tr from-ocean-50/30 to-cyan-50/20" />
          <span className="relative text-ink-900 font-display font-semibold tracking-wide text-lg sm:text-xl text-center px-4 bg-clip-text text-transparent bg-gradient-to-r from-ocean-600 via-ocean-500 to-cyan-600">
            Shubham Saurabh
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center relative select-none"
      style={{ cursor: "default" }}
      aria-hidden="true"
    >
      {isVisible && (
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
          }}
          onCreated={({ gl }) => {
            const canvas = gl.domElement;
            const handleContextLost = (e: Event) => {
              e.preventDefault();
              console.warn("WebGL Context Lost inside dynamic canvas. Swapped to premium CSS orb.");
              setHasWebGL(false);
            };
            canvas.addEventListener("webglcontextlost", handleContextLost);
          }}
          style={{ background: "transparent", width: "100%", height: "100%", display: "block" }}
        >
          {/* Light systems */}
          <ambientLight intensity={1.5} />
          
          {/* Starry Golden-Ratio Particle Sphere Mesh */}
          <ParticleSphere
            radius={2.0}
            colorA={themeColors.colorA}
            colorB={themeColors.colorB}
          />
        </Canvas>
      )}
    </div>
  );
}
