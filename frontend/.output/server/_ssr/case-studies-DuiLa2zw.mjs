import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as gsapWithCSS } from "../_libs/gsap.mjs";
import { i as PageShell } from "./PageShell-BbhaIMav.mjs";
import "./router-DyhAv2I7.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies-DuiLa2zw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CaseStudies() {
	const [caseStudies, setCaseStudies] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/case-studies")).then((res) => res.json()).then((data) => setCaseStudies(data)).catch(console.error);
	}, []);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let ctx = gsapWithCSS.context(() => {
			const heroTl = gsapWithCSS.timeline();
			gsapWithCSS.set(".case-hero h1", {
				y: 100,
				opacity: 0
			});
			gsapWithCSS.set(".case-hero p", {
				y: 50,
				opacity: 0
			});
			gsapWithCSS.set(".case-hero .case-contact-button", {
				x: -50,
				opacity: 0
			});
			heroTl.to(".case-hero h1", {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out"
			}).to(".case-hero p", {
				y: 0,
				opacity: 1,
				duration: .8,
				ease: "power3.out"
			}, "-=0.6").to(".case-hero .case-contact-button", {
				x: 0,
				opacity: 1,
				duration: .8,
				ease: "power3.out"
			}, "-=0.6");
			const storySection = gsapWithCSS.utils.toArray(".case-story")[0];
			const storyLine1 = gsapWithCSS.utils.toArray(".case-story h2:nth-child(1)")[0];
			const storyLine2 = gsapWithCSS.utils.toArray(".case-story h2:nth-child(2)")[0];
			if (storySection && storyLine1 && storyLine2) gsapWithCSS.timeline({ scrollTrigger: {
				trigger: storySection,
				start: "center center",
				end: "+=1500",
				scrub: 1.5,
				pin: true,
				anticipatePin: 1
			} }).fromTo(storyLine1, {
				x: "-50vw",
				opacity: 0
			}, {
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 1
			}, 0).fromTo(storyLine2, {
				x: "50vw",
				opacity: 0
			}, {
				x: 0,
				opacity: 1,
				ease: "power2.out",
				duration: 1
			}, 0).to({}, { duration: 1 });
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: ".case-preface",
				start: "center center",
				end: "+=1500",
				scrub: 1.5,
				pin: true,
				anticipatePin: 1
			} }).fromTo(".case-preface p", {
				opacity: 0,
				y: 100
			}, {
				opacity: 1,
				y: 0,
				stagger: .2,
				ease: "power2.out",
				duration: 1
			}).to({}, { duration: 1 });
			gsapWithCSS.fromTo(".case-study-heading", {
				y: 100,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: ".case-study-heading-stage",
					start: "center center",
					end: "+=1500",
					scrub: 1.5,
					pin: true,
					anticipatePin: 1
				}
			});
			gsapWithCSS.set(".case-study-panel > h2", {
				y: 50,
				opacity: 0
			});
			gsapWithCSS.set(".panel-wrapper", { x: "100vw" });
			const panelTl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: ".case-study-stage",
				start: "top top",
				end: "+=1500",
				scrub: 1,
				pin: true,
				anticipatePin: 1
			} });
			panelTl.to(".panel-wrapper", {
				x: 0,
				duration: 2
			});
			panelTl.to(".case-study-panel > h2", {
				y: 0,
				opacity: 1,
				duration: 1
			});
			panelTl.to({}, { duration: 1.5 });
			const measureSection = gsapWithCSS.utils.toArray(".case-measure")[0];
			const measureLine1 = gsapWithCSS.utils.toArray(".case-measure h2:nth-child(1)")[0];
			const measureLine2 = gsapWithCSS.utils.toArray(".case-measure h2:nth-child(2)")[0];
			if (measureSection && measureLine1 && measureLine2) {
				gsapWithCSS.set([measureLine1, measureLine2], { opacity: 0 });
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: measureSection,
					start: "center center",
					end: "+=1500",
					scrub: 1.5,
					pin: true,
					anticipatePin: 1
				} }).fromTo(measureLine1, {
					x: "-50vw",
					opacity: 0
				}, {
					x: 0,
					opacity: 1,
					ease: "power2.out",
					duration: 1
				}, 0).fromTo(measureLine2, {
					x: "50vw",
					opacity: 0
				}, {
					x: 0,
					opacity: 1,
					ease: "power2.out",
					duration: 1
				}, 0).to({}, { duration: 1 });
			}
			const ctaSection = gsapWithCSS.utils.toArray(".case-cta")[0];
			const ctaTitle = gsapWithCSS.utils.toArray(".case-cta-content h2")[0];
			const ctaText = gsapWithCSS.utils.toArray(".case-cta-content p")[0];
			const ctaButton = gsapWithCSS.utils.toArray(".case-talk-button")[0];
			if (ctaSection && ctaTitle && ctaText && ctaButton) {
				gsapWithCSS.set([
					ctaTitle,
					ctaText,
					ctaButton
				], {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: ctaSection,
					start: "top top",
					end: "+=3000",
					scrub: 1.5,
					pin: true,
					anticipatePin: 1
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
				}).to({}, { duration: .5 }).to(ctaButton, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: 1.5 });
			}
		}, containerRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "case-studies-page",
		ref: containerRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "case-hero",
				"data-node-id": "2513:451",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "type-display",
						children: [
							"Real ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Stories." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Real" }),
							" Results."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-lead font-semibold",
						children: "How Asteri has helped businesses transform with technology."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "case-contact-button",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Contact Now" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/figma/case-studies/contact-arrow.svg",
							alt: "",
							"aria-hidden": true
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "case-story",
				"data-node-id": "2513:474",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "type-title",
					children: "Every case study"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "type-title",
					children: "follows the same arc"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "case-preface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-lead font-semibold",
					children: "A real situation, our approach, and a"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-lead font-semibold",
					children: "measurable outcome."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "case-study-heading-stage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "case-study-heading type-title",
					children: "Case Studies"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "case-study-stage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel-wrapper",
					style: {
						position: "absolute",
						inset: 0,
						backgroundColor: "#fff"
					},
					children: caseStudies.map((study) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "case-study-panel",
						"data-node-id": "2513:797",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "case-panel-column case-panel-situation",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "The Situation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: study.situationText })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "case-panel-column case-panel-approach",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "The Approach" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: JSON.parse(study.approachList).map((point, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: point }, i)) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "case-panel-column case-panel-outcome",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "The Outcome" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: study.outcomeText })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "case-panel-arrow",
								src: "/figma/case-studies/case-arrow.svg",
								alt: "",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: { whiteSpace: "pre-line" },
								children: study.industryName
							})
						]
					}, study.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "case-measure",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "type-title",
					children: "We measure,"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "type-title",
					children: "document, and prove it"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "case-cta",
				"data-node-id": "2513:1189",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "case-cta-content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-title",
							children: "Let's build your success story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-lead font-semibold",
							children: "Start a conversation and define what success looks like for your project."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "case-talk-button",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/figma/case-studies/talk-to-us.png",
								alt: "Talk to Us"
							})
						})
					]
				})
			})
		]
	}) });
}
//#endregion
export { CaseStudies as component };
