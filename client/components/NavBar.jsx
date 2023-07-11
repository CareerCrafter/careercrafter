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
  <div className="Navbar">
  
 
    
    <div>
      <Link className="navbar-menu" to={'/winelist'}>
        Wine 
      </Link>
    </div>
    <div>
      <Link className="navbar-menu" to={'/vineyard'}>
        Vineyard
      </Link>
    </div>
    {/* <div>
      <Link className="navbar-menu" to={'/login'}>
        Login 
      </Link>
    </div> */}
    <div>
      <Link className="navbar-menu">
        
        <button
          onClick={handleSignout}
        >
          <CgLogOut/>
          
        </button>
      </Link>
    </div>


    
  </div>);
}
