import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  
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
    <div>
      <Link className="navbar-menu" to={'/login'}>
        Login 
      </Link>
    </div>

  </div>);
}
