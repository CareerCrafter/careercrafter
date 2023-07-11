import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./AuthProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("TEST")
root.render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
