import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/detail/$newId")({
  component: RouteComponent,
  loader: async () => {
    // simulate network delay
    await new Promise((r) => setTimeout(r, 1200));
    return { users: [] };
  },
});

function RouteComponent() {
  return <div>Hello "/detail/$newId"!</div>;
}
