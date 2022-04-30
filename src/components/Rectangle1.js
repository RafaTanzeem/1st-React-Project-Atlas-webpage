import React from "react";
import "./Rectangle1.css";
import Button from "./Button";

export default function Rectangle1() {
  return (
    <div>
      <div className="rectangle1">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Careers
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="rectangle1-content">
          <h1 className="h1">THE ELECTONRIC CIVILIZATION</h1>
          <p>Cryptocurrency Transforming Physical Lives in the Digital Realm</p>
          <Button />
        </div>
      </div>
    </div>
  );
}
