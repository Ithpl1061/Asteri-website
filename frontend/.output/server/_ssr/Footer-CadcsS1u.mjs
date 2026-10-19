import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as Link, i as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ScrollTrigger, r as gsapWithCSS, t as MotionPathPlugin } from "../_libs/gsap.mjs";
import { S as ArrowRight, _ as Instagram, b as ArrowUp, d as Phone, f as Menu, g as Linkedin, h as Mail, m as MapPin, n as Youtube, r as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-CadcsS1u.js
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
	const menuPanelRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open || !menuPanelRef.current) return;
		gsapWithCSS.fromTo(menuPanelRef.current, {
			opacity: 0,
			y: -20
		}, {
			opacity: 1,
			y: 0,
			duration: .4,
			ease: "power3.out"
		});
		const items = menuPanelRef.current.querySelectorAll(".navbar-menu-item");
		if (items.length) gsapWithCSS.fromTo(items, {
			opacity: 0,
			y: 35
		}, {
			opacity: 1,
			y: 0,
			duration: .45,
			stagger: .05,
			ease: "power2.out",
			delay: .04
		});
	}, [open]);
	const handleToggle = () => {
		if (open) if (menuPanelRef.current) gsapWithCSS.to(menuPanelRef.current, {
			opacity: 0,
			y: -15,
			duration: .22,
			ease: "power2.in",
			onComplete: () => {
				setOpen(false);
			}
		});
		else setOpen(false);
		else setOpen(true);
	};
	const handleClose = () => {
		if (menuPanelRef.current) gsapWithCSS.to(menuPanelRef.current, {
			opacity: 0,
			y: -15,
			duration: .2,
			ease: "power2.in",
			onComplete: () => {
				setOpen(false);
			}
		});
		else setOpen(false);
	};
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
						onClick: handleToggle,
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
			ref: menuPanelRef,
			className: "\n            navbar-menu-panel\n            absolute\n            top-24\n            z-[110]\n            w-full\n            max-w-[1500px]\n            overflow-y-auto\n            overflow-x-hidden\n            overscroll-contain\n            touch-pan-y\n            bg-black\n            px-4\n            sm:px-6\n            py-0\n            backdrop-blur-2xl\n            shadow-[0_0_50px_rgba(0,0,0,0.6)]\n            scrollbar-thin\n            scrollbar-thumb-white/20\n            scrollbar-track-transparent\n            snap-y\n            snap-mandatory\n            scroll-smooth\n            will-change-transform\n          ",
			style: { height: "calc(100dvh - 7.5rem)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col w-full",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onMouseEnter: () => setHovered(l.label),
					onMouseLeave: () => setHovered(null),
					className: "navbar-menu-item snap-start flex flex-col justify-center border-b border-white/10 shrink-0 will-change-transform",
					style: {
						height: "calc((100dvh - 7.5rem) / 4)",
						minHeight: "calc((100dvh - 7.5rem) / 4)",
						maxHeight: "calc((100dvh - 7.5rem) / 4)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						onClick: handleClose,
						className: `
                    group
                    flex
                    h-full
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    sm:px-6
                    md:px-8
                    py-2
                    ${disableAnimations ? "" : "transition-all duration-300"}

                    ${pathname === l.to ? "text-primary hover:bg-primary/10" : "text-white hover:bg-primary/10 hover:text-white"}
                  `,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "\n                      text-[32px]\n                      sm:text-[40px]\n                      md:text-[48px]\n                      lg:text-[56px]\n                      font-bold\n                      uppercase\n                      tracking-tight\n                      leading-none\n                    ",
							children: l.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `
                      flex
                      items-center
                      justify-center
                      w-11
                      h-11
                      sm:w-14
                      sm:h-14
                      md:w-16
                      md:h-16
                      rounded-full
                      border
                      border-primary
                      ${disableAnimations ? "" : "transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20"}
                    `,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "text-primary w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9",
								strokeWidth: 1.2
							})
						})]
					}), hovered === l.label && l.children.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col items-start gap-2 pl-8 pb-4 pt-2 text-left",
						children: l.children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: child.to,
							onClick: handleClose,
							className: `
                          text-[24px]
                          sm:text-[30px]
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
