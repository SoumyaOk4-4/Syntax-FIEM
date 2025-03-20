// Contents import
import soumya from "../images/team_pics/soumya.jpg";
import ayan from "../images/team_pics/ayan.jpg";
import mrigank from "../images/team_pics/mrigank.jpg";
import sagufta from "../images/team_pics/sagufta.jpg";
import aniket from "../images/team_pics/aniket.jpg";
import ankush from "../images/team_pics/ankush.jpg";
import shubhangi from "../images/team_pics/shubhangi.jpg";
import deboshreya from "../images/team_pics/deboshreya.jpg";

function Team() {
  return (
    <>
    <h1>Team Page</h1>
    <br /><br /><br /><br /><br />
      <div className="team-container">
        <div className="team-scroll">
          <div className="team-member">
            <img src={ankush} alt="Ankush Samanta" className="profile-pic" />
            <br />
            Ankush Samanta <br />
            <a href="https://www.linkedin.com/in/ankush-samanta-804403295/">LinkedIn</a>{" "}
            <a href="https://github.com/MrFantastico007">GitHub</a>
          </div>
          <div className="team-member">
            <img src={mrigank} alt="Mrigank Sen" className="profile-pic" />
            <br />
            Mrigank Sen <br />
            <a href="https://www.linkedin.com/in/mrigank-sen-ba843827a/">LinkedIn</a>{" "}
            <a href="https://github.com/OrangeCatKekw">GitHub</a>
          </div>
          <div className="team-member">
            <img src={sagufta} alt="Sagufta Sinha" className="profile-pic" />
            <br />
            Sagufta Sinha <br />
            <a href="https://www.linkedin.com/in/sagufta-sinha-a03491295/">LinkedIn</a>{" "}
            <a href="https://github.com/Sagufta1">GitHub</a>
          </div>
          <div className="team-member">
            <img src={soumya} alt="Soumya Chakraborty" className="profile-pic" />
            <br />
            Soumya Chakraborty <br />
            <a href="https://www.linkedin.com/in/soumya-chakraborty-122388225/">LinkedIn</a>{" "}
            <a href="https://github.com/SoumyaOk4-4">GitHub</a>
          </div>
          <div className="team-member">
            <img src={ayan} alt="Ayan Purkait" className="profile-pic" />
            <br />
            Ayan Purkait <br />
            <a href="https://www.linkedin.com/in/ayan-purkait-615464289/">LinkedIn</a>{" "}
            <a href="https://github.com/JustChillinBro92">GitHub</a>
          </div>
          <div className="team-member">
            <img src={aniket} alt="Aniket Nandi" className="profile-pic" />
            <br />
            Aniket Nandi <br />
            <a href="https://www.linkedin.com/in/aniket-nandi%F0%9F%A7%91%E2%80%8D%F0%9F%9A%80-9620a4216/">LinkedIn</a>{" "}
            <a href="https://github.com/Optimus1o1">GitHub</a>
          </div>
          <div className="team-member">
            <img src={deboshreya} alt="Deboshreya Ganguly" className="profile-pic" />
            <br />
            Deboshreya Ganguly <br />
            <a href="https://www.linkedin.com/in/deboshreya-ganguly-73b813224/">LinkedIn</a>{" "}
            <a href="https://github.com/Deboshreya0603">GitHub</a>
          </div>
          <div className="team-member">
            <img src={shubhangi} alt="Subhangi Bandyopadhyay" className="profile-pic" />
            <br />
            Subhangi Bandyopadhyay <br />
            <a href="https://www.linkedin.com/in/subhangi-bandyopadhyay-9196132a5/">LinkedIn</a>{" "}
            <a href="https://github.com/Subhangi-14">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
