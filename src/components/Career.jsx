import React from "react";
import "./Career.scss";

function CAreer() {
  return <>
    <div className="career-window">
      <div className="career-title">
        <h2 className="career-main-title">Want to join us?</h2>
        <p>Then just fill this form!</p>
      </div>     
      <form className="career-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" className="career-input" placeholder="Enter your name" required />
        <input type="text" className="career-input" placeholder="Enter your surname" required />
        <input type="email" className="career-input" placeholder="Enter your email" required />
        <button type="submit" className="career-submit-btn">
          Send
        </button>
      </form>
    </div>  
  </>;
}

export default CAreer;
