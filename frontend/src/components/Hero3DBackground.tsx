import { useEffect, useRef, type RefObject } from "react";
import * as THREE from "three";

/**
 * Hero background — a particle "planet" rising beneath the headline.
 *
 *  - Fibonacci-distributed points on a sphere, brighter toward the rim, with a
 *    luminous scan band that sweeps pole to pole.
 *  - An opaque core with a fresnel edge occludes the far side of the globe.
 *  - A back-face atmosphere shell gives the soft green halo on the horizon.
 *  - Great-circle arcs carry travelling light pulses between surface points.
 *  - A faint starfield adds depth; everything eases in on load and drifts
 *    gently toward the cursor.
 */

const GREEN = new THREE.Color("#82E926");
const GREEN_HOT = new THREE.Color("#C8FF7A");

const pointVertex = /* glsl */ `
  attribute float aRand;
  uniform float uTime;
  uniform float uIntro;
  uniform float uPixelRatio;
  uniform float uSize;
  uniform float uRadius;
  varying float vAlpha;
  varying float vHot;

  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vec3 n = normalize(normalMatrix * normalize(position));
    float facing = dot(n, normalize(-mv.xyz));
    float rim = 1.0 - clamp(facing, 0.0, 1.0);

    // Scan band sweeping from the south pole to the north pole
    float scan = fract(uTime * 0.07) * 2.6 - 1.3;
    float band = exp(-pow((position.y / uRadius - scan) * 9.0, 2.0));

    float twinkle = 0.6 + 0.4 * sin(uTime * 1.6 + aRand * 6.2831);
    vHot = clamp(rim * 0.8 + band, 0.0, 1.0);
    vAlpha = (0.18 + 0.82 * pow(rim, 2.2) + band * 0.9) * twinkle * uIntro;

    gl_PointSize = uSize * uPixelRatio * (0.6 + aRand * 0.8) * (1.0 + band * 0.8) * (30.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const pointFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uColorHot;
  varying float vAlpha;
  varying float vHot;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(mix(uColor, uColorHot, vHot), a * vAlpha);
  }
`;

const coreVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const coreFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uIntro;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float fresnel = pow(1.0 - max(dot(vNormal, vView), 0.0), 4.0);
    gl_FragColor = vec4(uColor * fresnel * 0.4 * uIntro, 1.0);
  }
`;

const atmosphereFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform float uIntro;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    // Back faces: brightest hugging the planet's edge, fading to 0 at the shell.
    float x = clamp(-dot(vNormal, vView) * 1.7, 0.0, 1.0);
    float intensity = pow(x, 2.5);
    gl_FragColor = vec4(uColor, intensity * 0.42 * uIntro);
  }
`;

const arcVertex = /* glsl */ `
  attribute float aProgress;
  attribute float aSeed;
  varying float vProgress;
  varying float vSeed;
  void main() {
    vProgress = aProgress;
    vSeed = aSeed;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const arcFragment = /* glsl */ `
  uniform float uTime;
  uniform float uIntro;
  uniform vec3 uColor;
  uniform vec3 uColorHot;
  varying float vProgress;
  varying float vSeed;
  void main() {
    float speed = 0.16 + fract(vSeed * 7.31) * 0.14;
    float head = fract(uTime * speed + vSeed) * 1.8 - 0.4;
    float diff = head - vProgress;
    float pulse = diff > 0.0 ? exp(-diff * 9.0) : 0.0;
    float headGlow = exp(-abs(diff) * 60.0);
    float alpha = (0.07 + pulse * 0.85 + headGlow * 0.6) * uIntro;
    gl_FragColor = vec4(mix(uColor, uColorHot, headGlow), alpha);
  }
