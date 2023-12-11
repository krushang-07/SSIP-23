import React from "react";
import "../css/adminnavbar.css";
import logo from "../img/logo1.png";
import { Link } from "react-router-dom";
export default function CoachNavbar() {
  console.log("adminnavbar");
  return (
    <div className="nav0">
      <img src={logo} style={{ padding: "10px" }} alt="logo" />
      <br></br>
      {/* <h1>Account</h1> */}
      <div className="hadding">
        <Link to="/coachaccount" className="text-wrapper-2">
          Account
        </Link>
      </div>
      <div className="margin">
        <Link to="/event" className="text-wrapper-3">
          event
        </Link>
      </div>
      <div className="margin">
        <Link to="/leave" className="text-wrapper-3">
          Leave
        </Link>
      </div>
      <div className="margin">
        <Link to="/feedback" className="text-wrapper-3">
          Feedback
        </Link>
      </div>
      <div className="margin">
        <Link to="/attendance" className="text-wrapper-3">
          Attendance
        </Link>
      </div>
    </div>
  );
}
