import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/Asteri_product-suite")({
  head: () => ({
    meta: [
      { title: "Asteri Product Suite — Asteri" },
      {
        name: "description",
        content: "The Asteri Product Suite.",
      },
    ],
  }),
  component: AsteriProductSuite,
});

const products = [
  {
    name: "Salesforce",
    type: "CRM & Cloud Platform",
    description: "Structured customer management, automation, and scalable business processes.",
    image: "/Salesforce.png",
    imageClass: "w-[170px]",
  },
  {
    name: "Zoho",
    type: "Business Applications Suite",
    description: "Integrated applications for managing operations, sales, and customer engagement.",
    image: "/zoho logo.png",
    imageClass: "w-[170px]",
  },
  {
    name: "1dox.ai",
    type: "Document Intelligence Platform",
    description: "A unified system to store, manage, and collaborate on documents and organizational data with approvals, workflows and AI capabilities.",
    image: "/1dox.ai 1.png",
    imageClass: "w-[190px]",
  },
  {
    name: "ManageEngine",
    type: "IT Management Solutions",
    description: "Tools for monitoring, managing and securing IT infrastructure.",
    image: "/ManageEngine logo.png",
    imageClass: "w-[220px]",
  },
  {
    name: "PL/SQL",
    type: "Database & Backend Systems",
    description: "Robust database management and backend logic for structured applications.",
    image: "/plsql.png",
    imageClass: "w-[150px]",
  },
  {
    name: "AnyDesk",
    type: "Remote Access & Support",
    description: "Secure and reliable remote connectivity for system access and support.",
    image: "/anydesk.png",
    imageClass: "w-[220px]",
  },
  {
    name: "SAP",
    type: "Enterprise Resource Planning",
    description: "End-to-end enterprise systems for finance, operations, and supply chain.",
    image: "/sap logo.png",
    imageClass: "w-[120px]",
  },
  {
    name: "think-cell",
    type: "Presentation & Data Visualization",
    description: "Advanced tools for creating structured, data-driven presentations.",
    image: "/thinkcell.png",
    imageClass: "w-[220px]",
  },
];

function RoundLink({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 rounded-full border border-[#8AF500] bg-[#82E926] py-2 pl-5 pr-2 type-button text-black">
      {children}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
      </span>
    </span>
  );
}

function AsteriProductSuite() {
  return (
    <PageShell>
      <section className="bg-black px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="mx-auto max-w-[1360px]">
          <h1 className="max-w-6xl text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.035em] text-white">
            Built by <span className="text-transparent [-webkit-text-stroke:2px_#8AF500]">Asteri.</span>
            <br />
            Built for the <span className="text-transparent [-webkit-text-stroke:2px_#8AF500]">Enterprise.</span>
          </h1>
          <div className="mt-14 flex flex-col gap-8 border-t border-white/15 pt-7 sm:flex-row sm:items-end sm:justify-between">
            <Link to="/contact"><RoundLink>Explore more</RoundLink></Link>
            <p className="max-w-md type-lead font-semibold text-white">
              Software that brings structure, clarity, and scalability to the way your business runs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white">
            Our own tools, built<br className="hidden sm:block" /> from real client<br className="hidden sm:block" /> problems
          </h2>
        </div>
      </section>

      <section className="bg-black px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-[1020px] space-y-20 text-center sm:space-y-28">
          <h2 className="text-[clamp(1.2rem,2.8vw,2.35rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
            The Asteri Product Suite features products<br className="hidden sm:block" /> designed and built by our own team.
          </h2>
          <h2 className="text-[clamp(1.2rem,2.8vw,2.35rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
            Born out of patterns we&apos;ve seen across client engagements, not generic off-the-shelf software.
          </h2>
        </div>
      </section>

      <section className="overflow-hidden bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-[1510px] px-6">
          <div className="rounded-[10px] bg-[#eaeaea] p-7 sm:p-12 lg:grid lg:min-h-[760px] lg:grid-cols-[minmax(300px,0.82fr)_minmax(0,1.18fr)] lg:gap-12">
            <div className="flex flex-col justify-between pb-10 lg:py-10">
              <div>
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.035em] text-black">Asteri<br />Product Suite</h2>
                <p className="mt-5 type-body font-semibold text-black">Software built for real operations.</p>
              </div>
              <Link to="/contact" className="mt-12 w-fit"><RoundLink>Contact us</RoundLink></Link>
            </div>

            <div className="-mr-7 overflow-x-auto rounded-l-[30px] bg-[#ddd] py-10 pl-7 sm:-mr-12 sm:py-20 sm:pl-12 lg:-mr-12 lg:rounded-l-[40px]">
              <div className="flex w-max gap-7 pr-8 sm:gap-12">
                {products.map((product) => (
                  <article key={product.name} className="flex h-[430px] w-[300px] shrink-0 flex-col rounded-[28px] bg-[#f3f3f3] p-7 sm:h-[540px] sm:w-[420px] sm:rounded-[35px] sm:p-10">
                    <div className="flex h-20 items-start"><img src={product.image} alt={`${product.name} logo`} className={`${product.imageClass} max-h-16 object-contain object-left`} /></div>
                    <p className="mt-7 type-heading text-black">{product.type}</p>
                    <p className="mt-5 type-body text-black">{product.description}</p>
                    <Link to="/contact" className="mt-auto w-fit pt-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#82E926] bg-[#82E926]/20 py-2 pl-4 pr-2 type-button text-black">
                        Know More <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8AF500]"><ArrowUpRight className="h-4 w-4" /></span>
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:py-36">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[0.97] tracking-[-0.035em] text-white">
            Flexible by design.<br />Built for real workflows.
          </h2>
        </div>
      </section>

      <section className="bg-black px-6 py-24 sm:py-36">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-none tracking-[-0.035em] text-white">EXECUTION</h2>
        </div>
      </section>

      <section className="bg-black px-6 pb-24 pt-10 sm:pb-32">
        <div className="mx-auto max-w-[1360px] border-y border-[#15EC0D] py-12 sm:py-20">
          <div className="grid gap-px bg-[#15EC0D] md:grid-cols-2">
            {[["Understand", "Research"], ["Structure", "Designed & Defined"], ["Build", "Automated Systems"], ["Scale", "Version Control"]].map(([title, caption]) => (
              <div key={title} className="flex min-h-52 flex-col justify-between bg-black p-7 sm:min-h-72 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#15EC0D]">{caption}</p>
                <h3 className="type-title text-white">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
