import React from "react";
import logo from "./img/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header container-fluid">
        <div className="logo-container">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>
      </div>
      <button
        id="btn"
        className="navbar-toggler show-mbl"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line1"></div>
        </span>
      </button>
    </>
  );
}
