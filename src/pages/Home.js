
import React, { useState } from 'react';
import eventsData from '../Data/events.json';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Home.css';

import techImg from '../Assets/Tech Conference.jpg';
import roboticsImg from '../Assets/Robotics Bootcamp.jpg';
import aiImg from '../Assets/AI & Data Science Hackathon.jpg';

const Home = () => {
  const [search, setSearch] = useState("");
  const { lang } = useLanguage();

  const isEnglish = lang === 'en';

  const imagesMap = {
    1: techImg,
    2: roboticsImg,
    3: aiImg
  };

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page">

      <div className="hero-section">
        <h1>
          {isEnglish
            ? 'Create, manage and register for events'
            : 'Créez, gérez et inscrivez-vous aux événements'}
        </h1>

        <p>
          {isEnglish
            ? 'Find something to attend, or host your own in a few clicks.'
            : 'Trouvez un événement ou organisez le vôtre en quelques clics.'}
        </p>

        <div className="search-box-container">
          <input
            type="text"
            placeholder={isEnglish ? "Search tech events" : "Rechercher des événements"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <button className="search-btn">
            {isEnglish ? 'Search' : 'Rechercher'}
          </button>
        </div>

        <div className="category-tags">
          <span>Tech</span>
          <span>{isEnglish ? 'Workshops' : 'Ateliers'}</span>
          <span>AI</span>
          <span>{isEnglish ? 'Coding' : 'Programmation'}</span>
        </div>
      </div>

      <div className="events-container">
        <div className="section-header">
          <h2>
            {isEnglish ? 'Upcoming tech events' : 'Prochains événements technologiques'}
          </h2>

          <Link to="/events" className="see-all-btn">
            {isEnglish ? 'See all' : 'Voir tout'}
          </Link>
        </div>

        {filteredEvents.length === 0 && (
          <p className="no-events">
            {isEnglish ? 'No tech events found.' : 'Aucun événement trouvé.'}
          </p>
        )}

        <div className="events-grid">
          {filteredEvents.slice(0, 3).map((event) => (
            <div key={event.id} className="event-card">

              <div className="event-img-container">
                <img
                  src={imagesMap[event.id]}
                  alt={event.title}
                  className="event-img"
                />
              </div>

              <span className="event-category-tag">
                {event.category}
              </span>

              <h3>{event.title}</h3>

              <p>{event.date} · {event.venue}</p>

              <p>{event.seats}</p>

              <Link
                to="/register"
                className="view-details-btn"
                onClick={() =>
                  localStorage.setItem('selectedEventId', event.id)
                }
              >
                {isEnglish ? 'View details' : 'Voir les détails'}
              </Link>

            </div>
          ))}
        </div>
      </div>

      <div className="steps-section">

        <div className="step-card">
          <h4>{isEnglish ? '1. Browse' : '1. Explorer'}</h4>
          <p>
            {isEnglish
              ? 'Search and filter tech events by category and date.'
              : 'Recherchez et filtrez les événements par catégorie et date.'}
          </p>
        </div>

        <div className="step-card">
          <h4>{isEnglish ? '2. Register' : '2. Inscription'}</h4>
          <p>
            {isEnglish
              ? 'Reserve your tickets with a quick form.'
              : 'Réservez vos billets avec un formulaire rapide.'}
          </p>
        </div>

        <div className="step-card">
          <h4>{isEnglish ? '3. Host' : '3. Organiser'}</h4>
          <p>
            {isEnglish
              ? 'Create your own tech events and manage them.'
              : 'Créez vos propres événements et gérez-les.'}
          </p>
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Home;
