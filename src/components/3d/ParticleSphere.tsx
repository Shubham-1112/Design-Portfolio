import { useMemo, useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMouse3D } from "./useMouse3D";
import { vertexShader, fragmentShader } from "./particleSphereShaders";

export interface ParticleSphereProps {
  radius?: number;
  particleCount?: number;
  colorA?: string;
  colorB?: string;
  className?: string;
}

export default function ParticleSphere({
  radius = 2.0,
  particleCount,
  colorA = "#0ea5e9", // ocean-500 default
  colorB = "#38bdf8", // ocean-400 default
}: ParticleSphereProps) {
  const { size } = useThree();
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Hook 3D mouse coordinates unprojection
  const mouseState = useMouse3D();

  // ─── Optimized, instant-loading particle count (runs 60fps on all devices) ───
  const count = useMemo(() => {
    if (particleCount) return particleCount;
    if (typeof window === "undefined") return 80000;
    const isMobile = window.innerWidth < 768;
    return isMobile ? 30000 : 80000;
  }, [particleCount]);

  // ─── Generate golden-ratio Fibonacci Unit Sphere points ───
  const geometryData = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 3);
    const colorMixes = new Float32Array(count);

    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < count; i++) {
      // 1. Fibonacci sphere projection
      const y = 1 - (i / (count - 1)) * 2; // Goes from 1.0 down to -1.0
      const radiusAtY = Math.sqrt(1 - y * y);

      const theta = 2 * Math.PI * goldenRatio * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // 2. Stable random vector used for shader phase offsets, size offsets, frequency noise shifts
      randoms[i * 3] = Math.random();
      randoms[i * 3 + 1] = Math.random();
      randoms[i * 3 + 2] = Math.random();

      // 3. Stable mix coordinate for accent color gradient
      colorMixes[i] = Math.random();
    }

    return { positions, randoms, colorMixes };
  }, [count]);

  // ─── Setup Shared Shaders Uniforms ───
  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0.0 },
      uFlowFrequency: { value: 1.5 },
      uFlowSpeed: { value: 0.15 },
      uFlowAmplitude: { value: 0.08 },
      uShimmerFrequency: { value: 2.0 },
      uShimmerAmplitude: { value: 0.03 },

      uMouse: { value: new THREE.Vector3(0, 0, 0) },
      uMouseStrength: { value: 0.0 },
      uRepelStrength: { value: 0.5 },
      uInfluenceRadius: { value: 2.5 * radius },
      uSwirlStrength: { value: 0.3 },

      uSphereRadius: { value: radius },
      uPixelRatio: { value: 1.0 },
      uOpacity: { value: 0.85 },

      uColorA: { value: new THREE.Color(colorA) },
      uColorB: { value: new THREE.Color(colorB) },
    };
  }, [radius, colorA, colorB]);

  // Update Pixel Ratio inside uniforms
  useEffect(() => {
    uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
  }, [uniforms]);

  // Update color uniforms dynamically if color props change
  useEffect(() => {
    uniforms.uColorA.value.set(colorA);
    uniforms.uColorB.value.set(colorB);
  }, [colorA, colorB, uniforms]);

  // ─── R3F Animation Render Tick ───
  useFrame((state, delta) => {
    // 1. Tick Time
    uniforms.uTime.value += delta;

    // 2. Read mouse position & lerp strength smoothly
    const mouse = mouseState.current;
    
    // Quick increase on enter (0.04), slow elastic return on leave (0.025)
    const lerpFactor = mouse.targetStrength > uniforms.uMouseStrength.value ? 0.04 : 0.025;
    uniforms.uMouseStrength.value += (mouse.targetStrength - uniforms.uMouseStrength.value) * lerpFactor;
    
    // Feed unprojected mouse world vector to shader
    uniforms.uMouse.value.copy(mouse.position);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[geometryData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aBasePosition"
          args={[geometryData.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          args={[geometryData.randoms, 3]}
        />
        <bufferAttribute
          attach="attributes-aColorMix"
          args={[geometryData.colorMixes, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
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
