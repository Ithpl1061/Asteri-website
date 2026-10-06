import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as gsapWithCSS } from "../_libs/gsap.mjs";
import { C as ArrowDown, S as ArrowRight, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-BbhaIMav.mjs";
import "./router-DyhAv2I7.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-96IzP0Ca.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	const [details, setDetails] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/industry-details")).then((res) => res.json()).then((data) => setDetails(data)).catch(console.error);
	}, []);
	const industriesHeroRef = (0, import_react.useRef)(null);
	const industriesHeroContentRef = (0, import_react.useRef)(null);
	const complexitySectionRef = (0, import_react.useRef)(null);
	const complexityTextRef = (0, import_react.useRef)(null);
	const tickerSectionRef = (0, import_react.useRef)(null);
	const tickerLine1Ref = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const industriesTitleSectionRef = (0, import_react.useRef)(null);
	const industriesTitleRef = (0, import_react.useRef)(null);
	const caseStudySectionRef = (0, import_react.useRef)(null);
	const caseStudyTextRef = (0, import_react.useRef)(null);
	const caseStudyBtnRef = (0, import_react.useRef)(null);
	const nextRef = (0, import_react.useRef)(null);
	const nextTitleRef = (0, import_react.useRef)(null);
	const nextTextRef = (0, import_react.useRef)(null);
	const nextBtnRef = (0, import_react.useRef)(null);
	const fintechHeadingSectionRef = (0, import_react.useRef)(null);
	const fintechCardsSectionRef = (0, import_react.useRef)(null);
	const fintechTitleRef = (0, import_react.useRef)(null);
	const fintechCarouselRef = (0, import_react.useRef)(null);
	const fintechArrowRef = (0, import_react.useRef)(null);
	const fintechArrow2Ref = (0, import_react.useRef)(null);
	const fintechCard1Ref = (0, import_react.useRef)(null);
	const fintechCard2Ref = (0, import_react.useRef)(null);
	const fintechCard3Ref = (0, import_react.useRef)(null);
	const fintechCard4Ref = (0, import_react.useRef)(null);
	const messageRef = (0, import_react.useRef)(null);
	const messageTextRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!complexitySectionRef.current || !complexityTextRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(complexityTextRef.current, {
				x: "100vw",
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: complexitySectionRef.current,
				start: "top top",
				end: "+=2000",
				scrub: true,
				pin: true
			} }).to(complexityTextRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 });
		}, complexitySectionRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!messageRef.current || !messageTextRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(messageTextRef.current, {
				x: "100vw",
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: messageRef.current,
				start: "top top",
				end: "+=2000",
				scrub: true,
				pin: true
			} }).to(messageTextRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 });
		}, messageRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!tickerLine1Ref.current || !tickerSectionRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(tickerLine1Ref.current, {
				x: "150vw",
				opacity: 1
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: tickerSectionRef.current,
				start: "top top",
				end: "+=3500",
				scrub: true,
				pin: true
			} }).to(tickerLine1Ref.current, {
				x: "-150vw",
				ease: "none",
				duration: 1
			});
		}, tickerSectionRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!industriesTitleSectionRef.current || !industriesTitleRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(industriesTitleRef.current, {
				x: "100vw",
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: industriesTitleSectionRef.current,
				start: "top top",
				end: "+=2000",
				scrub: true,
				pin: true
			} }).to(industriesTitleRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 });
		}, industriesTitleSectionRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!fintechHeadingSectionRef.current || !fintechTitleRef.current || !fintechCarouselRef.current || !fintechCard1Ref.current || !fintechCard2Ref.current || !fintechCard3Ref.current || !fintechCard4Ref.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(fintechTitleRef.current, {
				y: "50vh",
				xPercent: -50,
				opacity: 0
			});
			const elementsToAnimate = [
				fintechCarouselRef.current,
				fintechCard1Ref.current,
				fintechCard2Ref.current,
				fintechCard3Ref.current,
				fintechCard4Ref.current
			];
			gsapWithCSS.set(elementsToAnimate, {
				x: "100vw",
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: fintechHeadingSectionRef.current,
				start: "center center",
				end: "+=1500",
				scrub: true,
				pin: true
			} }).to(fintechTitleRef.current, {
				y: 0,
				xPercent: -50,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: .5 });
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: fintechCardsSectionRef.current,
				start: "center center",
				end: "+=2000",
				scrub: true,
				pin: true
			} }).to(fintechCarouselRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: .5 }).to(fintechCard1Ref.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: .5 }).to(fintechCard2Ref.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: .5 }).to(fintechCard3Ref.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: .5 }).to(fintechCard4Ref.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 });
		});
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!caseStudySectionRef.current || !caseStudyTextRef.current || !caseStudyBtnRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set([caseStudyTextRef.current, caseStudyBtnRef.current], {
				x: "100vw",
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: caseStudySectionRef.current,
				start: "center center",
				end: "+=1500",
				scrub: true,
				pin: true
			} }).to(caseStudyTextRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: .5 }).to(caseStudyBtnRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1 });
		}, caseStudySectionRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!nextRef.current || !nextTitleRef.current || !nextTextRef.current || !nextBtnRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set([
				nextTitleRef.current,
				nextTextRef.current,
				nextBtnRef.current
			], {
				x: "100vw",
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: nextRef.current,
				start: "center center",
				end: "+=1500",
				scrub: true,
				pin: true
			} }).to(nextTitleRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: .5 }).to(nextTextRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: .5 }).to(nextBtnRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1 });
		}, nextRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		disableAnimations: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: industriesHeroRef,
				className: "bg-black px-8 md:px-16 lg:px-24 pb-16 pt-12 md:pb-20 md:pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-[1360px] mx-auto flex flex-col items-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: industriesHeroContentRef,
						className: "flex flex-col items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "type-display text-white",
								children: [
									"We",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-transparent stroke-text-green",
										children: "Speak"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Your Sector"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\r\n                  text-white\r\n                  text-lg\r\n                  sm:text-xl\r\n                  md:text-2xl\r\n                  font-semibold\r\n                ",
								children: "Domain expertise across 6 industries."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "\r\n                  mt-12\r\n                  flex\r\n                  items-center\r\n                  gap-4\r\n                  pl-6\r\n                  pr-3\r\n                  py-3\r\n                  rounded-full\r\n                  border-2\r\n                  border-[#8AF500]\r\n                  bg-[#82E926]\r\n                  backdrop-blur-md\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-black type-button",
									children: "Explore More"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "\r\n                    w-11\r\n                    h-11\r\n                    rounded-full\r\n                    bg-white\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                  ",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 44,
										className: "text-black",
										strokeWidth: 2.4
									})
								})]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: complexitySectionRef,
				className: "bg-black flex items-center justify-center px-6 min-h-[75vh] overflow-hidden w-full relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: complexityTextRef,
						className: "\r\n                    text-center\r\n                  ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "\r\n                      text-white\r\n                      text-[clamp(2.25rem,5vw,4.5rem)]\r\n                      font-bold\r\n                      leading-[1.05]\r\n                    ",
							children: [
								"Generic solutions",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"don't cut it"
							]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: messageRef,
				className: "bg-black flex items-center justify-center px-6 min-h-[75vh] overflow-hidden w-full relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: messageTextRef,
						className: "\r\n                    max-w-[1400px]\r\n                    px-10\r\n                    text-center\r\n                    text-white\r\n                    font-bold\r\n                    leading-[1.2]\r\n                    text-[clamp(1.2rem,2.8vw,2.35rem)]\r\n                  ",
						children: [
							"Every sector has different compliance needs,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"data complexity, and growth pressure."
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: tickerSectionRef,
				className: "bg-black overflow-hidden flex items-center justify-center px-6 min-h-[75vh] w-full relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\r\n                    flex\r\n                    flex-col\r\n                    w-full\r\n                    justify-center\r\n                    items-center\r\n                    text-center\r\n                    gap-6\r\n                  ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: tickerLine1Ref,
							className: "flex flex-nowrap justify-center items-center gap-3 md:gap-6 whitespace-nowrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "type-display text-transparent stroke-text-green",
									children: "Scale."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "type-display text-white",
									children: "Pressure."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "type-display text-transparent stroke-text-green",
									children: "Speed."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "type-display text-white",
									children: "Regulation."
								})
							]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: industriesTitleSectionRef,
				className: "bg-black flex items-center justify-center px-6 min-h-[75vh] overflow-hidden w-full relative text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: industriesTitleRef,
						className: "\r\n                    text-center\r\n                  ",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "\r\n                      text-white\r\n                      text-[clamp(2.25rem,5vw,4.5rem)]\r\n                      font-bold\r\n                      tracking-tight\r\n                      whitespace-nowrap\r\n                    ",
							children: "INDUSTRIES"
						})
					})
				})
			}),
			false,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: fintechHeadingSectionRef,
				className: "bg-black min-h-[100vh] flex flex-col items-center justify-center relative w-full overflow-hidden pt-12 gap-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "industries-banking-layout flex-none -translate-y-16",
					style: {
						height: "220px",
						margin: 0
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						ref: fintechTitleRef,
						children: details[0]?.name
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: fintechCardsSectionRef,
				className: "bg-black min-h-[100vh] flex flex-col items-center justify-center relative w-full overflow-hidden pt-12 gap-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "industries-banking-layout flex-none",
					style: { margin: 0 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							ref: fintechCarouselRef,
							className: "industries-carousel",
							src: "/figma/industries/carousel-button.svg",
							alt: "",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							ref: fintechCard1Ref,
							className: "industries-security-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								ref: fintechArrowRef,
								className: "industries-security-arrow",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
									size: 28,
									strokeWidth: 3,
									color: "#7cff00"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: details[0]?.challengesDescription })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							ref: fintechCard2Ref,
							className: "industries-resilience-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: details[0]?.solutionsDescription }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								ref: fintechArrow2Ref,
								className: "industries-resilience-arrow",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 28,
									strokeWidth: 3,
									color: "#7cff00"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							ref: fintechCard3Ref,
							className: "industries-speed-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: details[0]?.impactDescription }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								children: ["Case Study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/figma/industries/case-arrow.svg",
									alt: "",
									"aria-hidden": "true"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							ref: fintechCard4Ref,
							className: "industries-banking-image",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: details[0]?.imageUrl,
								alt: details[0]?.name
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: caseStudySectionRef,
				className: "relative bg-black min-h-[75vh] flex items-center justify-center px-6 overflow-hidden w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n                    absolute\r\n                    bottom-[-250px]\r\n                    left-1/2\r\n                    -translate-x-1/2\r\n                    w-[1400px]\r\n                    h-[500px]\r\n                    rounded-full\r\n                    bg-[#8AF500]\r\n                    opacity-[0.08]\r\n                    blur-[180px]\r\n                  " }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: caseStudyTextRef,
							className: "\r\n                    text-center\r\n                    w-full\r\n                    px-10\r\n                  ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "type-title text-white max-w-[1400px] mx-auto",
								children: [
									"Our impact lives inside",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"the systems in use."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: caseStudyBtnRef,
							className: "\r\n                  hidden\r\n                  flex\r\n                  items-center\r\n                  gap-3\r\n                  pl-6\r\n                  pr-3\r\n                  py-3\r\n                  rounded-full\r\n                  border-2\r\n                  border-[#8AF500]\r\n                  backdrop-blur-md\r\n                ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white type-button",
								children: "Case Studies"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n                    w-11\r\n                    h-11\r\n                    rounded-full\r\n                    bg-[#8AF500]\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                  ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 44,
									className: "text-black",
									strokeWidth: 2.2
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: nextRef,
				className: "relative bg-black min-h-[75vh] w-full flex items-center justify-center overflow-hidden px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex w-full max-w-[1360px] items-center justify-center overflow-hidden py-20 md:py-24",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								ref: nextTitleRef,
								className: "type-title text-white",
								children: "Don't see your sector?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								ref: nextTextRef,
								className: "mt-10 type-lead font-semibold text-white",
								children: [
									"Reach out and let's discuss your",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"specific context."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								ref: nextBtnRef,
								className: "\r\n                  mt-12\r\n                  flex\r\n                  items-center\r\n                  gap-4\r\n                  pl-6\r\n                  pr-3\r\n                  py-3\r\n                  rounded-full\r\n                  border-2\r\n                  border-[#8AF500]\r\n                  bg-[#D9D9D9]\r\n                  backdrop-blur-md\r\n                \r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-black type-button",
									children: "Talk to Us"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "\r\n                    w-11\r\n                    h-11\r\n                    rounded-full\r\n                    bg-white\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                  ",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 44,
										className: "text-black",
										strokeWidth: 2.5
									})
								})]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { Services as component };
