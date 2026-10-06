import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as gsapWithCSS } from "../_libs/gsap.mjs";
import { _ as Instagram, g as Linkedin, n as Youtube } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-DWLWZf7F.mjs";
import "./router-DyhAv2I7.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DfDDGj-K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactHero() {
	const heroRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!heroRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set("h1 span", {
				y: 80,
				opacity: 0
			});
			gsapWithCSS.set("p", {
				y: 60,
				opacity: 0
			});
			gsapWithCSS.timeline().to("h1 span", {
				y: 0,
				opacity: 1,
				stagger: .15,
				duration: 1,
				ease: "power3.out"
			}, .2).to("p", {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out"
			}, "-=0.6");
		}, heroRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "contact-hero",
		ref: heroRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "type-display",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Got a" }), " Project"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["In Mind? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "Let's Talk." })] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "type-lead font-semibold",
			children: "We respond within 24 hours."
		})]
	});
}
function ContactInformation() {
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!sectionRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			const elements = gsapWithCSS.utils.toArray([
				".detail",
				".contact-social",
				".contact-form"
			]);
			gsapWithCSS.set("h2", {
				y: 50,
				opacity: 0
			});
			gsapWithCSS.set(elements, {
				x: "100vw",
				opacity: 0
			});
			const tl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: sectionRef.current,
				start: "top top",
				end: "+=4000",
				scrub: true,
				pin: true,
				anticipatePin: 1
			} });
			tl.to("h2", {
				y: 0,
				opacity: 1,
				duration: 1
			});
			tl.to(elements, {
				x: 0,
				opacity: 1,
				duration: 2,
				stagger: .3,
				ease: "power2.out"
			});
			tl.to({}, { duration: 1.5 });
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "contact-information",
		ref: sectionRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "type-title",
				children: "CONTACT INFORMATION"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-details",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "detail detail-email",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Email:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Info@asteritechnology.com" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "detail detail-phone",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Phone:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://flagcdn.com/w40/in.png",
								alt: "India",
								style: {
									display: "inline-block",
									width: "26px",
									verticalAlign: "middle",
									marginRight: "8px",
									marginTop: "-3px",
									borderRadius: "2px"
								}
							}),
							"India: +91 20 35609326",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://flagcdn.com/w40/ca.png",
								alt: "Canada",
								style: {
									display: "inline-block",
									width: "26px",
									verticalAlign: "middle",
									marginRight: "8px",
									marginTop: "-3px",
									borderRadius: "2px"
								}
							}),
							"Canada: +1 302 319 9898"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "detail detail-address",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Address:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5th floor Innovative Tower, Sr No. 15, Plot No P7, Near Kharadi KNO, Pune 411014, Pune, Maharashtra 411028" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "contact-social",
						id: "social-links",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Social Media" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#social-links",
								"aria-label": "LinkedIn",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#social-links",
								"aria-label": "Instagram",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#social-links",
								"aria-label": "YouTube",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, {})
							})
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "contact-form",
				onSubmit: (event) => {
					event.preventDefault();
					const formData = new FormData(event.currentTarget);
					const name = formData.get("name");
					const email = formData.get("email");
					const message = formData.get("message");
					fetch(apiUrl("/api/contact"), {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							name,
							email,
							message
						})
					}).then((res) => res.json()).then(() => {
						alert("Message sent successfully!");
						event.target.reset();
					}).catch(console.error);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Your Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "name",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Email Address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "email",
						type: "email",
						required: true
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						required: true
					})] })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					children: "Send Message"
				})]
			})
		]
	});
}
function ContactConversation() {
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!sectionRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			const tl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: sectionRef.current,
				start: "top top",
				end: "+=1500",
				scrub: true,
				pin: true
			} });
			tl.from(".line-1", {
				x: "-100vw",
				ease: "none",
				duration: 1
			}, 0);
			tl.from(".line-2", {
				x: "100vw",
				ease: "none",
				duration: 1
			}, 0);
			tl.to({}, { duration: .5 });
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "contact-conversation",
		ref: sectionRef,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "type-title",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "line-1",
				style: {
					display: "block",
					textAlign: "left",
					width: "100%"
				},
				children: "Every solution starts"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "line-2",
				style: {
					display: "block",
					textAlign: "left",
					width: "100%"
				},
				children: "with a conversation."
			})]
		})
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "contact-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "contact-frame",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactHero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInformation, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactConversation, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
