import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

import vec1 from "../img/vector-2.png";
import vec2 from "../img/vector-3.png";
import vec3 from "../img/vector-1.png";
import pic from "../img/ball-2.png";

function Navbar() {
  return (
    <div className="box">
      <div className="nav">
        <div className="overlap">
          <div className="overlap-group">
            <div className="selected-menu" />
            <Link to="/">
              <div className="text-wrapper">Home</div>
            </Link>
          </div>
          <Link to="/about" className="div">
            About
          </Link>
          <Link to="/manual" className="text-wrapper-3">
            Manual
          </Link>
          <button className="login-button">
            <div className="div-wrapper">
              <Link to="/login" className="text-wrapper-4">
                Login
              </Link>
            </div>
          </button>
          <div className="logo">
            <div className="overlap-2">
              <div className="c-ACHMATE">C&nbsp;&nbsp; ACHMATE</div>
              <img className="ball" alt="Ball" src={pic} />
            </div>
            <div className="overlap-3">
              <img className="vector" alt="Vector" src={vec1} />
              <img className="img" alt="Vector" src={vec2} />
              <img className="vector-2" alt="Vector" src={vec3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
