// Contents import
import soumya from "../images/team_pics/soumya.jpg";
import ayan from "../images/team_pics/ayan.jpg";
import mrigank from "../images/team_pics/mrigank.jpg";
import sagufta from "../images/team_pics/sagufta.jpg";
import aniket from "../images/team_pics/aniket.jpg";
import ankush from "../images/team_pics/ankush.jpg";
import shubhangi from "../images/team_pics/shubhangi.jpg";
import deboshreya from "../images/team_pics/deboshreya.jpg";

//libs
import { FaLinkedin, FaGithub } from "react-icons/fa6";

function Team() {
  return (
    <>
      <h1>Team Page</h1>
      <br />
      <div className="web-content-container team">
        <div className="team-member">
          <img src={mrigank} alt="Mrigank Sen" className="profile-pic" />
          <br />
          <br />
          Mrigank Sen
          <div className="Job-Role">Marketing Head</div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/mrigank-sen-ba843827a/">
              <FaLinkedin className="team-socials linkedin" style={{}} />
            </a>
            <a href="https://github.com/OrangeCatKekw">
              <FaGithub className="team-socials github" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src={ayan} alt="Ayan Purkait" className="profile-pic" />
          <br />
          <br />
          Ayan Purkait
          <div className="Job-Role">Support Dev</div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/ayan-purkait-615464289/">
              <FaLinkedin className="team-socials linkedin" />
            </a>
            <a href="https://github.com/JustChillinBro92">
              <FaGithub className="team-socials github" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src={sagufta} alt="Sagufta Sinha" className="profile-pic" />
          <br />
          <br />
          Sagufta Sinha
          <div className="Job-Role">Web Content Head</div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/sagufta-sinha-a03491295/">
              <FaLinkedin className="team-socials linkedin" />
            </a>
            <a href="https://github.com/Sagufta1">
              <FaGithub className="team-socials github" />
            </a>
          </div>
        </div>

        <div className="team-member ">
          <img src={soumya} alt="Soumya Chakraborty" className="profile-pic " />
          <br />
          <br />
          Soumya Chakraborty
          <div className="Job-Role">Technical Head</div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/soumya-chakraborty-122388225/">
              <FaLinkedin className="team-socials linkedin" />
            </a>
            <a href="https://github.com/SoumyaOk4-4">
              <FaGithub className="team-socials github" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src={ankush} alt="Ankush Samanta" className="profile-pic" />
          <br />
          <br />
          Ankush Samanta
          <div className="Job-Role">Design Head</div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/ankush-samanta-804403295/">
              <FaLinkedin className="team-socials linkedin" />
            </a>
            <a href="https://github.com/MrFantastico007">
              <FaGithub className="team-socials github" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src={aniket} alt="Aniket Nandi" className="profile-pic" />
          <br />
          <br />
          Aniket Nandi
          <div className="Job-Role">Operation Head</div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/aniket-nandi%F0%9F%A7%91%E2%80%8D%F0%9F%9A%80-9620a4216/">
              <FaLinkedin className="team-socials linkedin" />
            </a>
            <a href="https://github.com/Optimus1o1">
              <FaGithub className="team-socials github" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <img
            src={deboshreya}
            alt="Deboshreya Ganguly"
            className="profile-pic"
          />
          <br />
          <br />
          Deboshreya Ganguly
          <div className="Job-Role">Publicity and Content Head</div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/deboshreya-ganguly-73b813224/">
              <FaLinkedin className="team-socials linkedin" />
            </a>
            <a href="https://github.com/Deboshreya0603">
              <FaGithub className="team-socials github" />
            </a>
          </div>
        </div>

        <div className="team-member">
          <img
            src={shubhangi}
            alt="Subhangi Bandyopadhyay"
            className="profile-pic"
          />
          <br />
          <br />
          Subhangi Bandyopadhyay
          <div className="Job-Role">Media and Communication Head</div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/subhangi-bandyopadhyay-9196132a5/">
              <FaLinkedin className="team-socials linkedin" />
            </a>
            <a href="https://github.com/Subhangi-14">
              <FaGithub className="team-socials github" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
