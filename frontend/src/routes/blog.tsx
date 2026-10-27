import { z } from "zod";
import { blogPostSchema } from "@/lib/schemas";
import { createFileRoute } from "@tanstack/react-router";
import { apiUrl } from "@/lib/api";
import { ensureApi } from "@/lib/queries";
import { PageShell } from "@/components/PageShell";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { useHydrated } from "@/lib/use-hydrated";
import { Turnstile } from "@/components/Turnstile";
import "./blog.css";
import type { BlogPost } from "@/lib/types";

type FeaturedPost = {
  category: string;
  title: string;
  image: string;
  accent?: boolean;
};

type RecentPost = {
  category: string;
  title: string;
  image: string;
  position: string;
  categoryAfter?: boolean;
};

// Recent posts shown per Load More click.
const RECENT_PAGE_SIZE = 6;

export const Route = createFileRoute("/blog")({
  // Posts are loaded on the server, so they are in the first HTML
  loader: async ({ context }) => ({
    posts: await ensureApi(context.queryClient, "/api/blog/posts", z.array(blogPostSchema), []),
  }),
  head: () => ({
    meta: [
      { title: "Blog — Asteri" },
      {
        name: "description",
        content: "Asteri is a digital engineering studio building cinematic enterprise software.",
      },
    ],
  }),
  component: Blog,
});

function ReadButton() {
  return (
    <button type="button" className="blog-read-button">
      <span>Read</span>
      <img src="/figma/blog/read-arrow.svg" alt="" aria-hidden />
    </button>
  );
}

function FeaturedCard({ category, title, image, accent }: FeaturedPost) {
  return (
    <div className="featured-card-wrapper">
      <article className={`featured-card${accent ? " featured-card-accent" : ""}`}>
        <div className="featured-card-copy">
          <p>{category}</p>
          <h3>{title}</h3>
        </div>
        <img className="featured-card-image" src={image} alt="" decoding="async" />
        <ReadButton />
      </article>
    </div>
  );
}

function RecentCard({ category, title, image, position, categoryAfter }: RecentPost) {
  return (
    <article className={`recent-card ${position}`}>
      <img className="recent-card-image" src={image} alt="" decoding="async" />
      <div className="recent-card-overlay" aria-hidden />
      <div className="recent-card-copy">
        {categoryAfter ? (
          <>
            <h3>{title}</h3>
            <p>{category}</p>
          </>
        ) : (
          <>
            <p>{category}</p>
            <h3>{title}</h3>
          </>
        )}
      </div>
      <ReadButton />
    </article>
  );
}

