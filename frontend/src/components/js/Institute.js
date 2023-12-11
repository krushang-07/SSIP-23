import React, { useState } from "react";
import "../css/district.css";
import { Link } from "react-router-dom";
export default function Institute() {
  const [institute, setInstitute] = useState("");
  return (
    <div className="sidebar">
      <h1>Districts</h1>
      <div className="formargin">
        <Link
          to="/gandhinagar/institute"
          className="districtbox"
          onClick={() => {
            setInstitute("ldrp-itr");
          }}
        >
          LDRP-ITR
        </Link>
        <Link
          to="/gandhinagar/institute"
          className="districtbox"
          onClick={() => {
            setInstitute("pdpu");
          }}
        >
          PDPU
        </Link>
      </div>
    </div>
  );
}
