import React from "react";

import { Link } from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        Event Hub
      </Link>

      <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Events">Events</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login" className="login-btn-mobile">Login</Link>
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Login" className="login-btn">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;