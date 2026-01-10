import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/detail/$newId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/detail/$newId"!</div>;
}
