import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ScrollTrigger, r as gsapWithCSS } from "../_libs/gsap.mjs";
import { c as Settings, o as Timer, s as ShieldCheck, v as HeartHandshake, x as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-C30GFmPZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CsCOTUTr.js
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
				end: "+=840",
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
			tl.to({}, { duration: .4 });
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
				end: "+=3055",
				scrub: 1,
				pin: true
			} }).to(builtTextRef.current, {
				y: 0,
				opacity: 1,
				duration: 2
			}).to({}, { duration: .8 }).to(builtTextRef.current, {
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
			const cardStep = () => {
				const row = cardsWrapperRef.current;
				const first = row?.firstElementChild;
				if (!row || !first) return 432;
				return first.offsetWidth + (parseFloat(getComputedStyle(row).columnGap) || 0);
			};
			gsapWithCSS.set(dot1Ref.current, { backgroundColor: "#8AF500" });
			gsapWithCSS.set(dot2Ref.current, { backgroundColor: "#666" });
			const tl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: productCardSectionRef.current,
				start: "top top",
				end: "+=5000",
				scrub: window.innerWidth <= 767 ? .5 : true,
				pin: true,
				invalidateOnRefresh: true,
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
				x: () => -cardStep() * 1,
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
				x: () => -cardStep() * 2,
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
				x: () => -cardStep() * 3,
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
				x: () => -cardStep() * 4,
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
				end: "+=3320",
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
			tl.to({}, { duration: .4 });
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
				end: "+=2400",
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
			tl.to({}, { duration: .4 });
		}, nextRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "\r\n              bg-black\r\n              flex\r\n              items-center\r\n              px-6\r\n              pt-24\r\n              pb-20\r\n            ",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\r\n                w-full\r\n                max-w-[1360px]\r\n                mx-auto\r\n                pl-[3%]\r\n              ",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "\r\n                  text-white\r\n                  font-bold\r\n                  text-[clamp(2.75rem,6vw,7rem)]\r\n                  leading-[1]\r\n                ",
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
						className: "\r\n                mt-8\r\n                max-w-[900px]\r\n                text-white\r\n                text-[20px]\r\n                md:text-[26px]\r\n                font-semibold\r\n                font-sans\r\n                ",
						children: "Buy with confidence — implementation expertise included."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "\r\n                  mt-[calc(6rem-3vh)]\r\n                  flex\r\n                  items-center\r\n                  gap-3\r\n                  pl-6\r\n                  pr-3\r\n                  py-3\r\n                  rounded-full\r\n                  border-2\r\n                  border-[#8AF500]\r\n                  bg-[#82E926]\r\n                  backdrop-blur-md\r\n                ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "\r\n                    text-black\r\n                    text-[26px]\r\n                    font-bold\r\n                  ",
							children: "Explore More"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "\r\n                    w-11\r\n                    h-11\r\n                    rounded-full\r\n                    bg-white\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                  ",
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
			className: "products-quote bg-black flex items-center justify-center px-6 py-32 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: simpleQuoteTextRef,
					className: "\r\n                text-center\r\n              ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "\r\n                  text-white\r\n                  font-bold\r\n                  text-[calc(clamp(2.25rem,5vw,4.5rem)+20px)]\r\n                  leading-[1.05]\r\n                ",
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
			className: "products-built bg-black h-screen flex items-center justify-center px-6 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: builtTextRef,
					className: "\r\n                text-center\r\n              ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "\r\n                  text-white\r\n                  font-bold\r\n                  text-[clamp(1.5rem,3.5vw,3rem)]\r\n                  leading-[1.05]\r\n                ",
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
			className: "products-crm-sec bg-black h-screen flex flex-col items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full mx-auto overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: productMainCardRef,
					className: "\r\n                products-main-card\r\n                w-full\r\n                min-h-[700px]\r\n                bg-[#EAEAEA]\r\n                p-8\r\n                md:p-14\r\n                relative\r\n              ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-full pt-10 md:max-w-[40%]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								ref: productTitleRef,
								className: "\r\n                  text-black\r\n                  text-[clamp(2.25rem,5vw,4.5rem)]\r\n                  font-bold\r\n                  leading-none\r\n                  break-words\r\n                ",
								children: productName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								ref: productSubtitleRef,
								className: "\r\n                  text-black\r\n                  text-lg\r\n                  sm:text-xl\r\n                  md:text-2xl\r\n                  font-medium\r\n                  mt-4\r\n                ",
								children: productType
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "\r\n                  mt-16\r\n                  md:mt-32\r\n                  flex\r\n                  items-center\r\n                  gap-4\r\n                  pl-8\r\n                  pr-3\r\n                  py-3\r\n                  rounded-full\r\n                  border\r\n                  border-[#82E926]\r\n                  bg-[#82E926]/20\r\n                    text-black\r\n                    text-base\r\n                    sm:text-lg\r\n                  font-bold\r\n                ",
								children: ["Contact us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "\r\n                    w-12\r\n                    h-12\r\n                    rounded-full\r\n                    bg-[#8AF500]\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                    shrink-0\r\n                  ",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 30,
										className: "text-black",
										strokeWidth: 2.5
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\r\n                    products-cards-panel\r\n                    relative\r\n                    mt-16\r\n                    h-[620px]\r\n                    w-full\r\n                    bg-[#DDDDDD]\r\n                    rounded-[40px]\r\n                    overflow-hidden\r\n                    md:absolute\r\n                    md:right-0\r\n                    md:top-0\r\n                    md:mt-0\r\n                    md:h-full\r\n                    md:w-[58%]\r\n                    md:rounded-l-[40px]\r\n                  ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: cardsWrapperRef,
							className: "\r\n                      products-cards-row\r\n                      absolute\r\n                      left-[8%]\r\n                      top-[47%]\r\n                      -translate-y-1/2\r\n                      flex\r\n                      flex-row\r\n                      items-center\r\n                      gap-8\r\n                      w-max\r\n                    ",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "\r\n                    products-card shrink-0\r\n                    w-[400px]\r\n                    h-[520px]\r\n                    rounded-[35px]\r\n                    bg-[#F3F3F3]\r\n                    p-10\r\n                    flex\r\n                    flex-col\r\n                  ",
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
											className: "\r\n                      mt-auto\r\n                      w-max\r\n                      flex\r\n                      items-center\r\n                      gap-3\r\n                      pl-4\r\n                      pr-2\r\n                      py-2\r\n                      rounded-full\r\n                      border\r\n                      border-[#82E926]\r\n                      bg-[#82E926]/20\r\n                      text-black\r\n                      text-sm\r\n                      sm:text-base\r\n                      font-semibold\r\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\r\n                        w-8\r\n                        h-8\r\n                        rounded-full\r\n                        bg-[#8AF500]\r\n                        flex\r\n                        items-center\r\n                        justify-center\r\n                        shrink-0\r\n                      ",
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
									className: "\r\n                    products-card shrink-0\r\n                    w-[400px]\r\n                    h-[520px]\r\n                    rounded-[35px]\r\n                    bg-[#F3F3F3]\r\n                    p-10\r\n                    flex\r\n                    flex-col\r\n                  ",
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
											className: "\r\n                      mt-auto\r\n                      w-max\r\n                      flex\r\n                      items-center\r\n                      gap-3\r\n                      pl-4\r\n                      pr-2\r\n                      py-2\r\n                      rounded-full\r\n                      border\r\n                      border-[#82E926]\r\n                      bg-[#82E926]/20\r\n                      text-black\r\n                      text-sm\r\n                      sm:text-base\r\n                      font-semibold\r\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\r\n                        w-8\r\n                        h-8\r\n                        rounded-full\r\n                        bg-[#8AF500]\r\n                        flex\r\n                        items-center\r\n                        justify-center\r\n                        shrink-0\r\n                      ",
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
									className: "\r\n                    products-card shrink-0\r\n                    w-[400px]\r\n                    h-[520px]\r\n                    rounded-[35px]\r\n                    bg-[#F3F3F3]\r\n                    p-10\r\n                    flex\r\n                    flex-col\r\n                  ",
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
											className: "\r\n                      mt-auto\r\n                      w-max\r\n                      flex\r\n                      items-center\r\n                      gap-3\r\n                      pl-4\r\n                      pr-2\r\n                      py-2\r\n                      rounded-full\r\n                      border\r\n                      border-[#82E926]\r\n                      bg-[#82E926]/20\r\n                      text-black\r\n                      text-sm\r\n                      sm:text-base\r\n                      font-semibold\r\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\r\n                        w-8\r\n                        h-8\r\n                        rounded-full\r\n                        bg-[#8AF500]\r\n                        flex\r\n                        items-center\r\n                        justify-center\r\n                        shrink-0\r\n                      ",
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
									className: "\r\n                    products-card shrink-0\r\n                    w-[400px]\r\n                    h-[520px]\r\n                    rounded-[35px]\r\n                    bg-[#F3F3F3]\r\n                    p-10\r\n                    flex\r\n                    flex-col\r\n                  ",
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
											className: "\r\n                      mt-auto\r\n                      w-max\r\n                      flex\r\n                      items-center\r\n                      gap-3\r\n                      pl-4\r\n                      pr-2\r\n                      py-2\r\n                      rounded-full\r\n                      border\r\n                      border-[#82E926]\r\n                      bg-[#82E926]/20\r\n                      text-black\r\n                      text-sm\r\n                      sm:text-base\r\n                      font-semibold\r\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\r\n                        w-8\r\n                        h-8\r\n                        rounded-full\r\n                        bg-[#8AF500]\r\n                        flex\r\n                        items-center\r\n                        justify-center\r\n                        shrink-0\r\n                      ",
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
									className: "\r\n                    products-card shrink-0\r\n                    w-[400px]\r\n                    h-[520px]\r\n                    rounded-[35px]\r\n                    bg-[#F3F3F3]\r\n                    p-10\r\n                    flex\r\n                    flex-col\r\n                  ",
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
											className: "\r\n                      mt-auto\r\n                      w-max\r\n                      flex\r\n                      items-center\r\n                      gap-3\r\n                      pl-4\r\n                      pr-2\r\n                      py-2\r\n                      rounded-full\r\n                      border\r\n                      border-[#82E926]\r\n                      bg-[#82E926]/20\r\n                      text-black\r\n                      text-sm\r\n                      sm:text-base\r\n                      font-semibold\r\n                    ",
											children: ["Know More", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "\r\n                        w-8\r\n                        h-8\r\n                        rounded-full\r\n                        bg-[#8AF500]\r\n                        flex\r\n                        items-center\r\n                        justify-center\r\n                        shrink-0\r\n                      ",
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
							className: "\r\n                  products-dots\r\n                  absolute\r\n                  bottom-12\r\n                  left-1/2\r\n                  -translate-x-1/2\r\n                  flex\r\n                  gap-4\r\n                ",
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
			className: "products-enables bg-black px-6 h-screen flex flex-col justify-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-[1360px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: enablesTitleRef,
					className: "\r\n                products-enables-title\r\n                mb-16\r\n              ",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "\r\n                  text-white\r\n                  text-[clamp(2.25rem,5vw,4.5rem)]\r\n                  font-bold\r\n                  leading-[0.9]\r\n                ",
						children: [
							"WHAT",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"IT ENABLES"
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\r\n                products-enables-grid\r\n                grid\r\n                grid-cols-1\r\n                gap-6\r\n                sm:grid-cols-2\r\n                lg:grid-cols-4\r\n              ",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: enablesCard1Ref,
							className: "enable-card min-h-[310px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enable-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "enable-face enable-front rounded-[24px] bg-white p-6 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, {
										size: 64,
										strokeWidth: 3,
										className: "text-[#8AF500]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "\r\n                  text-black\r\n                  text-xl\r\n                  sm:text-2xl\r\n                  font-bold\r\n                  leading-[1.15]\r\n                  text-right\r\n                ",
										children: [
											"Smarter",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Operations"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "enable-face enable-back rounded-[24px] p-6 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black text-xl sm:text-2xl font-bold leading-[1.15]",
										children: "Smarter Operations"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black/80 text-base sm:text-lg font-medium leading-snug",
										children: "Automate routine work and unify processes so your teams spend time on what matters."
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: enablesCard2Ref,
							className: "enable-card min-h-[310px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enable-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "enable-face enable-front rounded-[24px] bg-white p-6 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
										size: 64,
										strokeWidth: 3,
										className: "text-[#8AF500]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "\r\n                  text-black\r\n                  text-xl\r\n                  sm:text-2xl\r\n                  font-bold\r\n                  leading-[1.15]\r\n                  text-right\r\n                ",
										children: [
											"Faster",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Decisions"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "enable-face enable-back rounded-[24px] p-6 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black text-xl sm:text-2xl font-bold leading-[1.15]",
										children: "Faster Decisions"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black/80 text-base sm:text-lg font-medium leading-snug",
										children: "Real-time data and dashboards turn information into action in minutes, not days."
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: enablesCard3Ref,
							className: "enable-card min-h-[310px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enable-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "enable-face enable-front rounded-[24px] bg-white p-6 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										size: 64,
										strokeWidth: 3,
										className: "text-[#8AF500]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "\r\n                  text-black\r\n                  text-xl\r\n                  sm:text-2xl\r\n                  font-bold\r\n                  leading-[1.15]\r\n                  text-right\r\n                ",
										children: [
											"Stronger",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Security"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "enable-face enable-back rounded-[24px] p-6 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black text-xl sm:text-2xl font-bold leading-[1.15]",
										children: "Stronger Security"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black/80 text-base sm:text-lg font-medium leading-snug",
										children: "Role-based access, audit trails and compliance built into every workflow."
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: enablesCard4Ref,
							className: "enable-card min-h-[310px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "enable-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "enable-face enable-front rounded-[24px] bg-white p-6 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, {
										size: 64,
										strokeWidth: 3,
										className: "text-[#8AF500]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "\r\n                  text-black\r\n                  text-xl\r\n                  sm:text-2xl\r\n                  font-bold\r\n                  leading-[1.15]\r\n                  text-right\r\n                ",
										children: [
											"Better",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Collaboration"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "enable-face enable-back rounded-[24px] p-6 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-black text-xl sm:text-2xl font-bold leading-[1.15]",
										children: "Better Collaboration"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-black/80 text-base sm:text-lg font-medium leading-snug",
										children: "One shared workspace keeps teams, partners and customers on the same page."
									})]
								})]
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: nextRef,
			className: "products-next relative h-screen bg-black flex items-center justify-center overflow-hidden px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "products-next-card relative flex min-h-[650px] w-full max-w-[1360px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0B1205] py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col items-center text-center px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							ref: nextTitleRef,
							className: "text-white text-[clamp(2rem,4.5vw,5.25rem)] font-bold leading-tight text-center",
							children: "Not just a license - a real partnership."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							ref: nextTextRef,
							className: "\r\n                  mt-8\r\n                  text-white\r\n                  text-[clamp(0.875rem,1.3vw,1.125rem)]\r\n                  font-medium\r\n                  leading-relaxed\r\n                ",
							children: [
								"Every product we sell, we also implement",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"- at the right price, with the right support."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: nextBtnRef,
							className: "\r\n                  mt-10\r\n                  flex\r\n                  items-center\r\n                  gap-3\r\n                  pl-6\r\n                  pr-3\r\n                  py-2.5\r\n                  rounded-full\r\n                  border-2\r\n                  border-[#8AF500]\r\n                  bg-[#D9D9D9]\r\n                  backdrop-blur-md\r\n                ",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "\r\n                    text-black\r\n                    text-sm\r\n                    sm:text-base\r\n                    font-bold\r\n                  ",
								children: "Request a Quote"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n                    w-11\r\n                    h-11\r\n                    rounded-full\r\n                    bg-white\r\n                    flex\r\n                    items-center\r\n                    justify-center\r\n                  ",
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
