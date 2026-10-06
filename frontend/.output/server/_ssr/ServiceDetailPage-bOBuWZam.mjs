import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Section, i as PageShell, n as GlassCard, r as PageHero, t as CTA } from "./PageShell-BbhaIMav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServiceDetailPage-bOBuWZam.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetailPage({ title, subtitle, description, capabilities, pageClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: pageClassName,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-detail-hero",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
					eyebrow: "Asteri services",
					title,
					subtitle
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-detail-intro",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					eyebrow: "How we help",
					title: "Built around your business.",
					description
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-detail-capabilities",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					eyebrow: "Capabilities",
					title: "What we deliver",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 md:grid-cols-3",
						children: capabilities.map((capability, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-primary",
							children: ["0", index + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-8 text-2xl font-medium",
							children: capability
						})] }, capability))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "service-detail-cta",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {
					title: `Letâ€™s discuss your ${title.toLowerCase()} needs.`,
					primaryLabel: "Start a conversation"
				})
			})
		]
	}) });
}
//#endregion
export { ServiceDetailPage as t };
