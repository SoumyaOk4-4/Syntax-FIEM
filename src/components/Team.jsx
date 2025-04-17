// Contents import
import chanchal from "../images/team_pics/chanchal-ghosh.jpg";
import manjushree from "../images/team_pics/manjushree-chakraborty.jpg";
import satyaam from "../images/team_pics/satyaam-raha.jpg";
import sounak from "../images/team_pics/sounak-banerjee.jpeg";
import jaydip from "../images/team_pics/dr-jaydip-nath.jpg";

//libs
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

function Team() {

  return (
    <>
    <br />
      <h1 className="fadein_fadeout2 page-title" style={{ color: "#e7a129" }}>
      <FontAwesomeIcon icon={faUsers} /> Mentors
      </h1>
      <br />
        <div className="web-content-container team fadein_fadeout">
          <div className="team-member">
            <img src={jaydip} alt="Dr. Jaydip Nath" className="profile-pic" />
            <br />
            Dr. Jaydip Nath
            <div className="Job-Role">Facilitator</div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/dr-jaydip-nath-217a7a16a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="team-socials linkedin" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src={chanchal} alt="Chanchal Ghosh" className="profile-pic" />
            <br />
            Chanchal Ghosh
            <div className="Job-Role">Mentor</div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/chanchal-ghosh-50b6023b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="team-socials linkedin" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <img
              src={manjushree}
              alt="Manjushree Chakraborty"
              className="profile-pic"
            />
            <br />
            Manjushree Chakraborty
            <div className="Job-Role">Mentor</div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/manjushree-chakraborty-547428105/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="team-socials linkedin" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src={sounak} alt="Sounak Banerjee" className="profile-pic" />
            <br />
            Sounak Banerjee
            <div className="Job-Role">Mentor</div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/b-sounak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="team-socials linkedin" />
              </a>
            </div>
          </div>

          <div className="team-member">
            <img src={satyaam} alt="Satyam Raha" className="profile-pic" />
            <br />
            Satyam Raha
            <div className="Job-Role">Mentor</div>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/satyaam-raha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="team-socials linkedin" />
              </a>
              <a
                href="https://github.com/hellyhell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="team-socials github" />
              </a>
            </div>
          </div>
        </div>
    </>
  );
}

export default Team;
