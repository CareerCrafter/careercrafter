import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Login from "./routes/Login.jsx";
import Wine from "./routes/Wine.jsx";
import Vineyard from "./routes/Vineyard.jsx";
import AddWine from "./routes/AddWine.jsx";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/vineyard",
    element: <Vineyard />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