function Blog() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [subFailed, setSubFailed] = useState(false);
  const hydrated = useHydrated();
  const posts = Route.useLoaderData().posts;
  const [featuredPosts] = useState<BlogPost[]>(() => posts.filter((p) => p.isFeatured));
  const [recentPosts] = useState<BlogPost[]>(() => posts.filter((p) => !p.isFeatured));
  // Load More reveals the next page of recent posts. The button stays in the DOM (hidden when nothing
  // is left) so the scroll animation below keeps the same timing.
  const [visibleRecentCount, setVisibleRecentCount] = useState(RECENT_PAGE_SIZE);
  const hasMoreRecent = recentPosts.length > visibleRecentCount;

  const positions = [
    "recent-ai",
    "recent-cloud",
    "recent-system",
    "recent-crm",
    "recent-automation",
    "recent-productivity",
  ];

  useLayoutEffect(() => {
    if (!containerRef.current || featuredPosts.length === 0 || recentPosts.length === 0) return;

    const context = gsap.context(() => {
      const query = gsap.utils.selector(containerRef);
      const newsletter = query(".blog-newsletter")[0];
      const title = query(".newsletter-content h2")[0];
      const text = query(".newsletter-content p")[0];
      const form = query(".blog-subscribe-form")[0];

      const featuredSection = query(".blog-featured")[0];
      const featuredTitle = query(".blog-featured h2")[0];
      const featuredCards = query(".featured-card-wrapper");

      if (featuredSection && featuredTitle && featuredCards.length > 0) {
        gsap.set(featuredTitle, { y: 50, opacity: 0 });
        gsap.set(featuredCards, { x: "100vw", opacity: 0 });

        const tlFeatured = gsap.timeline({
          scrollTrigger: {
            trigger: featuredSection,
            start: "top top",
            end: "+=3280",
            scrub: 0.5,
            pin: true,
          },
        });

        tlFeatured.to(featuredTitle, {
          y: 0,
          opacity: 1,
          duration: 1,
        });

        // Phones fit one tall card at a time: the cards share one spot; each flips in while the
        // previous one slides out, with a short hold so every card can be read. (Desktop shows all three.)
        const holdBetween = window.innerWidth <= 700;

        featuredCards.forEach((card, i) => {
          gsap.set(card, { rotationY: 0, transformPerspective: 1000 });
          tlFeatured.to(card, {
            x: 0,
            opacity: 1,
            rotationY: 360,
            duration: 1.2,
            force3D: true,
          });
          // one card on screen at a time: the previous card leaves to the left as this one arrives
          if (holdBetween && i > 0) {
            tlFeatured.to(
              featuredCards[i - 1],
              { x: "-100vw", opacity: 0, duration: 1.2, ease: "power2.inOut" },
              "<",
            );
          }
          if (holdBetween && i < featuredCards.length - 1) tlFeatured.to({}, { duration: 0.6 });
        });

        tlFeatured.to({}, { duration: 0.4 });
      }

      const recentHeadingSection = query(".blog-recent-heading")[0];
      const recentTitle = query(".blog-recent-heading h2")[0];

      const recentCardsSection = query(".blog-recent-cards")[0];
      const recentLayout = query(".blog-recent-cards .recent-layout")[0];
      const recentBtn = query(".blog-recent-cards .blog-load-more")[0];

      if (recentHeadingSection && recentTitle) {
        gsap.set(recentTitle, { x: "100vw", opacity: 0 });

        const tlRecentHeading = gsap.timeline({
          scrollTrigger: {
            trigger: recentHeadingSection,
            start: "center center",
            end: "+=650",
            scrub: true,
            pin: true,
          },
        });

        tlRecentHeading
          .to(recentTitle, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 0.3 });
      }

      if (recentCardsSection && recentLayout && recentBtn) {
        gsap.set([recentLayout, recentBtn], {
          x: "100vw",
          opacity: 0,
        });

        const tlRecentCards = gsap.timeline({
          scrollTrigger: {
            trigger: recentCardsSection,
            start: "center center",
            end: "+=1260",
            scrub: 0.5,
            pin: true,
          },
        });

        tlRecentCards
          .to(recentLayout, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 0.5 })
          .to(recentBtn, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 0.3 });
      }

      if (newsletter && title && text && form) {
        gsap.set([title, text, form], {
          x: "100vw",
          opacity: 0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: newsletter,
            start: "top top",
            end: "+=2400",
            scrub: true,
            pin: true,
          },
        });

        tl.to(title, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        })
          .to({}, { duration: 0.5 })
          .to(text, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 0.5 })
          .to(form, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          })
          .to({}, { duration: 0.4 });
      }
    }, containerRef);

    return () => context.revert();
  }, [featuredPosts, recentPosts]);

  return (
    <PageShell>
      <div className="blog-page" ref={containerRef}>
        <section className="blog-hero" data-node-id="2521:304">
          <h1 className="type-display relative inline-flex flex-col items-center justify-center cursor-default">
            <div className="z-10">
              <span className="blog-outline">Expert</span> Thinking
            </div>
            <div className="z-10">
              on Technology <span className="blog-outline">That Matters</span>
            </div>
          </h1>
          <p className="type-lead font-semibold">
            Insights from our certified architects and strategists.
          </p>
        </section>

        <section className="blog-topics" aria-label="Browse topics" data-node-id="2513:1824">
          <div className="blog-topic-list">
            <button type="button">View All</button>
            <button type="button">Artificial Intelligence</button>
            <button type="button">Salesforce</button>
            <button type="button">SAP &amp; ERP</button>
          </div>
          <button type="button" className="blog-search">
            <span>Browse Topics</span>
            <span className="blog-search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <circle cx="8" cy="11" r="1.5" fill="#000" stroke="none" />
                <circle cx="11" cy="11" r="1.5" fill="#000" stroke="none" />
                <circle cx="14" cy="11" r="1.5" fill="#000" stroke="none" />
              </svg>
            </span>
          </button>
        </section>

        <section className="blog-featured" data-node-id="2513:1574">
          <h2 className="type-title">Featured Posts</h2>
          <div className="featured-grid">
            {featuredPosts.map((post) => (
              <FeaturedCard
                key={post.title}
                category={post.category?.name || "Topic"}
                title={post.title}
                image={post.imageUrl}
                accent={post.isAccent}
              />
            ))}
          </div>
        </section>

        <section className="blog-recent-heading min-h-screen h-screen flex items-center justify-center relative overflow-hidden w-full">
          <h2
            className="tracking-tight"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: '"Inter", sans-serif',
              fontSize: "clamp(2.25rem, 8.88vw, 128px)",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            Recent Posts
          </h2>
        </section>

        <section className="blog-recent-cards min-h-screen h-screen flex flex-col items-center justify-center relative overflow-hidden w-full">
          <div className="recent-layout">
            {recentPosts.slice(0, visibleRecentCount).map((post, index) => (
              <RecentCard
                key={post.title}
                category={post.category?.name || "Topic"}
                title={post.title}
                image={post.imageUrl}
                position={positions[index] || ""}
                categoryAfter={index === 3}
              />
            ))}
          </div>
          <button
            type="button"
            className="blog-load-more"
            hidden={!hasMoreRecent}
            onClick={() => setVisibleRecentCount((count) => count + RECENT_PAGE_SIZE)}
          >
            Load More <img src="/figma/blog/down-button.png" alt="" aria-hidden />
          </button>
        </section>

        <section className="blog-newsletter" data-node-id="2521:150">
          <div className="newsletter-content flex flex-col items-center justify-center text-center max-w-7xl mx-auto w-full px-4">
            <h2 className="type-display sm:whitespace-nowrap">Get insights delivered</h2>
            <p className="type-lead font-semibold mt-4">
              Practitioner-written articles — no fluff, real lessons.
            </p>
            <form
              className="blog-subscribe-form"
              onSubmit={(e) => {
                e.preventDefault();
                const email = new FormData(e.currentTarget).get("email");
                const form = e.currentTarget;
                setSubFailed(false);
                fetch(apiUrl("/api/newsletter"), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email,
                    captchaToken: new FormData(form).get("cf-turnstile-response"),
                  }),
                })
                  .then((res) => {
                    if (!res.ok) throw new Error(`Newsletter request failed: ${res.status}`);
                    form.reset();
                    setSubscribed(true);
                    window.setTimeout(() => setSubscribed(false), 4500);
                  })
                  .catch((err) => {
                    console.error(err);
                    setSubFailed(true);
                  });
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                aria-label="Email address"
                required
              />
              <Turnstile />
              <button type="submit" disabled={!hydrated}>
                Subscribe
              </button>
              {subFailed && (
                <p role="alert" style={{ color: "#ff6b6b", marginTop: "12px" }}>
                  Sorry, we could not subscribe you. Please try again.
                </p>
              )}
              {subscribed && (
                <div className="subscribe-success" role="status" aria-live="polite">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <i
                      key={i}
                      className="subscribe-spark"
                      style={{
                        ["--a" as string]: `${i * (360 / 14)}deg`,
                        ["--d" as string]: `${i % 3 === 0 ? 120 : i % 3 === 1 ? 90 : 65}px`,
                        animationDelay: `${(i % 5) * 60}ms`,
                      }}
                    />
                  ))}
                  <span className="subscribe-success-text">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2l2.2 6.3L20.5 10l-6.3 1.7L12 18l-2.2-6.3L3.5 10l6.3-1.7L12 2z"
                        fill="#82e926"
                      />
                    </svg>
                    You&apos;re subscribed!
                  </span>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
