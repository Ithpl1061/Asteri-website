import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import AIChat from "./AIChat";

export function PageShell({
  children,
  disableAnimations = false,
}: {
  children: ReactNode;
  disableAnimations?: boolean;
}) {
  return (
    <div className={`relative min-h-screen overflow-x-hidden${disableAnimations ? " industries-static-page" : ""}`}>
      <Navbar disableAnimations={disableAnimations} />

      <main className="pt-24 overflow-x-hidden">
        {children}
      </main>

      <Footer disableAnimations={disableAnimations} />

      {/* Global AI Chat */}
      <AIChat disableAnimations={disableAnimations} />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="mx-auto max-w-6xl px-6 py-28 text-center md:py-36">
        {eyebrow && (
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" /> {eyebrow}
          </div>
        )}
        <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  align = "center",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      {(eyebrow || title || description) && (
        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow && (
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground`}>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-tight tracking-tight">{title}</h2>
          )}
          {description && <p className="mt-4 text-muted-foreground md:text-lg">{description}</p>}
        </div>
      )}
      {children && <div className="mt-14">{children}</div>}
    </section>
  );
}

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-primary/30 ${className}`}>
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.88 0.27 142 / 0.10), transparent 40%)" }} />
      {children}
    </div>
  );
}

export function CTA({ title = "Ready to engineer your next era?", subtitle = "Partner with Asteri to design, build, and scale enterprise software the world remembers.", primaryHref = "/contact", primaryLabel = "Start a project" }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-24">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <h3 className="relative font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold tracking-tight">{title}</h3>
        <p className="relative mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">{subtitle}</p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={primaryHref} className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-6px_oklch(0.88_0.27_142_/_0.7)] transition hover:brightness-110">
            {primaryLabel}
          </a>
          <a href="/case-studies" className="rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/[0.06]">
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
