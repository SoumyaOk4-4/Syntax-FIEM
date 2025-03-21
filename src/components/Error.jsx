import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Error() {
  return (
    <>
      <br />
      <h1>
        <FontAwesomeIcon icon={faTriangleExclamation} /> 404 - Not Found
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee>
        <span style={{ color: "gray", fontSize: "3rem", fontFamily: "Font2" }}>
          Nothing to See Here!🤷‍♂️
        </span>
      </marquee>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>
        <a
          href="/"
          style={{ color: "#e7a529", fontSize: "2rem", fontFamily: "Font2" }}
        >
          👉 Return to Home 👈
        </a>
      </h1>
    </>
  );
}

export default Error;
