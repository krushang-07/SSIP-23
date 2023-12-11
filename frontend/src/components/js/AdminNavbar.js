import React from "react";
import "../css/adminnavbar.css";
import logo from "../img/logo1.png";
import { Link } from "react-router-dom";
export default function AdminNavbar() {
  console.log("adminnavbar");
  return (
    <div className="nav0">
      <img src={logo} style={{ padding: "10px" }} alt="logo" />
      <br></br>
      {/* <h1>Account</h1> */}
      <div className="hadding">
        <Link to="/adminaccount" className="text-wrapper-2">
          Account
        </Link>
      </div>
      <div className="margin">
        <Link to="/" className="text-wrapper-3">
          District
        </Link>
      </div>
    </div>
  );
}
