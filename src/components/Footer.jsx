import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <p className="footer-title">AUTONOM</p>
        <div className="contacts">
          <ul className="contact-items">
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
        </div>
      </div>
      <p className="copyright">© 2026 AUTONOM</p>
    </footer>
  );
}

export default Footer;
