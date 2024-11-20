import classes from "./App.module.scss";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <div className={classes.App}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
