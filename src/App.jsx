//libs
import "./App.css";
import mainlogo from "./images/logos/mainlogo.png";
import futureblue from "./images/logos/future-blue.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

//nav menus
function Events() {
  return (
    <>
      <h1>events page</h1>
    </>
  );
}

function Sponsers() {
  return (
    <>
      <h1>sponsers page</h1>
    </>
  );
}

function Team() {
  return (
    <>
      <h1>team member page</h1>
    </>
  );
}

function Gallery() {
  return (
    <>
      <h1>gallery page</h1>
    </>
  );
}

function About() {
  return (
    <>
      <h1>about page</h1>
    </>
  );
}

function Contact() {
  return (
    <>
      <h1>contact us page</h1>
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className={`nav-links`}>
        <Link to="/" className="nav-btn home-btn">Events</Link>
        <Link to="/about" className="nav-btn about-btn">About</Link>
        <Link to="/sponsers" className="nav-btn sponsers-btn">Sponsers</Link>
        <Link to="/team" className="nav-btn team-btn">Team</Link>
        <Link to="/gallery" className="nav-btn gallery-btn">Gallery</Link>
        <Link to="/contact" className="nav-btn contact-btn">Contact Us</Link>
      </div>
    </nav>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  //loading time
  useEffect(() => {
    const delayTime = 3000;
    const delayLoading = setTimeout(() => {
      setLoading(false);
    }, delayTime);

    return () => clearTimeout(delayLoading);
  }, []);

  //did you knows
  const dyk = "Did You Know:";
  const DYK_arr = [dyk + " hello", dyk + " hi", dyk + " bye", dyk + " ok"];

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
          <h4 className="did-you-know">{getRandom_DYK(DYK_arr)}</h4>
          <br />
          <br />
          <div className="loadingscreen"></div>
        </center>
      ) : (
        <>
          <h1 className="headers">
            <a href="/">
              <img src={mainlogo} alt="SYNTAX" className="logo-main" />
            </a>
            <img src={futureblue} alt="FIEM" className="fiem" />
          </h1>
          <div className="nav-links">
            <Router>
              <Navbar />
              <br /><br />
              <Routes>
                <Route path="/" element={<Events />} />
                <Route path="/about" element={<About />} />
                <Route path="/sponsers" element={<Sponsers />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
