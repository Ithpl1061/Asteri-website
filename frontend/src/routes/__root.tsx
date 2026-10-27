import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { absoluteUrl, canonicalLinks } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold text-glow">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Lost in the network</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page is not on the grid.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: ({ matches }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Asteri — Engineering the Future of Enterprise" },
      {
        name: "description",
        content:
          "Asteri builds AI, cloud, and digital transformation solutions for category-defining enterprises.",
      },
      { property: "og:title", content: "Asteri — Engineering the Future of Enterprise" },
      {
        property: "og:description",
        content: "Premium AI, cloud, CRM, ERP and digital engineering for the modern enterprise.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl(matches.at(-1)?.pathname ?? "/") },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      ...canonicalLinks(matches.at(-1)?.pathname ?? "/"),
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="dark">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.config({ ignoreMobileResize: true });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
