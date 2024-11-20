
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../components/NotFound/NotFound";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
  notFoundComponent: () => {
    return <NotFound/>;
  },
});
