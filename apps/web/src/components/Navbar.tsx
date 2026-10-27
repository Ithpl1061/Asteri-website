import { Link, useLocation } from "@tanstack/react-router";
import logo from "/Asteri logo.webp";
import { useEffect, useState, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Menu, X, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { site, socialHref } from "@/lib/site";

type NavLink = {
  label: string;
  to: string;
  children: NavLink[];
};

const links: NavLink[] = [
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
    to: "/partnership",
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
  const menuPanelRef = useRef<HTMLDivElement>(null);

  // GSAP Fade-In animation when menu opens
  useEffect(() => {
    if (!open || !menuPanelRef.current) return;

    // Panel fade-in + subtle slide
    gsap.fromTo(
      menuPanelRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
    );

    // Staggered items entrance
    const items = menuPanelRef.current.querySelectorAll(".navbar-menu-item");
    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.04,
        },
      );
    }
  }, [open]);

  const handleToggle = () => {
    if (open) {
      if (menuPanelRef.current) {
        gsap.to(menuPanelRef.current, {
          opacity: 0,
          y: -15,
          duration: 0.22,
          ease: "power2.in",
          onComplete: () => {
            setOpen(false);
          },
        });
      } else {
        setOpen(false);
      }
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (menuPanelRef.current) {
      gsap.to(menuPanelRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setOpen(false);
        },
      });
    } else {
      setOpen(false);
    }
  };

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

          ${scrolled ? "bg-[#242424]/95 shadow-[0_20px_80px_rgba(0,0,0,0.55)]" : "bg-[#2a2a2a]/90"}
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
            href={socialHref(site.social.linkedin)}
            className={
              disableAnimations
                ? ""
                : "transition-all duration-300 hover:scale-110 hover:text-primary"
            }
          >
            <Linkedin className="h-5 w-5 sm:h-8 sm:w-8 text-white/80" />
          </a>

          <a
            href={socialHref(site.social.instagram)}
            className={
              disableAnimations
                ? ""
                : "transition-all duration-300 hover:scale-110 hover:text-primary"
            }
          >
            <Instagram className="h-5 w-5 sm:h-8 sm:w-8 text-white/80" />
          </a>

          <a
            href={socialHref(site.social.youtube)}
            className={
              disableAnimations
                ? ""
                : "transition-all duration-300 hover:scale-110 hover:text-primary"
            }
          >
            <Youtube className="h-5 w-5 sm:h-8 sm:w-8 text-white/80" />
          </a>

          <button
            aria-label="Menu"
            onClick={handleToggle}
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
          ref={menuPanelRef}
          className="
            navbar-menu-panel
            absolute
            top-24
            z-[110]
            w-full
            max-w-[1500px]
            overflow-y-auto
            overflow-x-hidden
            overscroll-contain
            touch-pan-y
            bg-black
            px-4
            sm:px-6
            py-0
            backdrop-blur-2xl
            shadow-[0_0_50px_rgba(0,0,0,0.6)]
            scrollbar-thin
            scrollbar-thumb-white/20
            scrollbar-track-transparent
            snap-y
            snap-mandatory
            scroll-smooth
            will-change-transform
          "
          style={{
            height: "calc(100dvh - 7.5rem)",
          }}
        >
          <div className="flex flex-col w-full">
            {links.map((l) => (
              <div
                key={l.to}
                onMouseEnter={() => setHovered(l.label)}
                onMouseLeave={() => setHovered(null)}
                className="navbar-menu-item snap-start flex flex-col justify-center border-b border-white/10 shrink-0 will-change-transform"
                style={{
                  height: "calc((100dvh - 7.5rem) / 4)",
                  minHeight: "calc((100dvh - 7.5rem) / 4)",
                  maxHeight: "calc((100dvh - 7.5rem) / 4)",
                }}
              >
                {/* Menu Row */}
                <Link
                  to={l.to}
                  onClick={handleClose}
                  className={`
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

                    ${
                      pathname === l.to
                        ? "text-primary hover:bg-primary/10"
                        : "text-white hover:bg-primary/10 hover:text-white"
                    }
                  `}
                >
                  <span
                    className="
                      text-[32px]
                      sm:text-[40px]
                      md:text-[48px]
                      lg:text-[56px]
                      font-bold
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
                    `}
                  >
                    <ArrowRight
                      className="text-primary w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9"
                      strokeWidth={1.2}
                    />
                  </div>
                </Link>

                {/* Submenu */}
                {hovered === l.label && l.children.length > 0 && (
                  <div className="flex flex-col items-start gap-2 pl-8 pb-4 pt-2 text-left">
                    {l.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={handleClose}
                        className={`
                          text-[24px]
                          sm:text-[30px]
                          font-semibold
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
