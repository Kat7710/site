import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <p className="title">AUTONOM</p>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-links">
          <li>
            <Link to="/">Technology</Link>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Career</Link>
          </li>
        </ul>
        <button className="navbar-btn">Subscribe</button>
      </div>
    </nav>
  );
}

export default Navbar;
