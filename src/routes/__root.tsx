import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";

import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
// import { LanguageSwitcher } from "../components/LanguageSwitcher";
import type { QueryClient } from "@tanstack/react-query";

const RootLayout = () => (
  <>
    <div className="flex items-center space-x-2.5 p-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/post" className="[&.active]:font-bold">
        post
      </Link>
    </div>

    {/* <LanguageSwitcher /> */}

    <hr />
    <Outlet />
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
      <div className="text-red-500">🙁 Opps,Something Went Wrong!</div>
    ),
  }
);
