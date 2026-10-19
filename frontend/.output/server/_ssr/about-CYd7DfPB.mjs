import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ScrollTrigger, r as gsapWithCSS } from "../_libs/gsap.mjs";
import { i as Users, l as Search, u as RotateCw, v as HeartHandshake, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-C30GFmPZ.mjs";
import "./router-U0JYRAk0.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CYd7DfPB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var aboutHeroOutline = {
	color: "#000000",
	WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
	paintOrder: "stroke fill",
	display: "inline-block",
	paddingBottom: "0.1em"
};
function VisionariesSection({ visionaries, sectionRef, circleRef, imageRefs, contentRefs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		className: "relative h-screen w-full bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-screen items-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "visionaries-grid mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-16 lg:gap-20 px-8 lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "visionaries-visual relative h-[560px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: circleRef,
							className: "\n                  visionaries-circle\n                  absolute\n                  left-10\n                  top-8\n                  z-0\n                  h-[460px]\n                  w-[460px]\n                  rounded-full\n                  bg-white\n                "
						}), visionaries.map((person, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							ref: (element) => {
								if (element) imageRefs.current[index] = element;
							},
							src: person.imageUrl,
							alt: person.name,
							className: "\n                    visionaries-photo\n                    absolute\n                    top-4\n                    left-10\n                    z-10\n                    w-[460px]\n                    max-h-[490px]\n                    select-none\n                    object-contain\n                    pointer-events-none\n                  ",
							style: {
								opacity: index === 0 ? 1 : 0,
								zIndex: visionaries.length - index
							}
						}, person.name))]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "visionaries-content relative h-[560px]",
					children: visionaries.map((person, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: (element) => {
							if (element) contentRefs.current[index] = element;
						},
						className: "absolute inset-0 flex flex-col justify-center space-y-6",
						style: { opacity: index === 0 ? 1 : 0 },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-label text-zinc-400",
								children: "The Visionaries"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-heading text-white",
								children: person.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "type-card text-zinc-300",
								children: person.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-xl type-body text-zinc-400",
								children: person.experience
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: person.linkedinUrl,
								className: "group inline-flex items-center gap-4 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-14 w-14 items-center justify-center rounded-full bg-[#82E926] transition group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 28,
										className: "text-black"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-lg text-white",
									children: "LinkedIn"
								})]
							})
						]
					}, person.name))
				})]
			})
		})
	});
}
function About() {
	const [visionaries, setVisionaries] = (0, import_react.useState)([]);
	const [teamLoaded, setTeamLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/team")).then((res) => res.json()).then((data) => setVisionaries(data)).catch((err) => console.error(err)).finally(() => setTeamLoaded(true));
	}, []);
	const rootRef = (0, import_react.useRef)(null);
	const heroRef = (0, import_react.useRef)(null);
	const heroHeadlineRef = (0, import_react.useRef)(null);
	const heroCtaRef = (0, import_react.useRef)(null);
	const orbPathRef = (0, import_react.useRef)(null);
	const orbDotRef = (0, import_react.useRef)(null);
	const orbSvgRef = (0, import_react.useRef)(null);
	const heroBusinessRef = (0, import_react.useRef)(null);
	const heroSubRef = (0, import_react.useRef)(null);
	const outcomesHeadingSectionRef = (0, import_react.useRef)(null);
	const outcomesHeadingRef = (0, import_react.useRef)(null);
	const serveClientsSectionRef = (0, import_react.useRef)(null);
	const serveClientsHeadingRef = (0, import_react.useRef)(null);
	const serveClientsContentRef = (0, import_react.useRef)(null);
	const missionSectionRef = (0, import_react.useRef)(null);
	const missionContentRef = (0, import_react.useRef)(null);
	const visionSectionRef = (0, import_react.useRef)(null);
	const visionContentRef = (0, import_react.useRef)(null);
	const approachHeadingSectionRef = (0, import_react.useRef)(null);
	const approachHeadingRef = (0, import_react.useRef)(null);
	const approachCardsSectionRef = (0, import_react.useRef)(null);
	const visionariesHeadingSectionRef = (0, import_react.useRef)(null);
	const visionariesHeadingRef = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const visionariesSectionRef = (0, import_react.useRef)(null);
	const visionariesCircleRef = (0, import_react.useRef)(null);
	const visionariesImageRefs = (0, import_react.useRef)([]);
	const visionariesContentRefs = (0, import_react.useRef)([]);
	const cultureSectionRef = (0, import_react.useRef)(null);
	const techSectionRef = (0, import_react.useRef)(null);
	const techHeadingRef = (0, import_react.useRef)(null);
	const techLine1Ref = (0, import_react.useRef)(null);
	const techLine2Ref = (0, import_react.useRef)(null);
	const nextSectionRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const svg = orbSvgRef.current;
		const path = orbPathRef.current;
		const dot = orbDotRef.current;
		const headline = heroHeadlineRef.current;
		const business = heroBusinessRef.current;
		const sub = heroSubRef.current;
		const cta = heroCtaRef.current;
		const container = svg?.parentElement;
		if (!svg || !path || !dot || !headline || !business || !sub || !cta || !container) return;
		const RADIUS = 10;
		const roundedPath = (pts) => {
			let d = `M ${pts[0].x} ${pts[0].y}`;
			for (let i = 1; i < pts.length - 1; i++) {
				const [a, b, c] = [
					pts[i - 1],
					pts[i],
					pts[i + 1]
				];
				const r = Math.min(RADIUS, Math.hypot(b.x - a.x, b.y - a.y) / 2, Math.hypot(c.x - b.x, c.y - b.y) / 2);
				const inX = b.x - Math.sign(b.x - a.x) * r;
				const inY = b.y - Math.sign(b.y - a.y) * r;
				const outX = b.x + Math.sign(c.x - b.x) * r;
				const outY = b.y + Math.sign(c.y - b.y) * r;
				d += ` L ${inX} ${inY} Q ${b.x} ${b.y} ${outX} ${outY}`;
			}
			const last = pts[pts.length - 1];
			return `${d} L ${last.x} ${last.y}`;
		};
		let frame = 0;
		const build = () => {
			const c = container.getBoundingClientRect();
			if (c.width === 0 || c.height === 0) return;
			const local = (r) => ({
				left: r.left - c.left,
				right: r.right - c.left,
				top: r.top - c.top,
				bottom: r.bottom - c.top,
				width: r.width,
				height: r.height
			});
			const s = parseFloat(getComputedStyle(headline).fontSize) / 96;
			const line1 = local(headline.children[0].getBoundingClientRect());
			const biz = local(business.getBoundingClientRect());
			const subR = local(sub.getBoundingClientRect());
			const btn = local(cta.getBoundingClientRect());
			const lineH = parseFloat(getComputedStyle(headline).fontSize) * (116 / 96);
			const line2H = headline.children[1].getBoundingClientRect().height;
			const wrapped = line1.height > lineH * 1.5 || line2H > lineH * 1.5;
			const yTurn = line1.bottom - 13 * s;
			const xRight = wrapped ? c.width - line1.left / 2 : Math.min(biz.right + 28 * s, window.innerWidth - c.left - RADIUS - 2);
			let maxRight1 = 0;
			if (wrapped) {
				const walker = document.createTreeWalker(headline.children[0], NodeFilter.SHOW_TEXT);
				const range = document.createRange();
				for (let n = walker.nextNode(); n; n = walker.nextNode()) {
					if (!n.textContent?.trim()) continue;
					range.selectNodeContents(n);
					for (const r of Array.from(range.getClientRects())) maxRight1 = Math.max(maxRight1, r.right - c.left);
				}
			}
			const freeW = xRight - maxRight1;
			const xDrop = wrapped ? freeW >= 30 ? (maxRight1 + xRight) / 2 : Math.max(6, line1.left / 2) : biz.left + biz.width * .52;
			const yBottom = Math.min(btn.bottom + 49 * s, c.height - 16);
			const xReturn = btn.right + 204 * s;
			const yGap = subR.bottom + (btn.top - subR.bottom) * .476;
			const d = roundedPath([
				{
					x: xDrop,
					y: 0
				},
				{
					x: xDrop,
					y: yTurn
				},
				{
					x: xRight,
					y: yTurn
				},
				{
					x: xRight,
					y: yBottom
				},
				{
					x: xReturn,
					y: yBottom
				},
				{
					x: xReturn,
					y: yGap
				},
				{
					x: -c.left - 10,
					y: yGap
				}
			]);
			if (d === path.getAttribute("d")) return;
			svg.setAttribute("viewBox", `0 0 ${c.width} ${c.height}`);
			path.setAttribute("d", d);
			dot.setAttribute("cx", String(xDrop));
			dot.setAttribute("r", wrapped ? String(Math.min(14, Math.max(5, (freeW >= 30 ? freeW / 2 : xDrop) - 4))) : "14");
			dot.setAttribute("cy", "0");
		};
		const rebuild = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(build);
		};
		build();
		document.fonts?.ready.then(rebuild);
		const ro = new ResizeObserver(rebuild);
		ro.observe(container);
		ro.observe(headline);
		return () => {
			cancelAnimationFrame(frame);
			ro.disconnect();
		};
	}, []);
	(0, import_react.useLayoutEffect)(() => {
		const root = rootRef.current;
		if (!root || !teamLoaded) return;
		const ctx = gsapWithCSS.context(() => {
			const mm = gsapWithCSS.matchMedia();
			mm.add({
				desktop: "(min-width: 1024px)",
				tablet: "(min-width: 768px) and (max-width: 1023px)",
				mobile: "(max-width: 767px)",
				short: "(max-height: 750px)",
				reduce: "(prefers-reduced-motion: reduce)"
			}, (context) => {
				const conditions = context.conditions;
				conditions.mobile || conditions.short;
				conditions.mobile || conditions.tablet;
				if (conditions.reduce) {
					gsapWithCSS.set(root.querySelectorAll("[data-about-motion]"), {
						clearProps: "all",
						opacity: 1,
						visibility: "visible"
					});
					return;
				}
				if (heroHeadlineRef.current && heroCtaRef.current) gsapWithCSS.set([heroHeadlineRef.current, heroCtaRef.current], {
					y: 0,
					opacity: 1
				});
				if (orbDotRef.current && orbPathRef.current && heroRef.current) gsapWithCSS.to(orbDotRef.current, {
					motionPath: {
						path: orbPathRef.current,
						align: orbPathRef.current,
						alignOrigin: [.5, .5],
						autoRotate: false
					},
					ease: "none",
					scrollTrigger: {
						trigger: heroRef.current,
						start: "top top",
						end: "+=120%",
						scrub: true,
						pin: true,
						anticipatePin: 1,
						invalidateOnRefresh: true
					}
				});
				if (outcomesHeadingSectionRef.current) {
					const statementLines = Array.from(outcomesHeadingSectionRef.current.querySelectorAll(".statement-text-item"));
					if (statementLines.length > 0) {
						gsapWithCSS.set(statementLines, {
							y: "100vh",
							opacity: 0
						});
						const tlStatement = gsapWithCSS.timeline({ scrollTrigger: {
							trigger: outcomesHeadingSectionRef.current,
							start: "top top",
							end: "+=203%",
							scrub: .5,
							pin: true,
							anticipatePin: 1
						} });
						statementLines.forEach((line, i) => {
							tlStatement.to(line, {
								y: 0,
								opacity: 1,
								duration: 1.2,
								ease: "power1.out"
							}, i * .95);
						});
						tlStatement.to({}, { duration: .4 });
					}
				}
				if (serveClientsSectionRef.current && serveClientsHeadingRef.current && serveClientsContentRef.current) {
					const serveLeftItems = Array.from(serveClientsContentRef.current.querySelectorAll(".serve-client-left-item"));
					gsapWithCSS.set(serveClientsHeadingRef.current, {
						x: "100vw",
						opacity: 0
					});
					gsapWithCSS.set(serveLeftItems, {
						x: "-100vw",
						opacity: 0
					});
					const tlServe = gsapWithCSS.timeline({ scrollTrigger: {
						trigger: serveClientsSectionRef.current,
						start: "top top",
						end: "+=257%",
						scrub: .5,
						pin: true,
						anticipatePin: 1
					} });
					tlServe.to(serveClientsHeadingRef.current, {
						x: 0,
						opacity: 1,
						duration: 1.2,
						ease: "power1.out"
					});
					serveLeftItems.forEach((item) => {
						tlServe.to(item, {
							x: 0,
							opacity: 1,
							duration: 1.2,
							ease: "power1.out"
						}, ">-0.4");
					});
					tlServe.to({}, { duration: .4 });
				}
				if (missionSectionRef.current) {
					const missionItems = Array.from(missionSectionRef.current.querySelectorAll(".mission-text-item"));
					if (missionItems.length > 0) {
						gsapWithCSS.set(missionItems, {
							x: "100vw",
							y: "100vh",
							opacity: 0
						});
						const tlMission = gsapWithCSS.timeline({ scrollTrigger: {
							trigger: missionSectionRef.current,
							start: "top top",
							end: "+=203%",
							scrub: .5,
							pin: true,
							anticipatePin: 1
						} });
						missionItems.forEach((item, i) => {
							tlMission.to(item, {
								x: 0,
								y: 0,
								opacity: 1,
								duration: 1.2,
								ease: "power1.out"
							}, i * .95);
						});
						tlMission.to({}, { duration: .4 });
					}
				}
				if (visionSectionRef.current) {
					const visionItems = Array.from(visionSectionRef.current.querySelectorAll(".vision-text-item"));
					if (visionItems.length > 0) {
						gsapWithCSS.set(visionItems, {
							x: "100vw",
							y: "100vh",
							opacity: 0
						});
						const tlVision = gsapWithCSS.timeline({ scrollTrigger: {
							trigger: visionSectionRef.current,
							start: "top top",
							end: "+=203%",
							scrub: .5,
							pin: true,
							anticipatePin: 1
						} });
						visionItems.forEach((item, i) => {
							tlVision.to(item, {
								x: 0,
								y: 0,
								opacity: 1,
								duration: 1.2,
								ease: "power1.out"
							}, i * .95);
						});
						tlVision.to({}, { duration: .4 });
					}
				}
				if (approachHeadingSectionRef.current && approachHeadingRef.current) {
					gsapWithCSS.set(approachHeadingRef.current, {
						x: "100vw",
						opacity: 0
					});
					gsapWithCSS.timeline({ scrollTrigger: {
						trigger: approachHeadingSectionRef.current,
						start: "top top",
						end: "+=133%",
						scrub: .5,
						pin: true,
						anticipatePin: 1
					} }).to(approachHeadingRef.current, {
						x: 0,
						opacity: 1,
						duration: 1.2,
						ease: "power1.out"
					}).to({}, { duration: .4 });
				}
				if (approachCardsSectionRef.current) {
					const cardElements = Array.from(approachCardsSectionRef.current.querySelectorAll(".approach-card-item"));
					if (cardElements.length > 0) {
						gsapWithCSS.set(cardElements, {
							x: "100vw",
							opacity: 0
						});
						const tlApproachCards = gsapWithCSS.timeline({ scrollTrigger: {
							trigger: approachCardsSectionRef.current,
							start: "top top",
							end: "+=300%",
							scrub: .5,
							pin: true,
							anticipatePin: 1
						} });
						cardElements.forEach((card, i) => {
							tlApproachCards.to(card, {
								x: 0,
								opacity: 1,
								duration: 1.2,
								ease: "power1.out"
							}, i * 1.2);
						});
						tlApproachCards.to({}, { duration: 1.2 });
						tlApproachCards.to(cardElements, {
							opacity: 0,
							y: -40,
							duration: 1,
							ease: "power1.in"
						});
					}
				}
				if (visionariesHeadingSectionRef.current && visionariesHeadingRef.current) {
					gsapWithCSS.set(visionariesHeadingRef.current, {
						x: "100vw",
						opacity: 0
					});
					gsapWithCSS.timeline({ scrollTrigger: {
						trigger: visionariesHeadingSectionRef.current,
						start: "top top",
						end: "+=133%",
						scrub: .5,
						pin: true,
						anticipatePin: 1
					} }).to(visionariesHeadingRef.current, {
						x: 0,
						opacity: 1,
						duration: 1.2,
						ease: "power1.out"
					}).to({}, { duration: .4 });
				}
				if (visionaries.length > 0 && visionariesSectionRef.current && visionariesCircleRef.current && visionariesImageRefs.current.length >= visionaries.length && visionariesContentRefs.current.length >= visionaries.length) {
					const images = visionariesImageRefs.current;
					const content = visionariesContentRefs.current;
					const circle = visionariesCircleRef.current;
					gsapWithCSS.set(images, {
						opacity: 0,
						x: 0,
						y: 0,
						rotationY: 0,
						scale: 1,
						transformPerspective: 1200,
						transformOrigin: "center center"
					});
					gsapWithCSS.set(content, {
						opacity: 0,
						y: 20
					});
					gsapWithCSS.set(images[0], {
						opacity: 1,
						scale: 1
					});
					gsapWithCSS.set(content[0], {
						opacity: 1,
						y: 0
					});
					gsapWithCSS.set(circle, {
						rotation: 0,
						x: 0,
						scale: 1,
						transformOrigin: "50% 50%",
						willChange: "transform"
					});
					gsapWithCSS.timeline({ scrollTrigger: {
						trigger: visionariesSectionRef.current,
						start: "top top",
						end: "+=337%",
						scrub: .5,
						pin: true,
						anticipatePin: 1
					} }).to(images[0], {
						opacity: 1,
						duration: 2
					}).to(circle, {
						rotation: 360,
						x: 0,
						scale: 1,
						duration: 1.2,
						ease: "power3.inOut"
					}).to(images[0], {
						x: 140,
						rotationY: 90,
						opacity: 0,
						scale: .94,
						duration: 1.2,
						ease: "power3.inOut"
					}, "<").to(content[0], {
						opacity: 0,
						y: -25,
						duration: 1,
						ease: "power3.inOut"
					}, "<").fromTo(images[1], {
						opacity: 0,
						x: -140,
						rotationY: -90,
						scale: .94
					}, {
						opacity: 1,
						x: 0,
						rotationY: 0,
						scale: 1,
						duration: 1.2,
						ease: "power3.out"
					}, "<20%").fromTo(content[1], {
						opacity: 0,
						y: 25
					}, {
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power3.out"
					}, "<").to(images[1], {
						opacity: 1,
						duration: 2.5
					}).to(circle, {
						rotation: 720,
						x: 0,
						scale: 1,
						duration: 1.2,
						ease: "power3.inOut"
					}).to(images[1], {
						x: 140,
						rotationY: 90,
						opacity: 0,
						scale: .94,
						duration: 1.2,
						ease: "power3.inOut"
					}, "<").to(content[1], {
						opacity: 0,
						y: -25,
						duration: 1,
						ease: "power3.inOut"
					}, "<").fromTo(images[2], {
						opacity: 0,
						x: -140,
						rotationY: -90,
						scale: .94
					}, {
						opacity: 1,
						x: 0,
						rotationY: 0,
						scale: 1,
						duration: 1.2,
						ease: "power3.out"
					}, "<20%").fromTo(content[2], {
						opacity: 0,
						y: 25
					}, {
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power3.out"
					}, "<").to(circle, {
						rotation: 1080,
						x: 0,
						scale: 1,
						duration: 1.2,
						ease: "power3.inOut"
					}, "<").to(images[2], {
						opacity: 1,
						duration: .6
					});
				}
				if (cultureSectionRef.current) {
					const cultureCards = Array.from(cultureSectionRef.current.querySelectorAll(".culture-card-item"));
					if (cultureCards.length > 0) {
						gsapWithCSS.set(cultureCards, {
							x: "100vw",
							opacity: 0
						});
						const tlCulture = gsapWithCSS.timeline({ scrollTrigger: {
							trigger: cultureSectionRef.current,
							start: "top top",
							end: "+=254%",
							scrub: .5,
							pin: true,
							anticipatePin: 1
						} });
						cultureCards.forEach((card, i) => {
							tlCulture.to(card, {
								x: 0,
								opacity: 1,
								duration: 1.2,
								ease: "power1.out"
							}, i * .95);
						});
						tlCulture.to({}, { duration: .4 });
					}
				}
				if (techSectionRef.current && techLine1Ref.current && techLine2Ref.current) {
					gsapWithCSS.set(techLine1Ref.current, {
						x: "-100vw",
						opacity: 0
					});
					gsapWithCSS.set(techLine2Ref.current, {
						x: "100vw",
						opacity: 0
					});
					gsapWithCSS.timeline({ scrollTrigger: {
						trigger: techSectionRef.current,
						start: "top top",
						end: "+=260%",
						scrub: .5,
						pin: true,
						anticipatePin: 1
					} }).to(techLine1Ref.current, {
						x: 0,
						opacity: 1,
						duration: 1.2,
						ease: "power1.out"
					}, 0).to(techLine2Ref.current, {
						x: 0,
						opacity: 1,
						duration: 1.2,
						ease: "power1.out"
					}, 0).to({}, { duration: .5 });
				}
				if (nextSectionRef.current) {
					const nextItems = Array.from(nextSectionRef.current.querySelectorAll(".next-text-item"));
					if (nextItems.length > 0) {
						gsapWithCSS.set(nextItems, {
							x: "100vw",
							opacity: 0
						});
						const tlNext = gsapWithCSS.timeline({ scrollTrigger: {
							trigger: nextSectionRef.current,
							start: "top top",
							end: "+=203%",
							scrub: .5,
							pin: true,
							anticipatePin: 1
						} });
						nextItems.forEach((item, i) => {
							tlNext.to(item, {
								x: 0,
								opacity: 1,
								duration: 1.2,
								ease: "power1.out"
							}, i * .95);
						});
						tlNext.to({}, { duration: .4 });
					}
				}
				const imageReady = Array.from(root.querySelectorAll("img")).map((image) => {
					if (image.complete) return Promise.resolve();
					return new Promise((resolve) => {
						image.addEventListener("load", () => resolve(), { once: true });
						image.addEventListener("error", () => resolve(), { once: true });
					});
				});
				Promise.all([document.fonts.ready, ...imageReady]).then(() => {
					requestAnimationFrame(() => {
						ScrollTrigger.sort();
						ScrollTrigger.refresh();
					});
				});
			});
			return () => mm.revert();
		}, root);
		return () => ctx.revert();
	}, [teamLoaded, visionaries.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: rootRef,
		className: "about-page overflow-x-clip bg-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: heroRef,
				className: "relative min-h-screen overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "about-hero relative mx-auto min-h-[calc(100svh-6rem)] w-full max-w-[1400px] px-6 sm:px-12 lg:px-16 flex flex-col justify-center items-start text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-20 max-w-full flex flex-col items-start text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								ref: heroHeadlineRef,
								"data-about-motion": true,
								className: "hero-headline font-sans font-semibold text-white max-w-full text-left",
								style: {
									fontSize: "clamp(2.75rem, 6vw, 7rem)",
									lineHeight: 116 / 96,
									letterSpacing: 0
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block lg:whitespace-nowrap",
									children: ["Technology ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: aboutHeroOutline,
										children: "That"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "block lg:whitespace-nowrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: aboutHeroOutline,
											children: "Works"
										}),
										" For Your",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											ref: heroBusinessRef,
											style: aboutHeroOutline,
											children: "Business"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								ref: heroSubRef,
								className: "mt-[clamp(16px,2.4vw,34px)] text-white",
								style: {
									fontFamily: "\"Geist Sans\", \"Inter\", sans-serif",
									fontWeight: 600,
									fontSize: "clamp(1rem, 2.708vw, 37px)",
									lineHeight: "normal"
								},
								children: "Pune-based, globally delivered, certified since 2020."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								ref: heroCtaRef,
								"data-about-motion": true,
								className: "cta-pill mt-16 sm:mt-20 transition-transform duration-300 ease-out hover:scale-105",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-black type-button",
									children: "Get in touch"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "cta-pill-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 20,
										className: "text-black",
										strokeWidth: 2.5
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						ref: orbSvgRef,
						preserveAspectRatio: "none",
						className: "absolute inset-0 w-full h-full overflow-visible pointer-events-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "pathGradient",
								x1: "0%",
								y1: "0%",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "oklch(0.88 0.27 142)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "oklch(0.88 0.27 142 / 0.4)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
								id: "glowFilter",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
									stdDeviation: "8",
									result: "blur"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "blur" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								ref: orbPathRef,
								d: "\n                  M 1040 0\n                  L 1040 240\n                  Q 1040 280 1080 280\n                  L 1240 280\n                  Q 1280 280 1280 320\n                  L 1280 480\n                  Q 1280 520 1240 520\n                  L 740 520\n                  Q 700 520 700 560\n                  L 700 640\n                  Q 700 680 660 680\n                  L -200 680\n                ",
								fill: "none",
								stroke: "url(#pathGradient)",
								strokeWidth: "2",
								strokeLinecap: "round"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								ref: orbDotRef,
								cx: "1040",
								cy: "0",
								r: "14",
								fill: "#39FF14"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: outcomesHeadingSectionRef,
				className: "solutions-outcomes-heading h-screen flex items-center justify-center relative w-full overflow-hidden text-center bg-black px-6 sm:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					ref: outcomesHeadingRef,
					style: { perspective: "1000px" },
					className: "text-[clamp(1.2rem,2.8vw,2.35rem)] font-bold leading-[1.35] text-center text-white tracking-tight",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "statement-text-item block",
							children: "We build on-demand teams tailored to your project —"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "statement-text-item block",
							children: "reducing overhead, expanding your service portfolio,"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "statement-text-item block",
							children: "and delivering on time, every time."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: serveClientsSectionRef,
				className: "relative h-screen w-full bg-black flex flex-col justify-center overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full pl-[30vw] pr-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						ref: serveClientsHeadingRef,
						className: "serve-heading type-title text-white flex items-center gap-4 sm:gap-6 w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0",
							children: "We Serve Clients"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1.5px] flex-1 bg-white" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: serveClientsContentRef,
					className: "mt-16 sm:mt-24 flex items-start gap-4 sm:gap-6 pl-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 sm:w-20 lg:w-28 h-[1.5px] bg-white/90 mt-5 sm:mt-8 shrink-0 serve-client-left-item" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col space-y-1 sm:space-y-3 type-display text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "serve-client-left-item",
								style: {
									color: "#000000",
									WebkitTextStroke: "2.5px #82E926",
									paintOrder: "stroke fill"
								},
								children: "Across"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "serve-client-left-item text-white",
								children: "India"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "serve-client-left-item",
								style: {
									color: "#000000",
									WebkitTextStroke: "2.5px #82E926",
									paintOrder: "stroke fill"
								},
								children: "And globally"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: missionSectionRef,
				className: "relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: missionContentRef,
					className: "flex flex-col items-center max-w-4xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/about/mission-goal.png",
							alt: "Our Mission",
							className: "mission-text-item w-24 sm:w-36 h-auto mb-8 sm:mb-12 object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mission-text-item text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white mb-6 sm:mb-8 tracking-tight",
							children: "Our Mission"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mission-text-item text-[clamp(1.2rem,2.8vw,2.35rem)] font-medium text-white/90 leading-snug tracking-tight",
							children: "To provide top-notch, on-demand IT services that make us our clients' first choice."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: visionSectionRef,
				className: "relative h-screen w-full bg-black flex flex-col items-center justify-center text-center px-6 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: visionContentRef,
					className: "flex flex-col items-center max-w-4xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/about/vision.png",
							alt: "Our Vision",
							className: "vision-text-item w-24 sm:w-36 h-auto mb-8 sm:mb-12 object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "vision-text-item text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white mb-6 sm:mb-8 tracking-tight",
							children: "Our Vision"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "vision-text-item text-[clamp(1.2rem,2.8vw,2.35rem)] font-medium text-white/90 leading-snug tracking-tight",
							children: "A future where every business has access to quality tech solutions — on demand, within budget."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: approachHeadingSectionRef,
				className: "relative h-screen min-h-screen w-full bg-black flex items-center justify-center text-center px-6 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					ref: approachHeadingRef,
					className: "uppercase tracking-tight",
					style: {
						color: "#FFF",
						textAlign: "center",
						fontFamily: "\"Inter\", sans-serif",
						fontSize: "clamp(2.25rem, 8.88vw, 128px)",
						fontStyle: "normal",
						fontWeight: 600,
						lineHeight: "normal"
					},
					children: "OUR APPROACH"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: approachCardsSectionRef,
				className: "relative h-screen w-full bg-black flex flex-col justify-center items-center px-6 sm:px-12 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "approach-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] w-full mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "approach-card-item flip-card h-[340px] sm:h-[380px] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flip-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-14 h-14 text-[#82E926]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black type-card font-extrabold mb-2",
										children: "Discovery"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black font-semibold type-body",
										children: "Understand the challenge and goals."
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-14 h-14 text-[#82E926]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black type-card font-extrabold mb-2",
										children: "Discovery"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black font-semibold type-body",
										children: "Understand the challenge and goals."
									})] })]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "approach-card-item flip-card h-[340px] sm:h-[380px] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flip-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-14 h-14 text-[#82E926]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black type-card font-extrabold mb-2",
										children: "Team Assembly"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black font-semibold type-body",
										children: "Exact specialists for the job."
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-14 h-14 text-[#82E926]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black type-card font-extrabold mb-2",
										children: "Team Assembly"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black font-semibold type-body",
										children: "Exact specialists for the job."
									})] })]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "approach-card-item flip-card h-[340px] sm:h-[380px] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flip-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "w-14 h-14 text-[#82E926]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black type-card font-extrabold mb-2",
										children: "Agile Delivery"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black font-semibold type-body",
										children: "Iterative sprints, continuous feedback."
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "w-14 h-14 text-[#82E926]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black type-card font-extrabold mb-2",
										children: "Agile Delivery"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black font-semibold type-body",
										children: "Iterative sprints, continuous feedback."
									})] })]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "approach-card-item flip-card h-[340px] sm:h-[380px] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flip-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-front relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "w-14 h-14 text-[#82E926]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black type-card font-extrabold mb-2",
										children: "Support & Scale"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black font-semibold type-body",
										children: "Managed support post-delivery."
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-back relative p-6 sm:p-8 flex flex-col justify-between items-start text-left !bg-white border border-zinc-200 rounded-2xl shadow-2xl overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "w-14 h-14 text-[#82E926]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black type-card font-extrabold mb-2",
										children: "Support & Scale"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black font-semibold type-body",
										children: "Managed support post-delivery."
									})] })]
								})]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: visionariesHeadingSectionRef,
				className: "relative h-screen min-h-screen w-full bg-black flex items-center justify-center text-center px-6 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					ref: visionariesHeadingRef,
					className: "uppercase tracking-tight",
					style: {
						color: "#FFF",
						textAlign: "center",
						fontFamily: "\"Inter\", sans-serif",
						fontSize: "clamp(2.25rem, 8.88vw, 128px)",
						fontStyle: "normal",
						fontWeight: 600,
						lineHeight: "normal"
					},
					children: "THE VISIONARIES"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisionariesSection, {
				visionaries,
				sectionRef: visionariesSectionRef,
				circleRef: visionariesCircleRef,
				imageRefs: visionariesImageRefs,
				contentRefs: visionariesContentRefs
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: cultureSectionRef,
				className: "relative h-screen w-full bg-black flex flex-col justify-center items-center overflow-hidden py-8 sm:py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "culture-wrap max-w-[1400px] w-full mx-auto px-6 sm:px-10 flex flex-col justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white tracking-tight text-center mb-6 sm:mb-10 uppercase",
						children: "CULTURE & VALUES"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "culture-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "culture-card-item flip-card h-[360px] sm:h-[400px] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-inner",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-white type-card font-bold text-left",
											children: "Innovation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none",
											children: "1"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-white type-card font-bold text-left z-10",
												children: "Innovation"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "z-10 space-y-3 max-w-[280px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
													className: "text-white type-body font-bold text-left",
													children: [
														"We don't follow trends",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														"We apply what actually works."
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-zinc-200 type-body text-left",
													children: "At Asteri, innovation means finding smarter ways to solve real problems. Every solution we build is designed to move faster, cost less, and outlast the alternatives."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none",
												children: "1"
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "culture-card-item flip-card h-[360px] sm:h-[400px] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-inner",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-white type-card font-bold text-left",
											children: "Integrity"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none",
											children: "2"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-white type-card font-bold text-left z-10",
												children: "Integrity"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "z-10 space-y-3 max-w-[280px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
													className: "text-white type-body font-bold text-left",
													children: [
														"We say what we mean,",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														"and deliver what we promise."
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-zinc-200 type-body text-left",
													children: "Honest scoping, transparent timelines, and no surprises at go-live. Our clients trust us because we treat their business like our own — always."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none",
												children: "2"
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "culture-card-item flip-card h-[360px] sm:h-[400px] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-inner",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-white type-card font-bold text-left",
											children: "Client-First"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none",
											children: "3"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-white type-card font-bold text-left z-10",
												children: "Client-First"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "z-10 space-y-3 max-w-[280px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
													className: "text-white type-body font-bold text-left",
													children: [
														"We say what we mean,",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														"and deliver what we promise."
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-zinc-200 type-body text-left",
													children: "Honest scoping, transparent timelines, and no surprises at go-live. Our clients trust us because we treat their business like our own — always."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none",
												children: "3"
											})
										]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "culture-card-item flip-card h-[360px] sm:h-[400px] w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flip-inner",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flip-front relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-white type-card font-bold text-left",
											children: "Agility"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[260px] sm:text-[340px] font-bold text-white/40 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none",
											children: "4"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flip-back relative p-6 sm:p-7 flex flex-col justify-between items-start text-left bg-[rgb(137,137,137)] border border-zinc-500/40 rounded-3xl overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-white type-card font-bold text-left z-10",
												children: "Agility"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "z-10 space-y-3 max-w-[280px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
													className: "text-white type-body font-bold text-left",
													children: [
														"Built to move fast without",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
														"breaking things."
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-zinc-200 type-body text-left",
													children: "Markets shift. Priorities change. Our on-demand model means we can assemble, scale, and pivot your team without the lag of traditional IT engagements."
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[260px] sm:text-[340px] font-bold text-white/20 leading-none absolute -bottom-10 -right-4 select-none pointer-events-none",
												children: "4"
											})
										]
									})]
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: techSectionRef,
				className: "relative h-screen w-full bg-black flex items-center justify-center px-6 sm:px-10 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-[1200px] mx-auto text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						ref: techHeadingRef,
						className: "text-center text-white tracking-tight",
						style: {
							color: "#FFF",
							fontFamily: "\"Inter\", sans-serif",
							fontSize: "clamp(2rem, 5.2vw, 4.875rem)",
							fontStyle: "normal",
							fontWeight: 600,
							lineHeight: "1.15"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: techLine1Ref,
							className: "block whitespace-normal sm:whitespace-nowrap",
							children: "Technology Only Matters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: techLine2Ref,
							className: "block whitespace-normal sm:whitespace-nowrap",
							children: "When It Delivers Clarity."
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: nextSectionRef,
				className: "relative h-screen w-full bg-black flex flex-col items-center justify-center px-5 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 text-center max-w-7xl w-full mx-auto flex flex-col items-center justify-center px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "next-text-item text-white type-display tracking-tight text-center sm:whitespace-nowrap",
							children: "Designed For What’s Next."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "next-text-item mt-8 text-white type-lead font-semibold text-center",
							children: [
								"Tell us where complexity is slowing you down.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"We’ll design what comes next."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "next-text-item cta-pill mt-10 mx-auto font-bold hover:scale-105 transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-black type-button text-center",
								children: "Talk To Us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "cta-pill-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 24,
									className: "text-black",
									strokeWidth: 2.5
								})
							})]
						})
					]
				})
			})
		]
	}) });
}
//#endregion
export { About as component };
