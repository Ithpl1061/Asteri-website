import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as gsapWithCSS } from "../_libs/gsap.mjs";
import { i as PageShell } from "./PageShell-C30GFmPZ.mjs";
import "./router-U0JYRAk0.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CGqvCsHc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReadButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "blog-read-button",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Read" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/figma/blog/read-arrow.svg",
			alt: "",
			"aria-hidden": true
		})]
	});
}
function FeaturedCard({ category, title, image, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "featured-card-wrapper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: `featured-card${accent ? " featured-card-accent" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "featured-card-copy",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "featured-card-image",
					src: image,
					alt: "",
					decoding: "async"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadButton, {})
			]
		})
	});
}
function RecentCard({ category, title, image, position, categoryAfter }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `recent-card ${position}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "recent-card-image",
				src: image,
				alt: "",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "recent-card-overlay",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "recent-card-copy",
				children: categoryAfter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: category })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: category }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadButton, {})
		]
	});
}
function Blog() {
	const containerRef = (0, import_react.useRef)(null);
	const [subscribed, setSubscribed] = (0, import_react.useState)(false);
	const [featuredPosts, setFeaturedPosts] = (0, import_react.useState)([]);
	const [recentPosts, setRecentPosts] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/blog/posts")).then((res) => res.json()).then((data) => {
			setFeaturedPosts(data.filter((p) => p.isFeatured));
			setRecentPosts(data.filter((p) => !p.isFeatured));
		}).catch(console.error);
	}, []);
	const positions = [
		"recent-ai",
		"recent-cloud",
		"recent-system",
		"recent-crm",
		"recent-automation",
		"recent-productivity"
	];
	(0, import_react.useLayoutEffect)(() => {
		if (!containerRef.current || featuredPosts.length === 0 || recentPosts.length === 0) return;
		const context = gsapWithCSS.context(() => {
			const query = gsapWithCSS.utils.selector(containerRef);
			const newsletter = query(".blog-newsletter")[0];
			const title = query(".newsletter-content h2")[0];
			const text = query(".newsletter-content p")[0];
			const form = query(".blog-subscribe-form")[0];
			const featuredSection = query(".blog-featured")[0];
			const featuredTitle = query(".blog-featured h2")[0];
			const featuredCards = query(".featured-card-wrapper");
			if (featuredSection && featuredTitle && featuredCards.length > 0) {
				gsapWithCSS.set(featuredTitle, {
					y: 50,
					opacity: 0
				});
				gsapWithCSS.set(featuredCards, {
					x: "100vw",
					opacity: 0
				});
				const tlFeatured = gsapWithCSS.timeline({ scrollTrigger: {
					trigger: featuredSection,
					start: "top top",
					end: "+=3280",
					scrub: .5,
					pin: true
				} });
				tlFeatured.to(featuredTitle, {
					y: 0,
					opacity: 1,
					duration: 1
				});
				const holdBetween = window.innerWidth <= 700;
				featuredCards.forEach((card, i) => {
					gsapWithCSS.set(card, {
						rotationY: 0,
						transformPerspective: 1e3
					});
					tlFeatured.to(card, {
						x: 0,
						opacity: 1,
						rotationY: 360,
						duration: 1.2,
						force3D: true
					});
					if (holdBetween && i > 0) tlFeatured.to(featuredCards[i - 1], {
						x: "-100vw",
						opacity: 0,
						duration: 1.2,
						ease: "power2.inOut"
					}, "<");
					if (holdBetween && i < featuredCards.length - 1) tlFeatured.to({}, { duration: .6 });
				});
				tlFeatured.to({}, { duration: .4 });
			}
			const recentHeadingSection = query(".blog-recent-heading")[0];
			const recentTitle = query(".blog-recent-heading h2")[0];
			const recentCardsSection = query(".blog-recent-cards")[0];
			const recentLayout = query(".blog-recent-cards .recent-layout")[0];
			const recentBtn = query(".blog-recent-cards .blog-load-more")[0];
			if (recentHeadingSection && recentTitle) {
				gsapWithCSS.set(recentTitle, {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: recentHeadingSection,
					start: "center center",
					end: "+=650",
					scrub: true,
					pin: true
				} }).to(recentTitle, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .3 });
			}
			if (recentCardsSection && recentLayout && recentBtn) {
				gsapWithCSS.set([recentLayout, recentBtn], {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: recentCardsSection,
					start: "center center",
					end: "+=1260",
					scrub: .5,
					pin: true
				} }).to(recentLayout, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .5 }).to(recentBtn, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .3 });
			}
			if (newsletter && title && text && form) {
				gsapWithCSS.set([
					title,
					text,
					form
				], {
					x: "100vw",
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: newsletter,
					start: "top top",
					end: "+=2400",
					scrub: true,
					pin: true
				} }).to(title, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .5 }).to(text, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .5 }).to(form, {
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power2.out"
				}).to({}, { duration: .4 });
			}
		}, containerRef);
		return () => context.revert();
	}, [featuredPosts, recentPosts]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "blog-page",
		ref: containerRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "blog-hero",
				"data-node-id": "2521:304",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "type-display relative inline-flex flex-col items-center justify-center cursor-default",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "blog-outline",
							children: "Expert"
						}), " Thinking"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "z-10",
						children: ["on Technology ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "blog-outline",
							children: "That Matters"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-lead font-semibold",
					children: "Insights from our certified architects and strategists."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "blog-topics",
				"aria-label": "Browse topics",
				"data-node-id": "2513:1824",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "blog-topic-list",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							children: "View All"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							children: "Artificial Intelligence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							children: "Salesforce"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							children: "SAP & ERP"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "blog-search",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Browse Topics" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "blog-search-icon",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: "28",
							height: "28",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "#000",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "11",
									cy: "11",
									r: "8"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m21 21-4.35-4.35" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "8",
									cy: "11",
									r: "1.5",
									fill: "#000",
									stroke: "none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "11",
									cy: "11",
									r: "1.5",
									fill: "#000",
									stroke: "none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "14",
									cy: "11",
									r: "1.5",
									fill: "#000",
									stroke: "none"
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "blog-featured",
				"data-node-id": "2513:1574",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "type-title",
					children: "Featured Posts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "featured-grid",
					children: featuredPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCard, {
						category: post.category?.name || "Topic",
						title: post.title,
						image: post.imageUrl,
						accent: post.isAccent
					}, post.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "blog-recent-heading min-h-screen h-screen flex items-center justify-center relative overflow-hidden w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "tracking-tight",
					style: {
						color: "#FFF",
						textAlign: "center",
						fontFamily: "\"Inter\", sans-serif",
						fontSize: "clamp(2.25rem, 8.88vw, 128px)",
						fontStyle: "normal",
						fontWeight: 600,
						lineHeight: "normal"
					},
					children: "Recent Posts"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "blog-recent-cards min-h-screen h-screen flex flex-col items-center justify-center relative overflow-hidden w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "recent-layout",
					children: recentPosts.map((post, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentCard, {
						category: post.category?.name || "Topic",
						title: post.title,
						image: post.imageUrl,
						position: positions[index] || "",
						categoryAfter: index === 3
					}, post.title))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "blog-load-more",
					children: ["Load More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/figma/blog/down-button.png",
						alt: "",
						"aria-hidden": true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "blog-newsletter",
				"data-node-id": "2521:150",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "newsletter-content flex flex-col items-center justify-center text-center max-w-7xl mx-auto w-full px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-display sm:whitespace-nowrap",
							children: "Get insights delivered"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-lead font-semibold mt-4",
							children: "Practitioner-written articles — no fluff, real lessons."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "blog-subscribe-form",
							onSubmit: (e) => {
								e.preventDefault();
								const email = new FormData(e.currentTarget).get("email");
								fetch(apiUrl("/api/newsletter"), {
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({ email })
								}).then(() => {
									e.target.reset();
									setSubscribed(true);
									window.setTimeout(() => setSubscribed(false), 4500);
								}).catch(console.error);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									name: "email",
									placeholder: "Enter Your Email",
									"aria-label": "Email address",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									children: "Subscribe"
								}),
								subscribed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "subscribe-success",
									role: "status",
									"aria-live": "polite",
									children: [Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
										className: "subscribe-spark",
										style: {
											["--a"]: `${i * (360 / 14)}deg`,
											["--d"]: `${i % 3 === 0 ? 120 : i % 3 === 1 ? 90 : 65}px`,
											animationDelay: `${i % 5 * 60}ms`
										}
									}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "subscribe-success-text",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											width: "22",
											height: "22",
											viewBox: "0 0 24 24",
											fill: "none",
											"aria-hidden": "true",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
												d: "M12 2l2.2 6.3L20.5 10l-6.3 1.7L12 18l-2.2-6.3L3.5 10l6.3-1.7L12 2z",
												fill: "#82e926"
											})
										}), "You're subscribed!"]
									})]
								})
							]
						})
					]
				})
			})
		]
	}) });
}
//#endregion
export { Blog as component };
