import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lar-dig")({
  component: () => <Outlet />,
});
