import React from "react";
import logo from "./img/logo.png";
import "./Footer.css";

export function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="row">
          <p>© 2022 Rafa Tanzeem | All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
