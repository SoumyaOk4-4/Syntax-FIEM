import {
  faCalendarDays,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const events = [
  {
    name: "Inauguration",
    date: "24th April 2025",
    time: "2:30PM",
    venue: "S.G. Hall",
    status: "Future",
    timer: true,
  },
];

function EventsHandler() {
  const date = "2025-04-24T14:30:00"; // <-------- CHNAGE TIME HERE FOR EVENTS
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const eventDateTime = new Date(date).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = eventDateTime - now;

      if (diff <= 0) {
        setTimeLeft("Event Started");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const timerInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      {events.map((event, index) => (
        <div className="event-content-container fadein_fadeout">
          <h2 key={index} style={{ fontFamily: "Font2" }} className="event-box">
            <br />
            <h2>{event.name}</h2>
            <br />
            <p style={{ color: "rgb(157, 157, 157)" }}>
              <FontAwesomeIcon
                icon={faCalendarDays}
                style={{ color: "#4b9eec", fontSize: "1.2rem" }}
              />{" "}
              {event.date}
            </p>
            <p style={{ color: "rgb(157, 157, 157)" }}>
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: "#4b9eec", fontSize: "1.2rem" }}
              />{" "}
              {event.time}
            </p>
            <p style={{ color: "rgb(157, 157, 157)" }}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#4b9eec", fontSize: "1.2rem" }}
              />{" "}
              {event.venue}
            </p>
            <br />
            <p
              className="event-stat"
              style={{
                color:
                  event.status === "Future"
                    ? "yellow"
                    : event.status === "Ongoing"
                    ? "green"
                    : "blue",
                border: "2px solid orange",
                borderRadius: "20px",
                width: "30%",
                transform: "translateX(130px)",
                padding: "8px",
              }}
            >
              {" "}
              {event.timer === true
                ? `${timeLeft}`
                : event.status}
            </p>
            <br />
          </h2>
        </div>
      ))}
    </>
  );
}

export default EventsHandler;
