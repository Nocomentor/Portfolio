import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar/Navbar";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NotFound from "../components/NotFound/NotFound";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => {
    return <NotFound/>;
  },
});
