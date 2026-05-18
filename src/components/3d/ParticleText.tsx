import { useMemo, useRef } from "react";
import * as THREE from "three";
import { vertexShader, fragmentShader } from "./ParticleMaterial";

interface ParticleTextProps {
  uniforms: { [uniform: string]: THREE.IUniform };
  sphereRadius: number;
  text: string;
}

// ─── Sample text onto a flat, camera-facing centered holographic plane ───
function sampleTextParticles(
  text: string,
  count: number,
  sphereRadius: number
): Float32Array {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return new Float32Array(0);

  // High resolution offscreen canvas for pin-sharp rasterization
  // High resolution offscreen canvas for pin-sharp rasterization
  canvas.width = 800;
  canvas.height = 200;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Clean, thin, ultra-premium typography
  ctx.fillStyle = "#fff";
  ctx.font = "500 68px Outfit, Inter, system-ui, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  // Filter high-density active coordinates
  const whitePixels: [number, number][] = [];
  for (let y = 0; y < canvas.height; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
      const idx = (y * canvas.width + x) * 4;
      if (pixels[idx] > 140) {
        whitePixels.push([x, y]);
      }
    }
  }

  const positions = new Float32Array(count * 3);
  
  // Elegant width/height bounds mapped relative to the sphere's dimensions
  const widthScale = sphereRadius * 1.5; 
  const heightScale = sphereRadius * 0.38; 

  for (let i = 0; i < count; i++) {
    if (whitePixels.length === 0) break;
    const pixel = whitePixels[Math.floor(Math.random() * whitePixels.length)];

    // Map 2D pixel index to a flat central plane
    const x = ((pixel[0] / canvas.width) - 0.5) * widthScale;
    const y = -((pixel[1] / canvas.height) - 0.5) * heightScale;
    
    // Very subtle volumetric depth thickness for high-end 3D feeling (±0.15)
    // Always faces forward, ensuring absolute readability under camera parallax drift
    const z = (Math.random() - 0.5) * 0.3;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  return positions;
}

export default function ParticleText({ uniforms, sphereRadius, text }: ParticleTextProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const particleData = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const count = isMobile ? 500 : 900; // Breathable legibility density

    const textPositions = sampleTextParticles(text, count, sphereRadius);

    const positions = new Float32Array(count * 3);
    const originals = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);
    const speeds = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    // Highly readable premium blue theme gradients
    const textColors = [
      new THREE.Color(0x0ea5e9), // ocean-500
      new THREE.Color(0x38bdf8), // ocean-400
      new THREE.Color(0x0284c7), // ocean-600
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions[i3] = textPositions[i3];
      positions[i3 + 1] = textPositions[i3 + 1];
      positions[i3 + 2] = textPositions[i3 + 2];

      originals[i3] = textPositions[i3];
      originals[i3 + 1] = textPositions[i3 + 1];
      originals[i3 + 2] = textPositions[i3 + 2];

      // Highly crisp, tiny star sizes for elegant typography (0.8 to 1.8)
      sizes[i] = Math.random() * 1.0 + 0.8;
      phases[i] = Math.random();
      speeds[i] = Math.random() * 0.3 + 0.7;

      const c = textColors[Math.floor(Math.random() * textColors.length)];
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    return { positions, originals, sizes, phases, speeds, colors };
  }, [sphereRadius, text]);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(particleData.positions, 3));
    geom.setAttribute("aOriginalPosition", new THREE.BufferAttribute(particleData.originals, 3));
    geom.setAttribute("aSize", new THREE.BufferAttribute(particleData.sizes, 1));
    geom.setAttribute("aPhase", new THREE.BufferAttribute(particleData.phases, 1));
    geom.setAttribute("aSpeed", new THREE.BufferAttribute(particleData.speeds, 1));
    geom.setAttribute("aColor", new THREE.BufferAttribute(particleData.colors, 3));
    return geom;
  }, [particleData]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}
