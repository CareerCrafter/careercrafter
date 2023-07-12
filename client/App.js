import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Wine from "./routes/Wine.jsx";
import Explore, {loader as exploreLoader, action as exploreAction} from "./routes/Explore.jsx";
import AddWine from "./routes/AddWine.jsx";
import DisplayWine from "./components/SelectWine.jsx";import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/winelist",
        element: <Wine />,
      },
      {
        path: "/addwine",
        element: <AddWine />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
    ],
  }
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
