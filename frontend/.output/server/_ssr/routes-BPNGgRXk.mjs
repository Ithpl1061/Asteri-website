import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ScrollTrigger, r as gsapWithCSS } from "../_libs/gsap.mjs";
import { b as CircleQuestionMark, t as lucide_react_exports, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-BbhaIMav.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
import { a as CanvasTexture, c as FogExp2, d as LineBasicMaterial, f as PerspectiveCamera, g as Scene, h as PointsMaterial, i as BufferGeometry, l as Group, m as Points, n as AmbientLight, o as Clock, p as PointLight, r as BufferAttribute, s as Color, t as WebGLRenderer, u as Line } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BPNGgRXk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero3DBackground() {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		let animationFrameId;
		const scene = new Scene();
		scene.fog = new FogExp2(0, .028);
		const camera = new PerspectiveCamera(45, container.clientWidth / container.clientHeight, .1, 1e3);
		camera.position.set(0, 5.2, 21);
		camera.lookAt(0, -2.2, 0);
		const renderer = new WebGLRenderer({
			alpha: true,
			antialias: true,
			powerPreference: "high-performance"
		});
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.toneMapping = 4;
		renderer.toneMappingExposure = 1.85;
		container.appendChild(renderer.domElement);
		const waveGroup = new Group();
		scene.add(waveGroup);
		const ambientLight = new AmbientLight(1590285, 3.2);
		scene.add(ambientLight);
		const pointLight1 = new PointLight(8579366, 12, 60);
		pointLight1.position.set(0, 2, 8);
		scene.add(pointLight1);
		const pointLight2 = new PointLight(3800852, 9, 50);
		pointLight2.position.set(-15, -4, 4);
		scene.add(pointLight2);
		const cols = 110;
		const rows = 45;
		const width = 48;
		const depth = 32;
		const totalPoints = cols * rows;
		const initialCoords = new Float32Array(totalPoints * 3);
		const particlePositions = new Float32Array(totalPoints * 3);
		const particleColors = new Float32Array(totalPoints * 3);
		const colorPrimary = new Color("#82E926");
		const colorAccent = new Color("#39FF14");
		const colorBright = new Color("#B5FF4D");
		const colorElectric = new Color("#65FF00");
		let pIdx = 0;
		for (let r = 0; r < rows; r++) {
			const zPos = (r / (rows - 1) - .5) * depth - 1;
			for (let c = 0; c < cols; c++) {
				const xPos = (c / (cols - 1) - .5) * width;
				const yPos = -4.6 - r / rows * 2.2;
				initialCoords[pIdx * 3] = xPos;
				initialCoords[pIdx * 3 + 1] = yPos;
				initialCoords[pIdx * 3 + 2] = zPos;
				particlePositions[pIdx * 3] = xPos;
				particlePositions[pIdx * 3 + 1] = yPos;
				particlePositions[pIdx * 3 + 2] = zPos;
				const rand = Math.random();
				const col = rand > .65 ? colorBright : rand > .35 ? colorElectric : rand > .15 ? colorAccent : colorPrimary;
				particleColors[pIdx * 3] = col.r;
				particleColors[pIdx * 3 + 1] = col.g;
				particleColors[pIdx * 3 + 2] = col.b;
				pIdx++;
			}
		}
		const pCanvas = document.createElement("canvas");
		pCanvas.width = 64;
		pCanvas.height = 64;
		const pCtx = pCanvas.getContext("2d");
		if (pCtx) {
			const grad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
			grad.addColorStop(0, "rgba(255, 255, 255, 1)");
			grad.addColorStop(.25, "rgba(145, 255, 15, 1)");
			grad.addColorStop(.65, "rgba(57, 255, 20, 0.7)");
			grad.addColorStop(1, "rgba(0, 0, 0, 0)");
			pCtx.fillStyle = grad;
			pCtx.fillRect(0, 0, 64, 64);
		}
		const particleTexture = new CanvasTexture(pCanvas);
		const waveParticlesGeo = new BufferGeometry();
		waveParticlesGeo.setAttribute("position", new BufferAttribute(particlePositions, 3));
		waveParticlesGeo.setAttribute("color", new BufferAttribute(particleColors, 3));
		const waveParticlesMat = new PointsMaterial({
			size: .25,
			map: particleTexture,
			vertexColors: true,
			transparent: true,
			opacity: 1,
			blending: 2,
			depthWrite: false
		});
		const wavePointsMesh = new Points(waveParticlesGeo, waveParticlesMat);
		waveGroup.add(wavePointsMesh);
		const streamCount = 28;
		const streamLineMeshes = [];
		const streamLineMat = new LineBasicMaterial({
			color: 6684416,
			transparent: true,
			opacity: .36,
			blending: 2,
			linewidth: 1
		});
		for (let s = 0; s < streamCount; s++) {
			const rIdx = Math.floor(s / (streamCount - 1) * (rows - 1));
			const linePositions = new Float32Array(cols * 3);
			for (let c = 0; c < cols; c++) {
				const pointIndex = rIdx * cols + c;
				linePositions[c * 3] = initialCoords[pointIndex * 3];
				linePositions[c * 3 + 1] = initialCoords[pointIndex * 3 + 1];
				linePositions[c * 3 + 2] = initialCoords[pointIndex * 3 + 2];
			}
			const lineGeo = new BufferGeometry();
			lineGeo.setAttribute("position", new BufferAttribute(linePositions, 3));
			const lineMesh = new Line(lineGeo, streamLineMat);
			waveGroup.add(lineMesh);
			streamLineMeshes.push({
				line: lineMesh,
				rowIdx: rIdx
			});
		}
		const dustCount = 200;
		const dustGeo = new BufferGeometry();
		const dustPositions = new Float32Array(dustCount * 3);
		const dustSpeeds = new Float32Array(dustCount);
		for (let i = 0; i < dustCount; i++) {
			dustPositions[i * 3] = (Math.random() - .5) * 48;
			dustPositions[i * 3 + 1] = -3.5 + (Math.random() - .5) * 8;
			dustPositions[i * 3 + 2] = (Math.random() - .5) * 30;
			dustSpeeds[i] = Math.random() * .05 + .02;
		}
		dustGeo.setAttribute("position", new BufferAttribute(dustPositions, 3));
		const dustMat = new PointsMaterial({
			size: .12,
			color: 8579366,
			map: particleTexture,
			transparent: true,
			opacity: .4,
			blending: 2
		});
		const dustParticles = new Points(dustGeo, dustMat);
		scene.add(dustParticles);
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
		const clock = new Clock();
		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);
			const elapsedTime = clock.getElapsedTime();
			camera.position.set(0, 4.8, 20);
			camera.lookAt(0, -2.2, 0);
			waveGroup.rotation.set(0, 0, 0);
			const pArr = waveParticlesGeo.attributes.position.array;
			for (let i = 0; i < totalPoints; i++) {
				const i3 = i * 3;
				const x = initialCoords[i3];
				const z = initialCoords[i3 + 2];
				const baseY = initialCoords[i3 + 1];
				const w1 = Math.sin(x * .18 - elapsedTime * 1.5 + z * .1) * .8;
				const w2 = Math.cos(x * .1 + elapsedTime * 1.1 - z * .14) * .55;
				const w3 = Math.sin((x + z) * .22 + elapsedTime * 1.9) * .2;
				pArr[i3 + 1] = baseY + w1 + w2 + w3;
			}
			waveParticlesGeo.attributes.position.needsUpdate = true;
			streamLineMeshes.forEach(({ line, rowIdx }) => {
				const lineArr = line.geometry.attributes.position.array;
				for (let c = 0; c < cols; c++) {
					const ptIdx = (rowIdx * cols + c) * 3;
					lineArr[c * 3 + 1] = pArr[ptIdx + 1];
				}
				line.geometry.attributes.position.needsUpdate = true;
			});
			const dustPos = dustGeo.attributes.position.array;
			for (let i = 0; i < dustCount; i++) {
				const i3 = i * 3;
				dustPos[i3] += dustSpeeds[i] * 1.4;
				dustPos[i3 + 1] += Math.sin(elapsedTime * 1.8 + i) * .012;
				if (dustPos[i3] > 24) {
					dustPos[i3] = -24;
					dustPos[i3 + 1] = -3.5 + (Math.random() - .5) * 8;
					dustPos[i3 + 2] = (Math.random() - .5) * 30;
				}
			}
			dustGeo.attributes.position.needsUpdate = true;
			renderer.render(scene, camera);
		};
		animate();
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", handleResize);
			if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-[55%] h-[600px] w-[90vw] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14] opacity-[0.18] blur-[180px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-[45%] h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 blur-[75px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black via-black/70 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/85 to-transparent" })
		]
	});
}
/**
* ============================================================================
* ARCHITECTURE NOTE — read this before touching any scrollTrigger below
* ============================================================================
* Every pinned section follows ONE pattern:
*
*   <section ref={xRef} className="relative h-screen overflow-hidden ...">
*      ...content...
*   </section>
*
*   scrollTrigger: { trigger: xRef.current, pin: true, start: "top top",
*                    end: "+=NNNN", scrub: 1 }
*
* pin:true + the default pinSpacing:true makes GSAP insert its own spacer
* element sized to exactly (end - start). That spacer IS the scroll
* distance — there is no second, competing height to keep in sync.
*
* Do NOT:
*  - add an arbitrary h-[Nvh] class to a pinned section (that was the bug:
*    two independent, hand-tuned numbers that drift apart -> blank gaps)
*  - combine CSS `position: sticky` with GSAP `pin: true` on the same
*    element (they fight for control of positioning)
*  - use `pinSpacing: false` unless you deliberately want the next
*    section to slide over/under this one (it did NOT want that here —
*    that flag is what caused the Testimonials/Next-section crash)
*
* Mobile: heavy pinned scrubbing is disabled below 768px via
* ScrollTrigger.matchMedia() and replaced with lightweight fade/slide
* reveals (toggleActions, no pin, no scrub-locking) so phones get a
* normal, fast-scrolling page instead of a desktop scrollytelling replica.
* ============================================================================
*/
function Home() {
	const heroRef = (0, import_react.useRef)(null);
	const heroOrbTrackRef = (0, import_react.useRef)(null);
	const heroOrbPathRef = (0, import_react.useRef)(null);
	const orbRef = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const about2Ref = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const whiteRef = (0, import_react.useRef)(null);
	const quoteRef = (0, import_react.useRef)(null);
	const transitionRef = (0, import_react.useRef)(null);
	const quote1Ref = (0, import_react.useRef)(null);
	const quote2Ref = (0, import_react.useRef)(null);
	const whatRef = (0, import_react.useRef)(null);
	const industriesSectionRef = (0, import_react.useRef)(null);
	const industriesTitleRef = (0, import_react.useRef)(null);
	const industriesGridRef = (0, import_react.useRef)(null);
	const quoteSectionRef = (0, import_react.useRef)(null);
	const caseRef = (0, import_react.useRef)(null);
	const caseTitleRef = (0, import_react.useRef)(null);
	const testimonialsRef = (0, import_react.useRef)(null);
	const nextRef = (0, import_react.useRef)(null);
	const nextTitleRef = (0, import_react.useRef)(null);
	const nextTextRef = (0, import_react.useRef)(null);
	const nextBtnRef = (0, import_react.useRef)(null);
	const [services, setServices] = (0, import_react.useState)([]);
	const [industries, setIndustries] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/services")).then((res) => res.json()).then((data) => setServices(data)).catch((err) => console.error(err));
		fetch(apiUrl("/api/industries")).then((res) => res.json()).then((data) => setIndustries(data)).catch((err) => console.error(err));
	}, []);
	(0, import_react.useEffect)(() => {
		const mm = gsapWithCSS.matchMedia();
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		mm.add({
			isDesktop: "(min-width: 1024px)",
			isTablet: "(min-width: 768px) and (max-width: 1023px)",
			isMobile: "(max-width: 767px)",
			isShort: "(max-height: 700px)",
			reduceMotion: "(prefers-reduced-motion: reduce)"
		}, (context) => {
			const { isDesktop, isTablet, isMobile } = context.conditions;
			const isPinned = isDesktop;
			const isCompact = isMobile || isTablet;
			const positionDotOnPath = (dot, path, progress) => {
				const svg = path?.ownerSVGElement;
				const track = dot?.parentElement;
				const matrix = path?.getScreenCTM();
				if (!dot || !path || !svg || !track || !matrix) return;
				const point = path.getPointAtLength(path.getTotalLength() * Math.min(Math.max(progress, 0), 1));
				const screenPoint = svg.createSVGPoint();
				screenPoint.x = point.x;
				screenPoint.y = point.y;
				const trackBounds = track.getBoundingClientRect();
				const position = screenPoint.matrixTransform(matrix);
				gsapWithCSS.set(dot, {
					zIndex: 30,
					x: position.x - trackBounds.left,
					y: position.y - trackBounds.top,
					xPercent: -50,
					yPercent: -50
				});
			};
			if (reduceMotion) {
				gsapWithCSS.set([
					".about-title-main",
					".about-text",
					".about-btn",
					".what-content",
					".service-row",
					".industries-left",
					".industries-right",
					".industries-grid",
					".quote-text",
					quote1Ref.current,
					quote2Ref.current,
					".testimonials-title",
					".testimonial-card",
					nextTitleRef.current,
					nextTextRef.current,
					nextBtnRef.current
				], {
					opacity: 1,
					x: 0,
					y: 0,
					clearProps: "transform"
				});
				return;
			}
			if (heroRef.current && orbRef.current && heroOrbPathRef.current) {
				const heroProgress = { value: 0 };
				const getOrbTravel = () => Math.max(heroOrbTrackRef.current?.offsetWidth ?? 0, 0);
				const updateHeroOrb = () => positionDotOnPath(orbRef.current, heroOrbPathRef.current, heroProgress.value);
				updateHeroOrb();
				gsapWithCSS.to(heroProgress, {
					value: 1,
					ease: "none",
					onUpdate: updateHeroOrb,
					scrollTrigger: {
						trigger: heroRef.current,
						start: "top top",
						end: () => `+=${Math.max(getOrbTravel(), window.innerHeight)}`,
						scrub: true,
						pin: true,
						anticipatePin: 1,
						invalidateOnRefresh: true,
						onRefresh: updateHeroOrb
					}
				});
			}
			if (isPinned) {
				gsapWithCSS.set(".about-title-main", {
					opacity: 0,
					x: 260,
					y: 0
				});
				gsapWithCSS.set(".about-text", {
					opacity: 0,
					x: 320,
					y: 0
				});
				gsapWithCSS.set(".about-btn", {
					opacity: 0,
					x: 380,
					y: 0
				});
				gsapWithCSS.set(quote1Ref.current, {
					y: 200,
					opacity: 0
				});
				gsapWithCSS.set(quote2Ref.current, {
					y: 200,
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: about2Ref.current,
					start: "top top",
					end: "+=6000",
					scrub: 1.5,
					pin: true,
					anticipatePin: 1
				} }).to(".about-title-main", {
					opacity: 1,
					x: 0,
					duration: 2.2,
					ease: "power3.out"
				}, .3).to(".about-text", {
					opacity: 1,
					x: 0,
					duration: 2.2,
					ease: "power3.out"
				}, .6).to(".about-btn", {
					opacity: 1,
					x: 0,
					duration: 2.2,
					ease: "power3.out"
				}, .9).to({}, { duration: 1.5 }).to([
					".about-title-main",
					".about-text",
					".about-btn"
				], {
					opacity: 0,
					x: -80,
					duration: .8,
					ease: "power2.in"
				}).to(quoteRef.current, {
					opacity: 1,
					duration: .8
				}, "+=0.1").to(quote1Ref.current, {
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power4.out"
				}).to({}, { duration: 2.2 }).to(quote1Ref.current, {
					y: -160,
					opacity: 0,
					duration: .8,
					ease: "power2.in"
				}).fromTo(quote2Ref.current, {
					y: 200,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power4.out"
				}).to({}, { duration: 2.2 }).to(quote2Ref.current, {
					y: -160,
					opacity: 0,
					duration: .8,
					ease: "power2.in"
				});
			} else {
				gsapWithCSS.set(".about-title-main", {
					opacity: 0,
					x: 80,
					y: 0
				});
				gsapWithCSS.set(".about-text", {
					opacity: 0,
					x: 100,
					y: 0
				});
				gsapWithCSS.set(".about-btn", {
					opacity: 0,
					x: 120,
					y: 0
				});
				gsapWithCSS.set(quoteRef.current, { autoAlpha: 0 });
				gsapWithCSS.set(quote1Ref.current, {
					opacity: 0,
					y: 36
				});
				gsapWithCSS.set(quote2Ref.current, {
					opacity: 0,
					y: 36
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: about2Ref.current,
					start: "top 82%",
					end: "bottom 12%",
					scrub: true,
					invalidateOnRefresh: true
				} }).to(".about-title-main", {
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power2.out"
				}, .1).to(".about-text", {
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power2.out"
				}, .3).to(".about-btn", {
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power2.out"
				}, .5).to([
					".about-title-main",
					".about-text",
					".about-btn"
				], {
					opacity: 0,
					x: -40,
					duration: .25
				}, 1.15).to(quoteRef.current, {
					autoAlpha: 1,
					duration: .2
				}, 1.25).to(quote1Ref.current, {
					opacity: 1,
					y: 0,
					duration: .45,
					ease: "power2.out"
				}, 1.3).to(quote1Ref.current, {
					opacity: 0,
					y: -28,
					duration: .3,
					ease: "power2.in"
				}, 1.95).to(quote2Ref.current, {
					opacity: 1,
					y: 0,
					duration: .45,
					ease: "power2.out"
				}, 2.05);
			}
			gsapWithCSS.set(".what-content", { opacity: 0 });
			gsapWithCSS.set(".what-card", {
				opacity: 0,
				scale: .95
			});
			gsapWithCSS.set(".service-row", {
				opacity: 0,
				x: isCompact ? 0 : 350
			});
			if (isPinned) gsapWithCSS.timeline({ scrollTrigger: {
				trigger: whatRef.current,
				start: "top top",
				end: "+=5200",
				scrub: 1,
				pin: true,
				anticipatePin: 1
			} }).to(".what-big-title", {
				scale: .42,
				x: "-25%",
				y: "-30%",
				opacity: 0,
				duration: .4,
				ease: "power1.inOut"
			}).to(".what-content", {
				opacity: 1,
				duration: .2,
				ease: "power1.out"
			}, .15).to(".what-card", {
				opacity: 1,
				scale: 1,
				duration: .4,
				ease: "power2.out"
			}, .2).to(".service-row", {
				opacity: 1,
				x: 0,
				stagger: .35,
				duration: .6,
				ease: "power3.out"
			}, .25).to({}, { duration: .8 });
			else {
				gsapWithCSS.to(".what-big-title", {
					scale: .55,
					y: -40,
					scrollTrigger: {
						trigger: whatRef.current,
						start: "top 60%",
						end: "top 20%",
						scrub: 1
					}
				});
				gsapWithCSS.to(".what-content", {
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: ".what-content",
						start: "top 85%",
						toggleActions: "play none none reverse"
					}
				});
				gsapWithCSS.to(".service-row", {
					opacity: 1,
					x: 0,
					stagger: .1,
					scrollTrigger: {
						trigger: ".what-content",
						start: "top 80%",
						toggleActions: "play none none reverse"
					}
				});
			}
			gsapWithCSS.set(".industries-grid", {
				x: isCompact ? 0 : "100vw",
				opacity: isCompact ? 1 : 0
			});
			if (isPinned) gsapWithCSS.timeline({ scrollTrigger: {
				trigger: industriesSectionRef.current,
				start: "top top",
				end: "+=1800",
				scrub: 1,
				pin: true,
				anticipatePin: 1
			} }).fromTo(".industries-left", {
				x: isCompact ? 0 : -80,
				opacity: 0
			}, {
				x: 0,
				opacity: 1,
				duration: .3,
				ease: "power2.out"
			}, 0).fromTo(".industries-right", {
				x: isCompact ? 0 : 80,
				opacity: 0
			}, {
				x: 0,
				opacity: 1,
				duration: .3,
				ease: "power2.out"
			}, 0).to(".industries-grid", {
				x: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power2.out"
			}, .3);
			else gsapWithCSS.to(".industries-grid", {
				x: 0,
				opacity: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: industriesGridRef.current,
					start: "top 85%",
					toggleActions: "play none none reverse"
				}
			});
			gsapWithCSS.set(".quote-text", {
				y: isCompact ? 60 : 300,
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: quoteSectionRef.current,
				start: "top top",
				end: "+=4200",
				pin: isDesktop,
				scrub: 1,
				anticipatePin: 1
			} }).to(".quote-text", {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 3 }).to(".quote-text", {
				y: -200,
				opacity: 0,
				duration: 1,
				ease: "power2.in"
			});
			if (isPinned && caseTitleRef.current) {
				const travel = () => -(caseTitleRef.current.scrollWidth + window.innerWidth * .5);
				const caseTl = gsapWithCSS.timeline({ scrollTrigger: {
					trigger: caseRef.current,
					start: "top top",
					end: "+=3600",
					scrub: 1.5,
					pin: true,
					anticipatePin: 1
				} });
				caseTl.fromTo(caseTitleRef.current, { x: window.innerWidth }, {
					x: travel,
					duration: 1.3,
					ease: "none"
				});
				[
					1,
					2,
					3,
					4,
					5,
					6
				].forEach((num, index) => {
					caseTl.fromTo(`.tag-${num}`, {
						opacity: 0,
						scale: .8
					}, {
						opacity: 1,
						scale: 1
					}, .2 + index * .12);
				});
			} else gsapWithCSS.from(".case-tag", {
				opacity: 0,
				y: 20,
				stagger: .1,
				scrollTrigger: {
					trigger: caseRef.current,
					start: "top 60%"
				}
			});
			gsapWithCSS.set(".testimonial-card", {
				y: isCompact ? 40 : 200,
				opacity: 0
			});
			const testimonialTl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: testimonialsRef.current,
				start: "top top",
				end: "+=1400",
				scrub: 1,
				pin: isPinned,
				anticipatePin: 1
			} });
			if (isPinned) testimonialTl.fromTo(".testimonials-title", { x: window.innerWidth }, {
				x: 0,
				ease: "power3.out"
			});
			testimonialTl.to(".testimonial-card", {
				y: 0,
				opacity: 1,
				ease: "power3.out"
			}, isDesktop ? .6 : 0);
			gsapWithCSS.set(nextTitleRef.current, {
				y: isCompact ? 40 : 100,
				opacity: 0
			});
			gsapWithCSS.set(nextTextRef.current, {
				y: isCompact ? 30 : 80,
				opacity: 0
			});
			gsapWithCSS.set(nextBtnRef.current, {
				y: isCompact ? 30 : 80,
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: nextRef.current,
				start: "top top",
				end: "+=4800",
				scrub: 1,
				pin: isPinned,
				anticipatePin: 1
			} }).to(nextTitleRef.current, {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 }).to(nextTextRef.current, {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 }).to(nextBtnRef.current, {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 });
			gsapWithCSS.set(".footer-logo", {
				y: 80,
				opacity: 0
			});
			gsapWithCSS.set(".footer-left a, .footer-middle a", {
				y: 60,
				opacity: 0
			});
			gsapWithCSS.set(".footer-contact-item, .footer-social", {
				x: isMobile ? 0 : 100,
				opacity: 0
			});
			gsapWithCSS.set(".asteri-footer-huge-logo", { y: isMobile ? 60 : 200 });
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: ".footer-section",
				start: "top 80%",
				end: "+=50",
				scrub: 1
			} }).to(".footer-logo", {
				y: 0,
				opacity: 1
			}).to(".footer-left a", {
				y: 0,
				opacity: 1,
				stagger: .1
			}, .1).to(".footer-middle a", {
				y: 0,
				opacity: 1,
				stagger: .1
			}, .25).to(".footer-contact-item", {
				x: 0,
				opacity: 1,
				stagger: .12
			}, .4).to(".footer-social", {
				x: 0,
				opacity: 1
			}, .6).to(".asteri-footer-huge-logo", {
				y: 0,
				duration: 1.5
			}, 0);
			return () => {};
		});
		let refreshTimer;
		let viewportWidth = window.innerWidth;
		const scheduleRefresh = () => {
			clearTimeout(refreshTimer);
			refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
		};
		const handleResize = () => {
			if (window.innerWidth === viewportWidth) return;
			viewportWidth = window.innerWidth;
			scheduleRefresh();
		};
		window.addEventListener("resize", handleResize);
		window.addEventListener("orientationchange", scheduleRefresh);
		let refreshFrame;
		document.fonts.ready.then(() => {
			refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
		});
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("orientationchange", scheduleRefresh);
			clearTimeout(refreshTimer);
			if (refreshFrame) cancelAnimationFrame(refreshFrame);
			mm.revert();
		};
	}, [services.length, industries.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: heroRef,
			className: "relative min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero3DBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center justify-center px-6 sm:min-h-[100dvh] lg:min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center font-display font-bold leading-[1.1] tracking-tight",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "type-display text-white",
							children: [
								"Engineering",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#000000",
										WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
										paintOrder: "stroke fill"
									},
									children: "Digital"
								}),
								" ",
								"Systems"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-display",
							style: {
								color: "#000000",
								WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
								paintOrder: "stroke fill"
							},
							children: "That Scale With"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative inline-block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "type-display text-white",
									children: "Ambition"
								})
							})
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: about2Ref,
			className: "relative flex min-h-[100svh] items-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:min-h-0 lg:px-0 lg:py-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto w-full max-w-3xl text-center lg:absolute lg:left-1/2 lg:top-[42%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[90%] lg:text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "about-title-main type-title text-white",
							children: "ABOUT US"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "about-text mt-6 type-lead text-white/85 md:mt-8",
							children: "We are a consulting-first technology firm helping organizations modernize, unify, and scale their digital ecosystems; where business strategy meets real-world execution."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "about-btn mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] px-5 py-3 pr-3 backdrop-blur-md sm:gap-4 sm:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "type-button text-black",
								children: "Get In Touch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 28,
									className: "text-black",
									strokeWidth: 2.3
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: transitionRef,
					className: "absolute z-[90] rounded-full bg-primary/75 pointer-events-none",
					style: {
						width: 24,
						height: 24,
						left: "9%",
						top: "clamp(160px, 24vh, 212px)",
						opacity: 0,
						transform: "translate(-50%, -50%)",
						boxShadow: `0 0 24px oklch(0.88 0.27 142 / 0.8), 0 0 64px oklch(0.88 0.27 142 / 0.65), 0 0 128px oklch(0.88 0.27 142 / 0.4)`
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: whiteRef,
					className: "absolute left-1/2 top-1/2 h-10 w-10 rounded-full bg-white/85 opacity-0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: quoteRef,
					className: "absolute inset-0 flex items-center justify-center overflow-hidden opacity-0 bg-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full max-w-6xl h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							ref: quote1Ref,
							className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center type-statement text-black whitespace-nowrap",
							children: "Technology, in isolation, doesn’t scale."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							ref: quote2Ref,
							className: "absolute left-1/2 top-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center type-statement text-black text-balance",
							children: "Enduring systems emerge when business, data and infrastructure move in harmony."
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: whatRef,
			className: "relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-black px-5 py-16 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:min-h-0 lg:px-0 lg:py-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "what-big-title relative z-10 mb-10 text-center font-display type-title uppercase text-white lg:absolute lg:mb-0 lg:whitespace-nowrap",
				children: "WHAT WE DO"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "what-content relative flex w-full items-center justify-center lg:absolute lg:inset-0 lg:w-auto lg:px-6 xl:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl w-full grid gap-6 lg:gap-8 lg:grid-cols-[320px_1fr] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "what-card relative hidden lg:block h-[420px] overflow-hidden rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/What we do.png",
								alt: "What We Do",
								width: 800,
								height: 600,
								className: "absolute inset-0 h-full w-full rounded-2xl object-cover"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex w-full flex-col lg:max-h-none lg:overflow-visible",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "service-row group border-b border-white/8 py-2.5 transition-all duration-300 hover:translate-x-2 sm:py-3 lg:py-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 sm:gap-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-[45px] sm:w-[60px] shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-xs sm:text-base font-semibold text-muted-foreground",
											children: [s.sequenceNumber, "."]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "service-line mt-1 h-px w-8 bg-white" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 font-display text-sm font-semibold tracking-tight sm:text-base md:text-lg",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/services",
										className: "ml-auto flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-primary hover:text-black hover:rotate-45 hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
									})
								]
							})
						}, s.sequenceNumber))
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: industriesSectionRef,
			className: "relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-black px-4 py-12 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:px-12 lg:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-7xl flex-1 flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					ref: industriesTitleRef,
					className: "industries-title my-auto flex flex-col gap-[clamp(1.5rem,3vw,3rem)] font-display type-title uppercase tracking-tight text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "industries-left",
						children: "Industries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "industries-right ml-auto w-fit",
						children: "We Serve"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: industriesGridRef,
					className: "industries-grid grid grid-cols-1 border-2 border-white bg-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-auto",
					children: industries.map((i, idx) => {
						const IconComp = lucide_react_exports[i.iconName] || CircleQuestionMark;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `industry-card flex min-h-[180px] items-center justify-center bg-black px-4 py-6 sm:min-h-[220px] sm:px-6 ${idx < industries.length - 1 ? "border-r border-white/50" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "mx-auto mb-3 sm:mb-4 h-9 w-9 sm:h-10 sm:w-10 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "type-card text-white",
									children: [i.titleLine1, i.titleLine2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), i.titleLine2] }) : null]
								})]
							})
						}, i.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: quoteSectionRef,
			className: "quote-section relative flex min-h-[65svh] items-center justify-center overflow-hidden px-6 py-20 sm:min-h-[65dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "quote-text font-display type-statement tracking-tight",
					children: [
						"Technology only matters",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"when it delivers clarity"
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: caseRef,
			className: "case-studies-section relative overflow-hidden bg-black py-20 lg:flex lg:h-screen lg:items-center lg:py-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: caseTitleRef,
				className: "case-title relative hidden whitespace-nowrap font-display text-[clamp(4.5rem,10vw,9.5rem)] font-bold uppercase leading-none text-white lg:block",
				children: [
					"CASE",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-1 absolute left-[3%] top-[70%]",
						children: [
							"Sales & Service",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Cloud Implementation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-2 absolute left-[12%] top-[10%]",
						children: [
							"Warehouse",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Management"
						]
					}),
					"STUDIES",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "case-tag type-card tag-3 absolute left-[32%] top-[75%]",
						children: "SAP AMC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-4 absolute left-[47%] top-[29%]",
						children: [
							"Vehicle Management",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"System"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-5 absolute left-[57%] top-[71%]",
						children: [
							"Medical Claim",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Processing-Automation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-6 absolute left-[85%] top-[25%]",
						children: [
							"Augmented Reality-Based",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Hospital Navigation App"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-2xl gap-3 px-6 lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-5 text-center font-display text-[clamp(2.5rem,13vw,5.5rem)] font-bold uppercase leading-[0.82] text-white",
						children: "Case Studies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-start",
						children: [
							"Sales & Service",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Cloud Implementation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-end",
						children: [
							"Warehouse",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Management"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-start",
						children: "SAP AMC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-end",
						children: [
							"Vehicle Management",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"System"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-start",
						children: [
							"Medical Claim",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Processing-Automation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-end",
						children: [
							"Augmented Reality-Based",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Hospital Navigation App"
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: testimonialsRef,
			className: "testimonials-section relative min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:h-screen lg:min-h-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-[100svh] flex-col items-center justify-center gap-8 px-6 py-16 sm:min-h-[100dvh] lg:h-full lg:min-h-0 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "testimonials-title text-center font-display type-title uppercase text-white lg:whitespace-nowrap",
					children: "TESTIMONIALS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "testimonial-card relative mx-auto w-full max-w-xl rounded-[24px] bg-[#d9d9d9d5] p-5 sm:rounded-[40px] sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-lead text-black",
						children: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus ex sapien vitae pellentesque sem placerat in. Cursus mi pretium tellus duis convallis tempus leo."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 sm:mt-8 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-black shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "type-lead font-bold text-black",
							children: "Lorem Ipsum"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-body text-black",
							children: "Lorem Ipsum"
						})] })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: nextRef,
			className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-5xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						ref: nextTitleRef,
						className: "text-white type-title",
						children: "Let's Build What's Next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						ref: nextTextRef,
						className: "mt-4 type-lead font-semibold text-white",
						children: "We'll help you design the path forward."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						ref: nextBtnRef,
						className: "mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] px-5 py-3 pr-3 backdrop-blur-md sm:gap-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-button text-black",
							children: "Get In Touch"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 28,
								className: "text-black",
								strokeWidth: 2.3
							})
						})]
					})
				]
			})
		})
	] }) });
}
//#endregion
export { Home as component };
