import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link, i as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ScrollTrigger, r as gsapWithCSS, t as MotionPathPlugin } from "../_libs/gsap.mjs";
import { C as ArrowRight, _ as Instagram, d as Phone, f as Menu, g as Linkedin, h as Mail, m as MapPin, n as Youtube, r as X, x as ArrowUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-Bz4o-1Ax.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Asteri_logo_default = "/Asteri%20logo.png";
var links = [
	{
		label: "Home",
		to: "/",
		children: []
	},
	{
		label: "About",
		to: "/about",
		children: []
	},
	{
		label: "Services",
		to: "/services",
		children: []
	},
	{
		label: "Solutions",
		to: "/solutions",
		children: []
	},
	{
		label: "Industries",
		to: "/industries",
		children: []
	},
	{
		label: "Partnership",
		to: "/Partnership",
		children: []
	},
	{
		label: "Products",
		to: "/products",
		children: []
	},
	{
		label: "Case Studies",
		to: "/case-studies",
		children: []
	},
	{
		label: "Blog",
		to: "/blog",
		children: []
	},
	{
		label: "Contact",
		to: "/contact",
		children: []
	}
];
function Navbar({ disableAnimations = false }) {
	const pathname = useLocation().pathname;
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [hovered, setHovered] = (0, import_react.useState)(null);
	const [showNav, setShowNav] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (disableAnimations) {
			setScrolled(false);
			setShowNav(true);
			return;
		}
		const onScroll = () => {
			const currentScroll = window.scrollY;
			setScrolled(currentScroll > 12);
			if (currentScroll < 50) setShowNav(true);
			else setShowNav(false);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [disableAnimations]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `
        absolute
        inset-x-0
        top-6
        z-[100]
        flex
        justify-center
        px-4
        ${disableAnimations ? "" : "transition-all duration-500 ease-out"}

        ${disableAnimations || showNav || open ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"}
      `,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `
          navbar-premium
          flex
          w-full
          max-w-[900px]
          flex-wrap
          items-center
          justify-between
          rounded-[12px]
          border
          border-white/10
          px-3
          sm:px-4
          sm:px-6
          md:px-8
          py-2
          sm:py-2.5
          backdrop-blur-xl
          ${disableAnimations ? "" : "transition-all duration-500"}

          ${scrolled ? "bg-[#242424]/95 shadow-[0_20px_80px_rgba(0,0,0,0.55)]" : "bg-[#2a2a2a]/90"}
        `,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "flex items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: Asteri_logo_default,
					alt: "Asteri",
					className: "\n              h-8\n              sm:h-10\n              md:h-12\n              lg:h-14\n              w-auto\n              object-contain\n            "
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 sm:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: disableAnimations ? "" : "transition-all duration-300 hover:scale-110 hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-5 w-5 sm:h-8 sm:w-8 text-white/80" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: disableAnimations ? "" : "transition-all duration-300 hover:scale-110 hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 sm:h-8 sm:w-8 text-white/80" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: disableAnimations ? "" : "transition-all duration-300 hover:scale-110 hover:text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-5 w-5 sm:h-8 sm:w-8 text-white/80" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Menu",
						onClick: () => setOpen((v) => !v),
						className: `
              flex
              h-10
              w-10
              sm:h-12
              sm:w-12
              items-center
              justify-center
              rounded-full
              ${disableAnimations ? "" : "transition-all duration-300"}
              hover:bg-white/5
            `,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6 sm:h-8 sm:w-8 text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6 sm:h-8 sm:w-8 text-white" })
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "\n            absolute\n            top-24\n            z-[110]\n            w-full\n            max-w-[1500px]\n            min-h-[60vh]\n            h-auto\n            max-h-[calc(100dvh-7.5rem)]\n            overflow-y-auto\n            overflow-x-hidden\n            overscroll-contain\n            touch-pan-y\n            bg-black\n            p-4\n            sm:p-6\n            backdrop-blur-2xl\n            shadow-[0_0_50px_rgba(0,0,0,0.45)]\n            scrollbar-thin\n            scrollbar-thumb-white/20\n            scrollbar-track-transparent\n          ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onMouseEnter: () => setHovered(l.label),
					onMouseLeave: () => setHovered(null),
					className: "border-b border-white/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: `
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  ${disableAnimations ? "" : "transition-all duration-300"}

                  ${pathname === l.to ? "text-primary " : "text-white hover:bg-primary/10 hover:text-white"}
                `,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "\n                  text-[29px]\n                  sm:text-[35px]\n                  md:text-[41px]\n                  font-semibold\n                  uppercase\n                  tracking-tight\n                  leading-none\n                ",
							children: l.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `
                    flex
                    items-center
                    justify-center
                    w-10
                    sm:w-12
                    h-10
                    rounded-full
                    border
                    border-primary
                    ${disableAnimations ? "" : "transition-all duration-300"}
                  `,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 30,
								className: "text-primary",
								strokeWidth: 1
							})
						})]
					}), hovered === l.label && l.children.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\n                    flex\n                    flex-col\n                    items-start\n                    gap-2\n                    pl-8\n                    pb-4\n                    pt-2\n                    text-left\n                  ",
						children: l.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: child.to,
							onClick: () => setOpen(false),
							className: `
                      text-[29px]
                      sm:text-[35px]
                      md:text-[41px]
                      font-semibold
                      tracking-tight
                      leading-tight
                      text-white/90
                      ${disableAnimations ? "" : "hover:text-primary transition-all duration-300"}
                    `,
							children: child.label
						}, child.label))
					})]
				}, l.to))
			})
		})]
	});
}
gsapWithCSS.registerPlugin(ScrollTrigger, MotionPathPlugin);
function Footer({ disableAnimations = false }) {
	const footerRef = (0, import_react.useRef)(null);
	const scrollToHero = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	(0, import_react.useEffect)(() => {
		if (disableAnimations) return;
		gsapWithCSS.set(".footer-logo", {
			y: 120,
			opacity: 0
		});
		gsapWithCSS.set(".footer-left a", {
			y: 80,
			opacity: 0
		});
		gsapWithCSS.set(".footer-middle a", {
			y: 80,
			opacity: 0
		});
		gsapWithCSS.set(".footer-contact-item", {
			x: 150,
			opacity: 0
		});
		gsapWithCSS.set(".footer-social", {
			x: 150,
			opacity: 0
		});
		gsapWithCSS.set(".asteri-footer-huge-logo", { y: 100 });
		const footerTl = gsapWithCSS.timeline({ scrollTrigger: {
			trigger: ".footer-section",
			start: "top bottom",
			end: "bottom bottom",
			scrub: 1
		} });
		footerTl.to(".footer-logo", {
			y: 0,
			opacity: 1
		});
		footerTl.to(".footer-left a", {
			y: 0,
			opacity: 1,
			stagger: .12
		}, .1);
		footerTl.to(".footer-middle a", {
			y: 0,
			opacity: 1,
			stagger: .12
		}, .3);
		footerTl.to(".footer-contact-item", {
			x: 0,
			opacity: 1,
			stagger: .15
		}, .5);
		footerTl.to(".footer-social", {
			x: 0,
			opacity: 1
		}, .8);
		footerTl.to(".asteri-footer-huge-logo", {
			y: 0,
			duration: 2
		}, 0);
		return () => {
			footerTl.kill();
			footerTl.scrollTrigger?.kill();
		};
	}, [disableAnimations]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		ref: footerRef,
		className: "footer-section relative overflow-hidden border-t border-[#82E926]/20 bg-black text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "footer-content relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 pt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-10 md:grid-cols-1 lg:grid-cols-[320px_1fr_420px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "footer-logo flex justify-start",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/Asteri logo.png",
							alt: "Asteri",
							className: "max-w-full w-[220px] sm:w-[260px] object-contain transition-all duration-500 hover:drop-shadow-[0_0_25px_#8AF500] cursor-pointer hover:animate-[spin_4s_linear_infinite]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row gap-10 sm:gap-20 lg:gap-28 lg:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-left flex flex-col gap-4 text-[18px] sm:text-[20px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "transition hover:text-[#7ED957]",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "transition hover:text-[#7ED957]",
									children: "About"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services",
									className: "transition hover:text-[#7ED957]",
									children: "Services"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/solutions",
									className: "transition hover:text-[#7ED957]",
									children: "Solutions"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/industries",
									className: "transition hover:text-[#7ED957]",
									children: "Industries"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-middle flex flex-col gap-4 text-[18px] sm:text-[20px] whitespace-nowrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/Partnership",
									className: "transition hover:text-[#7ED957]",
									children: "Partnership"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/case-studies",
									className: "transition hover:text-[#7ED957]",
									children: "Case Studies"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products",
									className: "transition hover:text-[#7ED957]",
									children: "Products"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog",
									className: "transition hover:text-[#7ED957]",
									children: "Blog"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "transition hover:text-[#7ED957]",
									children: "Contact"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 text-[18px] sm:text-[20px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-contact-item flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-6 w-6 shrink-0 text-[#7ED957]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "info@asteritechnology.com" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-contact-item flex items-center gap-4 text-[20px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6 shrink-0 text-[#7ED957]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:whitespace-nowrap",
									children: "+1 302 319 9898 / +91 982 342 0330"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "footer-contact-item flex items-center gap-4 text-[20px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 shrink-0 text-[#7ED957]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "India · Global Delivery" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "footer-social flex items-center justify-between pt-4 gap-4 flex-wrap",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											target: "_blank",
											rel: "noopener noreferrer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-8 w-8 cursor-pointer text-[#7ED957] transition hover:scale-110" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											target: "_blank",
											rel: "noopener noreferrer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-8 w-8 cursor-pointer text-[#7ED957] transition hover:scale-110" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											target: "_blank",
											rel: "noopener noreferrer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-8 w-8 cursor-pointer text-[#7ED957] transition hover:scale-110" })
										})
									]
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "asteri-footer-huge-logo relative flex items-end justify-center mt-6 pb-6 gap-2 sm:gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/Asteri logo for footer.svg",
					alt: "Asteri",
					className: "h-[200px] sm:h-[250px] w-auto object-contain select-none pointer-events-none"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: scrollToHero,
					title: "Scroll to Hero section",
					"aria-label": "Scroll to top hero section",
					className: "group mb-4 sm:mb-6 shrink-0 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-[#7ED957]/60 bg-black/90 text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 hover:border-[#82E926] hover:bg-[#82E926] hover:text-black hover:shadow-[0_0_25px_#82E926] cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5 sm:h-6 sm:w-6 text-[#7ED957] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-black" })
				})]
			})]
		})
	});
}
//#endregion
export { Navbar as n, Footer as t };
