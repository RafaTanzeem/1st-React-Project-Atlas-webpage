import React from "react";
import "./Rectangle4.css";
import pic4 from "./img/Vector f.png";
import pic42 from "./img/Subtract.png";
import pic43 from "./img/Vector2.png";
import Button from "./Button";

export default function Rectangle4() {
  return (
    <div>
      <div className="rectangle4 container-fluid">
        <div className="rectangle4-content">
          <p>
            As our companies grow, finding the best talent is our first
            priority.
          </p>
          <Button />
          <h3>Follow:</h3>
          <div className="links">
            <img src={pic4} alt=".." />
            <img src={pic42} alt=".." />
            <img src={pic43} alt=".." />
          </div>
        </div>
      </div>
    </div>
  );
}
