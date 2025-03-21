import { FaEnvelope, FaPhone, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="web-content-container contact-container">
      <h1>
        <FontAwesomeIcon icon={faHeadset} /> Contact Us
      </h1>
      <br />
      <div className="fadein_fadeout web-content">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:syntx.in@gmail.com" className="contact-link">
            syntx.in@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:+919749095422" className="contact-link">
            +91 97490 95422
          </a>
        </div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a
            href="http://www.instagram.com/syntx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Instagram
          </a>
        </div>
        <div className="contact-item">
          <FaYoutube className="contact-icon" />
          <a
            href="https://www.youtube.com/@syntx_in"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Youtube
          </a>
        </div>
        <div className="contact-item">
          <FaXTwitter className="contact-icon" />
          <a
            href="http://x.com/SyntxIn"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Twitter/X
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
