import "../css/manual.css";
import coach from "../img/coach.jpg";
import home from "../img/home.png";
import login from "../img/login.png";
function Manual() {
  return (
    <>
      <div className="app">
        <div className="first">
          <h3 className="at">Hello folks that’s our portal COACHMATE</h3>

          <p>First you need to Login (if already you registered)</p>
        </div>
        <div className="img">
          <img className="home" alt="home" src={home} />
        </div>
        <div classname="second">
          <h3>Then you need to choose role and authentication of yourself</h3>
        </div>
        <div className="img">
          <img className="login5" alt="login" src={login} />
        </div>
        <div classname="third">
          <h3>And the rest you can see it</h3>
        </div>
        <div className="img">
          <img className="coach" alt="coach" src={coach} />
        </div>
      </div>
    </>
  );
}
export default Manual;