`;

type Hero3DBackgroundProps = {
  /** Element the globe's horizon should sit just below (the headline block). */
  horizonAnchorRef?: RefObject<HTMLElement | null>;
};

export function Hero3DBackground({ horizonAnchorRef }: Hero3DBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bloomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrameId = 0;

    // --- Scene, camera, renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      200,
    );
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const isMobile = window.innerWidth < 768;
    const pixelRatio = Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const RADIUS = 24;
    // Recomputed on resize so the horizon lands just below the headline.
    let baseY = -RADIUS - 8;
    let horizonFrac = 0.8;
    let worldHalfHeight = 12;

    // Outer group handles position + cursor tilt; inner group spins.
    const planet = new THREE.Group();
    planet.position.y = baseY;
    planet.rotation.z = 0.18;
    scene.add(planet);
    const spinner = new THREE.Group();
    planet.add(spinner);

    // --- Surface points (Fibonacci sphere) ---
    const POINT_COUNT = window.innerWidth < 768 ? 6000 : 14000;
    const positions = new Float32Array(POINT_COUNT * 3);
    const rands = new Float32Array(POINT_COUNT);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < POINT_COUNT; i++) {
      const y = 1 - (i / (POINT_COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      positions[i * 3] = Math.cos(theta) * r * RADIUS;
      positions[i * 3 + 1] = y * RADIUS;
      positions[i * 3 + 2] = Math.sin(theta) * r * RADIUS;
      rands[i] = Math.random();
    }
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute("aRand", new THREE.BufferAttribute(rands, 1));

    const sharedUniforms = {
      uTime: { value: 0 },
      uIntro: { value: reduceMotion ? 1 : 0 },
    };

    const pointsMat = new THREE.ShaderMaterial({
      vertexShader: pointVertex,
      fragmentShader: pointFragment,
      uniforms: {
        ...sharedUniforms,
        uPixelRatio: { value: pixelRatio },
        uSize: { value: 2.2 },
        uRadius: { value: RADIUS },
        uColor: { value: GREEN },
        uColorHot: { value: GREEN_HOT },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    spinner.add(new THREE.Points(pointsGeo, pointsMat));

    // --- Opaque core (hides the far hemisphere, adds a fresnel edge) ---
    const sphereSegs = window.innerWidth < 768 ? 48 : 96;
    const coreGeo = new THREE.SphereGeometry(RADIUS * 0.985, sphereSegs, sphereSegs);
    const coreMat = new THREE.ShaderMaterial({
      vertexShader: coreVertex,
      fragmentShader: coreFragment,
      uniforms: { uColor: { value: GREEN }, uIntro: sharedUniforms.uIntro },
    });
    planet.add(new THREE.Mesh(coreGeo, coreMat));

    // --- Atmosphere halo ---
    const atmoGeo = new THREE.SphereGeometry(RADIUS * 1.18, sphereSegs, sphereSegs);
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: coreVertex,
      fragmentShader: atmosphereFragment,
      uniforms: { uColor: { value: GREEN }, uIntro: sharedUniforms.uIntro },
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    planet.add(new THREE.Mesh(atmoGeo, atmoMat));

    // --- Data arcs with travelling pulses ---
    const ARC_COUNT = 26;
    const ARC_SEGMENTS = 80;
    const arcMat = new THREE.ShaderMaterial({
      vertexShader: arcVertex,
      fragmentShader: arcFragment,
      uniforms: {
        ...sharedUniforms,
        uColor: { value: GREEN },
        uColorHot: { value: GREEN_HOT },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const arcGeos: THREE.BufferGeometry[] = [];
    const randomOnSphere = () => {
      const u = Math.random() * 2 - 1;
      const t = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      return new THREE.Vector3(Math.cos(t) * s, u, Math.sin(t) * s);
    };
    for (let a = 0; a < ARC_COUNT; a++) {
      const start = randomOnSphere();
      let end = randomOnSphere();
      // Keep arcs a pleasant length — not neighbours, not antipodes.
      while (start.angleTo(end) < 0.5 || start.angleTo(end) > 1.9) end = randomOnSphere();
      const angle = start.angleTo(end);
      const lift = RADIUS * 0.08 * angle;
      const seed = Math.random();

      const arcPositions = new Float32Array((ARC_SEGMENTS + 1) * 3);
      const progress = new Float32Array(ARC_SEGMENTS + 1);
      const seeds = new Float32Array(ARC_SEGMENTS + 1).fill(seed);
      const q = new THREE.Quaternion();
      const axis = new THREE.Vector3().crossVectors(start, end).normalize();
      for (let s = 0; s <= ARC_SEGMENTS; s++) {
        const t = s / ARC_SEGMENTS;
        q.setFromAxisAngle(axis, angle * t);
        const p = start.clone().applyQuaternion(q);
        p.multiplyScalar(RADIUS * 1.004 + Math.sin(Math.PI * t) * lift);
        arcPositions[s * 3] = p.x;
        arcPositions[s * 3 + 1] = p.y;
        arcPositions[s * 3 + 2] = p.z;
        progress[s] = t;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(arcPositions, 3));
      geo.setAttribute("aProgress", new THREE.BufferAttribute(progress, 1));
      geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
      arcGeos.push(geo);
      spinner.add(new THREE.Line(geo, arcMat));
    }

    // --- Distant starfield ---
    const STAR_COUNT = 450;
    const starPositions = new Float32Array(STAR_COUNT * 3);
    const starRands = new Float32Array(STAR_COUNT);
    for (let i = 0; i < STAR_COUNT; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 90;
      starPositions[i * 3 + 1] = (Math.random() - 0.3) * 50;
      starPositions[i * 3 + 2] = -10 - Math.random() * 40;
      starRands[i] = Math.random();
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("aRand", new THREE.BufferAttribute(starRands, 1));
    const starMat = new THREE.ShaderMaterial({
      vertexShader: /* glsl */ `
        attribute float aRand;
        uniform float uTime;
        uniform float uIntro;
        uniform float uPixelRatio;
        varying float vAlpha;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vAlpha = (0.15 + 0.35 * (0.5 + 0.5 * sin(uTime * 0.8 + aRand * 40.0))) * uIntro;
          gl_PointSize = (1.0 + aRand * 1.6) * uPixelRatio;
          gl_Position = projectionMatrix * mv;
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          if (d > 0.5) discard;
          gl_FragColor = vec4(vec3(0.85, 1.0, 0.75), smoothstep(0.5, 0.0, d) * vAlpha);
        }
      `,
      uniforms: { ...sharedUniforms, uPixelRatio: { value: pixelRatio } },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // --- Horizon placement ---
    const tanHalfFov = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));

    // Fraction of the hero height (from the top) where the globe's rim should sit:
    // a small gap below the bottom of the headline, clamped to a sensible band.
    const measureHorizon = (h: number) => {
      const anchor = horizonAnchorRef?.current;
      const section = container.offsetParent;
      let target = 0.8;
      if (anchor && section) {
        let top = 0;
        let el: HTMLElement | null = anchor;
        while (el && el !== section) {
          top += el.offsetTop;
          el = el.offsetParent as HTMLElement | null;
        }
        target = (top + anchor.offsetHeight + Math.max(28, h * 0.035)) / h;
      }
      return Math.min(Math.max(target, 0.6), 0.9);
    };

    // Screen fraction of the sphere's top silhouette for a centre height `c`,
    // with the camera at (0, 0, d) looking straight down -Z.
    const silhouetteFrac = (c: number, d: number) => {
      const alpha = Math.atan(-c / d);
      const beta = Math.asin(Math.min(RADIUS / Math.hypot(c, d), 1));
      return 0.5 + Math.tan(alpha - beta) / (2 * tanHalfFov);
    };

    // Bisection: silhouetteFrac falls monotonically as the centre rises.
    const solveBaseY = (frac: number, d: number) => {
      let lo = -400;
      let hi = 0;
      for (let i = 0; i < 40; i++) {
        const mid = (lo + hi) / 2;
        if (silhouetteFrac(mid, d) > frac) lo = mid;
        else hi = mid;
      }
      return (lo + hi) / 2;
    };

    // --- Resize ---
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      // Pull the camera back on narrow screens so the horizon stays wide.
      camera.position.z = camera.aspect < 1 ? 30 + (1 - camera.aspect) * 22 : 30;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 768 ? 1.5 : 2));
      renderer.setSize(w, h);

      horizonFrac = measureHorizon(h);
      baseY = solveBaseY(horizonFrac, camera.position.z);
      worldHalfHeight = camera.position.z * tanHalfFov;
      planet.position.y = baseY;
      if (bloomRef.current) bloomRef.current.style.top = `${horizonFrac * 100}%`;

      if (reduceMotion) {
        camera.lookAt(0, 0, 0);
        renderer.render(scene, camera);
      }
    };
    handleResize();
    // Container covers viewport changes; the anchor covers font loading and
    // the headline re-wrapping.
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    if (horizonAnchorRef?.current) resizeObserver.observe(horizonAnchorRef.current);

    // --- Cursor parallax ---
    let mouseX = 0;
    let mouseY = 0;
    const handlePointerMove = (e: PointerEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handlePointerMove);

    // --- Only animate while the hero is on screen ---
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(container);

    // --- Loop ---
    const clock = new THREE.Clock();
    const INTRO_DURATION = 2.2;
    const BLOOM_OPACITY = 0.1;
    let lastT = 0;
    let spin = 0;
    let scrollProgress = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!visible) return;

      const t = clock.getElapsedTime();
      const dt = Math.min(t - lastT, 0.1);
      lastT = t;
      const introT = Math.min(t / INTRO_DURATION, 1);
      const intro = 1 - Math.pow(1 - introT, 3);

      sharedUniforms.uTime.value = t;
      sharedUniforms.uIntro.value = intro;

      // 0 at the top of the page -> 1 once the hero has scrolled fully away.
      const rect = container.getBoundingClientRect();
      const targetProgress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      scrollProgress += (targetProgress - scrollProgress) * 0.12;

      // "Setting" on scroll: within the first ~60% of the hero scrolling away,
      // the rim sinks past the hero's bottom edge and fades out, so the edge
      // never slices a visible globe. It also spins faster as it goes.
      const setting = THREE.MathUtils.smoothstep(scrollProgress, 0, 0.6);
      const sink = (1 - horizonFrac + 0.04) * 2 * worldHalfHeight * 1.15 * setting;
      const fade = 1 - THREE.MathUtils.smoothstep(scrollProgress, 0.12, 0.55);
      renderer.domElement.style.opacity = String(fade);
      if (bloomRef.current) bloomRef.current.style.opacity = String(BLOOM_OPACITY * fade);

      // Planet rises into place, then spins slowly and tilts toward the cursor.
      planet.position.y = baseY - (1 - intro) * 6 - sink;
      spin += dt * (0.045 + scrollProgress * 0.6);
      spinner.rotation.y = spin;
      planet.rotation.x += (mouseY * 0.06 - planet.rotation.x) * 0.04;
      camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.04;
      camera.lookAt(0, 0, 0);

      stars.rotation.y = t * 0.004;

      renderer.render(scene, camera);
    };

    if (reduceMotion) {
      sharedUniforms.uTime.value = 4;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    } else {
      animate();
    }

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      arcGeos.forEach((g) => g.dispose());
      arcMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, [horizonAnchorRef]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none"
    >
      {/* Horizon bloom behind the planet's edge (top is set to the horizon in JS) */}
      <div ref={bloomRef} className="absolute left-1/2 top-[80%] h-[420px] w-[110vw] max-w-[1500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#82E926] opacity-[0.10] blur-[160px]" />

      {/* Headline contrast mask (keeps typography crisp) */}
      <div className="absolute left-1/2 top-[45%] h-[400px] w-[800px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/55 blur-[75px]" />

      {/* Top & bottom vignettes */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/70 to-transparent" />
      {/* Taller bottom fade: the globe melts into the next section instead of
          being cut off at the hero's edge. */}
      <div className="absolute inset-x-0 bottom-0 h-[16%] bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>
  );
}
