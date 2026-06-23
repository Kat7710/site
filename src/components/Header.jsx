import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
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
              <Link to="/Career">Career</Link>
            </li>
          </ul>
          <button className="navbar-btn" onClick={toggleModal}>
            Subscribe
          </button>
        </div>
      </nav>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={toggleModal}>
              &times;
            </button>
            <h3 className="modal-title">Subscribe to AUTONOM</h3>
            <p className="modal-text">Get the latest updates about AUTONOM</p>
            <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="modal-submit-btn">
                Join Us
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
