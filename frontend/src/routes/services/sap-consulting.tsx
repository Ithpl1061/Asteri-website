import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/sap-consulting")({
  head: () => ({ meta: [{ title: "SAP Consulting — Asteri" }] }),
  component: SapConsulting,
});

function SapConsulting() {
  return (
    <ServiceDetailPage
      title="SAP Consulting"
      subtitle="Enterprise systems designed for clearer operations and better decisions."
      description="We help teams implement, optimize, and integrate SAP systems around the way their business actually works."
      capabilities={["Implementation", "Process optimization", "System integration"]}
      pageClassName="sap-consulting-page"
    />
  );
}
