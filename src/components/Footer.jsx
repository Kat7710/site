import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      {/* <div className="footer-contact">
        <p className="footer-title">AUTONOM</p>
        <div className="contacts">
          <ul className="contact-items">
            <li>
              <Link to="/">Technology</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </div>
      </div> */}
      <p className="copyright">© 2026 AUTONOM</p>
    </footer>
  );
}

export default Footer;
