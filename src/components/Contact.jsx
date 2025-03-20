import { FaEnvelope, FaPhone, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
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
          <FaXTwitter className="contact-icon" />
          <a
            href="http://x.com/SyntxIn"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            X.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
