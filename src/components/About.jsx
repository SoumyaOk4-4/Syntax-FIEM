import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <br />
      <h1 className="fadein_fadeout2 page-title" style={{ color: "#e7a129" }}>
        <FontAwesomeIcon icon={faCircleInfo} /> About
      </h1>
      <br />
      <div className="web-content-container about-container">
        <div className="fadein_fadeout web-content about-txt">
          <div className="general">
            Welcome to SYNTAXX, the vibrant tech community of Future Institute of
            Engineering and Management (FIEM), Kolkata, dedicated to nurturing
            innovation, creativity, and collaboration among students. Our goal
            is to create a dynamic community where tech enthusiasts can explore,
            experiment, and excel in the rapidly evolving world of technology.
            Stepping into a new era of tech-driven excellence, SYNTAXX provides a
            platform for hands-on learning, problem-solving, and skill-building
            through a wide range of events and activities. From robotics and
            gaming to coding competitions and technical workshops, we offer a
            space where curiosity meets innovation.
          </div>

          <div className="expect" style={{fontSize: "3rem"}}>WHAT TO EXPECT ?</div>

          <div className="future-events">
            <div>
              To kickstart each academic session and ignite the spark of
              technology, SYNTAXX organizes CODEFEST - an intra-college coding
              competition that challenges problem-solving skills.
            </div>
            <div>
              We also host thrilling robotics showdown, and TECH
              ARENA, our annual tech fest, packed with hackathons, gaming
              tournaments, and cutting-edge tech talks.
            </div>
            <div>
              We conduct workshops and mentorship programs on emerging
              technologies, offering opportunities for students to gain hands-on
              experience in fields like AI, Cybersecurity, IoT, and Game
              Development—bridging the gap between academics and real-world
              applications.
            </div>
            <div>
              Whether you're a Coding Wizard, a Robotics Enthusiast, a Gaming
              Champion, or just someone eager to dive into the world of
              technology, SYNTAXX welcomes you. Join us and be part of a
              community that doesn't just follow technology— it creates it.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
