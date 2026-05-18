import * as THREE from "three";

export const vertexShader = `
  uniform float uTime;
  uniform float uBreathing;
  uniform vec2 uMouse3D;
  uniform float uMouseRadius;
  uniform float uMouseStrength;
  uniform float uPixelRatio;
  uniform float uSphereRadius;

  attribute float aSize;
  attribute float aPhase;
  attribute float aSpeed;
  attribute vec3 aColor;
  attribute vec3 aOriginalPosition;

  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;

  // Simplex 3D noise generator
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vec3 pos = aOriginalPosition;

    // Volumetric breathing (extremely restrained: 3% max scale)
    float breathScale = 1.0 + uBreathing * 0.03;
    pos *= breathScale;

    // Organic noise-based turbulence (subtle, airy)
    float noiseFreq = 1.1;
    float noiseAmp = 0.04 * uSphereRadius;
    float n1 = snoise(pos * noiseFreq + uTime * 0.08);
    float n2 = snoise(pos * noiseFreq * 1.2 + uTime * 0.07 + 100.0);
    float n3 = snoise(pos * noiseFreq * 0.7 + uTime * 0.1 + 200.0);
    pos += vec3(n1, n2, n3) * noiseAmp;

    // Sinusoidal floating
    pos.y += sin(uTime * 0.25 + aPhase * 6.28) * 0.015 * uSphereRadius;

    // Volumetric Lens Mouse Repulsion (XY distance threshold)
    vec2 mouseDiff = pos.xy - uMouse3D;
    float distXY = length(mouseDiff);
    if (distXY < uMouseRadius && distXY > 0.001) {
      float force = (1.0 - distXY / uMouseRadius);
      force = force * force * uMouseStrength;
      
      // Repel in XY plane
      pos.xy += normalize(mouseDiff) * force * 0.9;
      
      // Volumetric split in Z (creating a spectacular 3D lens hole)
      pos.z += (pos.z >= 0.0 ? 1.0 : -1.0) * force * 0.45;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Pin-sharp micro-particle size (resembles starry dust, very clean definition)
    float sizeScale = aSize * uPixelRatio * 0.18; 
    gl_PointSize = sizeScale * (38.0 / -mvPosition.z);

    vColor = aColor;
    vDepth = -mvPosition.z;

    // Fade edges elegantly
    float centerDist = length(aOriginalPosition) / uSphereRadius;
    vAlpha = smoothstep(1.3, 0.48, centerDist) * 0.45 + 0.35;
  }
`;

export const fragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;
  varying float vDepth;

  void main() {
    // Perfectly circular shape
    float d = length(gl_PointCoord - vec2(0.5));
    if (d > 0.5) discard;

    // Pin-sharp, anti-aliased edge (steep gradient for atomic, sharp look)
    float alpha = smoothstep(0.5, 0.43, d);
    alpha *= vAlpha * 0.72; // Crisp but highly delicate translucent opacity

    // Tiny, premium dot center glow
    float glow = exp(-d * 7.5) * 0.12;
    vec3 finalColor = vColor + glow * vec3(0.55, 0.82, 1.0);

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export function createParticleUniforms(sphereRadius: number) {
  return {
    uTime: { value: 0 },
    uBreathing: { value: 0 },
    uMouse3D: { value: new THREE.Vector2(0, 0) },
    uMouseRadius: { value: 1.8 }, // Precise localized mouse radius
    uMouseStrength: { value: 0 },
    uPixelRatio: { value: 1.5 },
    uSphereRadius: { value: sphereRadius },
  };
}
