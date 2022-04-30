import React from "react";
import "./Rectangle2.css";
import pic2 from "./img/Place-holder-logo-graphics-01-p-500 1.png";

export default function Rectangle2() {
  return (
    <div>
      <div className="rectangle2 container-fluid">
        <div className="rectangle2-content">
          <img className="logo" src={pic2} alt="pic" />
          <h2>OUR MISSION</h2>
          <p>
            We aim to cultivate a community of decentralized innovators <br />
            who are leading the blockchain revolution into the future.
          </p>
        </div>
      </div>
    </div>
  );
}
