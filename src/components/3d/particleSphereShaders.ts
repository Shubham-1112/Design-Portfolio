// ─── GPU-Driven Curl-Noise & Swirl Particle Shaders ───

export const vertexShader = `
  uniform float uTime;
  uniform float uFlowFrequency;
  uniform float uFlowSpeed;
  uniform float uFlowAmplitude;
  uniform float uShimmerFrequency;
  uniform float uShimmerAmplitude;
  
  uniform vec3 uMouse;
  uniform float uMouseStrength;
  uniform float uRepelStrength;
  uniform float uInfluenceRadius;
  uniform float uSwirlStrength;
  
  uniform float uSphereRadius;
  uniform float uPixelRatio;

  attribute vec3 aBasePosition;
  attribute vec3 aRandom;
  attribute float aColorMix;

  varying float vColorMix;
  varying float vBrightness;

  // ─── Ashima Arts Simplex 3D Noise ───
  vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 * D.yyy;

    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  // ─── Analytical 3D Curl Noise ───
  vec3 curlNoise(vec3 p) {
    const float e = 0.01;
    float dx = 2.0 * e;
    
    vec3 p_x0 = p - vec3(e, 0.0, 0.0);
    vec3 p_x1 = p + vec3(e, 0.0, 0.0);
    vec3 p_y0 = p - vec3(0.0, e, 0.0);
    vec3 p_y1 = p + vec3(0.0, e, 0.0);
    vec3 p_z0 = p - vec3(0.0, 0.0, e);
    vec3 p_z1 = p + vec3(0.0, 0.0, e);
    
    // Component fields of vector potential A
    float Ax_y0 = snoise(p_y0);
    float Ax_y1 = snoise(p_y1);
    float Ax_z0 = snoise(p_z0);
    float Ax_z1 = snoise(p_z1);
    
    float Ay_x0 = snoise(p_x0 + vec3(11.5, 34.2, 1.7));
    float Ay_x1 = snoise(p_x1 + vec3(11.5, 34.2, 1.7));
    float Ay_z0 = snoise(p_z0 + vec3(11.5, 34.2, 1.7));
    float Ay_z1 = snoise(p_z1 + vec3(11.5, 34.2, 1.7));
    
    float Az_x0 = snoise(p_x0 + vec3(23.7, 7.1, 44.8));
    float Az_x1 = snoise(p_x1 + vec3(23.7, 7.1, 44.8));
    float Az_y0 = snoise(p_y0 + vec3(23.7, 7.1, 44.8));
    float Az_y1 = snoise(p_y1 + vec3(23.7, 7.1, 44.8));
    
    float cx = (Az_y1 - Az_y0 - (Ay_z1 - Ay_z0)) / dx;
    float cy = (Ax_z1 - Ax_z0 - (Az_x1 - Az_x0)) / dx;
    float cz = (Ay_x1 - Ay_x0 - (Ax_y1 - Ax_y0)) / dx;
    
    return vec3(cx, cy, cz);
  }

  void main() {
    vColorMix = aColorMix;

    // 1. Calculate active animation rate boosts on pointer hover (Global Chaos)
    float flowSpeedEff = uFlowSpeed * (1.0 + uMouseStrength * 4.0);
    float flowAmpEff = uFlowAmplitude * (1.0 + uMouseStrength * 6.0);
    float shimmerAmpEff = uShimmerAmplitude * (1.0 + uMouseStrength * 6.0);

    // 2. Base position set to golden ratio unit sphere
    vec3 pos = aBasePosition * uSphereRadius;

    // 3. Compute continuous Tangent Flow crawled over surface via Curl Noise
    vec3 flowNoisePos = aBasePosition * uFlowFrequency + uTime * flowSpeedEff + aRandom * 0.05;
    vec3 flowDir = curlNoise(flowNoisePos);
    
    // Project offset onto the unit sphere's local tangent plane so particles crawl strictly along the shell
    vec3 tangentFlow = flowDir - dot(flowDir, aBasePosition) * aBasePosition;
    pos += tangentFlow * flowAmpEff * uSphereRadius;

    // 4. Compute Radial Shimmer/Breathing displacement
    vec3 shimmerPos = aBasePosition * uShimmerFrequency + uTime * flowSpeedEff * 1.5 + aRandom.yzx * 5.0;
    float shimmer = snoise(shimmerPos);
    pos += aBasePosition * shimmer * shimmerAmpEff * uSphereRadius;

    // 5. Global Mouse Destabilization & Turbulence (Erupts into swarming space)
    if (uMouseStrength > 0.0) {
      vec3 mouseDiff = pos - uMouse;
      float mouseDist = length(mouseDiff);
      
      // Large influence radius forces global repulsion across most of the sphere
      float repelFactor = smoothstep(uInfluenceRadius, 0.0, mouseDist);
      float repelStrength = uMouseStrength * uRepelStrength * repelFactor;
      pos += normalize(mouseDiff) * repelStrength * uSphereRadius;

      // Orbit/Swirl component: cross product with camera-relative fixed axes
      vec3 up = vec3(0.0, 1.0, 0.0);
      vec3 swirlDir = cross(normalize(mouseDiff), up);
      float swirl = uMouseStrength * uSwirlStrength * repelFactor;
      pos += swirlDir * swirl * uSphereRadius;
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // 6. Precise particle point sizing (1.4px to 2.2px base on high-DPI with mild random scale offsets)
    float baseSize = 1.6;
    float sizeVar = mix(0.7, 1.4, aRandom.z);
    gl_PointSize = baseSize * sizeVar * uPixelRatio * (38.0 / -mvPosition.z);

    // 7. Subtle peak brightness modulation based on camera depth and flow peaks
    vBrightness = (1.0 - (mvPosition.z / -10.0)) * 0.5 + shimmer * 0.5;
  }
`;

export const fragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;

  varying float vColorMix;
  varying float vBrightness;

  void main() {
    // Round dot particle clipping
    vec2 pt = gl_PointCoord - vec2(0.5);
    float r = length(pt);
    if (r > 0.5) discard;

    // Soft radial falloff for anti-aliasing (no harsh squares)
    float alpha = smoothstep(0.5, 0.28, r);

    // Dynamic gradient color mix
    vec3 baseColor = mix(uColorA, uColorB, vColorMix);

    gl_FragColor = vec4(baseColor, alpha * uOpacity);
  }
`;
