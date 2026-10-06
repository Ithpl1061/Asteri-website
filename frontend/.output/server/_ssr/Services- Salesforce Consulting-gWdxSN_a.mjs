import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ScrollTrigger, r as gsapWithCSS } from "../_libs/gsap.mjs";
import { a as TrendingUp, p as Megaphone, v as HeartHandshake, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-BbhaIMav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Services- Salesforce Consulting-gWdxSN_a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		if (!containerRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power4.out" } }).from(".hero-anim", {
				autoAlpha: 0,
				y: 50,
				duration: 1,
				stagger: .2
			});
			gsapWithCSS.from(".consulting-anim", {
				scrollTrigger: {
					trigger: ".consulting-section",
					start: "top 80%"
				},
				autoAlpha: 0,
				y: 40,
				duration: .8,
				stagger: .2,
				ease: "power3.out"
			});
			gsapWithCSS.from(".capabilities-title", {
				scrollTrigger: {
					trigger: ".capabilities-section",
					start: "top 80%"
				},
				autoAlpha: 0,
				y: 40,
				duration: .8,
				ease: "power3.out"
			});
			gsapWithCSS.utils.toArray(".capability-card").forEach((card) => {
				gsapWithCSS.fromTo(card, {
					autoAlpha: 0,
					x: () => window.innerWidth
				}, {
					scrollTrigger: {
						trigger: card,
						start: "top bottom",
						end: "top 60%",
						scrub: .35,
						fastScrollEnd: true,
						invalidateOnRefresh: true
					},
					autoAlpha: 1,
					x: 0,
					ease: "none"
				});
			});
			gsapWithCSS.from(".solutions-title", {
				scrollTrigger: {
					trigger: ".solutions-section",
					start: "top 80%"
				},
				autoAlpha: 0,
				y: 40,
				duration: .8,
				ease: "power3.out"
			});
			gsapWithCSS.fromTo(".solution-card", {
				autoAlpha: 0,
				x: () => window.innerWidth
			}, {
				scrollTrigger: {
					trigger: ".solutions-section",
					start: "top top",
					end: () => `+=${Math.max(window.innerHeight * 1.5, 1250)}`,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
					scrub: .35,
					fastScrollEnd: true,
					invalidateOnRefresh: true
				},
				autoAlpha: 1,
				x: 0,
				stagger: .3,
				ease: "none"
			});
			gsapWithCSS.from(".crm-statement", {
				scrollTrigger: {
					trigger: ".crm-section",
					start: "top 75%"
				},
				autoAlpha: 0,
				scale: .95,
				y: 30,
				duration: 1,
				ease: "power3.out"
			});
			gsapWithCSS.from(".difference-title", {
				scrollTrigger: {
					trigger: ".difference-section",
					start: "top 80%"
				},
				autoAlpha: 0,
				y: 30,
				duration: .8,
				ease: "power3.out"
			});
			gsapWithCSS.fromTo(".difference-card", {
				autoAlpha: 0,
				x: () => window.innerWidth
			}, {
				scrollTrigger: {
					trigger: ".difference-section",
					start: "top top",
					end: () => `+=${Math.max(window.innerHeight * 1.5, 1250)}`,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
					scrub: .35,
					fastScrollEnd: true,
					invalidateOnRefresh: true
				},
				autoAlpha: 1,
				x: 0,
				stagger: .25,
				ease: "none"
			});
			gsapWithCSS.fromTo(".cta-anim", {
				autoAlpha: 0,
				x: () => window.innerWidth
			}, {
				scrollTrigger: {
					trigger: ".cta-section",
					start: "top top",
					end: () => `+=${Math.max(window.innerHeight, 850)}`,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
					scrub: .35,
					fastScrollEnd: true,
					invalidateOnRefresh: true
				},
				autoAlpha: 1,
				x: 0,
				stagger: 0,
				ease: "none"
			});
		}, containerRef);
		const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
		return () => {
			cancelAnimationFrame(refreshFrame);
			ctx.revert();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "bg-black min-h-screen text-white flex flex-col items-center pt-32 pb-24 space-y-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col items-center text-center px-6 max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-anim font-bold leading-[0.95] type-display",
						children: [
							"Salesforce ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent stroke-text-green",
								children: "solutions."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent stroke-text-green",
								children: "Built for"
							}),
							" clarity."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-anim mt-10 type-lead font-semibold font-semibold text-gray-300",
						children: "Connecting customer data, processes, and teams."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "hero-anim mt-12 flex items-center gap-3 pl-6 pr-3 py-3 rounded-full border-2 border-[#8AF500] bg-[#82E926] hover:bg-[#97f842] transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-black type-button font-bold",
							children: "Explore More"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-11 h-11 rounded-full bg-white flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 34,
								className: "text-black",
								strokeWidth: 2.5
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "consulting-section flex flex-col items-center text-center px-6 max-w-5xl w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "consulting-anim font-bold leading-none type-title mb-8",
					children: "Salesforce"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "consulting-anim leading-[1.5] font-semibold max-w-[600px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold block mb-4 type-heading",
						children: "Consulting"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-gray-300 type-body",
						children: "We design & implement Salesforce solutions that align with business processes & drive measurable outcomes."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "capabilities-section flex flex-col items-center px-6 w-full max-w-5xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "capabilities-title type-title font-bold mb-16 text-center",
					children: "CAPABILITIES"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full flex flex-col gap-6",
					children: [
						{
							title: "Implementation",
							description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
						},
						{
							title: "Customization",
							description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
						},
						{
							title: "Integration",
							description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus."
						},
						{
							title: "Optimization",
							description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna."
						}
					].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-card will-change-transform bg-[#2a2a2a]/90 border border-white/20 p-8 rounded-[20px] text-center transition-colors hover:bg-[#242424]/95",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "type-heading font-semibold mb-4",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/70 type-body",
							children: item.description
						})]
					}, index))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "solutions-section min-h-screen flex flex-col items-center justify-center text-center px-6 max-w-6xl w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "solutions-title type-title font-bold mb-20 leading-tight",
					children: "SOLUTIONS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-8 w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "solution-card will-change-transform flex flex-col items-center bg-[#00B5B8]/10 border border-[#00B5B8] p-10 rounded-[30px] hover:bg-[#00B5B8]/20 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-28 h-28 rounded-3xl bg-[#00B5B8]/20 border border-[#00B5B8] flex items-center justify-center mb-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, {
										size: 60,
										strokeWidth: 2.5,
										className: "text-[#00D7DA]"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "type-heading font-bold mb-4",
									children: "Sales Cloud"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/80 type-body",
									children: "Streamlining sales processes and pipeline visibility."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "solution-card will-change-transform flex flex-col items-center bg-pink-500/10 border border-pink-500 p-10 rounded-[30px] hover:bg-pink-500/20 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-28 h-28 rounded-3xl bg-pink-500/20 border border-pink-500 flex items-center justify-center mb-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, {
										size: 60,
										strokeWidth: 2.5,
										className: "text-pink-400"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "type-heading font-bold mb-4",
									children: "Service Cloud"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/80 type-body",
									children: "Enhancing customer support with structured workflows and automation."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "solution-card will-change-transform flex flex-col items-center bg-orange-500/10 border border-orange-500 p-10 rounded-[30px] hover:bg-orange-500/20 transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-28 h-28 rounded-3xl bg-orange-500/20 border border-orange-500 flex items-center justify-center mb-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, {
										size: 60,
										strokeWidth: 2.5,
										className: "text-orange-400"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "type-heading font-bold mb-4",
									children: "Marketing Cloud"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white/80 type-body",
									children: "Enabling targeted campaigns and customer engagement."
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "crm-section flex flex-col items-center text-center px-6 max-w-5xl py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "crm-statement type-statement font-bold leading-[1.05]",
					children: [
						"A CRM system",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"that actually works."
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "difference-section min-h-screen flex flex-col items-center justify-center px-6 w-full max-w-6xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full rounded-[40px] bg-[#E8E8E8] p-12 md:p-20 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "difference-title text-black type-title font-bold leading-[0.95] mb-16",
						children: [
							"Where It Made the",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Difference"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "difference-card will-change-transform w-[90%] justify-self-center rounded-[28px] bg-[#777] p-5 md:p-6 text-center hover:bg-[#666] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-white type-heading font-bold mb-4",
									children: "Efficiency"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white type-body leading-[1.2]",
									children: "Reduced manual effort through automation and structured workflows."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "difference-card will-change-transform w-[90%] justify-self-center rounded-[28px] bg-[#777] p-5 md:p-6 text-center hover:bg-[#666] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-white type-heading font-bold mb-4",
									children: "Alignment"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white type-body leading-[1.2]",
									children: "Better coordination between sales, service, and operations teams."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "difference-card will-change-transform w-[90%] justify-self-center rounded-[28px] bg-[#777] p-5 md:p-6 text-center hover:bg-[#666] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-white type-heading font-bold mb-4",
									children: "Scalability"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white type-body leading-[1.2]",
									children: "A CRM system that evolves with your business."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "difference-card will-change-transform w-[90%] justify-self-center rounded-[28px] bg-[#777] p-5 md:p-6 text-center hover:bg-[#666] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-white type-heading font-bold mb-4",
									children: "Visibility"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-white type-body leading-[1.2]",
									children: "Clear insights into customer interactions and pipeline."
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "cta-section min-h-screen flex flex-col items-center justify-center text-center px-6 max-w-5xl relative pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[700px] rounded-[40px] bg-[#65ff00] opacity-[0.12] blur-[140px] pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col items-center translate-y-8 md:translate-y-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "cta-anim will-change-transform type-title font-bold leading-none mb-6",
						children: "Let’s build a CRM that scales"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "cta-anim will-change-transform flex items-center gap-3 pl-6 pr-3 py-3 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] hover:bg-white transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-black type-button font-bold",
							children: "Start a conversation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-11 h-11 rounded-full bg-white flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 34,
								className: "text-black",
								strokeWidth: 2.5
							})
						})]
					})]
				})]
			})
		]
	}) });
}
//#endregion
export { Services as component };
