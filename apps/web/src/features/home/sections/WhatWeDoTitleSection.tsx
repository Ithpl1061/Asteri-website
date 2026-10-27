import type { RefObject } from "react";
import { ArrowUpRight } from "lucide-react";

const WHAT_WE_DO = [
  {
    sequenceNumber: "01",
    title: "AI Consulting & Automation with LLM",
    description:
      "We help you plan where AI fits, then build LLM-powered solutions and intelligent automation for claims, documents and workflows.",
  },
  {
    sequenceNumber: "02",
    title: "Salesforce & SAP Consulting",
    description:
      "Certified experts handle implementation, customization, integration and 24/7 support.",
  },
  {
    sequenceNumber: "03",
    title: "Software Licensing & Asset Management",
    description:
      "Authorized reseller of SAP, Oracle and leading OEM software, plus tracking of licenses and IT assets for compliance and cost control.",
  },
  {
    sequenceNumber: "04",
    title: "DPDP Compliance & Data Security",
    description:
      "We help you meet India's DPDP Act requirements and protect sensitive data through assessments, controls and ongoing monitoring.",
  },
  {
    sequenceNumber: "05",
    title: "Custom Software Development",
    description: "Secure, scalable web and mobile applications built around your business needs.",
  },
  {
    sequenceNumber: "06",
    title: "Data Analytics & Managed IT Services",
    description: "Data insights, IT support and flexible resource staffing, on demand.",
  },
];
type WhatWeDoTitleSectionProps = {
  whatRef: RefObject<HTMLDivElement | null>;
};

export function WhatWeDoTitleSection({ whatRef }: WhatWeDoTitleSectionProps) {
  return (
    <section
      ref={whatRef}
      className="what-section relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-black px-5 py-16 sm:min-h-[100dvh] sm:px-8 lg:h-screen lg:max-h-screen lg:overflow-hidden lg:min-h-0 lg:px-0 lg:py-0"
    >
      <h2 className="what-big-title relative z-10 mb-10 text-center font-display type-title uppercase text-white lg:absolute lg:mb-0 lg:whitespace-nowrap">
        WHAT WE DO
      </h2>

      <div className="what-content relative flex w-full items-center justify-center lg:absolute lg:inset-0 lg:w-auto lg:px-6 xl:px-10">
        <div className="mx-auto max-w-6xl w-full grid gap-6 lg:gap-8 lg:grid-cols-[320px_1fr] items-center">
          <div className="what-card relative hidden lg:block h-[420px] overflow-hidden rounded-2xl">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-60" />
            <img
              src="/What we do.webp"
              alt="What We Do"
              width={800}
              height={600}
              className="absolute inset-0 h-full w-full rounded-2xl object-cover"
            />
          </div>

          <ul className="what-list flex w-full flex-col lg:max-h-none lg:overflow-visible">
            {WHAT_WE_DO.map((s) => (
              <li
                key={s.sequenceNumber}
                className="service-row group border-b border-white/8 py-2.5 transition-[translate] duration-300 hover:translate-x-2 sm:py-3 lg:py-3.5"
              >
                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="w-[45px] sm:w-[60px] shrink-0">
                    <span className="font-display text-xs sm:text-base font-semibold text-muted-foreground">
                      {s.sequenceNumber}.
                    </span>
                    <div className="service-line mt-1 h-px w-8 bg-white" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-display text-sm font-semibold tracking-tight sm:text-base md:text-lg">
                      {s.title}
                    </span>
                    {/* Description is revealed on hover/focus (always visible below lg, where there is no hover) */}
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 max-lg:grid-rows-[1fr] max-lg:opacity-100">
                      <p className="min-h-0 overflow-hidden max-w-[46rem] font-sans text-xs font-normal leading-snug text-muted-foreground sm:text-sm">
                        <span className="mt-1 block">{s.description}</span>
                      </p>
                    </div>
                  </div>
                  <a
                    href="/services"
                    className="ml-auto flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-primary hover:text-black hover:rotate-45 hover:scale-110"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
