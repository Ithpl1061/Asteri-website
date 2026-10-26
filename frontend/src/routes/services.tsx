import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout for /services/*. Renders the child page: services/index.tsx (the Services page)
// or one of the service detail pages. Without this <Outlet />, child pages can never render.
export const Route = createFileRoute("/services")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
