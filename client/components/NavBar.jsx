import React from "react";
import { Link } from "react-router-dom";
import AuthConsumer from "../AuthProvider.jsx";
import { PiWineLight } from "react-icons/pi"
import { BiLogOut } from "react-icons/bi"
export default function NavBar() {
  
  const { logout, session } = AuthConsumer();

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

      <Link className="navbar-menu" to="/explore">
        <PiWineLight
           style={{
            width:'1.75rem',
            height:'1.75rem',
            fontWeight:'700'
          }}
        />
      </Link>
      
      {session &&
      <Link className="navbar-menu">
        <button
          onClick={handleSignout}
        >
          <BiLogOut
           style={{
            width:'1.05rem',
            height:'1.05rem',
            fontWeight:'500'
           }}
           />

        </button>
      </Link>
}
    </div>
    
    </>
);
}
