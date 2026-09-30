import { Link } from "@tanstack/react-router";
import {
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function Footer({ disableAnimations = false }: { disableAnimations?: boolean }) {
  const footerRef = useRef(null);
//================================== Footer Animation ==================================
    useEffect(() => {
      if (disableAnimations) return;

      gsap.set(".footer-logo", {
        y: 120,
        opacity: 0,
      });

      gsap.set(".footer-left a", {
        y: 80,
        opacity: 0,
      });

      gsap.set(".footer-middle a", {
        y: 80,
        opacity: 0,
      });

      gsap.set(".footer-contact-item", {
        x: 150,
        opacity: 0,
      });

      gsap.set(".footer-social", {
        x: 150,
        opacity: 0,
      });

      gsap.set(".asteri-footer-huge-logo", {
        y: 100,
      });

      const footerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          // pin : true,
        },
      });

      footerTl.to(".footer-logo", {
        y: 0,
        opacity: 1,
      });

      footerTl.to(
        ".footer-left a",
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
        },
        0.1
      );

      footerTl.to(
        ".footer-middle a",
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
        },
        0.3
      );

      footerTl.to(
        ".footer-contact-item",
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
        },
        0.5
      );

      footerTl.to(
        ".footer-social",
        {
          x: 0,
          opacity: 1,
        },
        0.8
      );

      footerTl.to(
        ".asteri-footer-huge-logo",
        {
          y: 0,
          duration: 2,
        },
        0
      );

      return () => {
        footerTl.kill();
        footerTl.scrollTrigger?.kill();
      };
    }, [disableAnimations]);

//================================== Mian Code =========================================
  return (
    <footer  
    ref={footerRef} 
    className="footer-section relative overflow-hidden border-t border-[#82E926]/20 bg-black text-white">
      <div className="footer-content relative z-10 mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-12 pt-12">
        {/* TOP SECTION */}
        <div className="grid items-start gap-10 md:grid-cols-1 lg:grid-cols-[320px_1fr_420px]">
          {/* LOGO */}
          <div className="footer-logo flex justify-start">
            <img
              src="/Asteri logo.png"
              alt="Asteri"
              className="max-w-full w-[220px] sm:w-[260px] object-contain transition-all duration-500 hover:drop-shadow-[0_0_25px_#8AF500] cursor-pointer hover:animate-[spin_4s_linear_infinite]"
            />
          </div>

          {/* NAVIGATION */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 lg:gap-28 lg:justify-center">
            {/* LEFT COLUMN */}
            <div className="footer-left flex flex-col gap-4 text-[18px] sm:text-[20px]">
              <Link to="/" className="transition hover:text-[#7ED957]">
                Home
              </Link>

              <Link to="/about" className="transition hover:text-[#7ED957]">
                About
              </Link>

              <Link to="/services" className="transition hover:text-[#7ED957]">
                Services
              </Link>

              <Link to="/solutions" className="transition hover:text-[#7ED957]">
                Solutions
              </Link>

              <Link
                to="/industries"
                className="transition hover:text-[#7ED957]"
              >
                Industries
              </Link>
            </div>

            {/* RIGHT COLUMN */}
            <div className="footer-middle flex flex-col gap-4 text-[18px] sm:text-[20px] whitespace-nowrap">
              <Link
                to="/Partnership"
                className="transition hover:text-[#7ED957]"
              >
                Partnership
              </Link>

              <Link
                to="/case-studies"
                className="transition hover:text-[#7ED957]"
              >
                Case Studies
              </Link>

              <Link
                to="/Asteri_product-suite"
                className="transition hover:text-[#7ED957]"
              >
                Asteri Product Suite
              </Link>

              <Link
                to="/products"
                className="transition hover:text-[#7ED957]"
              >
                Products
              </Link>

              <Link to="/blog" className="transition hover:text-[#7ED957]">
                Blog
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-[#7ED957]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-6 text-[18px] sm:text-[20px]">
            <div className="footer-contact-item flex flex-col gap-3 sm:flex-row sm:items-center">
              <Mail className="h-6 w-6 shrink-0 text-[#7ED957]" />
              <span>info@asteritechnology.com</span>
            </div>

            <div className="footer-contact-item flex items-center gap-4 text-[20px]">
              <Phone className="h-6 w-6 shrink-0 text-[#7ED957]" />
              <span className="sm:whitespace-nowrap">
                +1 302 319 9898 / +91 982 342 0330
              </span>
            </div>

            <div className="footer-contact-item flex items-center gap-4 text-[20px]">
              <MapPin className="h-6 w-6 shrink-0 text-[#7ED957]" />
              <span>India · Global Delivery</span>
            </div>

            <div className="footer-social flex gap-6 pt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8 cursor-pointer text-[#7ED957] transition hover:scale-110" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-8 w-8 cursor-pointer text-[#7ED957] transition hover:scale-110" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-8 w-8 cursor-pointer text-[#7ED957] transition hover:scale-110" />
              </a>
            </div>
          </div>
        </div>


        {/* HUGE ASTERI */}
        <div className="asteri-footer-huge-logo relative flex justify-center mt-6 pb-6">
          <img
            src="/Asteri logo for footer.svg"
            alt="Asteri"
            className="h-[250px] w-auto object-contain select-none pointer-events-none"
          />
        </div>
        </div>
    </footer>
  );
}
