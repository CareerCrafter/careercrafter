import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.jsx";
import winebar from "../images/winebar.png";
import AgeModal from "./AgeModal.jsx";
import { Outlet } from "react-router-dom";
export default function Homepage() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className="homepagecontainer"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${winebar})`,
          width: "100%",
          height: "100%",
        }}
      >
        <h3 className="Title">WineCrafters</h3>
        <Outlet />
        {open && (
          <div className="modal">
            <AgeModal open={open} setOpen={setOpen}></AgeModal>
          </div>
        )}
      </div>
    </>
  );
}
