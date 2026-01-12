import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18n from "@/i18n";

import "./index.css";
import "./i18n.ts";

const queryClient = new QueryClient();

i18n.on("languageChanged", () => {
  router.invalidate();
});

import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  context: { queryClient },
  basepath: "/react-vite",
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);

  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
