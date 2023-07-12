import React from "react";
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar.jsx";
import Homepage from "../components/RootUI.jsx";


export default function Root() {
  
  return (
    <>
      <NavBar className="NavBar" />
      
     
      <Homepage>
      </Homepage>
      </>
  )
  }