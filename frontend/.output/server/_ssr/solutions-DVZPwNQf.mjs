import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ScrollTrigger, r as gsapWithCSS } from "../_libs/gsap.mjs";
import { x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-BbhaIMav.mjs";
import "./router-DyhAv2I7.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-DVZPwNQf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ActionButton({ children, href, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: href,
		className: `solutions-action${dark ? " solutions-action--dark" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "type-button",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
		})]
	});
}
function Solutions() {
	const [outcomes, setOutcomes] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/solutions-outcomes")).then((res) => res.json()).then((data) => setOutcomes(data)).catch((err) => console.error(err));
	}, []);
	(0, import_react.useEffect)(() => {
		document.fonts.ready.then(() => {
			ScrollTrigger.refresh();
		});
	}, [outcomes]);
	const containerRef = (0, import_react.useRef)(null);
	const introSectionRef = (0, import_react.useRef)(null);
	const coreSectionRef = (0, import_react.useRef)(null);
	const playbookSectionRef = (0, import_react.useRef)(null);
	const outcomesHeadingSectionRef = (0, import_react.useRef)(null);
	const outcomesSubHeadingSectionRef = (0, import_react.useRef)(null);
	const outcomesSectionRef = (0, import_react.useRef)(null);
	const dotRef = (0, import_react.useRef)(null);
	const ctaSectionRef = (0, import_react.useRef)(null);
	const notAGenericRef = (0, import_react.useRef)(null);
	const playbookRef = (0, import_react.useRef)(null);
	const outcomesHeadingRef = (0, import_react.useRef)(null);
	const outcomesSubHeadingRef = (0, import_react.useRef)(null);
	const solutiRef = (0, import_react.useRef)(null);
	const onRef = (0, import_react.useRef)(null);
	const textRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (!containerRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			if (introSectionRef.current && solutiRef.current && onRef.current && textRef.current) {
				gsapWithCSS.set(solutiRef.current, {
					y: -150,
					opacity: 0
				});
				gsapWithCSS.set(onRef.current, {
					y: 150,
					opacity: 0
				});
				gsapWithCSS.set(textRef.current, {
					x: 150,
					opacity: 0
				});
				const heroTitle = containerRef.current.querySelector(".solutions-hero h1");
				const heroDesc = containerRef.current.querySelector(".solutions-hero p");
				const heroBtn = containerRef.current.querySelector(".solutions-hero a");
				if (heroTitle && heroDesc && heroBtn) {
					gsapWithCSS.set(heroTitle, {
						y: 120,
						opacity: 0
					});
					gsapWithCSS.set(heroDesc, {
						y: 80,
						opacity: 0
					});
					gsapWithCSS.set(heroBtn, {
						x: 150,
						opacity: 0
					});
					gsapWithCSS.timeline().to(heroTitle, {
						y: 0,
						opacity: 1,
						duration: 1.2,
						ease: "power3.out"
					}, .2).to(heroDesc, {
						y: 0,
						opacity: 1,
						duration: 1,
						ease: "power3.out"
					}, .4).to(heroBtn, {
						x: 0,
						opacity: 1,
						duration: 1,
						ease: "power3.out"
					}, .6);
				}
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: introSectionRef.current,
					start: "top top",
					end: "+=1000",
					scrub: true,
					pin: true
				} }).to(solutiRef.current, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}, 0).to(onRef.current, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}, 0).to(textRef.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}, .5).to({}, { duration: 1 });
			}
			gsapWithCSS.utils.toArray(".solutions-statement p").forEach((p) => {
				gsapWithCSS.from(p, {
					scrollTrigger: {
						trigger: p,
						start: "top 85%",
						toggleActions: "play none none reverse"
					},
					x: 150,
					opacity: 0,
					duration: 1,
					ease: "power2.out"
				});
			});
			if (coreSectionRef.current) {
				const coreCards = gsapWithCSS.utils.toArray(".core-card");
				const container = coreSectionRef.current.querySelector(".max-w-\\[1600px\\]") || coreSectionRef.current;
				const getCenterOffset = (card) => {
					const containerWidth = container.offsetWidth;
					const cardLeft = card.offsetLeft;
					return (containerWidth - card.offsetWidth) / 2 - cardLeft;
				};
				gsapWithCSS.set(coreCards, {
					x: "100vw",
					opacity: 0
				});
				const coreTl = gsapWithCSS.timeline({ scrollTrigger: {
					trigger: coreSectionRef.current,
					start: "top top",
					end: "+=2000",
					scrub: true,
					pin: true,
					invalidateOnRefresh: true
				} });
				coreCards.forEach((card, i) => {
					const targetX = () => getCenterOffset(card);
					if (i === 0) {
						coreTl.to(card, {
							x: targetX,
							opacity: 1,
							duration: 1,
							ease: "power2.out"
						});
						coreTl.to({}, { duration: 1 });
					} else {
						const prevCard = coreCards[i - 1];
						coreTl.to(prevCard, {
							x: "-100vw",
							opacity: 0,
							duration: 1,
							ease: "power2.inOut"
						});
						coreTl.to(card, {
							x: targetX,
							opacity: 1,
							duration: 1,
							ease: "power2.out"
						}, "<");
						coreTl.to({}, { duration: 1 });
					}
				});
			}
			if (outcomesHeadingSectionRef.current && outcomesHeadingRef.current) {
				gsapWithCSS.set(outcomesHeadingRef.current, {
					rotationX: 90,
					y: 50,
					opacity: 0,
					transformOrigin: "50% 50%"
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: outcomesHeadingSectionRef.current,
					start: "center center",
					end: "+=1000",
					scrub: true,
					pin: true
				} }).to(outcomesHeadingRef.current, {
					rotationX: 0,
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1 });
			}
			if (outcomesSubHeadingSectionRef.current && outcomesSubHeadingRef.current) {
				gsapWithCSS.set(outcomesSubHeadingRef.current, {
					rotationX: 90,
					y: 50,
					opacity: 0,
					transformOrigin: "50% 50%"
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: outcomesSubHeadingSectionRef.current,
					start: "center center",
					end: "+=1000",
					scrub: true,
					pin: true
				} }).to(outcomesSubHeadingRef.current, {
					rotationX: 0,
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1 });
			}
			if (outcomesSectionRef.current && dotRef.current) {
				const olElement = outcomesSectionRef.current.querySelector("ol");
				if (olElement) gsapWithCSS.to(dotRef.current, {
					scrollTrigger: {
						trigger: olElement,
						start: "top center",
						end: "bottom center",
						scrub: true
					},
					top: "calc(100% - clamp(65px, 7.5vw, 125px))",
					ease: "none"
				});
			}
			if (playbookSectionRef.current && notAGenericRef.current && playbookRef.current) {
				gsapWithCSS.set(notAGenericRef.current, { x: "-100vw" });
				gsapWithCSS.set(playbookRef.current, { x: "100vw" });
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: playbookSectionRef.current,
					start: "center center",
					end: "+=700",
					scrub: true,
					pin: true
				} }).to(notAGenericRef.current, {
					x: 0,
					duration: 1,
					ease: "power2.out"
				}, 0).to(playbookRef.current, {
					x: 0,
					duration: 1,
					ease: "power2.out"
				}, 0).to({}, { duration: 1 });
			}
			if (ctaSectionRef.current) {
				const ctaTitle = ctaSectionRef.current.querySelector("h2");
				const ctaText = ctaSectionRef.current.querySelector("p");
				const ctaBtn = ctaSectionRef.current.querySelector("a");
				if (ctaTitle && ctaText && ctaBtn) {
					gsapWithCSS.set([
						ctaTitle,
						ctaText,
						ctaBtn
					], {
						x: "100vw",
						opacity: 0
					});
					gsapWithCSS.timeline({ scrollTrigger: {
						trigger: ctaSectionRef.current,
						start: "top top",
						end: "+=1000",
						scrub: true,
						pin: true
					} }).to(ctaTitle, {
						x: 0,
						opacity: 1,
						duration: 1,
						ease: "power2.out"
					}).to({}, { duration: .5 }).to(ctaText, {
						x: 0,
						opacity: 1,
						duration: 1,
						ease: "power2.out"
					}).to({}, { duration: .5 }).to(ctaBtn, {
						x: 0,
						opacity: 1,
						duration: 1,
						ease: "power2.out"
					}).to({}, { duration: 1.5 });
				}
			}
		}, containerRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "solutions-page",
		ref: containerRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "solutions-hero",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "type-display",
						children: [
							"Transformation",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "at\xA0\xA0Every" }),
							" Layer"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-lead font-semibold",
						children: "From startup MVP to enterprise modernization."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
						href: "/contact",
						children: "Explore More"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: introSectionRef,
				className: "py-20 px-6 min-h-[clamp(500px,100vh,1000px)] flex items-center justify-center overflow-hidden w-full bg-black",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start w-fit mx-auto text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: solutiRef,
						className: "text-[6rem] sm:text-[10rem] md:text-[13rem] lg:text-[15rem] font-bold leading-[0.8] tracking-tighter -ml-2",
						children: "soluti"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mt-2 md:mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: onRef,
							className: "text-[6rem] sm:text-[10rem] md:text-[13rem] lg:text-[15rem] font-bold leading-[0.8] tracking-tighter -ml-2",
							children: "on"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: textRef,
							className: "flex flex-col text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "type-lead font-bold mb-1 block",
								children: "Whatever stage you're at"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "type-body m-0 max-w-[320px] text-white/90",
								children: [
									"We have a proven path to",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"get you there faster."
								]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "solutions-statement",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-statement",
					children: "Every solution is shaped by your specific business context and constraints."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: coreSectionRef,
				className: "solutions-core",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "type-title",
					children: "CORE SERVICES"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 -translate-y-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "core-card bg-[#403f3f] p-6 sm:p-10 lg:p-8 xl:p-12 relative overflow-hidden flex flex-col items-start text-left w-full max-w-[900px] shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full mb-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-white font-bold tracking-tighter",
									style: { lineHeight: .85 },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[7.5rem]",
										children: "Enterpr"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6 mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[7.5rem]",
											children: "ise"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col pb-1 sm:pb-3 md:pb-4 lg:pb-2 xl:pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-white text-lg sm:text-xl md:text-[1.5rem] lg:text-lg xl:text-xl font-bold mb-1 leading-tight tracking-normal",
												children: "Digital Transformation"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[#82e926] text-sm sm:text-base md:text-[1rem] lg:text-sm xl:text-base font-medium leading-tight",
												children: [
													"Modernize without the",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
													" disruption."
												]
											})]
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white text-sm sm:text-base leading-relaxed max-w-[800px] mb-10",
								children: "We help you automate manual processes, retire legacy systems, and rebuild around a digital-first operating model — without bringing your business to a halt mid-transition. Every transformation roadmap is built around your existing constraints, not a generic best-practices template."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-4 pl-6 pr-2 py-2 border-[2.5px] border-[#82e926] rounded-full text-white text-[0.9rem] md:text-[1.1rem] font-bold hover:bg-[#82e926] hover:text-black transition-all group mt-auto",
								children: ["Explore More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-[36px] h-[36px] bg-[#82e926] rounded-full flex items-center justify-center text-white group-hover:bg-black group-hover:text-[#82e926] transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "w-5 h-5",
										strokeWidth: 3
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "core-card bg-[#403f3f] p-6 sm:p-10 lg:p-8 xl:p-12 relative overflow-hidden flex flex-col items-start text-left w-full max-w-[900px] shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full mb-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-white font-bold tracking-tighter",
									style: { lineHeight: .85 },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-row items-end",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex items-center justify-center pr-1 sm:pr-2 mb-2 lg:mb-1 xl:mb-2 z-10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.7rem] sm:text-[1.1rem] md:text-[1.4rem] lg:text-[1rem] xl:text-[1.2rem] 2xl:text-[1.4rem] font-bold tracking-widest",
												style: {
													writingMode: "vertical-rl",
													transform: "rotate(180deg)"
												},
												children: "Cloud"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[7.5rem]",
											children: "Moderniz"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6 mt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[4rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[7.5rem]",
											children: "ation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col pb-1 sm:pb-3 md:pb-4 lg:pb-2 xl:pb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-white text-lg sm:text-xl md:text-[1.5rem] lg:text-lg xl:text-xl font-bold mb-1 leading-tight tracking-normal",
												children: "Solutions"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[#82e926] text-sm sm:text-base md:text-[1rem] lg:text-sm xl:text-base font-medium leading-tight max-w-[280px]",
												children: "Upgrading legacy systems into agile, cloud-based environments."
											})]
										})]
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white text-sm sm:text-base leading-relaxed max-w-[800px] mb-10",
								children: "We enable seamless migration and modernization, ensuring improved performance, flexibility, and cost efficiency."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-4 pl-6 pr-2 py-2 border-[2.5px] border-[#82e926] rounded-full text-white text-[0.9rem] md:text-[1.1rem] lg:text-[0.9rem] xl:text-[1.1rem] font-bold hover:bg-[#82e926] hover:text-black transition-all group mt-auto",
								children: ["Explore More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-[36px] h-[36px] bg-[#82e926] rounded-full flex items-center justify-center text-white group-hover:bg-black group-hover:text-[#82e926] transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "w-5 h-5",
										strokeWidth: 3
									})
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: outcomesHeadingSectionRef,
				className: "solutions-outcomes-heading min-h-[75vh] flex items-center justify-center relative w-full overflow-hidden text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					ref: outcomesHeadingRef,
					style: { perspective: "1000px" },
					className: "solutions-outcomes-heading-text type-title text-white uppercase",
					children: [
						"HOW SOLUTIONS",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"CREATE IMPACT"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: outcomesSubHeadingSectionRef,
				className: "solutions-outcomes-subheading min-h-[75vh] flex items-center justify-center relative w-full overflow-hidden text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					ref: outcomesSubHeadingRef,
					style: { perspective: "1000px" },
					className: "type-title",
					children: "OUTCOMES"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: outcomesSectionRef,
				className: "solutions-outcomes min-h-[75vh] flex flex-col items-center justify-center relative w-full overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: dotRef,
					className: "outcomes-moving-dot",
					"aria-hidden": "true"
				}), outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "type-heading",
						children: o.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "aria-hidden": "true" }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-lead font-semibold",
						children: o.description
					})
				] }, o.title))] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: playbookSectionRef,
				className: "min-h-[75vh] flex justify-center items-center overflow-hidden w-full relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-[1200px] w-full flex flex-col",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "type-title w-full text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: notAGenericRef,
							className: "block text-left w-full pl-[5%] md:pl-[10%]",
							children: "Not A Generic"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: playbookRef,
							className: "block text-right w-full pr-[5%] md:pr-[10%]",
							children: "Playbook."
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "solutions-statement",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-statement",
					children: "Every solution is shaped by your specific business context and constraints."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: ctaSectionRef,
				className: "solutions-cta",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "solutions-cta__content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-title",
							children: "Which solution fits your challenge?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-lead font-semibold",
							children: "Let's map the right combination to your specific goals."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButton, {
							href: "/contact",
							children: "Talk to Us"
						})
					]
				})
			})
		]
	}) });
}
//#endregion
export { Solutions as component };
