import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <br />
      <h1 className="fadein_fadeout2" style={{color: "#e7a129", }}>
        <FontAwesomeIcon icon={faCircleInfo} /> About
      </h1>
      <br />
      <div className="web-content-container">
        <div className="fadein_fadeout web-content about-txt">
          Welcome to SYNTAX, the vibrant tech community of Future Institute of
          Engineering and Management (FIEM), Kolkata, dedicated to nurturing
          innovation, creativity, and collaboration among students. Our goal is
          to create a dynamic community where tech enthusiasts can explore,
          experiment, and excel in the rapidly evolving world of technology.
          Stepping into a new era of tech-driven excellence, SYNTAX provides a
          platform for hands-on learning, problem-solving, and skill-building
          through a wide range of events and activities. From robotics and
          gaming to coding competitions and technical workshops, we offer a
          space where curiosity meets innovation. To kickstart each academic
          session and ignite the spark of technology, SYNTAX organizes CODEFEST
          - an intra-college coding competition that challenges problem-solving
          skills. We also host BOT WARS, a thrilling robotics showdown, and TECH
          ARENA, our annual tech fest, packed with hackathons, gaming
          tournaments, and cutting-edge tech talks. Beyond events, SYNTAX is
          committed to continuous learning. We conduct workshops and mentorship
          programs on emerging technologies, offering opportunities for students
          to gain hands-on experience in fields like AI, cybersecurity, IoT, and
          game development—bridging the gap between academics and real-world
          applications. Whether you're a coding wizard, a robotics enthusiast, a
          gaming champion, or just someone eager to dive into the world of
          technology, SYNTAX welcomes you. Join us and be part of a community
          that doesn't just follow technology— it creates it.
        </div>
      </div>
    </>
  );
}

export default About;
