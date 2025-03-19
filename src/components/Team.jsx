//contents
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
      <div className="fadein_fadeout web-content">
        <div>
          <img src={ankush} alt="Ankush Samanta" /><br />
          Ankush Samanta <br />
          <a href="https://www.linkedin.com/in/ankush-samanta-804403295/" className="profile-pic">LinkedIn</a> <br />
          <a href="https://github.com/MrFantastico007">GitHub</a>
        </div>
        <div>
          <img src={mrigank} alt="Mrigank Sen" />
          Mrigank Sen <br />
          <a href="https://www.linkedin.com/in/mrigank-sen-ba843827a/">LinkedIn</a> <br />
          <a href="https://github.com/OrangeCatKekw">GitHub</a> <br />
        </div>
        <div>
          <img src={sagufta} alt="Sagufta Sinha" />
          Sagufta Sinha <br />
          <a href="https://www.linkedin.com/in/sagufta-sinha-a03491295/">LinkedIn</a> <br />
          <a href="https://github.com/Sagufta1">GitHub</a>
        </div>
        <div>
          <img src={soumya} alt="Soumya Chakraborty" />
          Soumya Chakraborty <br />
          <a href="https://www.linkedin.com/in/soumya-chakraborty-122388225/">LinkedIn</a> <br />
          <a href="https://github.com/SoumyaOk4-4">GitHub</a>
        </div>
        <div>
          <img src={ayan} alt="Ayan Purkait" />
          Ayan Purkait <br />
          <a href="https://www.linkedin.com/in/ayan-purkait-615464289/">LinkedIn</a> <br />
          <a href="https://github.com/JustChillinBro92">GitHub</a>
        </div>
        <div>
          <img src={aniket} alt="Aniket Nandi" />
          Aniket Nandi <br />
          <a href="https://www.linkedin.com/in/aniket-nandi%F0%9F%A7%91%E2%80%8D%F0%9F%9A%80-9620a4216/">LinkedIn</a> <br />
          <a href="https://github.com/Optimus1o1">GitHub</a>
        </div>
        <div>
          <img src={deboshreya} alt="Deboshreya Ganguly" />
          Deboshreya Ganguly <br />
          <a href="https://www.linkedin.com/in/deboshreya-ganguly-73b813224/">Linked In</a> <br />
          <a href="https://github.com/Deboshreya0603">GitHub</a>
        </div>
        <div>
          <img src={shubhangi} alt="Subhangi Bandyopadhyay" />
          Subhangi Bandyopadhyay <br />
          <a href="https://www.linkedin.com/in/subhangi-bandyopadhyay-9196132a5/">LinkedIn</a> <br />
          <a href="https://github.com/Subhangi-14">GitHub</a>
        </div>
      </div>
    </>
  );
}

export default Team;
