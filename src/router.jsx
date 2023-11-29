import React from "react";
import ReactDOM from "react-dom/client";
import Logement from "./routes/logement";
import Index from "./routes/index";
import About from "./routes/about";
import Errorpage from "./routes/errorpage";
import Testcomponents from "./routes/testcomponents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <Errorpage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/logement",
      element: <Logement />,
    },
    {
      path: "/testcomponents",
      element: <Testcomponents />,
    },
  ]);

  return <RouterProvider router={router} />;
}
