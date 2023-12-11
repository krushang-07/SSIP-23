import React, { useState } from "react";
import img1 from "../img/admin1.png";
import "../css/coach_registration.css";

const initialstate = {
  firstname: "",
  middlename: "",
  lastname: "",
  admin_username: "",
  admin_password: "",
  admin_dob: "",
  admin_mno: 0,
  admin_eid: "",
  senior_admin_id: "",
  admin_gender: "",
};
export default function AdminRegistration() {
  const [user, setUser] = useState(initialstate);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("Raw response:", response); // Log the raw response

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Data sent successfully:", jsonResponse);
      } else {
        console.error("Failed to send data:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
    setUser(initialstate);
  };

  return (
    <div className="body">
      <div>
        <img className="img1" src={img1} alt="coach_image" />
        <h1>Admin Registration</h1>
      </div>
      <div className="form">
        <form onSubmit={submit}>
          {/*information*/}
          <h1>Information</h1>
          <div className="line"></div>
          <div className="info">
            <label htmlFor="firstname">Firstname</label>
            <br />
            <input type="text" name="firstname" onChange={handleChange} />
          </div>
          <div className="info">
            <label htmlFor="middlename">Middlename</label>
            <br />
            <input type="text" name="middlename" onChange={handleChange} />
          </div>
          <div className="info">
            <label htmlFor="lastname">Lastname</label>
            <br />
            <input type="text" name="lastname" onChange={handleChange} />
          </div>
          <div className="info">
            <label htmlFor="admin_gender">Gender</label>
            <br />
            <input
              type="radio"
              name="admin_gender"
              value="Male"
              onChange={handleChange}
            />
            <label htmlFor="">Male</label>
            <input
              type="radio"
              name="admin_gender"
              value="Female"
              onChange={handleChange}
            />
            <label htmlFor="">Female</label>
          </div>
          <div className="info">
            <label htmlFor="admin_dob">Date of Birth</label>
            <br />
            <input type="date" name="admin_dob" onChange={handleChange} />
          </div>

          {/*Address*/}
          {/* <h1>Address</h1>
          <div className="line"></div>
          <div className="info">
            <label htmlFor="houseno">House Number</label>
            <br />
            <input type="text" name="coach_address" onChange={handleChange} />
          </div> */}
          {/* <div className="info">
            <label htmlFor="landmark">Landmark</label>
            <br />
            <input type="text" name="landmark" onChange={handleChange} />
          </div>
          <div className="info">
            <label htmlFor="locality">Locality</label>
            <br />
            <input type="text" name="locality" onChange={handleChange} />
          </div> */}
          {/* <div className="info">
            <label htmlFor="firstname">Pincode</label>
            <br />
            <input
              type="number"
              name="coach_pincode"
              value={user.coach_pincode}
              onChange={handleChange}
            />
          </div>
          <div className="info">
            <label htmlFor="firstname">City</label>
            <br />
            <input type="text" name="coach_city" onChange={handleChange} />
          </div> */}
          {/* <div className="info">
            <label htmlFor="firstname">District</label>
            <br />
            <input type="text" onChange={handleChange} />
          </div> */}

          {/*Mobile No & Email ID */}
          <h1>Mobile No & Email ID</h1>
          <div className="line"></div>
          <div className="info">
            <label htmlFor="firstname">Mobile Number</label>
            <br />
            <input
              type="number"
              name="admin_mno"
              value={user.coach_mno}
              onChange={handleChange}
            />
          </div>
          <div className="info">
            <label htmlFor="firstname">Email ID</label>
            <br />
            <input
              type="text"
              name="admin_eid"
              style={{ width: "300px" }}
              onChange={handleChange}
            />
          </div>

          {/*Sports*/}
          <h1>Senior Admin id</h1>
          <div className="line"></div>
          <div className="info">
            <label htmlFor="senior_admin_id">Senior admin id</label>
            <br />
            <input
              type="text"
              name="senior_admin_id"
              style={{ width: "300px" }}
              onChange={handleChange}
            />
          </div>

          {/*Login detail*/}
          <h1>Login details</h1>
          <div className="line"></div>
          <div className="info">
            <label htmlFor="firstname">Username</label>
            <br />
            <input
              type="text"
              name="admin_username"
              style={{ width: "300px" }}
              onChange={handleChange}
            />
          </div>
          <div className="info">
            <label htmlFor="firstname">Enter a password</label>
            <br />
            <input
              type="text"
              name="admin_password"
              style={{ width: "300px" }}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}
