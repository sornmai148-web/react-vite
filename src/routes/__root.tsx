import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { Header } from "@/components/layout/Header";

import type { QueryClient } from "@tanstack/react-query";

import { Footer } from "@/components/layout/Footer";
import { SomethingWentWrong } from "@/modules/shared/components/SomethingWentWrong";
import { NotFound } from "@/modules/shared/components/NotFound";
import ScrollToTopButton from "@/modules/shared/components/ScrollToTop";

const RootLayout = () => (
  <>
    <div className="bg-gray-100">
      <NuqsAdapter>
        <Header />
        <Outlet />
        <Footer />
      </NuqsAdapter>
      <TanStackRouterDevtools />
    </div>

    <ScrollToTopButton />
  </>
);

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootLayout,
    notFoundComponent: () => <NotFound />,
    errorComponent: () => <SomethingWentWrong />,
  }
);
