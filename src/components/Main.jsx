import React from "react";
import "./Main.scss";

function Main() {
  return (
    <>
      <section className="front">
        <h1 className="front-title">AUTONOM</h1>
        <p className="front-paragraph">
          We create technologies that change the world today
        </p>
      </section>
      <section className="middle">
        <div className="middle-texts-container">
          <p className="middle-title">
            Praesent fringilla facilisis est eu cursus.
            <br /> Quisque venenatis a elit sed tincidunt
          </p>
          <p className="middle-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            <br />
            varius dictum felis at tincidunt. Vestibulum porttitor elementum
            turpis,
            <br /> nec convallis dui viverra vitae. Praesent nec augue laoreet
            lorem
            <br /> pellentesque posuere et ut justo. Sed a justo a diam
            dignissim
            <br />
            tempor quis eu metus. Quisque eu porttitor magna. Morbi et ante quam
          </p>
        </div>
        <div className="middle-stats">
          <h2 className="middle-stats-title">AUTONOM statistics</h2>
          <div className="middle-stats-cont">
            <div className="middle-stats-item">
              <div className="stats-number">5</div>
              <div className="stats-label">UNITS</div>
            </div>
            <div className="middle-stats-item">
              <div className="stats-number">500m $</div>
              <div className="stats-label">CAPITAL</div>
            </div>
            <div className="middle-stats-item">
              <div className="stats-number">500</div>
              <div className="stats-label">WORKERS</div>
            </div>
            <div className="middle-stats-item">
              <div className="stats-number">177</div>
              <div className="stats-label">PARTNERS</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
