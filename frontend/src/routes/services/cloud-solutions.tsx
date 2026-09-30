import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/cloud-solutions")({
  head: () => ({ meta: [{ title: "Cloud Solutions — Asteri" }] }),
  component: CloudSolutions,
});

function CloudSolutions() {
  return (
    <ServiceDetailPage
      title="Cloud Solutions"
      subtitle="Reliable cloud foundations that are ready to scale."
      description="From architecture through migration and daily operations, we build secure cloud environments that support growth."
      capabilities={["Cloud architecture", "Migration", "Platform operations"]}
    />
  );
}
