import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventsHandler from "./EventsHandler";

function Events() {
  return (
    <>
      <br />
      <h1 className="fadein_fadeout2 page-title" style={{color: "#e7a129"}}>
        <FontAwesomeIcon icon={faCalendarWeek} /> Events
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <span style={{ color: "gray", fontSize: "1.5rem" }}>Coming Soon...</span>
      {/* delete upper section */}
      
      <div className="event-container">
        <EventsHandler />
      </div>
    </>
  );
}

export default Events;
