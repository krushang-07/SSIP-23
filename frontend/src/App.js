import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminRegistration from "./components/js/AdminRegistration";
import Footer from "./components/js/Footer";
import CoachRegistration from "./components/js/CoachRegistration";
import Signup from "./components/js/Signup";
import Navbar from "./components/js/Navbar";
import { useMyContext } from "./components/hooks/MyContext";
import Login from "./components/js/Login";
import AdminNavbar from "./components/js/AdminNavbar";
import AdminAccount from "./components/js/AdminAccount";
import District from "./components/js/District";
import Institute from "./components/js/Institute";
import Manual from "./components/js/Manual";
import About from "./components/js/About";
import Home from "./components/js/Home";
import CoachNavbar from "./components/js/CoachNavbar";
import Feedback from "./components/js/Feedback";
import CoachAccount from "./components/js/CoachAccount";
import Event from "./components/js/Event";

function App() {
  const { globalState } = useMyContext();
  if (globalState === "admin") {
    return (
      <>
        <div className="adminpanal">
          <BrowserRouter>
            <AdminNavbar />
            <Routes>
              <Route exact path="/adminaccount" element={<AdminAccount />} />
              <Route exact path="/" element={<District />} />
              <Route exact path="/gandhinagar" element={<Institute />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  } else if (globalState === "coach") {
    return (
      <>
        <div className="adminpanal">
          <BrowserRouter>
            <CoachNavbar />
            <Routes>
              {/* <Route exact path="/coachaccount" element={<CoachAccount />} /> */}
              <Route exact path="/feedback" element={<Feedback />} />
              <Route exact path="/coachaccount" element={<CoachAccount />} />
              <Route exact path="/event" element={<Event />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route exact path="/signup" element={<Signup />} />
              <Route
                exact
                path="/signup/coach"
                element={<CoachRegistration />}
              />
              <Route
                exact
                path="/signup/admin"
                element={<AdminRegistration />}
              />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/manual" element={<Manual />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
