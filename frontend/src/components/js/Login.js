import { useState } from "react";
import "../css/login.css";
import { useMyContext } from "../hooks/MyContext";

const intialState = {
  Username: "",
  Password: "",
  Role: "",
};
function Login() {
  const [data, setData] = useState(intialState);

  const { updateGlobalState } = useMyContext();

  const handleButtonClick = () => {
    // Update the global state
    updateGlobalState(data.Role);
  };
  async function handlesubmit(e) {
    e.preventDefault();
    
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Raw response:", response); // Log the raw response

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Data sent successfully:", jsonResponse);
        if (response.status === 200) {
          console.log(response);
          handleButtonClick();
        }
      } else {
        if (response.status === 422) {
          alert("enter valid data");
        }
        console.error("Failed to send data:", response.statusText);
        alert("Failed to send data:");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
    setData(intialState);
  }

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="login1">
      <form>
        <div className="box2">
          <div className="login">Login</div>

          <div className="user">
            Username <br></br>
            <input
              type="text"
              name="Username"
              onChange={handleChange}
              value={data.Username}
            ></input>
          </div>

          <div className="pass">
            Password<br></br>
            <input
              type="password"
              name="Password"
              onChange={handleChange}
              value={data.Password}
            ></input>
          </div>

          <div className="role">
            <select
              name="Role"
              id="role"
              onChange={handleChange}
              value={data.Role}
            >
              <option value="">--select role--</option>

              <option value="admin">admin</option>

              <option value="coach">coach</option>
            </select>
          </div>

          <button onClick={handlesubmit}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
