import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-C7bbItOy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Asteri_product-suite-CBSgqiJG.js
var import_jsx_runtime = require_jsx_runtime();
var products = [
	{
		name: "Salesforce",
		type: "CRM & Cloud Platform",
		description: "Structured customer management, automation, and scalable business processes.",
		image: "/Salesforce.png",
		imageClass: "w-[170px]"
	},
	{
		name: "Zoho",
		type: "Business Applications Suite",
		description: "Integrated applications for managing operations, sales, and customer engagement.",
		image: "/zoho logo.png",
		imageClass: "w-[170px]"
	},
	{
		name: "1dox.ai",
		type: "Document Intelligence Platform",
		description: "A unified system to store, manage, and collaborate on documents and organizational data with approvals, workflows and AI capabilities.",
		image: "/1dox.ai 1.png",
		imageClass: "w-[190px]"
	},
	{
		name: "ManageEngine",
		type: "IT Management Solutions",
		description: "Tools for monitoring, managing and securing IT infrastructure.",
		image: "/ManageEngine logo.png",
		imageClass: "w-[220px]"
	},
	{
		name: "PL/SQL",
		type: "Database & Backend Systems",
		description: "Robust database management and backend logic for structured applications.",
		image: "/plsql.png",
		imageClass: "w-[150px]"
	},
	{
		name: "AnyDesk",
		type: "Remote Access & Support",
		description: "Secure and reliable remote connectivity for system access and support.",
		image: "/anydesk.png",
		imageClass: "w-[220px]"
	},
	{
		name: "SAP",
		type: "Enterprise Resource Planning",
		description: "End-to-end enterprise systems for finance, operations, and supply chain.",
		image: "/sap logo.png",
		imageClass: "w-[120px]"
	},
	{
		name: "think-cell",
		type: "Presentation & Data Visualization",
		description: "Advanced tools for creating structured, data-driven presentations.",
		image: "/thinkcell.png",
		imageClass: "w-[220px]"
	}
];
function RoundLink({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-3 rounded-full border border-[#8AF500] bg-[#82E926] py-2 pl-5 pr-2 type-button text-black",
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex h-8 w-8 items-center justify-center rounded-full bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "h-4 w-4",
				strokeWidth: 2.5
			})
		})]
	});
}
function AsteriProductSuite() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black px-6 pb-20 pt-24 sm:pb-28 sm:pt-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "max-w-6xl text-[clamp(2.75rem,6vw,7rem)] font-bold leading-[0.95] tracking-[-0.035em] text-white",
					children: [
						"Built by ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent [-webkit-text-stroke:2px_#8AF500]",
							children: "Asteri."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Built for the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-transparent [-webkit-text-stroke:2px_#8AF500]",
							children: "Enterprise."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col gap-8 border-t border-white/15 pt-7 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoundLink, { children: "Explore more" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md type-lead font-semibold text-white",
						children: "Software that brings structure, clarity, and scalability to the way your business runs."
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black px-6 py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1100px] text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white",
					children: [
						"Our own tools, built",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" from real client",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" problems"
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black px-6 py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1020px] space-y-20 text-center sm:space-y-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-[clamp(1.2rem,2.8vw,2.35rem)] font-semibold leading-tight tracking-[-0.02em] text-white",
					children: [
						"The Asteri Product Suite features products",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" designed and built by our own team."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[clamp(1.2rem,2.8vw,2.35rem)] font-semibold leading-tight tracking-[-0.02em] text-white",
					children: "Born out of patterns we've seen across client engagements, not generic off-the-shelf software."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "overflow-hidden bg-black py-16 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1510px] px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[10px] bg-[#eaeaea] p-7 sm:p-12 lg:grid lg:min-h-[760px] lg:grid-cols-[minmax(300px,0.82fr)_minmax(0,1.18fr)] lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between pb-10 lg:py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.035em] text-black",
							children: [
								"Asteri",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Product Suite"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 type-body font-semibold text-black",
							children: "Software built for real operations."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "mt-12 w-fit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoundLink, { children: "Contact us" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "-mr-7 overflow-x-auto rounded-l-[30px] bg-[#ddd] py-10 pl-7 sm:-mr-12 sm:py-20 sm:pl-12 lg:-mr-12 lg:rounded-l-[40px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-max gap-7 pr-8 sm:gap-12",
							children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex h-[430px] w-[300px] shrink-0 flex-col rounded-[28px] bg-[#f3f3f3] p-7 sm:h-[540px] sm:w-[420px] sm:rounded-[35px] sm:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-20 items-start",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: product.image,
											alt: `${product.name} logo`,
											className: `${product.imageClass} max-h-16 object-contain object-left`
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-7 type-heading text-black",
										children: product.type
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 type-body text-black",
										children: product.description
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "mt-auto w-fit pt-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-2 rounded-full border border-[#82E926] bg-[#82E926]/20 py-2 pl-4 pr-2 type-button text-black",
											children: ["Know More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "flex h-7 w-7 items-center justify-center rounded-full bg-[#8AF500]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
											})]
										})
									})
								]
							}, product.name))
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black px-6 py-24 sm:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1200px] text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[0.97] tracking-[-0.035em] text-white",
					children: [
						"Flexible by design.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Built for real workflows."
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black px-6 py-24 sm:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1200px] text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-none tracking-[-0.035em] text-white",
					children: "EXECUTION"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-black px-6 pb-24 pt-10 sm:pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-[1360px] border-y border-[#15EC0D] py-12 sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-px bg-[#15EC0D] md:grid-cols-2",
					children: [
						["Understand", "Research"],
						["Structure", "Designed & Defined"],
						["Build", "Automated Systems"],
						["Scale", "Version Control"]
					].map(([title, caption]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-52 flex-col justify-between bg-black p-7 sm:min-h-72 sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-[#15EC0D]",
							children: caption
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "type-title text-white",
							children: title
						})]
					}, title))
				})
			})
		})
	] });
}
//#endregion
export { AsteriProductSuite as component };
