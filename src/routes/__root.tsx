import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { Header } from "@/components/layout/Header";

import type { QueryClient } from "@tanstack/react-query";

import { Footer } from "@/components/layout/Footer";
import { SomethingWentWrong } from "@/modules/shared/components/SomethingWentWrong";
import { NotFound } from "@/modules/shared/components/NotFound";

const RootLayout = () => (
  <>
    <NuqsAdapter>
      <Header />
      <Outlet />
      <Footer />
    </NuqsAdapter>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootLayout,
    notFoundComponent: () => <NotFound />,
    errorComponent: () => <SomethingWentWrong />,
  }
);
