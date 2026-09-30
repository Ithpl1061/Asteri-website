import { useEffect, useRef } from "react";
import * as THREE from "three";

export function Hero3DBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;

    // --- 1. Scene, Camera & Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.028);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5.2, 21);
    camera.lookAt(0, -2.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.85;
    container.appendChild(renderer.domElement);

    // --- 2. Master Wave Group ---
    const waveGroup = new THREE.Group();
    scene.add(waveGroup);

    // --- 3. Ambient & Neon Point Lights ---
    const ambientLight = new THREE.AmbientLight(0x18440d, 3.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x82e926, 12, 60);
    pointLight1.position.set(0, 2, 8);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x39ff14, 9, 50);
    pointLight2.position.set(-15, -4, 4);
    scene.add(pointLight2);

    // --- 4. Silky Luminous Particle Wave Flow (Rich Vibrant Neon) ---
    const cols = 110; // X density (stream length)
    const rows = 45;  // Z density (wave depth)
    const width = 48;
    const depth = 32;

    const totalPoints = cols * rows;
    const initialCoords = new Float32Array(totalPoints * 3);
    const particlePositions = new Float32Array(totalPoints * 3);
    const particleColors = new Float32Array(totalPoints * 3);

    const colorPrimary = new THREE.Color("#82E926");
    const colorAccent = new THREE.Color("#39FF14");
    const colorBright = new THREE.Color("#B5FF4D");
    const colorElectric = new THREE.Color("#65FF00");

    let pIdx = 0;
    for (let r = 0; r < rows; r++) {
      const zPos = (r / (rows - 1) - 0.5) * depth - 1;
      for (let c = 0; c < cols; c++) {
        const xPos = (c / (cols - 1) - 0.5) * width;
        const yPos = -4.6 - (r / rows) * 2.2;

        initialCoords[pIdx * 3] = xPos;
        initialCoords[pIdx * 3 + 1] = yPos;
        initialCoords[pIdx * 3 + 2] = zPos;

        particlePositions[pIdx * 3] = xPos;
        particlePositions[pIdx * 3 + 1] = yPos;
        particlePositions[pIdx * 3 + 2] = zPos;

        const rand = Math.random();
        const col = rand > 0.65 ? colorBright : rand > 0.35 ? colorElectric : rand > 0.15 ? colorAccent : colorPrimary;
        particleColors[pIdx * 3] = col.r;
        particleColors[pIdx * 3 + 1] = col.g;
        particleColors[pIdx * 3 + 2] = col.b;

        pIdx++;
      }
    }

    // Circular glowing particle texture
    const pCanvas = document.createElement("canvas");
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext("2d");
    if (pCtx) {
      const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255, 255, 255, 1)");
      grad.addColorStop(0.25, "rgba(145, 255, 15, 1)");
      grad.addColorStop(0.65, "rgba(57, 255, 20, 0.7)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const waveParticlesGeo = new THREE.BufferGeometry();
    waveParticlesGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    waveParticlesGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const waveParticlesMat = new THREE.PointsMaterial({
      size: 0.25,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const wavePointsMesh = new THREE.Points(waveParticlesGeo, waveParticlesMat);
    waveGroup.add(wavePointsMesh);

    // --- 5. Clean Parallel Flow Lines (Smooth Streams, No Dark Cross-Grid) ---
    const streamCount = 28;
    const streamLineMeshes: { line: THREE.Line; rowIdx: number }[] = [];

    const streamLineMat = new THREE.LineBasicMaterial({
      color: 0x65ff00,
      transparent: true,
      opacity: 0.36,
      blending: THREE.AdditiveBlending,
      linewidth: 1,
    });

    for (let s = 0; s < streamCount; s++) {
      const rIdx = Math.floor((s / (streamCount - 1)) * (rows - 1));
      const linePositions = new Float32Array(cols * 3);

      for (let c = 0; c < cols; c++) {
        const pointIndex = rIdx * cols + c;
        linePositions[c * 3] = initialCoords[pointIndex * 3];
        linePositions[c * 3 + 1] = initialCoords[pointIndex * 3 + 1];
        linePositions[c * 3 + 2] = initialCoords[pointIndex * 3 + 2];
      }

      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));

      const lineMesh = new THREE.Line(lineGeo, streamLineMat);
      waveGroup.add(lineMesh);
      streamLineMeshes.push({ line: lineMesh, rowIdx: rIdx });
    }

    // --- 6. Ambient Glowing Cyber Dust in the Wind ---
    const dustCount = 200;
    const dustGeo = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    const dustSpeeds = new Float32Array(dustCount);

    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 48;
      dustPositions[i * 3 + 1] = -3.5 + (Math.random() - 0.5) * 8;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      dustSpeeds[i] = Math.random() * 0.05 + 0.02;
    }

    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x82e926,
      map: particleTexture,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const dustParticles = new THREE.Points(dustGeo, dustMat);
    scene.add(dustParticles);

    // --- 7. Window Resize ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // --- 8. 60FPS Fluid Wave Animation Loop (Fixed Position Undulation) ---
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Camera is 100% stable at its designated angle
      camera.position.set(0, 4.8, 20);
      camera.lookAt(0, -2.2, 0);

      // Wave group stays locked in position
      waveGroup.rotation.set(0, 0, 0);

      // --- Wave Calculation: Smooth Pure Harmonic Undulation In-Place ---
      const pArr = waveParticlesGeo.attributes.position.array as Float32Array;

      for (let i = 0; i < totalPoints; i++) {
        const i3 = i * 3;
        const x = initialCoords[i3];
        const z = initialCoords[i3 + 2];
        const baseY = initialCoords[i3 + 1];

        // Harmonic fluid wave flowing across the lower plane
        const w1 = Math.sin(x * 0.18 - elapsedTime * 1.5 + z * 0.1) * 0.8;
        const w2 = Math.cos(x * 0.1 + elapsedTime * 1.1 - z * 0.14) * 0.55;
        const w3 = Math.sin((x + z) * 0.22 + elapsedTime * 1.9) * 0.2;

        pArr[i3 + 1] = baseY + w1 + w2 + w3;
      }

      waveParticlesGeo.attributes.position.needsUpdate = true;

      // Update parallel stream line positions to match particle wave heights
      streamLineMeshes.forEach(({ line, rowIdx }) => {
        const lineArr = line.geometry.attributes.position.array as Float32Array;
        for (let c = 0; c < cols; c++) {
          const ptIdx = (rowIdx * cols + c) * 3;
          lineArr[c * 3 + 1] = pArr[ptIdx + 1];
        }
        line.geometry.attributes.position.needsUpdate = true;
      });

      // --- Animate Blowing Dust Particles ---
      const dustPos = dustGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < dustCount; i++) {
        const i3 = i * 3;
        dustPos[i3] += dustSpeeds[i] * 1.4;
        dustPos[i3 + 1] += Math.sin(elapsedTime * 1.8 + i) * 0.012;

        if (dustPos[i3] > 24) {
          dustPos[i3] = -24;
          dustPos[i3 + 1] = -3.5 + (Math.random() - 0.5) * 8;
          dustPos[i3 + 2] = (Math.random() - 0.5) * 30;
        }
      }
      dustGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- 9. Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      waveParticlesGeo.dispose();
      waveParticlesMat.dispose();
      particleTexture.dispose();
      streamLineMat.dispose();
      streamLineMeshes.forEach(({ line }) => line.geometry.dispose());
      dustGeo.dispose();
      dustMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none"
    >
      {/* 1. Atmospheric Green Ambient Bloom */}
      <div className="absolute left-1/2 top-[55%] h-[600px] w-[90vw] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14] opacity-[0.18] blur-[180px]" />

      {/* 2. Headline Contrast Mask (Ensures 100% Crisp Typography) */}
      <div className="absolute left-1/2 top-[45%] h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 blur-[75px]" />

      {/* 3. Top & Bottom Smooth Vignettes */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent" />
    </div>
  );
}
