import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/data-science")({
  head: () => ({ meta: [{ title: "Data Science — Asteri" }] }),
  component: DataScience,
});

function DataScience() {
  return (
    <ServiceDetailPage
      title="Data Science"
      subtitle="Turning business data into useful, confident decisions."
      description="We create practical data foundations, analytics, and intelligent models that help teams see what matters and act sooner."
      capabilities={["Data strategy", "Analytics", "Machine learning"]}
    />
  );
}
