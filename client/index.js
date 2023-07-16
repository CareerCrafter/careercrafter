import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "./AuthProvider.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as rootLoader} from "./routes/Root.jsx";
import Explore, {loader as exploreLoader, action as exploreAction} from "./routes/Explore.jsx";
import AddWine from "./routes/AddWine.jsx";
import ErrorPage from "./routes/ErrorPage.jsx"

import Wine, { loader as wineLoader } from "./routes/Wine.jsx"

import "./styles/styles.css"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      errorElement: <ErrorPage />,
      children: [          
        {
          path: "/wine/edit",
          element: <AddWine />,
        },
        {
          path: "/wine",
          element: <Wine/>
        },
        {
            path: "/wine/:wineId",
            element: <Wine/>,
            loader: wineLoader
          },
        {
          path: "/explore",
          element: <Explore />,
          loader: exploreLoader,
          action: exploreAction
        },
      ]
    }]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AuthProvider>
     <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
    </AuthProvider>
);
