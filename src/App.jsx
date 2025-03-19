//libs
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

//contents
import mainlogo from "./images/logos/main_logo.png";
import futureblue from "./images/logos/future-blue.png";
import loadingGif from "./images/logos/loading.gif";

//components
import Events from "./components/Events";
import About from "./components/About";
import Sponsers from "./components/Sponsers";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Joinus from "./components/Joinus";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen ? (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <div className="cross">✖</div>
        )}
      </div>
      <ul className={menuOpen ? "open" : ""} id="nav-links">
        <li>
          <Link to="/" className="nav-btn home-btn">
            Events
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-btn about-btn">
            About
          </Link>
        </li>
        <li>
          <Link to="/sponsers" className="nav-btn sponsers-btn">
            Sponsers
          </Link>
        </li>
        <li>
          <Link to="/team" className="nav-btn team-btn">
            Team
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="nav-btn gallery-btn">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-btn contact-btn">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/joinus" className="nav-btn joinus-btn">
            Join Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  //loading time
  useEffect(() => {
    const delayTime = 3500;
    const delayLoading = setTimeout(() => {
      setLoading(false);
    }, delayTime);

    return () => clearTimeout(delayLoading);
  }, []);

  //did you knows
  const dyk = "Did You Know: ";
  const DYK_arr = [dyk + "hello", dyk + "hi", dyk + "bye", dyk + "ok"];

  //did you know random function
  function getRandom_DYK(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  return (
    <div className="App">
      {loading ? (
        //loading screen
        <center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img src={loadingGif} className="loadingscreen" alt="Loading..." style={{height:"200px",width:"270px"}}/>
          <br />
          <br />
          <br />
          <h4 className="did-you-know">{getRandom_DYK(DYK_arr)}</h4>
        </center>
      ) : (
        <>
          <div className="nav-links">
            <h1 className="headers">
              <a href="/">
                <img src={mainlogo} alt="SYNTAX" className="logo-main" />
              </a>
              <img src={futureblue} alt="FIEM" className="fiem" />

              <h3 className="gform">
                <a href="/">Become a member</a>
              </h3>
            </h1>

            <Router>
              <Navbar />
              <br />
              <br />
              <Routes>
                <Route path="/" element={<Events />} />
                <Route path="/about" element={<About />} />
                <Route path="/sponsers" element={<Sponsers />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/joinus" element={<Joinus />} />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
