import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div
        style={{
          left: 67,
          top: 30,
          position: "absolute",
          color: "white",
          fontSize: 32,
          fontFamily: "Poppins",
          fontWeight: "500",
          letterSpacing: 1.12,
          wordWrap: "break-word",
        }}
      >
        Contact
      </div>
      <div
        style={{
          left: 67,
          top: 81,
          position: "absolute",
          color: "white",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "500",
          letterSpacing: 0.84,
          wordWrap: "break-word",
        }}
      >
        Sports, Youth & Cultural Activities Department
      </div>
      <div
        style={{
          left: 67,
          top: 120,
          position: "absolute",
          color: "white",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "500",
          letterSpacing: 0.84,
          wordWrap: "break-word",
        }}
      >
        Sector : Health and Sports
      </div>
      <div
        style={{
          left: 67,
          top: 159,
          position: "absolute",
          color: "white",
          fontSize: 24,
          fontFamily: "Poppins",
          fontWeight: "500",
          letterSpacing: 0.84,
          wordWrap: "break-word",
        }}
      >
        Working Days : Monday to Saturdaay
      </div>
    </div>
  );
}
