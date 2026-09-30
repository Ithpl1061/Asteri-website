import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/software-development")({
  head: () => ({ meta: [{ title: "Software Development — Asteri" }] }),
  component: SoftwareDevelopment,
});

function SoftwareDevelopment() {
  return (
    <ServiceDetailPage
      title="Software Development"
      subtitle="Custom software that turns complex work into simple experiences."
      description="We design and build dependable digital products, internal tools, and enterprise platforms with your teams and customers in mind."
      capabilities={["Product engineering", "Application development", "System modernization"]}
    />
  );
}
