import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Wine from "./routes/Wine.jsx";
import Explore, {loader as exploreLoader, action as exploreAction} from "./routes/Explore.jsx";
import AddWine from "./routes/AddWine.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [ 
          {
            path: "/winelist",
            element: <Wine />,
          },
          {
            path: "/winelist/:wineId",
            element: <Wine />,
          },
          {
            path: "/addwine",
            element: <AddWine />,
          },
          {
            path: "/explore",
            element: <Explore />,
            loader: exploreLoader,
            action: exploreAction
          },
        ],
      }
    ]
  }]);

export default function App() {
  
  
    return (
      
      <RouterProvider 
        router={router}>
      </RouterProvider>
    
    );
  }

