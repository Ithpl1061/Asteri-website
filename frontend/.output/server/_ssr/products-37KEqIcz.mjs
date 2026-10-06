import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ScrollTrigger, r as gsapWithCSS } from "../_libs/gsap.mjs";
import { c as Settings, o as Timer, s as ShieldCheck, v as HeartHandshake, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-BbhaIMav.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-37KEqIcz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	(0, import_react.useEffect)(() => {}, []);
	const simpleQuoteSectionRef = (0, import_react.useRef)(null);
	const simpleQuoteTextRef = (0, import_react.useRef)(null);
	const builtSectionRef = (0, import_react.useRef)(null);
	const builtTextRef = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const productCardSectionRef = (0, import_react.useRef)(null);
	const productMainCardRef = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const dot1Ref = (0, import_react.useRef)(null);
	const dot2Ref = (0, import_react.useRef)(null);
	const dot3Ref = (0, import_react.useRef)(null);
	const dot4Ref = (0, import_react.useRef)(null);
	const dot5Ref = (0, import_react.useRef)(null);
	const productTitleRef = (0, import_react.useRef)(null);
	const productSubtitleRef = (0, import_react.useRef)(null);
	const [productName, setProductName] = (0, import_react.useState)("Salesforce");
	const [productType, setProductType] = (0, import_react.useState)("CRM & Cloud Platform");
	const enablesSectionRef = (0, import_react.useRef)(null);
	const enablesTitleRef = (0, import_react.useRef)(null);
	const enablesCard1Ref = (0, import_react.useRef)(null);
	const enablesCard2Ref = (0, import_react.useRef)(null);
	const enablesCard3Ref = (0, import_react.useRef)(null);
	const enablesCard4Ref = (0, import_react.useRef)(null);
	const nextRef = (0, import_react.useRef)(null);
	const nextTitleRef = (0, import_react.useRef)(null);
	const nextTextRef = (0, import_react.useRef)(null);
	const nextBtnRef = (0, import_react.useRef)(null);
	const cardsWrapperRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!simpleQuoteSectionRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			const tl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: simpleQuoteSectionRef.current,
				start: "center center",
				end: "+=1500",
				scrub: 1,
				pin: true
			} });
			tl.fromTo(".simple-quote-line-1", { x: "-100vw" }, {
				x: 0,
				ease: "power3.out",
				duration: 1
			}, 0);
			tl.fromTo(".simple-quote-line-2", { x: "100vw" }, {
				x: 0,
				ease: "power3.out",
				duration: 1
			}, 0);
			tl.to({}, { duration: 1.5 });
		}, simpleQuoteSectionRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!builtSectionRef.current || !builtTextRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(builtTextRef.current, {
				y: 300,
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: builtSectionRef.current,
				start: "top top",
				end: "+=3500",
				scrub: 1,
				pin: true
			} }).to(builtTextRef.current, {
				y: 0,
				opacity: 1,
				duration: 2
			}).to({}, { duration: 1.5 }).to(builtTextRef.current, {
				y: -700,
				opacity: 0,
				duration: 2
			});
		}, builtSectionRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!productCardSectionRef.current || !cardsWrapperRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(cardsWrapperRef.current, { yPercent: -50 });
			gsapWithCSS.set(productMainCardRef.current, {
				y: 400,
				opacity: 0
			});
			gsapWithCSS.set(dot1Ref.current, { backgroundColor: "#8AF500" });
			gsapWithCSS.set(dot2Ref.current, { backgroundColor: "#666" });
			const tl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: productCardSectionRef.current,
				start: "top top",
				end: "+=5000",
				scrub: true,
				pin: true,
				onUpdate: (self) => {
					const p = self.progress;
					if (p < .2) {
						setProductName("Salesforce");
						setProductType("CRM & Cloud Platform");
					} else if (p < .4) {
						setProductName("Zoho");
						setProductType("CRM & Cloud Platform");
					} else if (p < .6) {
						setProductName("1dox.ai");
						setProductType("CRM & Cloud Platform");
					} else if (p < .8) {
						setProductName("ManageEngine");
						setProductType("CRM & Cloud Platform");
					} else {
						setProductName("PL/SQL");
						setProductType("CRM & Cloud Platform");
					}
				}
			} });
			tl.to(productMainCardRef.current, {
				y: 0,
				opacity: 1,
				duration: 2
			});
			tl.to({}, { duration: 2 });
			tl.to(cardsWrapperRef.current, {
				x: -432,
				duration: 2
			});
			tl.to(dot1Ref.current, {
				backgroundColor: "#666",
				duration: .3
			}, "<");
			tl.to(dot2Ref.current, {
				backgroundColor: "#8AF500",
				duration: .3
			}, "<");
			tl.to({}, { duration: 1.5 });
			tl.to(cardsWrapperRef.current, {
				x: -864,
				duration: 2
			});
			tl.to(dot2Ref.current, {
				backgroundColor: "#666",
				duration: .3
			}, "<");
			tl.to(dot3Ref.current, {
				backgroundColor: "#8AF500",
				duration: .3
			}, "<");
			tl.to({}, { duration: 1.5 });
			tl.to(cardsWrapperRef.current, {
				x: -1296,
				duration: 2
			});
			tl.to(dot3Ref.current, {
				backgroundColor: "#666",
				duration: .3
			}, "<");
			tl.to(dot4Ref.current, {
				backgroundColor: "#8AF500",
				duration: .3
			}, "<");
			tl.to({}, { duration: 1.5 });
			tl.to(cardsWrapperRef.current, {
				x: -1728,
				duration: 2
			});
			tl.to(dot4Ref.current, {
				backgroundColor: "#666",
				duration: .3
			}, "<");
			tl.to(dot5Ref.current, {
				backgroundColor: "#8AF500",
				duration: .3
			}, "<");
			tl.to({}, { duration: 1.5 });
			tl.to([productMainCardRef.current, cardsWrapperRef.current], {
				y: -1200,
				opacity: 0,
				duration: 2
			});
			setTimeout(() => {
				ScrollTrigger.refresh();
			}, 100);
		}, productCardSectionRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!enablesSectionRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set(enablesTitleRef.current, {
				y: 50,
				opacity: 0
			});
			gsapWithCSS.set([
				enablesCard1Ref.current,
				enablesCard2Ref.current,
				enablesCard3Ref.current,
				enablesCard4Ref.current
			], {
				x: "100vw",
				opacity: 0
			});
			const tl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: enablesSectionRef.current,
				start: "top top",
				end: "+=4000",
				scrub: true,
				pin: true
			} });
			tl.to(enablesTitleRef.current, {
				y: 0,
				opacity: 1,
				duration: 1
			});
			tl.to(enablesCard1Ref.current, {
				x: 0,
				opacity: 1,
				duration: 1
			});
			tl.to(enablesCard2Ref.current, {
				x: 0,
				opacity: 1,
				duration: 1
			});
			tl.to(enablesCard3Ref.current, {
				x: 0,
				opacity: 1,
				duration: 1
			});
			tl.to(enablesCard4Ref.current, {
				x: 0,
				opacity: 1,
				duration: 1
			});
			tl.to({}, { duration: 1.5 });
		}, enablesSectionRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!nextRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.set([
				nextTitleRef.current,
				nextTextRef.current,
				nextBtnRef.current
			], {
				x: "100vw",
				opacity: 0
			});
			const tl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: nextRef.current,
				start: "top top",
				end: "+=3000",
				scrub: true,
				pin: true
			} });
			tl.to(nextTitleRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out"
			});
			tl.to({}, { duration: .5 });
			tl.to(nextTextRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out"
			});
			tl.to({}, { duration: .5 });
			tl.to(nextBtnRef.current, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out"
			});
			tl.to({}, { duration: 1.5 });
		}, nextRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "\n              bg-black\n              flex\n              items-center\n              px-6\n              pt-24\n              pb-20\n            ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\n                w-full\n                max-w-[1360px]\n                mx-auto\n                pl-[3%]\n              ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "\n                  text-white\n                  font-bold\n                  text-[46px]\n                  md:text-[68px]\n                  xl:text-[76px]\n                  leading-[1]\n                ",
						children: [
							"Industry-Leading",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent stroke-text-green",
								children: "Software"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-transparent stroke-text-green",
								children: "Authorized"
							}),
							" ",
							"Supported"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "\n                mt-8\n                max-w-[900px]\n                text-white\n                text-[20px]\n                md:text-[26px]\n                font-semibold\n                font-mono\n                ",
						children: "Buy with confidence — implementation expertise included."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "\n                  mt-24\n                  flex\n                  items-center\n                  gap-3\n                  pl-6\n                  pr-3\n                  py-3\n                  rounded-full\n                  border-2\n                  border-[#8AF500]\n                  bg-[#82E926]\n                  backdrop-blur-md\n                ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "\n                    text-black\n                    text-[26px]\n                    font-bold\n                  ",
							children: "Explore More"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "\n                    w-11\n                    h-11\n                    rounded-full\n                    bg-white\n                    flex\n                    items-center\n                    justify-center\n                  ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 34,
								className: "text-black",
								strokeWidth: 2.5
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: simpleQuoteSectionRef,
			className: "bg-black flex items-center justify-center px-6 py-32 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: simpleQuoteTextRef,
					className: "\n                text-center\n              ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "\n                  text-white\n                  font-bold\n                  text-[clamp(2.25rem,5vw,4.5rem)]\n                  leading-[1.05]\n                ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "simple-quote-line-1",
							children: "We only resell"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "simple-quote-line-2",
							children: "what we can implement"
						})]
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: builtSectionRef,
			className: "bg-black h-screen flex items-center justify-center px-6 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: builtTextRef,
					className: "\n                text-center\n              ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "\n                  text-white\n                  font-bold\n                  text-[clamp(1.5rem,3.5vw,3rem)]\n                  leading-[1.05]\n                ",
						children: [
							"Certified onboarding support",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"comes with every license."
						]
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: productCardSectionRef,
			className: "bg-black h-screen flex flex-col items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full mx-auto overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: productMainCardRef,
					className: "\n                w-full\n                min-h-[700px]\n                bg-[#EAEAEA]\n                p-8\n                md:p-14\n                relative\n              ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-full pt-10 md:max-w-[40%]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								ref: productTitleRef,
								className: "\n                  text-black\n                  text-[clamp(2.25rem,5vw,4.5rem)]\n                  font-bold\n                  leading-none\n                  break-words\n                ",
								children: productName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								ref: productSubtitleRef,
								className: "\n                  text-black\n                  text-lg\n                  sm:text-xl\n                  md:text-2xl\n                  font-medium\n                  mt-4\n                ",
								children: productType
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "\n                  mt-16\n                  md:mt-32\n                  flex\n                  items-center\n                  gap-4\n                  pl-8\n                  pr-3\n                  py-3\n                  rounded-full\n                  border\n                  border-[#82E926]\n                  bg-[#82E926]/20\n                    text-black\n                    text-base\n                    sm:text-lg\n                  font-bold\n                ",
								children: ["Contact us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "\n                    w-12\n                    h-12\n                    rounded-full\n                    bg-[#8AF500]\n                    flex\n                    items-center\n                    justify-center\n                    shrink-0\n                  ",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 30,
										className: "text-black",
										strokeWidth: 2.5
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\n                    relative\n                    mt-16\n                    h-[620px]\n                    w-full\n                    bg-[#DDDDDD]\n                    rounded-[40px]\n                    overflow-hidden\n                    md:absolute\n                    md:right-0\n                    md:top-0\n                    md:mt-0\n                    md:h-full\n                    md:w-[58%]\n                    md:rounded-l-[40px]\n                  ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: cardsWrapperRef,
							className: "\n                      absolute\n                      left-[8%]\n                      top-[47%]\n                      -translate-y-1/2\n                      flex\n                      flex-row\n                      items-center\n                      gap-8\n                      w-max\n                    ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "\n                    shrink-0\n                    w-[400px]\n                    h-[520px]\n                    rounded-[35px]\n                    bg-[#F3F3F3]\n                    p-10\n                    flex\n                    flex-col\n                  ",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/Salesforce.png",
											className: "w-[170px]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-black type-lead font-semibold font-medium mt-12 leading-[1.2]",
											children: "World's #1 CRM platform — licenses & configs"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "\n                      mt-auto\n                      w-max\n                      flex\n                      items-center\n                      gap-3\n                      pl-4\n                      pr-2\n                      py-2\n                      rounded-full\n                      border\n                      border-[#82E926]\n                      bg-[#82E926]/20\n                      text-black\n                      text-sm\n                      sm:text-base\n                      font-semibold\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\n                        w-8\n                        h-8\n                        rounded-full\n                        bg-[#8AF500]\n                        flex\n                        items-center\n                        justify-center\n                        shrink-0\n                      ",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													size: 30,
													className: "text-black",
													strokeWidth: 2.5
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "\n                    shrink-0\n                    w-[400px]\n                    h-[520px]\n                    rounded-[35px]\n                    bg-[#F3F3F3]\n                    p-10\n                    flex\n                    flex-col\n                  ",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/zoho logo.png",
											className: "w-[170px]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-black type-lead font-semibold font-medium mt-12 leading-[1.2]",
											children: "Integrated applications for managing operations, sales, and customer engagement."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "\n                      mt-auto\n                      w-max\n                      flex\n                      items-center\n                      gap-3\n                      pl-4\n                      pr-2\n                      py-2\n                      rounded-full\n                      border\n                      border-[#82E926]\n                      bg-[#82E926]/20\n                      text-black\n                      text-sm\n                      sm:text-base\n                      font-semibold\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\n                        w-8\n                        h-8\n                        rounded-full\n                        bg-[#8AF500]\n                        flex\n                        items-center\n                        justify-center\n                        shrink-0\n                      ",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													size: 30,
													className: "text-black",
													strokeWidth: 2.5
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "\n                    shrink-0\n                    w-[400px]\n                    h-[520px]\n                    rounded-[35px]\n                    bg-[#F3F3F3]\n                    p-10\n                    flex\n                    flex-col\n                  ",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/1dox.ai 1.png",
											className: "w-[190px]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-black type-lead font-semibold font-medium mt-14 leading-[1.2]",
											children: "A unified system to store, manage, and collaborate on documents with workflows and AI."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "\n                      mt-auto\n                      w-max\n                      flex\n                      items-center\n                      gap-3\n                      pl-4\n                      pr-2\n                      py-2\n                      rounded-full\n                      border\n                      border-[#82E926]\n                      bg-[#82E926]/20\n                      text-black\n                      text-sm\n                      sm:text-base\n                      font-semibold\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\n                        w-8\n                        h-8\n                        rounded-full\n                        bg-[#8AF500]\n                        flex\n                        items-center\n                        justify-center\n                        shrink-0\n                      ",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													size: 30,
													className: "text-black",
													strokeWidth: 2.5
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "\n                    shrink-0\n                    w-[400px]\n                    h-[520px]\n                    rounded-[35px]\n                    bg-[#F3F3F3]\n                    p-10\n                    flex\n                    flex-col\n                  ",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/ManageEngine logo.png",
											className: "w-[220px]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-black type-lead font-semibold font-medium mt-14 leading-[1.2]",
											children: "Tools for monitoring, managing and securing IT infrastructure."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "\n                      mt-auto\n                      w-max\n                      flex\n                      items-center\n                      gap-3\n                      pl-4\n                      pr-2\n                      py-2\n                      rounded-full\n                      border\n                      border-[#82E926]\n                      bg-[#82E926]/20\n                      text-black\n                      text-sm\n                      sm:text-base\n                      font-semibold\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\n                        w-8\n                        h-8\n                        rounded-full\n                        bg-[#8AF500]\n                        flex\n                        items-center\n                        justify-center\n                        shrink-0\n                      ",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													size: 30,
													className: "text-black",
													strokeWidth: 2.5
												})
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "\n                    shrink-0\n                    w-[400px]\n                    h-[520px]\n                    rounded-[35px]\n                    bg-[#F3F3F3]\n                    p-10\n                    flex\n                    flex-col\n                  ",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/plsql.png",
											className: "w-[150px]"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-black type-lead font-semibold font-medium mt-14 leading-[1.2]",
											children: "Robust database management and backend logic for structured applications."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "\n                      mt-auto\n                      w-max\n                      flex\n                      items-center\n                      gap-3\n                      pl-4\n                      pr-2\n                      py-2\n                      rounded-full\n                      border\n                      border-[#82E926]\n                      bg-[#82E926]/20\n                      text-black\n                      text-sm\n                      sm:text-base\n                      font-semibold\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\n                        w-8\n                        h-8\n                        rounded-full\n                        bg-[#8AF500]\n                        flex\n                        items-center\n                        justify-center\n                        shrink-0\n                      ",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
													size: 30,
													className: "text-black",
													strokeWidth: 2.5
												})
											})]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "\n                  absolute\n                  bottom-12\n                  left-1/2\n                  -translate-x-1/2\n                  flex\n                  gap-4\n                ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: dot1Ref,
									className: "w-4 h-4 rounded-full"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: dot2Ref,
									className: "w-4 h-4 rounded-full"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: dot3Ref,
									className: "w-4 h-4 rounded-full bg-[#666]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: dot4Ref,
									className: "w-4 h-4 rounded-full bg-[#666]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: dot5Ref,
									className: "w-4 h-4 rounded-full bg-[#666]"
								})
							]
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: enablesSectionRef,
			className: "bg-black px-6 h-screen flex flex-col justify-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: enablesTitleRef,
					className: "\n                mb-16\n              ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "\n                  text-white\n                  text-[clamp(2.25rem,5vw,4.5rem)]\n                  font-bold\n                  leading-[0.9]\n                ",
						children: [
							"WHAT",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"IT ENABLES"
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\n                grid\n                grid-cols-1\n                gap-6\n                sm:grid-cols-2\n                lg:grid-cols-4\n              ",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: enablesCard1Ref,
							className: "\n                min-h-[310px]\n                rounded-[24px]\n                bg-white\n                p-6\n                flex\n                flex-col\n                justify-between\n              ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
								size: 64,
								strokeWidth: 3,
								className: "text-[#8AF500]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "\n                  text-black\n                  text-xl\n                  sm:text-2xl\n                  font-bold\n                  leading-[1.15]\n                  text-right\n                ",
								children: [
									"Smarter",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Operations"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: enablesCard2Ref,
							className: "\n                min-h-[310px]\n                rounded-[24px]\n                bg-white\n                p-6\n                flex\n                flex-col\n                justify-between\n              ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
								size: 64,
								strokeWidth: 3,
								className: "text-[#8AF500]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "\n                  text-black\n                  text-xl\n                  sm:text-2xl\n                  font-bold\n                  leading-[1.15]\n                  text-right\n                ",
								children: [
									"Faster",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Decisions"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: enablesCard3Ref,
							className: "\n                min-h-[310px]\n                rounded-[24px]\n                bg-white\n                p-6\n                flex\n                flex-col\n                justify-between\n              ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								size: 64,
								strokeWidth: 3,
								className: "text-[#8AF500]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "\n                  text-black\n                  text-xl\n                  sm:text-2xl\n                  font-bold\n                  leading-[1.15]\n                  text-right\n                ",
								children: [
									"Stronger",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Security"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: enablesCard4Ref,
							className: "\n                min-h-[310px]\n                rounded-[24px]\n                bg-white\n                p-6\n                flex\n                flex-col\n                justify-between\n              ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, {
								size: 64,
								strokeWidth: 3,
								className: "text-[#8AF500]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "\n                  text-black\n                  text-xl\n                  sm:text-2xl\n                  font-bold\n                  leading-[1.15]\n                  text-right\n                ",
								children: [
									"Better",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Collaboration"
								]
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: nextRef,
			className: "relative h-screen bg-black flex items-center justify-center overflow-hidden px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex min-h-[650px] w-full max-w-[1360px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0B1205] py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col items-center text-center px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							ref: nextTitleRef,
							className: "\n                  text-white\n                  font-bold\n                  leading-tight\n                  text-[clamp(1.5rem,3vw,2.5rem)]\n                ",
							children: "Not just a license - a real partnership."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							ref: nextTextRef,
							className: "\n                  mt-8\n                  text-white\n                  text-[clamp(0.875rem,1.3vw,1.125rem)]\n                  font-medium\n                  leading-relaxed\n                ",
							children: [
								"Every product we sell, we also implement",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"- at the right price, with the right support."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: nextBtnRef,
							className: "\n                  mt-10\n                  flex\n                  items-center\n                  gap-3\n                  pl-6\n                  pr-3\n                  py-2.5\n                  rounded-full\n                  border-2\n                  border-[#8AF500]\n                  bg-[#D9D9D9]\n                  backdrop-blur-md\n                ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "\n                    text-black\n                    text-sm\n                    sm:text-base\n                    font-bold\n                  ",
								children: "Request a Quote"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\n                    w-11\n                    h-11\n                    rounded-full\n                    bg-white\n                    flex\n                    items-center\n                    justify-center\n                  ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 34,
									className: "text-black",
									strokeWidth: 2.5
								})
							})]
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { Services as component };
