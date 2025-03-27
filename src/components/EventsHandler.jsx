import { faCalendarDays, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const events = [
  {
    name: "Inauguration",
    date: "24th April 2025",
    time: "2:30PM",
    venue: "S.G. Hall",
    status: "Past",
  },
  {
    name: "Workshop",
    date: "24th Aug 2025",
    time: "3:30PM",
    venue: "S.G. Hall",
    status: "Future",
  },
  {
    name: "Live Demo",
    date: "5th July 2025",
    time: "11:00AM",
    venue: "Main Auditorium",
    status: "Ongoing",
  },
];

function EventsHandler() {
  return (
    <>
      {events.map((event, index) => (
        <div className="event-content-container fadein_fadeout">
          <h2 key={index} style={{ fontFamily: "Font2" }} className="event-box">
          <br />
          <h2>{event.name}</h2>
          <br />
          <p style={{color: "rgb(157, 157, 157)"}}><FontAwesomeIcon icon={faCalendarDays} style={{color: "#4b9eec", fontSize: "1.2rem"}} /> {event.date}</p>
          <p style={{color: "rgb(157, 157, 157)"}}><FontAwesomeIcon icon={faClock} style={{color: "#4b9eec", fontSize: "1.2rem"}} /> {event.time}</p>
          <p style={{color: "rgb(157, 157, 157)"}}><FontAwesomeIcon icon={faLocationDot} style={{color: "#4b9eec", fontSize: "1.2rem"}} /> {event.venue}</p>
          <br />
          <p className="event-stat"
            style={{
              color: event.status === "Future"? "yellow": event.status === "Ongoing"? "green": "blue",
              border: "2px solid orange",
              borderRadius: "20px",
              width: "30%",
              transform: "translateX(130px)",
              padding: "8px",
            }}
          >
            {event.status}
          </p>
          <br />
          </h2>
        </div> 
      ))}
    </>
  );
}

export default EventsHandler;
