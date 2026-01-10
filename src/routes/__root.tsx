import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { Header } from "@/components/layout/Header";

import SthWrong from "@/assets/something-wrong.jpeg";

import type { QueryClient } from "@tanstack/react-query";
import { Footer } from "@/components/layout/Footer";

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
    notFoundComponent: () => (
      <div className="text-green-500">Not found 404</div>
    ),
    errorComponent: () => (
      <div className="flex h-screen items-center justify-center flex-col space-y-2.5 sm:space-y-3.5">
        <img
          src={SthWrong}
          accessKey="new-logo"
          alt="news-logo.png"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain size-28 sm:size-32 xl:size-44"
        />

        <div className="flex items-center justify-center flex-col">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 text-center">
            Opps, Something went wrong
          </h2>
          <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center">
            Please retry it again!
          </p>
        </div>
      </div>
    ),
  }
);
