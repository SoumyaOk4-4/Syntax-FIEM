import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventsHandler from "./EventsHandler";

function Events() {
  return (
    <>
      <br />
      <h1>
        <FontAwesomeIcon icon={faCalendarWeek} /> Events
      </h1>
      <br />
      <div>
        <EventsHandler />
      </div>
    </>
  );
}

export default Events;
