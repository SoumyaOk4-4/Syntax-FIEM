const events = [
  {
    name: "Inauguration",
    date: "24th April 2025",
    time: "2:30PM",
    venue: "S.G. Hall",
    status: "past",
  },
  {
    name: "Workshop",
    date: "24th Aug 2025",
    time: "3:30PM",
    venue: "S.G. Hall",
    status: "future",
  },
  {
    name: "Live Demo",
    date: "5th July 2025",
    time: "11:00AM",
    venue: "Main Auditorium",
    status: "ongoing",
  },
];

function EventsHandler() {
  return (
    <>
      {events.map((event, index) => (
        <h2 key={index} style={{ fontFamily: "Font2" }} className="event-box">
          <br />
          <h2>{event.name}</h2>
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>{event.venue}</p>
          <p
            style={{
              color: event.status === "future"? "yellow": event.status === "ongoing"? "green": "blue",
            }}
          >
            {event.status}
          </p>
          <br />
        </h2>
      ))}
    </>
  );
}

export default EventsHandler;
