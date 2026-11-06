
import React, { useState } from "react";
import eventsData from "../Data/events.json";

import techImg from "../Assets/Tech Conference.jpg";
import roboticsImg from "../Assets/Robotics Bootcamp.jpg";
import aiImg from "../Assets/AI & Data Science Hackathon.jpg";

import { useLanguage } from "../context/LanguageContext";
import "../styles/Register.css";

const Register = () => {

  const { lang } = useLanguage();
  const isEnglish = lang === 'en';

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

  const [values, setValues] = useState({
    fname: "",
    email: "",
    tickets: "1"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      isEnglish
        ? `Registration confirmed for ${event.title}!\nName: ${values.fname}\nEmail: ${values.email}\nTickets: ${values.tickets}`
        : `Inscription confirmée pour ${event.title} !\nNom : ${values.fname}\nE-mail : ${values.email}\nBillets : ${values.tickets}`
    );
  };

  return (
    <div className="contact">

      <div
        className="leftSide"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}
      >

        <img
          src={imagesMap[event.id]}
          alt={event.title}
          className="event-img"
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "15px"
          }}
        />

        <div
          className="event-info-box"
          style={{ width: "100%", textAlign: "left" }}
        >

          <span className="event-category-tag">
            {isEnglish
              ? event.category
              : event.category === "Tech"
                ? "Technologie"
                : event.category === "Workshop"
                  ? "Atelier"
                  : event.category === "Conference"
                    ? "Conférence"
                    : event.category}
          </span>

          <h2>{event.title}</h2>

          <p>{event.date} · {event.venue}</p>

          <p>{event.seats}</p>

        </div>
      </div>

      <div className="rightSide">

        <form id="contact-form" onSubmit={handleSubmit}>

          <h2>
            {isEnglish ? "Register" : "S'inscrire"}
          </h2>

          <label htmlFor="fname">
            {isEnglish ? "Full Name" : "Nom complet"}
          </label>

          <input
            id="fname"
            name="fname"
            placeholder={isEnglish ? "Enter full name..." : "Entrez votre nom complet..."}
            required
            type="text"
            value={values.fname}
            onChange={(e) =>
              setValues({ ...values, fname: e.target.value })
            }
          />

          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            placeholder={isEnglish ? "Enter email..." : "Entrez votre e-mail..."}
            required
            type="email"
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, email: e.target.value })
            }
          />

          <label htmlFor="tickets">
            {isEnglish ? "Tickets" : "Billets"}
          </label>

          <input
            id="tickets"
            name="tickets"
            placeholder={isEnglish ? "Enter number of tickets..." : "Entrez le nombre de billets..."}
            required
            type="number"
            min="1"
            value={values.tickets}
            onChange={(e) =>
              setValues({ ...values, tickets: e.target.value })
            }
          />

          <button type="submit">
            {isEnglish ? "Confirm registration" : "Confirmer l'inscription"}
          </button>

        </form>
      </div>

    </div>
  );
};

export default Register;
