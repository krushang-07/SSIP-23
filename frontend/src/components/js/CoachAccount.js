import React from "react";
import "../css/coachaccount.css";
import vec1 from "../img/line-1.svg";

function CoachAccount() {
  return (
    <div className="coach-dashboard">
      <div className="div">
        <div className="overlap-2">
          <div className="text-wrapper-6">Email ID : john@example.com</div>
          <div className="text-wrapper-7">
            sector-15 , ahimsa circle , gandhinagar
          </div>
          <div className="overlap-3">
            <img className="line" alt="Line" src={vec1} />
            <div className="text-wrapper-8">Address</div>
          </div>
          <div className="overlap-4">
            <img className="line" alt="Line" src={vec1} />
            <div className="text-wrapper-8">Mobile &amp; Email ID</div>
          </div>
          <div className="overlap-5">
            <img className="img" alt="Line" src={vec1} />
            <div className="text-wrapper-9">Sports</div>
          </div>
          <div className="text-wrapper-10">Mobile : 123456789</div>
          <div className="text-wrapper-11">Doe</div>
          <div className="text-wrapper-12">Smith</div>
          <div className="text-wrapper-13">John</div>
          <div className="profile">
            <div className="div-wrapper">
              <div className="text-wrapper-14">J</div>
            </div>
          </div>
          <div className="text-wrapper-15">15-05-1990</div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-6">
            <div className="text-wrapper-16">J</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachAccount;
