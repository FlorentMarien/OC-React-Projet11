import React from 'react';
import ReactDOM from 'react-dom/client';
import Logement from "./logement";
import Index from "./index";
import About from "./about";
import Errorpage from "./errorpage";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

export default function Router(){
    
const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <Errorpage />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/logement",
      element: <Logement />,
    },
  ]);

  return <RouterProvider router={router} />

}
