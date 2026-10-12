import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as ScrollTrigger, r as gsapWithCSS } from "../_libs/gsap.mjs";
import { S as ArrowUpRight, b as CircleQuestionMark, t as lucide_react_exports } from "../_libs/lucide-react.mjs";
import { i as PageShell } from "./PageShell-C7bbItOy.mjs";
import { t as apiUrl } from "./api-DH5Qv0Mw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-SEsLJPBB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Glowing green node used on the connector lines (Figma "Orb": 24px #15EC0D
* with a six-layer #09D32A drop-shadow glow).
*/
var GlowOrb = (0, import_react.forwardRef)(function GlowOrb({ className = "", style }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		"aria-hidden": "true",
		className: `pointer-events-none block h-4 w-4 rounded-full bg-[#15EC0D] sm:h-6 sm:w-6 ${className}`,
		style: {
			boxShadow: "0 0 3px #09D32A, 0 0 6px #09D32A, 0 0 21px #09D32A, 0 0 41px rgba(9,211,42,0.75), 0 0 71px rgba(9,211,42,0.5), 0 0 124px rgba(9,211,42,0.35)",
			...style
		}
	});
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
function Home() {
	const heroRef = (0, import_react.useRef)(null);
	const heroOrbTrackRef = (0, import_react.useRef)(null);
	const heroOrbPathRef = (0, import_react.useRef)(null);
	const orbRef = (0, import_react.useRef)(null);
	const heroTextWrapRef = (0, import_react.useRef)(null);
	const heroLine1Ref = (0, import_react.useRef)(null);
	const heroLine2Ref = (0, import_react.useRef)(null);
	const heroLine3Ref = (0, import_react.useRef)(null);
	const heroDotRef = (0, import_react.useRef)(null);
	const heroLineRef = (0, import_react.useRef)(null);
	const aboutIntroSectionRef = (0, import_react.useRef)(null);
	const aboutIntroLineLeftRef = (0, import_react.useRef)(null);
	const aboutIntroDotRef = (0, import_react.useRef)(null);
	const aboutConnectorLineRef = (0, import_react.useRef)(null);
	const aboutConnectorDotRef = (0, import_react.useRef)(null);
	const aboutHeadingRef = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const about2Ref = (0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const whiteRef = (0, import_react.useRef)(null);
	const quoteRef = (0, import_react.useRef)(null);
	const transitionRef = (0, import_react.useRef)(null);
	const quote1Ref = (0, import_react.useRef)(null);
	const quote2Ref = (0, import_react.useRef)(null);
	const whatRef = (0, import_react.useRef)(null);
	const industriesSectionRef = (0, import_react.useRef)(null);
	const industriesTitleRef = (0, import_react.useRef)(null);
	const industriesGridRef = (0, import_react.useRef)(null);
	const quoteSectionRef = (0, import_react.useRef)(null);
	const caseRef = (0, import_react.useRef)(null);
	const caseTitleRef = (0, import_react.useRef)(null);
	const testimonialsRef = (0, import_react.useRef)(null);
	const nextRef = (0, import_react.useRef)(null);
	const nextTitleRef = (0, import_react.useRef)(null);
	const nextTextRef = (0, import_react.useRef)(null);
	const nextBtnRef = (0, import_react.useRef)(null);
	const [services, setServices] = (0, import_react.useState)([]);
	const [industries, setIndustries] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetch(apiUrl("/api/services")).then((res) => res.json()).then((data) => setServices(data)).catch((err) => console.error(err));
		fetch(apiUrl("/api/industries")).then((res) => res.json()).then((data) => setIndustries(data)).catch((err) => console.error(err));
	}, []);
	(0, import_react.useEffect)(() => {
		const dot = heroDotRef.current;
		if (!dot) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const tl = gsapWithCSS.timeline({ delay: .3 }).fromTo(dot, {
			scale: 0,
			opacity: 0
		}, {
			scale: 1,
			opacity: 1,
			duration: .6,
			ease: "back.out(2.2)"
		});
		return () => {
			tl.kill();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const section = about2Ref.current;
		const heading = aboutHeadingRef.current;
		const line = aboutConnectorLineRef.current;
		const dot = aboutConnectorDotRef.current;
		if (!section || !heading || !line || !dot) return;
		const measure = () => {
			const sectionTop = section.getBoundingClientRect().top;
			const h = heading.getBoundingClientRect();
			const centre = h.top + h.height / 2 - sectionTop;
			line.style.height = `${centre}px`;
			dot.style.top = `${centre}px`;
		};
		measure();
		document.fonts?.ready.then(measure);
		const ro = new ResizeObserver(measure);
		ro.observe(section);
		ro.observe(heading);
		return () => ro.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const mm = gsapWithCSS.matchMedia();
		mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
			const isPinned = true;
			let resetTraveler;
			const heroDot = heroDotRef.current;
			const introSection = aboutIntroSectionRef.current;
			const introDot = aboutIntroDotRef.current;
			const introLineLeft = aboutIntroLineLeftRef.current;
			const aboutSection = about2Ref.current;
			const connectorDot = aboutConnectorDotRef.current;
			if (heroDot && introSection && introDot && introLineLeft && aboutSection && connectorDot) {
				const ease = gsapWithCSS.parseEase("power1.inOut");
				const HOLD = 1.3;
				const ACROSS = .4;
				const LEG_DROP = .5;
				let p1 = 0;
				let p2 = 0;
				let p3 = 0;
				const place = (el, x, y) => gsapWithCSS.set(el, {
					x,
					y,
					xPercent: -50,
					yPercent: -50
				});
				const update = () => {
					const heroRect = heroRef.current.getBoundingClientRect();
					const dotRect = heroDot.getBoundingClientRect();
					const currentX = gsapWithCSS.getProperty(heroDot, "x") || 0;
					const restX = dotRect.left + dotRect.width / 2 - currentX;
					const distance = Math.max(heroRect.right - restX + 60, window.innerWidth - restX + 60);
					place(heroDot, ease(p1) * distance, 0);
					const sec = introSection.getBoundingClientRect();
					introLineLeft.getBoundingClientRect();
					const titleY = sec.height / 2;
					const startX = sec.width;
					const gutterX = window.innerWidth * .0925 - sec.left;
					const legEndY = titleY + sec.height * LEG_DROP;
					const headingY = parseFloat(connectorDot.style.top) || 0;
					const restOfLeg = sec.height - legEndY;
					const travel = (restOfLeg + headingY) * p3;
					let ix = gutterX;
					let iy = legEndY + travel;
					if (p3 === 0) if (p2 < ACROSS) {
						ix = startX + (gutterX - startX) * ease(p2 / ACROSS);
						iy = titleY;
					} else iy = titleY + (legEndY - titleY) * ((p2 - ACROSS) / (1 - ACROSS));
					place(introDot, ix, iy);
					const aboutY = travel - restOfLeg;
					place(connectorDot, 0, Math.min(aboutY, headingY) - headingY);
					const r = 12;
					heroDot.style.visibility = p2 === 0 ? "visible" : "hidden";
					introDot.style.visibility = p2 > 0 && iy <= sec.height + r ? "visible" : "hidden";
					connectorDot.style.visibility = p2 > 0 && aboutY >= -12 ? "visible" : "hidden";
				};
				const heroLeg = ScrollTrigger.create({
					trigger: heroRef.current,
					start: "top top",
					end: "+=80%",
					pin: isPinned,
					anticipatePin: 1,
					onUpdate: (self) => {
						p1 = self.progress;
						update();
					}
				});
				const hold = ScrollTrigger.create({
					trigger: introSection,
					start: "top top",
					end: `+=${HOLD * 100}%`,
					pin: true,
					anticipatePin: 1,
					onUpdate: (self) => {
						p2 = self.progress;
						update();
					}
				});
				const release = ScrollTrigger.create({
					trigger: introSection,
					start: () => hold.end,
					end: () => hold.end + introSection.offsetHeight,
					onUpdate: (self) => {
						p3 = self.progress;
						update();
					}
				});
				const syncAll = () => {
					p1 = heroLeg.progress;
					p2 = hold.progress;
					p3 = release.progress;
					update();
				};
				ScrollTrigger.addEventListener("refresh", syncAll);
				syncAll();
				resetTraveler = () => {
					ScrollTrigger.removeEventListener("refresh", syncAll);
					for (const el of [
						heroDot,
						introDot,
						connectorDot
					]) el.style.visibility = "";
					gsapWithCSS.set([heroDot, connectorDot], {
						x: 0,
						y: 0,
						xPercent: -50,
						yPercent: -50
					});
				};
			}
			return () => resetTraveler?.();
		});
		return () => mm.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		const mm = gsapWithCSS.matchMedia();
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		mm.add({
			isDesktop: "(min-width: 1024px)",
			isTablet: "(min-width: 768px) and (max-width: 1023px)",
			isMobile: "(max-width: 767px)",
			isShort: "(max-height: 700px)",
			reduceMotion: "(prefers-reduced-motion: reduce)"
		}, (context) => {
			const { isDesktop, isTablet, isMobile } = context.conditions;
			const isPinned = isDesktop;
			const isCompact = isMobile || isTablet;
			const positionDotOnPath = (dot, path, progress) => {
				const svg = path?.ownerSVGElement;
				const track = dot?.parentElement;
				const matrix = path?.getScreenCTM();
				if (!dot || !path || !svg || !track || !matrix) return;
				const point = path.getPointAtLength(path.getTotalLength() * Math.min(Math.max(progress, 0), 1));
				const screenPoint = svg.createSVGPoint();
				screenPoint.x = point.x;
				screenPoint.y = point.y;
				const trackBounds = track.getBoundingClientRect();
				const position = screenPoint.matrixTransform(matrix);
				gsapWithCSS.set(dot, {
					zIndex: 30,
					x: position.x - trackBounds.left,
					y: position.y - trackBounds.top,
					xPercent: -50,
					yPercent: -50
				});
			};
			if (reduceMotion) {
				gsapWithCSS.set([
					".about-title-main",
					".about-text",
					".about-btn",
					".what-content",
					".service-row",
					".industries-left",
					".industries-right",
					".industries-grid",
					".quote-text",
					quote1Ref.current,
					quote2Ref.current,
					".testimonials-title",
					".testimonial-card",
					nextTitleRef.current,
					nextTextRef.current,
					nextBtnRef.current
				], {
					opacity: 1,
					x: 0,
					y: 0,
					clearProps: "transform"
				});
				return;
			}
			if (heroRef.current && orbRef.current && heroOrbPathRef.current) {
				const heroProgress = { value: 0 };
				const getOrbTravel = () => Math.max(heroOrbTrackRef.current?.offsetWidth ?? 0, 0);
				const updateHeroOrb = () => positionDotOnPath(orbRef.current, heroOrbPathRef.current, heroProgress.value);
				updateHeroOrb();
				gsapWithCSS.to(heroProgress, {
					value: 1,
					ease: "none",
					onUpdate: updateHeroOrb,
					scrollTrigger: {
						trigger: heroRef.current,
						start: "top top",
						end: () => `+=${Math.max(getOrbTravel(), window.innerHeight)}`,
						scrub: true,
						pin: true,
						anticipatePin: 1,
						invalidateOnRefresh: true,
						onRefresh: updateHeroOrb
					}
				});
			}
			if (aboutIntroSectionRef.current) gsapWithCSS.timeline({ scrollTrigger: {
				trigger: aboutIntroSectionRef.current,
				start: "top 65%",
				toggleActions: "play none none reverse"
			} }).from(".about-intro-title", {
				opacity: 0,
				y: 40,
				duration: .9,
				ease: "power3.out"
			});
			if (isPinned) {
				gsapWithCSS.set(".about-title-main", {
					opacity: 0,
					x: 260,
					y: 0
				});
				gsapWithCSS.set(".about-text", {
					opacity: 0,
					x: 320,
					y: 0
				});
				gsapWithCSS.set(".about-btn", {
					opacity: 0,
					x: 380,
					y: 0
				});
				gsapWithCSS.set(quote1Ref.current, {
					y: 200,
					opacity: 0
				});
				gsapWithCSS.set(quote2Ref.current, {
					y: 200,
					opacity: 0
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: about2Ref.current,
					start: "top top",
					end: "+=6000",
					scrub: 1.5,
					pin: true,
					anticipatePin: 1
				} }).to(".about-title-main", {
					opacity: 1,
					x: 0,
					duration: 2.2,
					ease: "power3.out"
				}, .3).to(".about-text", {
					opacity: 1,
					x: 0,
					duration: 2.2,
					ease: "power3.out"
				}, .6).to(".about-btn", {
					opacity: 1,
					x: 0,
					duration: 2.2,
					ease: "power3.out"
				}, .9).to({}, { duration: 1.5 }).to([
					".about-title-main",
					".about-text",
					".about-btn"
				], {
					opacity: 0,
					x: -80,
					duration: .8,
					ease: "power2.in"
				}).to(".about-connector", {
					opacity: 0,
					duration: .8,
					ease: "power2.in"
				}, "<").to(quoteRef.current, {
					opacity: 1,
					duration: .8
				}, "+=0.1").to(quote1Ref.current, {
					opacity: 1,
					y: 0,
					duration: 1,
					ease: "power4.out"
				}).to({}, { duration: 2.2 }).to(quote1Ref.current, {
					y: -160,
					opacity: 0,
					duration: .8,
					ease: "power2.in"
				}).fromTo(quote2Ref.current, {
					y: 200,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power4.out"
				}).to({}, { duration: 2.2 }).to(quote2Ref.current, {
					y: -160,
					opacity: 0,
					duration: .8,
					ease: "power2.in"
				});
			} else {
				gsapWithCSS.set(".about-title-main", {
					opacity: 0,
					x: 80,
					y: 0
				});
				gsapWithCSS.set(".about-text", {
					opacity: 0,
					x: 100,
					y: 0
				});
				gsapWithCSS.set(".about-btn", {
					opacity: 0,
					x: 120,
					y: 0
				});
				gsapWithCSS.set(quoteRef.current, { autoAlpha: 0 });
				gsapWithCSS.set(quote1Ref.current, {
					opacity: 0,
					y: 36
				});
				gsapWithCSS.set(quote2Ref.current, {
					opacity: 0,
					y: 36
				});
				gsapWithCSS.timeline({ scrollTrigger: {
					trigger: about2Ref.current,
					start: "top 82%",
					end: "bottom 12%",
					scrub: true,
					invalidateOnRefresh: true
				} }).to(".about-title-main", {
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power2.out"
				}, .1).to(".about-text", {
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power2.out"
				}, .3).to(".about-btn", {
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power2.out"
				}, .5).to([
					".about-title-main",
					".about-text",
					".about-btn"
				], {
					opacity: 0,
					x: -40,
					duration: .25
				}, 1.15).to(quoteRef.current, {
					autoAlpha: 1,
					duration: .2
				}, 1.25).to(quote1Ref.current, {
					opacity: 1,
					y: 0,
					duration: .45,
					ease: "power2.out"
				}, 1.3).to(quote1Ref.current, {
					opacity: 0,
					y: -28,
					duration: .3,
					ease: "power2.in"
				}, 1.95).to(quote2Ref.current, {
					opacity: 1,
					y: 0,
					duration: .45,
					ease: "power2.out"
				}, 2.05);
			}
			gsapWithCSS.set(".what-content", { opacity: 0 });
			gsapWithCSS.set(".what-card", {
				opacity: 0,
				scale: .95
			});
			gsapWithCSS.set(".service-row", {
				opacity: 0,
				x: isCompact ? 0 : 350
			});
			if (isPinned) gsapWithCSS.timeline({ scrollTrigger: {
				trigger: whatRef.current,
				start: "top top",
				end: "+=5200",
				scrub: 1,
				pin: true,
				anticipatePin: 1
			} }).to(".what-big-title", {
				scale: .42,
				x: "-25%",
				y: "-30%",
				opacity: 0,
				duration: .4,
				ease: "power1.inOut"
			}).to(".what-content", {
				opacity: 1,
				duration: .2,
				ease: "power1.out"
			}, .15).to(".what-card", {
				opacity: 1,
				scale: 1,
				duration: .4,
				ease: "power2.out"
			}, .2).to(".service-row", {
				opacity: 1,
				x: 0,
				stagger: .35,
				duration: .6,
				ease: "power3.out"
			}, .25).to({}, { duration: .8 });
			else {
				gsapWithCSS.to(".what-big-title", {
					scale: .55,
					y: -40,
					scrollTrigger: {
						trigger: whatRef.current,
						start: "top 60%",
						end: "top 20%",
						scrub: 1
					}
				});
				gsapWithCSS.to(".what-content", {
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: ".what-content",
						start: "top 85%",
						toggleActions: "play none none reverse"
					}
				});
				gsapWithCSS.to(".service-row", {
					opacity: 1,
					x: 0,
					stagger: .1,
					scrollTrigger: {
						trigger: ".what-content",
						start: "top 80%",
						toggleActions: "play none none reverse"
					}
				});
			}
			gsapWithCSS.set(".industries-grid", {
				x: isCompact ? 0 : "100vw",
				opacity: isCompact ? 1 : 0
			});
			if (isPinned) gsapWithCSS.timeline({ scrollTrigger: {
				trigger: industriesSectionRef.current,
				start: "top top",
				end: "+=1800",
				scrub: 1,
				pin: true,
				anticipatePin: 1
			} }).fromTo(".industries-left", {
				x: isCompact ? 0 : -80,
				opacity: 0
			}, {
				x: 0,
				opacity: 1,
				duration: .3,
				ease: "power2.out"
			}, 0).fromTo(".industries-right", {
				x: isCompact ? 0 : 80,
				opacity: 0
			}, {
				x: 0,
				opacity: 1,
				duration: .3,
				ease: "power2.out"
			}, 0).to(".industries-grid", {
				x: 0,
				opacity: 1,
				duration: 1.2,
				ease: "power2.out"
			}, .3);
			else gsapWithCSS.to(".industries-grid", {
				x: 0,
				opacity: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: industriesGridRef.current,
					start: "top 85%",
					toggleActions: "play none none reverse"
				}
			});
			gsapWithCSS.set(".quote-text", {
				y: isCompact ? 60 : 300,
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: quoteSectionRef.current,
				start: "top top",
				end: "+=4200",
				pin: isDesktop,
				scrub: 1,
				anticipatePin: 1
			} }).to(".quote-text", {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 3 }).to(".quote-text", {
				y: -200,
				opacity: 0,
				duration: 1,
				ease: "power2.in"
			});
			if (isPinned && caseTitleRef.current) {
				const travel = () => -(caseTitleRef.current.scrollWidth + window.innerWidth * .5);
				const caseTl = gsapWithCSS.timeline({ scrollTrigger: {
					trigger: caseRef.current,
					start: "top top",
					end: "+=3600",
					scrub: 1.5,
					pin: true,
					anticipatePin: 1
				} });
				caseTl.fromTo(caseTitleRef.current, { x: window.innerWidth }, {
					x: travel,
					duration: 1.3,
					ease: "none"
				});
				[
					1,
					2,
					3,
					4,
					5,
					6
				].forEach((num, index) => {
					caseTl.fromTo(`.tag-${num}`, {
						opacity: 0,
						scale: .8
					}, {
						opacity: 1,
						scale: 1
					}, .2 + index * .12);
				});
			} else gsapWithCSS.from(".case-tag", {
				opacity: 0,
				y: 20,
				stagger: .1,
				scrollTrigger: {
					trigger: caseRef.current,
					start: "top 60%"
				}
			});
			gsapWithCSS.set(".testimonial-card", {
				y: isCompact ? 40 : 200,
				opacity: 0
			});
			const testimonialTl = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: testimonialsRef.current,
				start: "top top",
				end: "+=1400",
				scrub: 1,
				pin: isPinned,
				anticipatePin: 1
			} });
			if (isPinned) testimonialTl.fromTo(".testimonials-title", { x: window.innerWidth }, {
				x: 0,
				ease: "power3.out"
			});
			testimonialTl.to(".testimonial-card", {
				y: 0,
				opacity: 1,
				ease: "power3.out"
			}, isDesktop ? .6 : 0);
			gsapWithCSS.set(nextTitleRef.current, {
				y: isCompact ? 40 : 100,
				opacity: 0
			});
			gsapWithCSS.set(nextTextRef.current, {
				y: isCompact ? 30 : 80,
				opacity: 0
			});
			gsapWithCSS.set(nextBtnRef.current, {
				y: isCompact ? 30 : 80,
				opacity: 0
			});
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: nextRef.current,
				start: "top top",
				end: "+=4800",
				scrub: 1,
				pin: isPinned,
				anticipatePin: 1
			} }).to(nextTitleRef.current, {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 }).to(nextTextRef.current, {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 }).to(nextBtnRef.current, {
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out"
			}).to({}, { duration: 1.5 });
			gsapWithCSS.set(".footer-logo", {
				y: 80,
				opacity: 0
			});
			gsapWithCSS.set(".footer-left a, .footer-middle a", {
				y: 60,
				opacity: 0
			});
			gsapWithCSS.set(".footer-contact-item, .footer-social", {
				x: isMobile ? 0 : 100,
				opacity: 0
			});
			gsapWithCSS.set(".asteri-footer-huge-logo", { y: isMobile ? 60 : 200 });
			gsapWithCSS.timeline({ scrollTrigger: {
				trigger: ".footer-section",
				start: "top 80%",
				end: "+=50",
				scrub: 1
			} }).to(".footer-logo", {
				y: 0,
				opacity: 1
			}).to(".footer-left a", {
				y: 0,
				opacity: 1,
				stagger: .1
			}, .1).to(".footer-middle a", {
				y: 0,
				opacity: 1,
				stagger: .1
			}, .25).to(".footer-contact-item", {
				x: 0,
				opacity: 1,
				stagger: .12
			}, .4).to(".footer-social", {
				x: 0,
				opacity: 1
			}, .6).to(".asteri-footer-huge-logo", {
				y: 0,
				duration: 1.5
			}, 0);
			return () => {};
		});
		let refreshTimer;
		let viewportWidth = window.innerWidth;
		const scheduleRefresh = () => {
			clearTimeout(refreshTimer);
			refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
		};
		const handleResize = () => {
			if (window.innerWidth === viewportWidth) return;
			viewportWidth = window.innerWidth;
			scheduleRefresh();
		};
		window.addEventListener("resize", handleResize);
		window.addEventListener("orientationchange", scheduleRefresh);
		let refreshFrame;
		document.fonts.ready.then(() => {
			refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
		});
		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("orientationchange", scheduleRefresh);
			clearTimeout(refreshTimer);
			if (refreshFrame) cancelAnimationFrame(refreshFrame);
			mm.revert();
		};
	}, [services.length, industries.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: heroRef,
			className: "relative -mt-24 min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:min-h-screen",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center justify-center px-6 sm:min-h-[100dvh] lg:min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: heroTextWrapRef,
					className: "flex flex-col items-center text-center font-display font-bold leading-[1.1] tracking-tight will-change-transform",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							ref: heroLine1Ref,
							className: "type-display text-white pb-1",
							children: [
								"Engineering",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										color: "#000000",
										WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
										paintOrder: "stroke fill",
										display: "inline-block",
										paddingBottom: "0.1em"
									},
									children: "Digital"
								}),
								" ",
								"Systems"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							ref: heroLine2Ref,
							className: "type-display pb-1",
							style: {
								color: "#000000",
								WebkitTextStroke: "clamp(1.5px, 0.2vw, 3px) #82E926",
								paintOrder: "stroke fill",
								display: "inline-block",
								paddingBottom: "0.1em"
							},
							children: "That Scale With"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative inline-block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										ref: heroLine3Ref,
										className: "type-display text-white",
										children: "Ambition"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										ref: heroLineRef,
										"aria-hidden": "true",
										className: "pointer-events-none absolute top-[55%] -mt-[0.5px] left-[calc(100%+clamp(18px,2.8vw,40px))] h-px w-[100vw] origin-left bg-[#15EC0D]"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowOrb, {
										ref: heroDotRef,
										className: "absolute top-[55%] left-[calc(100%+clamp(18px,2.8vw,40px))] z-10 -translate-x-1/2 -translate-y-1/2"
									})
								]
							})
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: aboutIntroSectionRef,
			className: "relative flex min-h-[60svh] items-center overflow-hidden bg-black lg:h-screen lg:min-h-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex w-full items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "hidden w-[9.25vw] shrink-0 lg:block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: aboutIntroLineLeftRef,
							"aria-hidden": "true",
							className: "about-intro-line-left hidden h-[1.5px] flex-1 origin-right bg-[#15EC0D] lg:block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "about-intro-title relative z-10 mx-auto shrink-0 bg-black lg:mx-[46px]",
							style: {
								color: "#FFF",
								fontFamily: "\"Inter\", sans-serif",
								fontSize: "clamp(2.25rem, 8.88vw, 128px)",
								fontStyle: "normal",
								fontWeight: 600,
								lineHeight: "normal"
							},
							children: "ABOUT US"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "about-intro-line-right hidden h-[1.5px] flex-1 origin-left bg-[#15EC0D] lg:block"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowOrb, {
					ref: aboutIntroDotRef,
					className: "absolute left-0 top-0 z-0 hidden lg:block",
					style: { visibility: "hidden" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute bottom-0 left-[9.25vw] top-1/2 -ml-[0.75px] hidden w-[1.5px] bg-[#15EC0D] lg:block"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: about2Ref,
			className: "relative flex min-h-[100svh] items-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:min-h-0 lg:px-0 lg:py-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					ref: aboutConnectorLineRef,
					"aria-hidden": "true",
					className: "about-connector pointer-events-none absolute left-[9.25vw] top-0 -ml-[0.75px] hidden w-[1.5px] origin-top bg-[#15EC0D] lg:block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowOrb, {
					ref: aboutConnectorDotRef,
					className: "about-connector absolute left-[9.25vw] z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto w-full max-w-3xl text-center lg:absolute lg:left-[16vw] lg:top-[42%] lg:mx-0 lg:w-[73vw] lg:max-w-none lg:-translate-y-1/2 lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							ref: aboutHeadingRef,
							className: "about-title-main type-heading text-white",
							children: "ABOUT US"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "about-text mt-6 type-lead text-white/85 md:mt-8",
							children: "We are a consulting-first technology firm helping organizations modernize, unify, and scale their digital ecosystems; where business strategy meets real-world execution."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "about-btn mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] px-5 py-3 pr-3 backdrop-blur-md sm:gap-4 sm:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "type-button text-black",
								children: "Get In Touch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									size: 28,
									className: "text-black",
									strokeWidth: 2.3
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: transitionRef,
					className: "absolute z-[90] rounded-full bg-primary/75 pointer-events-none",
					style: {
						width: 24,
						height: 24,
						left: "9%",
						top: "clamp(160px, 24vh, 212px)",
						opacity: 0,
						transform: "translate(-50%, -50%)",
						boxShadow: `0 0 24px oklch(0.88 0.27 142 / 0.8), 0 0 64px oklch(0.88 0.27 142 / 0.65), 0 0 128px oklch(0.88 0.27 142 / 0.4)`
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: whiteRef,
					className: "absolute left-1/2 top-1/2 h-10 w-10 rounded-full bg-white/85 opacity-0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: quoteRef,
					className: "absolute inset-0 flex items-center justify-center overflow-hidden opacity-0 bg-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full max-w-6xl h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							ref: quote1Ref,
							className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center type-statement text-black whitespace-nowrap",
							children: "Technology, in isolation, doesn’t scale."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							ref: quote2Ref,
							className: "absolute left-1/2 top-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 px-6 text-center type-statement text-black text-balance",
							children: "Enduring systems emerge when business, data and infrastructure move in harmony."
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: whatRef,
			className: "relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-black px-5 py-16 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:min-h-0 lg:px-0 lg:py-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "what-big-title relative z-10 mb-10 text-center font-display type-title uppercase text-white lg:absolute lg:mb-0 lg:whitespace-nowrap",
				children: "WHAT WE DO"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "what-content relative flex w-full items-center justify-center lg:absolute lg:inset-0 lg:w-auto lg:px-6 xl:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl w-full grid gap-6 lg:gap-8 lg:grid-cols-[320px_1fr] items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "what-card relative hidden lg:block h-[420px] overflow-hidden rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg opacity-40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/What we do.png",
								alt: "What We Do",
								width: 800,
								height: 600,
								className: "absolute inset-0 h-full w-full rounded-2xl object-cover"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex w-full flex-col lg:max-h-none lg:overflow-visible",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "service-row group border-b border-white/8 py-2.5 transition-all duration-300 hover:translate-x-2 sm:py-3 lg:py-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 sm:gap-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "w-[45px] sm:w-[60px] shrink-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-xs sm:text-base font-semibold text-muted-foreground",
											children: [s.sequenceNumber, "."]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "service-line mt-1 h-px w-8 bg-white" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 font-display text-sm font-semibold tracking-tight sm:text-base md:text-lg",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "/services",
										className: "ml-auto flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-primary hover:text-black hover:rotate-45 hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 sm:h-4 sm:w-4" })
									})
								]
							})
						}, s.sequenceNumber))
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: industriesSectionRef,
			className: "relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-black py-6 sm:min-h-[100dvh] sm:py-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full px-4 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between mb-4 lg:mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					ref: industriesTitleRef,
					className: "industries-title my-auto flex flex-col gap-[clamp(1rem,2.5vw,2.5rem)] uppercase tracking-tight text-white",
					style: {
						color: "#FFF",
						fontFamily: "\"Inter\", sans-serif",
						fontSize: "clamp(2.25rem, 8.88vw, 128px)",
						fontStyle: "normal",
						fontWeight: 600,
						lineHeight: "normal"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "industries-left",
						children: "Industries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "industries-right ml-auto w-fit",
						children: "We Serve"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: industriesGridRef,
				className: "industries-grid w-full grid grid-cols-1 border-y border-white bg-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-auto",
				children: industries.map((i, idx) => {
					const IconComp = lucide_react_exports[i.iconName] || CircleQuestionMark;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `industry-card flex min-h-[163px] items-center justify-center bg-black px-4 py-[23px] sm:min-h-[183px] sm:px-6 ${idx < industries.length - 1 ? "border-b sm:border-b-0 sm:border-r border-white/50" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { className: "mx-auto mb-3 sm:mb-4 h-9 w-9 sm:h-10 sm:w-10 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "type-card text-white",
								children: [i.titleLine1, i.titleLine2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), i.titleLine2] }) : null]
							})]
						})
					}, i.id);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: quoteSectionRef,
			className: "quote-section relative flex min-h-[65svh] items-center justify-center overflow-hidden px-6 py-20 sm:min-h-[65dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "quote-text tracking-tight text-center",
					style: {
						color: "#FFF",
						fontFamily: "\"Inter\", sans-serif",
						fontSize: "clamp(1.5rem, 3.5vw, 3.5rem)",
						fontStyle: "normal",
						fontWeight: 600,
						lineHeight: 1.3
					},
					children: [
						"Technology only matters",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"when it delivers clarity"
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			ref: caseRef,
			className: "case-studies-section relative overflow-hidden bg-black py-20 lg:flex lg:h-screen lg:items-center lg:py-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: caseTitleRef,
				className: "case-title relative hidden whitespace-nowrap uppercase text-white lg:block",
				style: {
					color: "#FFF",
					fontFamily: "\"Inter\", sans-serif",
					fontSize: "clamp(4.5rem, 25vw, 481px)",
					fontStyle: "normal",
					fontWeight: 600,
					lineHeight: "normal"
				},
				children: [
					"CASE",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-1 absolute left-[3%] top-[70%]",
						children: [
							"Sales & Service",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Cloud Implementation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-2 absolute left-[12%] top-[10%]",
						children: [
							"Warehouse",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Management"
						]
					}),
					"STUDIES",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "case-tag type-card tag-3 absolute left-[32%] top-[75%]",
						children: "SAP AMC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-4 absolute left-[47%] top-[29%]",
						children: [
							"Vehicle Management",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"System"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-5 absolute left-[57%] top-[71%]",
						children: [
							"Medical Claim",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Processing-Automation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card tag-6 absolute left-[85%] top-[25%]",
						children: [
							"Augmented Reality-Based",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Hospital Navigation App"
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-2xl gap-3 px-6 lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-5 text-center font-display text-[clamp(2.5rem,13vw,5.5rem)] font-bold uppercase leading-[0.82] text-white",
						children: "Case Studies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-start",
						children: [
							"Sales & Service",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Cloud Implementation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-end",
						children: [
							"Warehouse",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Management"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-start",
						children: "SAP AMC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-end",
						children: [
							"Vehicle Management",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"System"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-start",
						children: [
							"Medical Claim",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Processing-Automation"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-tag type-card static w-fit max-w-full justify-self-end",
						children: [
							"Augmented Reality-Based",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Hospital Navigation App"
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: testimonialsRef,
			className: "testimonials-section relative min-h-[100svh] overflow-hidden bg-black sm:min-h-[100dvh] lg:h-screen lg:min-h-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-[100svh] flex-col items-center justify-center gap-8 px-6 py-16 sm:min-h-[100dvh] lg:h-full lg:min-h-0 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "testimonials-title text-center font-display type-title uppercase text-white lg:whitespace-nowrap",
					children: "TESTIMONIALS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "testimonial-card relative mx-auto w-full max-w-xl rounded-[24px] bg-[#d9d9d9d5] p-5 sm:rounded-[40px] sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-lead text-black",
						children: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Faucibus ex sapien vitae pellentesque sem placerat in. Cursus mi pretium tellus duis convallis tempus leo."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 sm:mt-8 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-black shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "type-lead font-bold text-black",
							children: "Lorem Ipsum"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "type-body text-black",
							children: "Lorem Ipsum"
						})] })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			ref: nextRef,
			className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black px-6 py-20 sm:min-h-[100dvh] lg:h-screen lg:min-h-0 lg:px-0 lg:py-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 max-w-5xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						ref: nextTitleRef,
						className: "text-white type-display",
						children: "Let's Build What's Next."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						ref: nextTextRef,
						className: "mt-4 type-lead font-semibold text-white",
						children: "We'll help you design the path forward."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						ref: nextBtnRef,
						className: "mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#8AF500] bg-[#D9D9D9] px-5 py-3 pr-3 backdrop-blur-md sm:gap-4 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-button text-black",
							children: "Get In Touch"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 28,
								className: "text-black",
								strokeWidth: 2.3
							})
						})]
					})
				]
			})
		})
	] }) });
}
//#endregion
export { Home as component };
