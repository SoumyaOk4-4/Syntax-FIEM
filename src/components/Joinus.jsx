import { faFileSignature, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Joinus() {
  return (
    <>
      <br />
      <h1>
        <FontAwesomeIcon icon={faFileSignature} /> Join Us
      </h1>
      <br />

      <div className="web-content-container error-content-container" style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="fadein_fadeout about-txt web-content" style={{
          gap: "30px",
          width: "70%",
        }}>
          <div
            className="para"
            style={{
              padding: "20px",
              textAlign: "center",
              fontSize: "2rem",
              fontFamily: "Font2",
              color: "rgb(184, 184, 184)",
            }}
          >
            No prerequisites required! Just fill out the form and join us — Be
            part of the incredible journey ahead!
          </div>

          <div
            className="return-home volunteer-btn"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                border: "2px solid #e7a529",
                borderRadius: "25px",
              }}
            >
              <a
                href="https://forms.gle/soH7n2CjLckWHyEE9"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#e7a529",
                  fontSize: "1.8rem",
                  fontFamily: "Font2",
                  textDecoration: "none",
                  padding: "15px",
                }}
              >
                <FontAwesomeIcon icon={faPen} /> Volunteer Form
              </a>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joinus;
