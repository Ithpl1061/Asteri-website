import { Link, useLocation } from "@tanstack/react-router";
import logo from "/Asteri logo.png";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import {
  Menu,
  X,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
} from "lucide-react";

const links = [
  {
    label: "Home",
    to: "/",
    children: [],
  },

  {
    label: "About",
    to: "/about",
    children: [],
  },

  {
    label: "Services",
    to: "/services",
    children: [],
  },

  {
    label: "Solutions",
    to: "/solutions",
    children: [],
  },

  {
    label: "Industries",
    to: "/industries",
    children: [],
  },

  {
    label: "Partnership",
    to: "/Partnership",
    children: [],
  },

  {
    label: "Products",
    to: "/products",
    children: [],
  },

  {
    label: "Case Studies",
    to: "/case-studies",
    children: [],
  },

  {
    label: "Blog",
    to: "/blog",
    children: [],
  },

  {
    label: "Contact",
    to: "/contact",
    children: [],
  },
];

export function Navbar({ disableAnimations = false }: { disableAnimations?: boolean }) {
  const location = useLocation();
  const pathname = location.pathname;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(true);
  // const navRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (disableAnimations) {
    setScrolled(false);
    setShowNav(true);
    return;
  }

  let lastScroll = 0;

  const onScroll = () => {
    const currentScroll = window.scrollY;

    setScrolled(currentScroll > 12);

    if (currentScroll < 50) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    lastScroll = currentScroll;
  };

  onScroll();

  window.addEventListener("scroll", onScroll, {
    passive: true,
  });

  return () => window.removeEventListener("scroll", onScroll);
}, [disableAnimations]);

  // Keep the page still while the menu is open. The menu panel remains the
  // only scrollable area, so expanded subtopics stay accessible.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);


//===============================================================
// useEffect(() => {
//   if (!navRef.current) return;

//   gsap.set(navRef.current, {
//     x: 250,
//     opacity: 0,
//   });

//   const tl = gsap.timeline({
//     delay: 0.2,
//   });

//   tl.to(navRef.current, {
//     x: 0,
//     opacity: 1,
//     duration: 0.6,
//     ease: "power3.out",
//   });

//   tl.from(
//     ".navbar-premium img",
//     {
//       opacity: 0,
//       x: -15,
//       duration: 0.25,
//     },
//     "-=0.45"
//   );

//   tl.from(
//     ".navbar-premium svg",
//     {
//       opacity: 0,
//       x: 10,
//       stagger: 0.03,
//       duration: 0.2,
//     },
//     "-=0.3"
//   );

//   return () => {
//     tl.kill();
//   };
// }, []);

//===============================================================
  return (
    <header
      // ref={navRef}
      className={`
        absolute
        inset-x-0
        top-6
        z-[100]
        flex
        justify-center
        px-4
        ${disableAnimations ? "" : "transition-all duration-500 ease-out"}

        ${
          disableAnimations || showNav || open
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0 pointer-events-none"
        }
      `}
    >
      <nav
        className={`
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

          ${
            scrolled
              ? "bg-[#242424]/95 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
              : "bg-[#2a2a2a]/90"
          }
        `}
      >
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Asteri"
            className="
              h-8
              sm:h-10
              md:h-12
              lg:h-14
              w-auto
              object-contain
            "
          />
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-6">
          <a
            href="#"
            className={disableAnimations ? "" : "transition-all duration-300 hover:scale-110 hover:text-primary"}
          >
            <Linkedin className="h-5 w-5 sm:h-8 sm:w-8 text-white/80" />
          </a>

          <a
            href="#"
            className={disableAnimations ? "" : "transition-all duration-300 hover:scale-110 hover:text-primary"}
          >
            <Instagram className="h-5 w-5 sm:h-8 sm:w-8 text-white/80" />
          </a>

          <a
            href="#"
            className={disableAnimations ? "" : "transition-all duration-300 hover:scale-110 hover:text-primary"}
          >
            <Youtube className="h-5 w-5 sm:h-8 sm:w-8 text-white/80" />
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`
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
            `}
          >
            {open ? (
              <X className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            ) : (
              <Menu className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* MENU PANEL */}
      {open && (
        <div
          className="
            absolute
            top-24
            z-[110]
            w-full
            max-w-[1500px]
            min-h-[60vh]
            h-auto
            max-h-[calc(100dvh-7.5rem)]
            overflow-y-auto
            overflow-x-hidden
            overscroll-contain
            touch-pan-y
            bg-black
            p-4
            sm:p-6
            backdrop-blur-2xl
            shadow-[0_0_50px_rgba(0,0,0,0.45)]
            scrollbar-thin
            scrollbar-thumb-white/20
            scrollbar-track-transparent
          "

        >
          {/* <div className="mb-4 border-b border-white/10 pb-3">
            <p className="text-xs uppercase tracking-[0.35em] text-white">
              Navigation
            </p>
          </div> */}

          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <div
              key={l.to}
              onMouseEnter={() => setHovered(l.label)}
              onMouseLeave={() => setHovered(null)}
              className="border-b border-white/5"
            >

              {/* Menu Row */}
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className={`
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  ${disableAnimations ? "" : "transition-all duration-300"}

                  ${
                    pathname === l.to
                      ? "text-primary "//border border-primary/40
                      : "text-white hover:bg-primary/10 hover:text-white"
                  }
                `}
              >

              <span
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  font-light
                  uppercase
                  tracking-tight
                  leading-none
                "
              >
                {l.label}
              </span>

                <div
                  className={`
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
                  `}
                >
                  <ArrowRight
                    size={30}
                    className="text-primary"
                    strokeWidth={1.0}
                  />
                </div>

              </Link>

              {/* Submenu */}
              {hovered === l.label && l.children.length > 0 && (

                <div
                  className="
                    flex
                    flex-col
                    items-start
                    gap-2
                    pl-8
                    pb-4
                    pt-2
                    text-left
                  "
                >

                  {l.children.map((child) => (

                  <Link
                    key={child.label}
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className={`
                      text-2xl
                      sm:text-3xl
                      md:text-4xl
                      font-light
                      tracking-tight
                      leading-tight
                      text-white/90
                      ${disableAnimations ? "" : "hover:text-primary transition-all duration-300"}
                    `}
                  >
                    {child.label}
                  </Link>

                  ))}

                </div>

              )}

            </div>
            ))}
          </div>
              
        </div>
      )}
    </header>
  );
}
