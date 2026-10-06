import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as Navbar, t as Footer } from "./Footer-DWLWZf7F.mjs";
import "./router-DyhAv2I7.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-DRZ2izIH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Button({ children, href, dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: href,
		className: `figma-service-button${dark ? " figma-service-button--dark" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "type-button",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "↗" })]
	});
}
function Services() {
	const [partners, setPartners] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/partners")).then((res) => res.json()).then((data) => setPartners(data)).catch((err) => console.error(err));
	}, []);
	const containerRef = (0, import_react.useRef)(null);
	const introSectionRef = (0, import_react.useRef)(null);
	const servicRef = (0, import_react.useRef)(null);
	const esRef = (0, import_react.useRef)(null);
	const textRef = (0, import_react.useRef)(null);
	const coreSectionRef = (0, import_react.useRef)(null);
	const workHeadingSectionRef = (0, import_react.useRef)(null);
	const workHeadingRef = (0, import_react.useRef)(null);
	const workSubHeadingSectionRef = (0, import_react.useRef)(null);
	const workSubHeadingRef = (0, import_react.useRef)(null);
	const workListSectionRef = (0, import_react.useRef)(null);
	const dotRef = (0, import_react.useRef)(null);
	const partnerSectionRef = (0, import_react.useRef)(null);
	const partnerCardRef = (0, import_react.useRef)(null);
	const quoteSectionRef = (0, import_react.useRef)(null);
	const quoteLine1Ref = (0, import_react.useRef)(null);
	const quoteLine2Ref = (0, import_react.useRef)(null);
	const supportSectionRef = (0, import_react.useRef)(null);
	const supportTextRef = (0, import_react.useRef)(null);
	const ctaSectionRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			if (introSectionRef.current && servicRef.current && esRef.current && textRef.current) {
				gsapWithCSS.set(servicRef.current, {
					y: -150,
					opacity: 0
				});
				gsapWithCSS.set(esRef.current, {
					y: 150,
					opacity: 0
				});
				gsapWithCSS.set(textRef.current, {
					x: 150,
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: introSectionRef.current,
					start: "top top",
					end: "+=1200",
					scrub: true,
					pin: true,
					invalidateOnRefresh: true
				} }).to(servicRef.current, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}, .1).to(esRef.current, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}, .1).to(textRef.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}, .6).to({}, { duration: 1.5 });
			}
			const statement = document.querySelector(".figma-services__statement");
			if (statement) gsapWithCSS.from(statement, {
				scrollTrigger: {
					trigger: statement,
					start: "top 85%",
					toggleActions: "play none none reverse"
				},
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power2.out"
			});
			if (coreSectionRef.current) {
				const coreCards = gsapWithCSS.utils.toArray(".figma-services__core--desktop .core-card");
				gsapWithCSS.set(coreCards, {
					x: 250,
					opacity: 0
				});
				const coreTl = gsapWithCSS.timeline({ scrollTrigger: {
					trigger: coreSectionRef.current,
					start: "top top",
					end: () => `+=${2e3 * (window.innerWidth < 1479 ? window.innerWidth / 1479 : 1)}`,
					scrub: .5,
					pin: true,
					invalidateOnRefresh: true
				} });
				if (coreCards.length >= 2) {
					coreTl.to(coreCards[0], {
						x: 0,
						opacity: 1,
						duration: .8,
						ease: "power2.out"
					});
					coreTl.to({}, { duration: 2.5 });
					coreTl.to(coreCards[0], {
						x: -250,
						opacity: 0,
						duration: .8,
						ease: "power2.inOut"
					});
					coreTl.to(coreCards[1], {
						x: 0,
						opacity: 1,
						duration: .8,
						ease: "power2.out"
					}, "<0.1");
					coreTl.to({}, { duration: 2.5 });
					coreTl.to(coreCards[1], {
						x: -250,
						opacity: 0,
						duration: .8,
						ease: "power2.in"
					});
				} else coreCards.forEach((card) => {
					coreTl.to(card, {
						x: 0,
						opacity: 1,
						duration: .8,
						ease: "power2.out"
					});
					coreTl.to({}, { duration: 2.5 });
					coreTl.to(card, {
						x: -250,
						opacity: 0,
						duration: .8,
						ease: "power2.in"
					});
				});
			}
			if (workHeadingSectionRef.current && workHeadingRef.current) {
				gsapWithCSS.set(workHeadingRef.current, {
					rotationX: 90,
					y: 50,
					opacity: 0,
					transformOrigin: "50% 50%"
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: workHeadingSectionRef.current,
					start: "center center",
					end: "+=800",
					scrub: true,
					pin: true
				} }).to(workHeadingRef.current, {
					rotationX: 0,
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1 });
			}
			if (workSubHeadingSectionRef.current && workSubHeadingRef.current) {
				gsapWithCSS.set(workSubHeadingRef.current, {
					rotationX: 90,
					y: 50,
					opacity: 0,
					transformOrigin: "50% 50%"
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: workSubHeadingSectionRef.current,
					start: "center center",
					end: "+=800",
					scrub: true,
					pin: true
				} }).to(workSubHeadingRef.current, {
					rotationX: 0,
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1 });
			}
			if (workListSectionRef.current && dotRef.current) {
				const olElement = workListSectionRef.current.querySelector("ol");
				if (olElement) gsapWithCSS.to(dotRef.current, {
					scrollTrigger: {
						trigger: olElement,
						start: "top center",
						end: "bottom center",
						scrub: true
					},
					top: "1047px",
					ease: "none"
				});
			}
			if (partnerSectionRef.current && partnerCardRef.current) {
				gsapWithCSS.set(partnerCardRef.current, {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: partnerSectionRef.current,
					start: "top 45px",
					end: "+=800",
					scrub: true,
					pin: true
				} }).to(partnerCardRef.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1 });
			}
			if (quoteSectionRef.current && quoteLine1Ref.current && quoteLine2Ref.current) {
				gsapWithCSS.set(quoteLine1Ref.current, {
					x: "-100vw",
					opacity: 0
				});
				gsapWithCSS.set(quoteLine2Ref.current, {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: quoteSectionRef.current,
					start: "center center",
					end: "+=800",
					scrub: true,
					pin: true
				} }).to(quoteLine1Ref.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out"
				}, 0).to(quoteLine2Ref.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out"
				}, 0).to({}, { duration: 1 }).to([quoteLine1Ref.current, quoteLine2Ref.current], {
					opacity: 0,
					y: -40,
					duration: .8,
					ease: "power2.in"
				});
			}
			if (supportSectionRef.current && supportTextRef.current) {
				gsapWithCSS.set(supportTextRef.current, {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: supportSectionRef.current,
					start: "center center",
					end: "+=800",
					scrub: true,
					pin: true
				} }).to(supportTextRef.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out"
				}).to({}, { duration: 1 }).to(supportTextRef.current, {
					opacity: 0,
					y: -40,
					duration: .8,
					ease: "power2.in"
				});
			}
			if (ctaSectionRef.current) {
				const ctaContent = ctaSectionRef.current.querySelector("div");
				if (ctaContent) {
					gsapWithCSS.set(ctaContent, {
						x: "100vw",
						opacity: 0
					});
					gsapWithCSS.timeline({ scrollTrigger: {
						trigger: ctaSectionRef.current,
						start: "center center",
						end: "+=800",
						scrub: true,
						pin: true
					} }).to(ctaContent, {
						x: 0,
						opacity: 1,
						duration: 1,
						ease: "power3.out"
					}).to({}, { duration: 1.5 }).to(ctaContent, {
						opacity: 0,
						y: -40,
						duration: .8,
						ease: "power2.in"
					});
				}
			}
		});
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "figma-services desktop-padding-bottom",
		ref: containerRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "figma-services__canvas",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "figma-services__hero",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "type-display",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Technology ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Systems" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Designed" }), " To Perform"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-lead font-semibold",
								children: "From infrastructure to intelligent platforms."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								href: "/Services- Salesforce Consulting",
								children: "Explore More"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "figma-services__statement type-lead font-medium",
						children: "Our services combine strategic thinking with practical implementation — ensuring systems are not only well designed, but dependable in real-world environments."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "figma-services__core figma-services__core--mobile",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-title",
								children: "CORE SERVICES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Salesforce" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "figma-services__core-side",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Consulting" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Strategic CRM solutions that enhance customer engagement and operational visibility." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "figma-services__core-copy",
									children: "We help organizations implement, customize, and optimize Salesforce platforms to align with business processes and drive measurable outcomes."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									href: "/Services- Salesforce Consulting",
									dark: true,
									children: "Explore More"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "figma-services__sap-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "SAP" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "figma-services__sap-side",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Consulting" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Enterprise-grade solutions designed to streamline complex business operations." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "figma-services__sap-copy",
										children: "We support implementation, optimization, and integration of SAP systems to improve efficiency, visibility, and decision-making."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										href: "/contact",
										dark: true,
										children: "Explore More"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "figma-services__work figma-services__work--mobile",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-title",
								children: "HOW WE WORK"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "type-title",
								children: "OUR PROCESS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "type-heading",
										children: "Understand"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "type-lead font-semibold",
										children: "We begin by learning how your organization operates — technically and operationally."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "type-heading",
										children: "Design"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "type-lead font-semibold",
										children: "Solutions are architected with clarity, scalability, and long-term sustainability in mind."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "type-heading",
										children: "Implement"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "type-lead font-semibold",
										children: "We execute with structured delivery, ensuring stability and minimal disruption."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "type-heading",
										children: "Support"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "type-lead font-semibold",
										children: "Our engagement continues beyond implementation, ensuring systems evolve with your needs."
									})
								] })
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "figma-services__partner-grid figma-services__partner-grid--canvas",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center justify-center w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-title !text-[clamp(2.5rem,5vw,5.6rem)] lg:whitespace-nowrap mb-0 text-center",
								children: "PLATFORMS & PARTNERS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "figma-services__grid-next !absolute !right-[36px] !top-1/2 !-translate-y-1/2",
								children: "→"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "figma-services__partner-card",
							children: partners.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.logoUrl,
								alt: p.name
							}) }, p.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "figma-services__quote figma-services__quote--mobile",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-statement",
							children: "Technology works best"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-statement",
							children: "when it works quietly."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "figma-services__support figma-services__support--mobile type-statement",
						children: "Systems that support teams, decisions, and growth — without unnecessary complexity."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "figma-services__cta figma-services__cta--mobile",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-title",
								children: "Let’s design the systems"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "type-lead font-semibold",
								children: "behind your next phase of growth."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								href: "/contact",
								children: "Start a conversation"
							})
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: introSectionRef,
				className: "intro-absolute flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start w-fit mx-auto text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: servicRef,
						className: "servic-part text-[5rem] sm:text-[7.5rem] md:text-[9rem] lg:text-[11rem] font-bold leading-[0.85] tracking-tighter -ml-1",
						children: "servic"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mt-2 md:mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: esRef,
							className: "es-part text-[5rem] sm:text-[7.5rem] md:text-[9rem] lg:text-[11rem] font-bold leading-[0.85] tracking-tighter -ml-1",
							children: "es"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: textRef,
							className: "text-part flex flex-col pt-2 md:pt-3 mt-[4%] text-left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "type-body text-white/90 max-w-[320px] m-0",
								children: [
									"We design and deliver technology systems that",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"help organizations operate with clarity,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"resilience, and scale."
								]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: coreSectionRef,
				className: "figma-services__core figma-services__core--desktop",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "type-title",
						children: "CORE SERVICES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "core-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Salesforce" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "figma-services__core-side",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Consulting" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Strategic CRM solutions that enhance customer engagement and operational visibility." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "figma-services__core-copy",
								children: "We help organizations implement, customize, and optimize Salesforce platforms to align with business processes and drive measurable outcomes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								href: "/Services- Salesforce Consulting",
								dark: true,
								children: "Explore More"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "figma-services__sap-card core-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "SAP" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "figma-services__sap-side",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "Consulting" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Enterprise-grade solutions designed to streamline complex business operations." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "figma-services__sap-copy",
								children: "We support implementation, optimization, and integration of SAP systems to improve efficiency, visibility, and decision-making."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								href: "/contact",
								dark: true,
								children: "Explore More"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: workHeadingSectionRef,
				className: "figma-services__work-heading--desktop w-full flex justify-center min-h-[75vh] items-center overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					ref: workHeadingRef,
					style: { perspective: "1000px" },
					className: "type-title uppercase",
					children: "HOW WE WORK"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: workSubHeadingSectionRef,
				className: "figma-services__work-subheading--desktop w-full flex justify-center min-h-[75vh] items-center overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					ref: workSubHeadingRef,
					style: { perspective: "1000px" },
					className: "type-title uppercase",
					children: "OUR PROCESS"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: workListSectionRef,
				className: "figma-services__work-list--desktop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: dotRef,
						className: "figma-services__moving-dot",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "type-heading",
							children: "Understand"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-lead font-semibold",
							children: "We begin by learning how your organization operates — technically and operationally."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "type-heading",
							children: "Design"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-lead font-semibold",
							children: "Solutions are architected with clarity, scalability, and long-term sustainability in mind."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "type-heading",
							children: "Implement"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-lead font-semibold",
							children: "We execute with structured delivery, ensuring stability and minimal disruption."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "type-heading",
							children: "Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-lead font-semibold",
							children: "Our engagement continues beyond implementation, ensuring systems evolve with your needs."
						})
					] })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: partnerSectionRef,
				className: "figma-services__partner-grid figma-services__partner-grid--desktop",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-center w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "type-title !text-[clamp(2.5rem,5vw,5.6rem)] lg:whitespace-nowrap mb-0 text-center",
						children: "PLATFORMS & PARTNERS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "figma-services__grid-next !absolute !right-[36px] !top-1/2 !-translate-y-1/2",
						children: "→"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: partnerCardRef,
					className: "figma-services__partner-card",
					children: partners.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.logoUrl,
						alt: p.name
					}) }, p.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				ref: quoteSectionRef,
				className: "figma-services__quote--desktop w-full flex flex-col justify-center min-h-[75vh] items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					ref: quoteLine1Ref,
					className: "type-statement whitespace-nowrap",
					children: "Technology works best"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					ref: quoteLine2Ref,
					className: "type-statement whitespace-nowrap",
					children: "when it works quietly."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: supportSectionRef,
				className: "figma-services__support--desktop w-full flex justify-center min-h-[75vh] items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					ref: supportTextRef,
					className: "type-statement max-w-[1000px] text-center px-6 text-white",
					children: "Systems that support teams, decisions, and growth — without unnecessary complexity."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: ctaSectionRef,
				className: "figma-services__cta--desktop w-full flex flex-col justify-center min-h-[75vh] items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center text-center w-full max-w-[1200px] mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-title",
							children: "Let’s design the systems"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-lead font-semibold",
							children: "behind your next phase of growth."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center items-center w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								href: "/contact",
								children: "Start a conversation"
							})
						})
					]
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})] });
}
//#endregion
export { Services as component };
