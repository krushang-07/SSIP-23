import "../css/event.css";
import ldrp from "../img/ldrp.png";
function Event() {
  return (
    <div className="event">
      <div className="fimg1">
        <img src={ldrp} alt="ldrp" className="img12"></img>
      </div>
      <div className="text">Event Details</div>
      <div className="desc">
        <form class="he">
          <input type="textarea" className="asd"></input>
        </form>
      </div>
    </div>
  );
}

export default Event;
