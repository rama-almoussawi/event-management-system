import React, { useState } from "react";
import eventsData from "../Data/events.json";

import techImg from "../Assets/Tech Conference.jpg";
import roboticsImg from "../Assets/Robotics Bootcamp.jpg";
import aiImg from "../Assets/AI & Data Science Hackathon.jpg";

import "../styles/Register.css";

const Register = () => {
  const savedId = localStorage.getItem("selectedEventId");

  let event = eventsData[0];
  for (let i = 0; i < eventsData.length; i++) {
    if (eventsData[i].id == savedId) {
      event = eventsData[i];
      break;
    }
  }

  const imagesMap = {
    1: techImg,
    2: roboticsImg,
    3: aiImg
  };

  const [values, setValues] = useState({ fname: "", email: "", tickets: "1" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Registration confirmed for ${event.title}!\nName: ${values.fname}\nEmail: ${values.email}\nTickets: ${values.tickets}`
    );
  };

  return (
    <div className="contact">
      <div className="leftSide" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <img 
          src={imagesMap[event.id]} 
          alt={event.title} 
          className="event-img" 
          style={{ width: "100%", maxHeight: "250px", objectFit: "cover", borderRadius: "8px", marginBottom: "15px" }}
        />

        <div className="event-info-box" style={{ width: "100%", textAlign: "left" }}>
          <span className="event-category-tag">{event.category}</span>
          <h2>{event.title}</h2>
          <p>{event.date} · {event.venue}</p>
          <p>{event.seats}</p>
        </div>
      </div>

      <div className="rightSide">
        <form id="contact-form" onSubmit={handleSubmit}>
          <h2>Register</h2>

          <label htmlFor="fname">Full Name</label>
          <input
            name="fname"
            placeholder="Enter full name..."
            required
            type="text"
            value={values.fname}
            onChange={(e) => setValues({ ...values, fname: e.target.value })}
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            required
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />

          <label htmlFor="tickets">Tickets</label>
          <input
            name="tickets"
            placeholder="Enter number of tickets..."
            required
            type="number"
            min="1"
            value={values.tickets}
            onChange={(e) => setValues({ ...values, tickets: e.target.value })}
          />

          <button type="submit">
            Confirm registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;