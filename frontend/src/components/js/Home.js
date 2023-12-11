import { Link } from "react-router-dom";
import "../css/home.css";
import gus from "../img/photo1.png";
import photo2 from "../img/photo2.png";
function Home() {
  return (
    <div className="js">
      <div className="welcome">
        <div className="wl">Welcome to</div>
        <div className="co">Coach Mate</div>
      </div>
      <div className="fimg">
        <img src={gus} alt="img"></img>
      </div>

      <div className="ftext">
        It's never been easier to
        <br />
        <span>schedule, manage</span> and run <br />
        great practices that keep kids
        <br />
        happy and wanting more.
        <br />
        Choose from a range of ready-
        <br />
        made <span>practice plans,</span> perfect <br />
        for your players’ age and stage
        <br />
      </div>

      <div className="but">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </div>
      <br />

      <div className="simg">
        <img src={photo2} alt="img"></img>
      </div>

      <div className="stext">
        <h1 className="coach"> For coaches </h1> <br />
        <span>
          <br />
          Access ‘what to coach’ and ‘how to <br />
          coach’ on your mobile in <br />
          seconds. With easy-to-follow <br />
          animated activities, coaches <br />
          can deliver engaging and fun <br />
          sessions every time, no matter <br />
          thier experience.It's never been
          <br />
          easier to say 'yes' to job !
        </span>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
