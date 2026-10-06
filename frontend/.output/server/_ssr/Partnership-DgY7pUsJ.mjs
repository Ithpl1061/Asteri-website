import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as gsapWithCSS } from "../_libs/gsap.mjs";
import { i as PageShell } from "./PageShell-BbhaIMav.mjs";
import "./router-DyhAv2I7.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Partnership-DgY7pUsJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Arrow({ green = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		"aria-hidden": "true",
		className: "partnership-arrow",
		src: green ? "/figma/partnership/asset-02.svg" : "/figma/partnership/asset-01.svg",
		alt: ""
	});
}
function Partnership() {
	const [partnerCards, setPartnerCards] = (0, import_react.useState)([]);
	const [ecosystem, setEcosystem] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/partnership-principles")).then((res) => res.json()).then((data) => setPartnerCards(data)).catch(console.error);
		fetch(apiUrl("/api/partner-ecosystem")).then((res) => res.json()).then((data) => {
			setEcosystem(data);
			if (data.length > 0) {
				setPartnerName(data[0].partnerName);
				setPartnerSubtitle(data[0].subtitle);
			}
		}).catch(console.error);
	}, []);
	const statementSectionRef = (0, import_react.useRef)(null);
	const statementLine1Ref = (0, import_react.useRef)(null);
	const statementLine2Ref = (0, import_react.useRef)(null);
	const proofSectionRef = (0, import_react.useRef)(null);
	const proofTextRef = (0, import_react.useRef)(null);
	const ecosystemSectionRef = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const ecosystemTitleRef = (0, import_react.useRef)(null);
	const ecosystemPanelRef = (0, import_react.useRef)(null);
	const ecosystemCardsWrapperRef = (0, import_react.useRef)(null);
	const ecosystemCard1Ref = (0, import_react.useRef)(null);
	const ecosystemCard2Ref = (0, import_react.useRef)(null);
	const [partnerName, setPartnerName] = (0, import_react.useState)("Salesforce");
	const [partnerSubtitle, setPartnerSubtitle] = (0, import_react.useState)("Certified Salesforce Partner");
	const benefitsSectionRef = (0, import_react.useRef)(null);
	const benefit1Ref = (0, import_react.useRef)(null);
	const benefit2Ref = (0, import_react.useRef)(null);
	const benefit3Ref = (0, import_react.useRef)(null);
	const principlesSectionRef = (0, import_react.useRef)(null);
	const principlesTitleRef = (0, import_react.useRef)(null);
	const ctaSectionRef = (0, import_react.useRef)(null);
	const ctaHeadingRef = (0, import_react.useRef)(null);
	const ctaTextRef = (0, import_react.useRef)(null);
	const ctaButtonRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			if (statementSectionRef.current && statementLine1Ref.current && statementLine2Ref.current) {
				gsapWithCSS.set([statementLine1Ref.current, statementLine2Ref.current], {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: statementSectionRef.current,
					start: "top top",
					end: "+=2000",
					scrub: 1,
					pin: true
				} }).to({}, { duration: .5 }).to(statementLine1Ref.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .5 }).to(statementLine2Ref.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1 });
			}
			if (proofSectionRef.current && proofTextRef.current) {
				gsapWithCSS.set(proofTextRef.current, {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: proofSectionRef.current,
					start: "top top",
					end: "+=1500",
					scrub: 1,
					pin: true
				} }).to(proofTextRef.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1.5 });
			}
			if (ecosystemSectionRef.current && ecosystemTitleRef.current && ecosystemPanelRef.current && ecosystemCardsWrapperRef.current) {
				gsapWithCSS.fromTo(ecosystemTitleRef.current, {
					y: "10vh",
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1.2,
					ease: "power2.out",
					scrollTrigger: {
						trigger: ecosystemSectionRef.current,
						start: "top 80%",
						toggleActions: "play none none reverse"
					}
				});
				gsapWithCSS.set(ecosystemPanelRef.current, { y: "100vh" });
				gsapWithCSS.set(ecosystemCard2Ref.current, {
					x: "100vw",
					opacity: 1
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: ecosystemSectionRef.current,
					start: "top top",
					end: "+=3500",
					scrub: 1,
					pin: true,
					onUpdate: (self) => {
						const card0Name = ecosystem[0]?.partnerName || "Salesforce";
						const card0Sub = ecosystem[0]?.subtitle || "Certified Salesforce Partner";
						const card1Name = ecosystem[1]?.partnerName || "ZIONIT";
						const card1Sub = ecosystem[1]?.subtitle || "Enabling Streamlined Software Solutions";
						if (self.progress < .53) {
							setPartnerName(card0Name);
							setPartnerSubtitle(card0Sub);
						} else {
							setPartnerName(card1Name);
							setPartnerSubtitle(card1Sub);
						}
					}
				} }).to({}, { duration: 1.5 }).to(ecosystemPanelRef.current, {
					y: 0,
					duration: 1.5,
					ease: "power2.inOut"
				}).to(ecosystemTitleRef.current, {
					opacity: 0,
					duration: .8,
					ease: "power2.out"
				}, "<0.5").to({}, { duration: .5 }).to(ecosystemCard1Ref.current, {
					x: "-100vw",
					duration: 1,
					ease: "power2.inOut"
				}).to(ecosystemCard2Ref.current, {
					x: 0,
					duration: 1,
					ease: "power2.inOut"
				}, "<").to({}, { duration: 2 });
			}
			if (benefitsSectionRef.current && benefit1Ref.current && benefit2Ref.current && benefit3Ref.current) {
				gsapWithCSS.set([
					benefit1Ref.current,
					benefit2Ref.current,
					benefit3Ref.current
				], {
					y: "20vh",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: benefitsSectionRef.current,
					start: "top top",
					end: "+=3000",
					scrub: 1,
					pin: true
				} }).to({}, { duration: .5 }).to(benefit1Ref.current, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .5 }).to(benefit2Ref.current, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .5 }).to(benefit3Ref.current, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1 });
			}
			if (principlesSectionRef.current && principlesTitleRef.current) {
				const cards = gsapWithCSS.utils.toArray(".partnership-principle-card", principlesSectionRef.current);
				gsapWithCSS.set(principlesTitleRef.current, {
					y: "20vh",
					opacity: 0
				});
				gsapWithCSS.set(cards, {
					y: "20vh",
					opacity: 0
				});
				const tl5 = gsapWithCSS.timeline({ scrollTrigger: {
					trigger: principlesSectionRef.current,
					start: "top top",
					end: "+=3500",
					scrub: 1,
					pin: true
				} });
				tl5.to({}, { duration: .5 }).to(principlesTitleRef.current, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .2 });
				cards.forEach((card) => {
					tl5.to(card, {
						y: 0,
						opacity: 1,
						duration: 1,
						ease: "power2.out"
					}).to({}, { duration: .2 });
				});
				tl5.to({}, { duration: 1 });
			}
			if (ctaSectionRef.current && ctaHeadingRef.current && ctaTextRef.current && ctaButtonRef.current) {
				gsapWithCSS.set([
					ctaHeadingRef.current,
					ctaTextRef.current,
					ctaButtonRef.current
				], {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: ctaSectionRef.current,
					start: "top top",
					end: "+=2500",
					scrub: 1,
					pin: true
				} }).to({}, { duration: .5 }).to(ctaHeadingRef.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .5 }).to(ctaTextRef.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .5 }).to(ctaButtonRef.current, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1 });
			}
		});
		return () => ctx.revert();
	}, [ecosystem, partnerCards]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, {
		disableAnimations: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "partnership-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "relative min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:min-h-screen",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-8 md:px-16 lg:px-24 sm:min-h-[100dvh] lg:min-h-screen",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col font-display font-bold leading-[0.95] tracking-tight w-full max-w-4xl mt-32 md:mt-48",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "type-display text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												color: "#000000",
												WebkitTextStroke: "clamp(1.5px, 0.3vw, 3px) #82E926",
												paintOrder: "stroke fill"
											},
											children: "Certified"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Where It Counts"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 font-mono type-lead font-semibold text-white/90",
									children: "Global technology partnerships, verified expertise."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "inline-flex items-center gap-4 rounded-[40px] bg-[#82E926] pl-8 pr-3 py-3 type-button text-black transition-transform hover:scale-105",
										href: "#ecosystem",
										children: ["Explore More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
									})
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					ref: statementSectionRef,
					className: "partnership-statement partnership-statement--headline px-6 bg-black text-white min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "type-title text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: statementLine1Ref,
							className: "block",
							children: "We only partner"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: statementLine2Ref,
							className: "block",
							children: "where we can deliver"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					ref: proofSectionRef,
					className: "partnership-statement partnership-statement--proof bg-black text-white min-h-[75vh] flex items-center justify-center relative overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						ref: proofTextRef,
						className: "type-statement",
						children: "Every partnership backs a real, certified implementation capability."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "ecosystem",
					ref: ecosystemSectionRef,
					className: "relative h-[100vh] w-full overflow-hidden bg-black",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center z-0 text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							ref: ecosystemTitleRef,
							className: "type-title",
							style: {
								whiteSpace: "nowrap",
								margin: 0
							},
							children: "Our Partner Ecosystem"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: ecosystemPanelRef,
						className: "partnership-partner-panel absolute inset-0 z-10 w-full h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "partnership-partner-intro",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "type-heading",
									children: partnerName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "type-lead font-semibold",
									children: partnerSubtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "partnership-outline-button type-button",
									href: "/contact",
									children: ["Know More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { green: true })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "partnership-partner-slider relative w-full h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								ref: ecosystemCardsWrapperRef,
								className: "grid place-items-center w-full h-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									ref: ecosystemCard1Ref,
									className: "partnership-partner-card [grid-area:1/1] !m-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ecosystem[0]?.logoUrl || "",
										alt: ecosystem[0]?.partnerName || ""
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ecosystem[0]?.description || "" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									ref: ecosystemCard2Ref,
									className: "partnership-partner-card [grid-area:1/1] !m-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: ecosystem[1]?.logoUrl || "",
										alt: ecosystem[1]?.partnerName || ""
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: ecosystem[1]?.description || "" })]
								})]
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					ref: benefitsSectionRef,
					className: "partnership-benefits",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							ref: benefit1Ref,
							className: "type-title",
							children: "Better licensing pricing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							ref: benefit2Ref,
							className: "type-title",
							children: "Faster implementation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							ref: benefit3Ref,
							className: "type-title",
							children: "Direct vendor escalation paths."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					ref: principlesSectionRef,
					className: "partnership-principles",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						ref: principlesTitleRef,
						className: "type-title",
						children: "Partnership Principles"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "partnership-principle-grid",
						children: partnerCards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "partnership-principle-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: card.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: card.description })]
						}, card.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					ref: ctaSectionRef,
					className: "partnership-cta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "partnership-cta-art",
						src: "/figma/partnership/raw-09.png",
						alt: ""
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "partnership-cta-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								ref: ctaHeadingRef,
								className: "type-title",
								children: "Need access to a specific platform?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								ref: ctaTextRef,
								className: "type-lead font-semibold",
								children: "Our partnerships give you better pricing and direct escalation paths."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								ref: ctaButtonRef,
								to: "/contact",
								className: "mt-10 inline-flex items-center gap-4 rounded-[40px] bg-[#82E926] pl-8 pr-3 py-3 type-button text-black transition-transform hover:scale-105",
								children: ["Talk to Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
							})
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { Partnership as component };
