import React, { useEffect, useState } from "react";
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
          overflowY: "scroll"
        }}
      >
        <h3 className="Title">WineCrafters</h3>
        { !session &&
       <>
         <div
           style={{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: '#370B1B',
            border: '15px double #8B6E51',
            padding: '25px',
            margin: '50px',
            color:'white'

          }}
         >
         
        </div>
        </>
      }
        <Outlet />
        {/* {open && (
          <div className="modal">
            <AgeModal open={open} setOpen={setOpen}></AgeModal>
          </div>
        )} */}
      </div>
    </>
  );
}
