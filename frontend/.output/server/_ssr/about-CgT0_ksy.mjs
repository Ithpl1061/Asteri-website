import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ScrollTrigger, r as gsapWithCSS } from "../_libs/gsap.mjs";
import { i as Users, l as Search, u as RotateCw, v as HeartHandshake, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-BbhaIMav.mjs";
import "./router-DyhAv2I7.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CgT0_ksy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VisionariesSection({ visionaries, sectionRef, circleRef, imageRefs, contentRefs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: sectionRef,
		className: "relative h-screen w-full bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-screen items-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-16 lg:gap-20 px-8 lg:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-[560px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: circleRef,
							className: "\n                  absolute\n                  left-10\n                  top-8\n                  z-0\n                  h-[460px]\n                  w-[460px]\n                  rounded-full\n                  bg-white\n                "
						}), visionaries.map((person, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							ref: (element) => {
								if (element) imageRefs.current[index] = element;
							},
							src: person.imageUrl,
							alt: person.name,
							className: "\n                    absolute\n                    top-4\n                    left-10\n                    z-10\n                    w-[460px]\n                    max-h-[490px]\n                    select-none\n                    object-contain\n                    pointer-events-none\n                  ",
							style: {
								opacity: index === 0 ? 1 : 0,
								zIndex: visionaries.length - index
							}
						}, person.name))]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-[560px]",
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
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
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
	(0, import_react.useRef)(null);
	const visionariesSectionRef = (0, import_react.useRef)(null);
	const visionariesCircleRef = (0, import_react.useRef)(null);
	const visionariesImageRefs = (0, import_react.useRef)([]);
	const visionariesContentRefs = (0, import_react.useRef)([]);
	const cultureSectionRef = (0, import_react.useRef)(null);
	const techSectionRef = (0, import_react.useRef)(null);
	const techHeadingRef = (0, import_react.useRef)(null);
	const nextSectionRef = (0, import_react.useRef)(null);
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
							end: "+=250%",
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
						tlStatement.to({}, { duration: 1.2 });
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
						end: "+=300%",
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
					tlServe.to({}, { duration: 1.2 });
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
							end: "+=250%",
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
						tlMission.to({}, { duration: 1.2 });
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
							end: "+=250%",
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
						tlVision.to({}, { duration: 1.2 });
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
						end: "+=200%",
						scrub: .5,
						pin: true,
						anticipatePin: 1
					} }).to(approachHeadingRef.current, {
						x: 0,
						opacity: 1,
						duration: 1.2,
						ease: "power1.out"
					}).to({}, { duration: 1.2 });
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
					}
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
						end: "+=400%",
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
						duration: 2
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
							end: "+=300%",
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
						tlCulture.to({}, { duration: 1.2 });
					}
				}
				if (techSectionRef.current && techHeadingRef.current) {
					gsapWithCSS.set(techHeadingRef.current, {
						x: "100vw",
						opacity: 0
					});
					gsapWithCSS.timeline({ scrollTrigger: {
						trigger: techSectionRef.current,
						start: "top top",
						end: "+=200%",
						scrub: .5,
						pin: true,
						anticipatePin: 1
					} }).to(techHeadingRef.current, {
						x: 0,
						opacity: 1,
						duration: 1.2,
						ease: "power1.out"
					}).to({}, { duration: 1.2 });
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
							end: "+=250%",
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
						tlNext.to({}, { duration: 1.2 });
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "about-hero relative mx-auto h-[100svh] w-full max-w-[1400px] px-5 sm:px-8 lg:h-screen lg:px-10 flex flex-col items-center justify-center text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-20 max-w-full flex flex-col items-center justify-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							ref: heroHeadlineRef,
							"data-about-motion": true,
							className: "hero-headline font-display type-display text-white max-w-full md:max-w-[1000px] text-center",
							children: [
								"We Design",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#000000",
										WebkitTextStroke: "3px #82E926",
										paintOrder: "stroke fill"
									},
									children: "Digital"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Systems That Work",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-30 inline-block px-1",
									style: {
										color: "#000000",
										WebkitTextStroke: "3px #82E926",
										paintOrder: "stroke fill"
									},
									children: "And Scale."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: heroCtaRef,
							"data-about-motion": true,
							className: "\n                  mt-8\n                  sm:mt-10\n                  flex\n                  items-center\n                  justify-center\n                  gap-3\n                  px-6\n                  py-3\n                  rounded-full\n                  border-2\n                  border-[#8AF500]\n                  bg-[#82E926]\n                  backdrop-blur-md\n                  transition-transform\n                  duration-300\n                  ease-out\n                  hover:scale-105\n                ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-black type-button",
								children: "Get in touch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-8 h-8 rounded-full bg-white flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 20,
									className: "text-black",
									strokeWidth: 2.5
								})
							})]
						})]
					})
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
					className: "w-full text-center px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						ref: serveClientsHeadingRef,
						className: "type-title text-white text-center",
						children: "We Serve Clients"
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
					className: "text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white uppercase tracking-tight text-center",
					children: "OUR APPROACH"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: approachCardsSectionRef,
				className: "relative h-screen w-full bg-black flex flex-col justify-center items-center px-6 sm:px-12 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1400px] w-full mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "approach-card-item flex flex-col items-start text-left bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-2xl h-[340px] sm:h-[380px] justify-between shadow-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-14 h-14 text-[#82E926] mb-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-white type-card font-bold mb-2",
								children: "Discovery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-zinc-400 type-body",
								children: "Understand the challenge and goals."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "approach-card-item flex flex-col items-start text-left bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-2xl h-[340px] sm:h-[380px] justify-between shadow-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "w-14 h-14 text-[#82E926] mb-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-white type-card font-bold mb-2",
								children: "Team Assembly"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-zinc-400 type-body",
								children: "Exact specialists for the job."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "approach-card-item flex flex-col items-start text-left bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-2xl h-[340px] sm:h-[380px] justify-between shadow-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "w-14 h-14 text-[#82E926] mb-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-white type-card font-bold mb-2",
								children: "Agile Delivery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-zinc-400 type-body",
								children: "Iterative sprints, continuous feedback."
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "approach-card-item flex flex-col items-start text-left bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 rounded-2xl h-[340px] sm:h-[380px] justify-between shadow-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "w-14 h-14 text-[#82E926] mb-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-white type-card font-bold mb-2",
								children: "Support & Scale"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-zinc-400 type-body",
								children: "Managed support post-delivery."
							})] })]
						})
					]
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
					className: "max-w-[1400px] w-full mx-auto px-6 sm:px-10 flex flex-col justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[clamp(2.25rem,5vw,4.5rem)] font-bold text-white tracking-tight text-center mb-6 sm:mb-10 uppercase",
						children: "CULTURE & VALUES"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6",
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
											className: "text-[130px] sm:text-[170px] font-bold text-white/40 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none",
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
												className: "text-[130px] sm:text-[170px] font-bold text-white/20 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none",
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
											className: "text-[130px] sm:text-[170px] font-bold text-white/40 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none",
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
												className: "text-[130px] sm:text-[170px] font-bold text-white/20 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none",
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
											className: "text-[130px] sm:text-[170px] font-bold text-white/40 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none",
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
												className: "text-[130px] sm:text-[170px] font-bold text-white/20 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none",
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
											className: "text-[130px] sm:text-[170px] font-bold text-white/40 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none",
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
												className: "text-[130px] sm:text-[170px] font-bold text-white/20 leading-none absolute -bottom-3 -right-2 select-none pointer-events-none",
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
					className: "w-full max-w-[1100px] mx-auto text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						ref: techHeadingRef,
						className: "type-statement text-center text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "Technology Only Matters"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: "When It Delivers Clarity."
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: nextSectionRef,
				className: "relative h-screen w-full bg-black flex flex-col items-center justify-center px-5 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "next-text-item text-white type-title text-center",
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
							className: "next-text-item mt-10 mx-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] text-black font-bold hover:scale-105 transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-black type-button text-center",
								children: "Talk To Us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-full bg-white flex items-center justify-center",
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
