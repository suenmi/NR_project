import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App"
import About from "./page/About";
import Home from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App, 
    children: [
        {
            path: '/',
            Component: Home
        }
        ,
        {
            path: "about",
            Component: About
        }
    ]
  },
]);

export default router