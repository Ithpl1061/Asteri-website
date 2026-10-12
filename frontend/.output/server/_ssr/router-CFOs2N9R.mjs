import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as lazyRouteComponent, d as Link, f as useRouter, l as createFileRoute, n as Scripts, o as createRouter, r as HeadContent, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ScrollTrigger, r as gsapWithCSS, t as MotionPathPlugin } from "../_libs/gsap.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CFOs2N9R.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dllpe0TG.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-semibold text-glow",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Lost in the network"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page is not on the grid."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border px-5 py-2.5 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$16 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Asteri — Engineering the Future of Enterprise" },
			{
				name: "description",
				content: "Asteri builds AI, cloud, and digital transformation solutions for category-defining enterprises."
			},
			{
				property: "og:title",
				content: "Asteri — Engineering the Future of Enterprise"
			},
			{
				property: "og:description",
				content: "Premium AI, cloud, CRM, ERP and digital engineering for the modern enterprise."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "dark",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$16.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$15 = () => import("./solutions-BnpWeQTe.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$15 = createFileRoute("/solutions")({
	head: () => ({ meta: [{ title: "Solutions — Asteri" }, {
		name: "description",
		content: "Solutions shaped around your specific business context and constraints."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./services-D-sQb_1G.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$14 = createFileRoute("/services")({
	head: () => ({ meta: [{ title: "Services — Asteri" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./products-KpMEhFpN.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$13 = createFileRoute("/products")({
	head: () => ({ meta: [{ title: "products — Asteri" }, {
		name: "products",
		content: "Asteri is a digital engineering studio building cinematic enterprise software."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./industries-ih8c5CQn.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$12 = createFileRoute("/industries")({
	head: () => ({ meta: [{ title: "Industries — Asteri" }, {
		name: "description",
		content: "Asteri is a digital engineering studio building cinematic enterprise software."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./contact-CyFrLsak.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$11 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Asteri" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./case-studies-D4QYG8za.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$10 = createFileRoute("/case-studies")({
	head: () => ({ meta: [{ title: "Case Studies â€” Asteri" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./blog-B8kbNLz_.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$9 = createFileRoute("/blog")({
	head: () => ({ meta: [{ title: "About â€” Asteri" }, {
		name: "description",
		content: "Asteri is a digital engineering studio building cinematic enterprise software."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./about-CsbNrZjX.mjs");
var Route$8 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Asteri" }, {
		name: "description",
		content: "Asteri is a digital engineering studio building cinematic enterprise software."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
gsapWithCSS.registerPlugin(ScrollTrigger, MotionPathPlugin);
var $$splitComponentImporter$7 = () => import("./Services- Salesforce Consulting-C5YUyQvz.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$7 = createFileRoute("/Services- Salesforce Consulting")({
	head: () => ({ meta: [{ title: "Salesforce Consulting — Asteri" }, {
		name: "description",
		content: "Asteri is a digital engineering studio building cinematic enterprise software."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./Partnership-D-SN2saT.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger);
var Route$6 = createFileRoute("/Partnership")({
	head: () => ({ meta: [{ title: "Partnership — Asteri" }, {
		name: "description",
		content: "Global technology partnerships, verified expertise."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./Asteri_product-suite-CBSgqiJG.mjs");
var Route$5 = createFileRoute("/Asteri_product-suite")({
	head: () => ({ meta: [{ title: "Asteri Product Suite — Asteri" }, {
		name: "description",
		content: "The Asteri Product Suite."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./routes-SEsLJPBB.mjs");
gsapWithCSS.registerPlugin(ScrollTrigger, MotionPathPlugin);
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Home — Asteri" }, {
		name: "description",
		content: "Asteri is a digital engineering studio building cinematic enterprise software."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
/**
* ============================================================================
* ARCHITECTURE NOTE — read this before touching any scrollTrigger below
* ============================================================================
* Every pinned section follows ONE pattern:
*
*   <section ref={xRef} className="relative h-screen overflow-hidden ...">
*      ...content...
*   </section>
*
*   scrollTrigger: { trigger: xRef.current, pin: true, start: "top top",
*                    end: "+=NNNN", scrub: 1 }
*
* pin:true + the default pinSpacing:true makes GSAP insert its own spacer
* element sized to exactly (end - start). That spacer IS the scroll
* distance — there is no second, competing height to keep in sync.
*
* Do NOT:
*  - add an arbitrary h-[Nvh] class to a pinned section (that was the bug:
*    two independent, hand-tuned numbers that drift apart -> blank gaps)
*  - combine CSS `position: sticky` with GSAP `pin: true` on the same
*    element (they fight for control of positioning)
*  - use `pinSpacing: false` unless you deliberately want the next
*    section to slide over/under this one (it did NOT want that here —
*    that flag is what caused the Testimonials/Next-section crash)
*
* Mobile: heavy pinned scrubbing is disabled below 768px via
* ScrollTrigger.matchMedia() and replaced with lightweight fade/slide
* reveals (toggleActions, no pin, no scrub-locking) so phones get a
* normal, fast-scrolling page instead of a desktop scrollytelling replica.
* ============================================================================
*/
var $$splitComponentImporter$3 = () => import("./software-development-DSdSUpuK.mjs");
var Route$3 = createFileRoute("/services/software-development")({
	head: () => ({ meta: [{ title: "Software Development — Asteri" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./sap-consulting-cBhpr0AA.mjs");
var Route$2 = createFileRoute("/services/sap-consulting")({
	head: () => ({ meta: [{ title: "SAP Consulting — Asteri" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./data-science-CmjE-AQX.mjs");
var Route$1 = createFileRoute("/services/data-science")({
	head: () => ({ meta: [{ title: "Data Science — Asteri" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./cloud-solutions-JKWMrKW0.mjs");
var Route = createFileRoute("/services/cloud-solutions")({
	head: () => ({ meta: [{ title: "Cloud Solutions — Asteri" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SolutionsRoute = Route$15.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$16
});
var ServicesRoute = Route$14.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$16
});
var ProductsRoute = Route$13.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$16
});
var IndustriesRoute = Route$12.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$16
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$16
});
var CaseStudiesRoute = Route$10.update({
	id: "/case-studies",
	path: "/case-studies",
	getParentRoute: () => Route$16
});
var BlogRoute = Route$9.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$16
});
var AboutRoute = Route$8.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$16
});
var ServicesSalesforceConsultingRoute = Route$7.update({
	id: "/Services- Salesforce Consulting",
	path: "/Services- Salesforce Consulting",
	getParentRoute: () => Route$16
});
var PartnershipRoute = Route$6.update({
	id: "/Partnership",
	path: "/Partnership",
	getParentRoute: () => Route$16
});
var Asteri_productSuiteRoute = Route$5.update({
	id: "/Asteri_product-suite",
	path: "/Asteri_product-suite",
	getParentRoute: () => Route$16
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$16
});
var ServicesSoftwareDevelopmentRoute = Route$3.update({
	id: "/software-development",
	path: "/software-development",
	getParentRoute: () => ServicesRoute
});
var ServicesSapConsultingRoute = Route$2.update({
	id: "/sap-consulting",
	path: "/sap-consulting",
	getParentRoute: () => ServicesRoute
});
var ServicesDataScienceRoute = Route$1.update({
	id: "/data-science",
	path: "/data-science",
	getParentRoute: () => ServicesRoute
});
var ServicesRouteChildren = {
	ServicesCloudSolutionsRoute: Route.update({
		id: "/cloud-solutions",
		path: "/cloud-solutions",
		getParentRoute: () => ServicesRoute
	}),
	ServicesDataScienceRoute,
	ServicesSapConsultingRoute,
	ServicesSoftwareDevelopmentRoute
};
var rootRouteChildren = {
	IndexRoute,
	Asteri_productSuiteRoute,
	PartnershipRoute,
	ServicesSalesforceConsultingRoute,
	AboutRoute,
	BlogRoute,
	CaseStudiesRoute,
	ContactRoute,
	IndustriesRoute,
	ProductsRoute,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren),
	SolutionsRoute
};
var routeTree = Route$16._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
