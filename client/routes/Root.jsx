import React from "react";
import NavBar from "../components/NavBar.jsx";
import Homepage from "../components/RootUI.jsx";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <NavBar className="NavBar" />
      <Homepage>
      </Homepage>
    </>
  );
}
