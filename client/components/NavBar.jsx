import React from "react";
import { Link } from "react-router-dom";
import AuthConsumer from "../AuthProvider.jsx";
import { CgLogOut } from "react-icons/cg"

export default function NavBar() {
  
  const { logout } = AuthConsumer();

  async function handleSignout(){
    await logout();
  }

  return (
    <>
    <div className="NavBar">
      <Link className="navbar-menu" to="/winelist">
        WINE LIST
      </Link>
      
      <Link className="navbar-menu" to="/addwine">
        ADD WINE
      </Link>
      <Link className="navbar-menu">
        <button
          onClick={handleSignout}
        >
          <CgLogOut />

        </button>
      </Link>
    </div>
    
    </>
);
}
