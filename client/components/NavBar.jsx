import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import WineListPage from "../Containers/WinelistPage.jsx";
// import Root from "../routes/Root.jsx";
export default function NavBar() {
  return (
    <div className="NavBar">
      <Link className="navbar-menu" to="/winelist">
        WINE LIST
      </Link>
      <Link className="navbar-menu" to="/">
        LOGIN
      </Link>
    </div>
  );
}
