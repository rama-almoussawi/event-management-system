import React from "react";

import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        Event Hub
      </Link>

      <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Events">Campuses</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Events">Campuses</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;