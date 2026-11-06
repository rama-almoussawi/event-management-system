
import React, { useState } from 'react';
import eventsData from '../Data/events.json';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Events.css';

import techImg from '../Assets/Tech Conference.jpg';
import roboticsImg from '../Assets/Robotics Bootcamp.jpg';
import aiImg from '../Assets/AI & Data Science Hackathon.jpg';
import cyberS from '../Assets/cybersecurity.jpg';
import uiux from '../Assets/uiuximg.jpg';
import webimg from '../Assets/webimg.jpg';

const CATEGORIES = ["Tech", "Workshop", "Conference"];

const Events = () => {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { lang } = useLanguage();
  const isEnglish = lang === 'en';

  const imagesMap = {
    1: techImg,
    2: roboticsImg,
    3: aiImg,
    4: uiux,
    5: cyberS,
    6: webimg
  };

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === "All" || event.category === selectedCategory)
  );

  return (
    <div className="home-page">

      <div className="events-container" style={{ padding: "40px 20px" }}>

        <div className="section-header">
          <h2>{isEnglish ? "Events" : "Événements"}</h2>
        </div>

        <div
          className="search-box-container"
          style={{ marginBottom: "30px", display: "flex", gap: "15px" }}
        >

          <input
            type="text"
            placeholder={isEnglish ? "Search tech events" : "Rechercher des événements"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          >
            <option value="All">
              {isEnglish ? "All Categories" : "Toutes les catégories"}
            </option>

            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {isEnglish
                  ? cat
                  : cat === "Tech"
                    ? "Technologie"
                    : cat === "Workshop"
                      ? "Atelier"
                      : "Conférence"}
              </option>
            ))}
          </select>

        </div>

        {filteredEvents.length === 0 ? (
          <p className="no-events">
            {isEnglish ? "No tech events found." : "Aucun événement trouvé."}
          </p>
        ) : null}

        <div className="events-grid">

          {filteredEvents.map((event) => (

            <div key={event.id} className="event-card">

              <div className="event-img-container">
                <img
                  src={imagesMap[event.id]}
                  alt={event.title}
                  className="event-img"
                />
              </div>

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

              <h3>{event.title}</h3>

              <p>{event.date} · {event.venue}</p>

              <p>
                {event.seats} {isEnglish ? "seats left" : "places restantes"}
              </p>

              <Link
                to="/register"
                className="view-details-btn"
                onClick={() =>
                  localStorage.setItem('selectedEventId', event.id)
                }
              >
                {isEnglish ? "View details" : "Voir les détails"}
              </Link>

            </div>

          ))}

        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Events;
