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
            Welcome to SYNTAXX, A Departmental(CSE) team to conduct Departmental Events
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
