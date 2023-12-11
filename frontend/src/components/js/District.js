import React from "react";
import "../css/district.css";
import { Link } from "react-router-dom";
export default function District() {
  return (
    <div className="sidebar">
      <h1>Districts</h1>
      <div className="formargin">
        <Link to="/gandhinagar" className="districtbox">
          Gandhinagar
        </Link>
      </div>
    </div>
  );
}
