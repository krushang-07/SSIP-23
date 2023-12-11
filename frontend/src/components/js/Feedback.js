import "../css/feedback.css";
import ldrp from "../img/ldrp.png";
import { useState } from "react";

const intialState = {
  feedback_desc: "",
  coach_id: "655ceb44329cad6618b67266",
  program_id: "6561bf28557f7dbebfc2bf0d",
  institute_name: "PDPU",
};

function Feedback() {
  const [data, setData] = useState(intialState);

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("/feedback", {
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

  //   function handleChange(e) {
  //     console.log(e.target.name, e.target.value);
  //     setData({ ...data, [e.target.name]: e.target.value });
  //   }
  return (
    <div className="feedback">
      <div className="image22">
        <img src={ldrp} alt="ldrp"></img>
      </div>

      <div className="lable">
        <p>Whole program feedback</p>
      </div>

      <div className="review">
        <form>
          <input
            type="textarea"
            name="feedback_desc"
            onChange={(e) => {
              setData({ ...data, [e.target.name]: e.target.value });
            }}
            value={data.feedback_desc}
          ></input>
          <br></br>
          <button className="submit" onClick={handlesubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;
