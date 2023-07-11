import React from "react";
import ReactDOM from "react-dom/client";
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Root from "./routes/Root.jsx";
import WineListPage from "./client/Containers/WinelistPage.jsx";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route exact path="/winelist" element={<WineListPage />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


