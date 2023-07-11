import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";
import winebar from "../images/winebar.png";
import AgeModal from "../components/AgeModal.jsx";

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
        <NavBar className="NavBar" />
        <div className="modal">
          <AgeModal open={open} setOpen={setOpen}></AgeModal>
        </div>
      </div>
    </>
  );
}
