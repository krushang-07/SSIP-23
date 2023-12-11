import "../css/role.css";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/whistle-icon3.png";
import img3 from "../img/admin1.png";

// const initialState = {};

function Signup() {
  //   const [role, setRole] = useState(initialState);

  //   function handlesubmit(e) {
  //     e.preventDefault();
  //     setRole();
  //   }
  return (
    <>
      <div className="signup">
        <div className="Lable">Please select your role</div>

        <div className="image">
          <Link to="/signup/coach">
            <img src={img1} className="img6" alt="coach"></img>
            {/* <h6 className="h2">Coach</h6> */}
          </Link>
          <Link to="/signup/admin">
            <img src={img3} className="img6" alt="admin"></img>
            {/* <h6 className="h2">Admin</h6> */}
          </Link>
        </div>
      </div>

      <div className="contact"></div>
    </>
  );
}

export default Signup;
