import React from "react";
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
            <a href="#">Technology</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
        <button className="navbar-btn">Subscribe</button>
      </div>
    </nav>
  );
}

export default Navbar;
