import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-DWLWZf7F.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-BbhaIMav.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ children, disableAnimations = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative min-h-screen overflow-x-hidden${disableAnimations ? " industries-static-page" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { disableAnimations }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pt-24 overflow-x-hidden",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { disableAnimations })
		]
	});
}
function PageHero({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid-bg opacity-60",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-28 text-center md:py-36",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" }),
						" ",
						eyebrow
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg",
					children: subtitle
				})
			]
		})]
	});
}
function Section({ eyebrow, title, description, children, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-24 md:py-32",
		children: [(eyebrow || title || description) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
						" ",
						eyebrow
					]
				}),
				title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-tight tracking-tight",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground md:text-lg",
					children: description
				})
			]
		}), children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14",
			children
		})]
	});
}
function GlassCard({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-primary/30 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100",
			style: { background: "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.88 0.27 142 / 0.10), transparent 40%)" }
		}), children]
	});
}
function CTA({ title = "Ready to engineer your next era?", subtitle = "Partner with Asteri to design, build, and scale enterprise software the world remembers.", primaryHref = "/contact", primaryLabel = "Start a project" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid-bg opacity-40",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "relative font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold tracking-tight",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "relative mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg",
					children: subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-8 flex flex-wrap items-center justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: primaryHref,
						className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-6px_oklch(0.88_0.27_142_/_0.7)] transition hover:brightness-110",
						children: primaryLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/case-studies",
						className: "rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.06]",
						children: "See our work"
					})]
				})
			]
		})
	});
}
//#endregion
export { Section as a, PageShell as i, GlassCard as n, PageHero as r, CTA as t };
