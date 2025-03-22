import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Error() {
  return (
    <>
      <br />

      <div className="web-content-container error-content-container">
        <div className="fadein_fadeout error-container web-content">

          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                fontFamily: "Font1",
                transform: "translateY(50px)",
              }}
            >
              <h3><FontAwesomeIcon icon={faTriangleExclamation} /> 404</h3>
              <br />
              <h4> Oops! Page Not Found</h4>
            </h1>
          </div>
              <br />
          <div>
            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
            <marquee>
              <span
                style={{ color: "gray", fontSize: "3rem", fontFamily: "Font2" }}
              >
                Nothing to See Here!🤷‍♂️
              </span>
            </marquee>
          </div>

          <div
            className="return-home"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <h1
              style={{
                border: "2px solid #e7a529",
                borderRadius: "35px",
              }}
            >
              <a
                href="/"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#e7a529",
                  fontSize: "2rem",
                  fontFamily: "Font2",
                  textDecoration: "none",
                  padding: "15px",
                }}
              >
                Return to Home
              </a>
            </h1>
          </div>

        </div>
      </div>
    </>
  );
}

export default Error;
