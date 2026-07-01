import React from "react";
import "./AboutUs.scss";

function AboutUs() {
    return <>
      <div className="credits-window">
        <div className="credits-title">
            <h3 className="credits-main-title">Who are we?</h3>
            <p className="credits-subtitle">Coders</p>
        </div>
        <ul className="coders-list">
            <li className="coder-name">
                wh!tty_39
            </li>
            <li className="coder-name">
                Kat7710
            </li>
        </ul>
      </div>  
    </>;
  }
  
  export default AboutUs;