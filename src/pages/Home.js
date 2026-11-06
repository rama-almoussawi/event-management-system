import React, { useState } from 'react';
import eventsData from '../Data/events.json';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import '../styles/Home.css';
import techImg from '../Assets/Tech Conference.jpg';
import roboticsImg from '../Assets/Robotics Bootcamp.jpg';
import aiImg from '../Assets/AI & Data Science Hackathon.jpg';

const Home = () => {
  const [search, setSearch] = useState("");

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
        <h1>Create, manage and register for events</h1>
        <p>Find something to attend, or host your own in a few clicks.</p>
        <div className="search-box-container">
          <input
            type="text"
            placeholder="Search tech events"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="category-tags">
          <span>Tech</span>
          <span>Workshops</span>
          <span>AI</span>
          <span>Coding</span>
        </div>
      </div>

      <div className="events-container">
        <div className="section-header">
          <h2>Upcoming tech events</h2>
          <Link to="/events" className="see-all-btn">
            See all
          </Link>
        </div>

        {filteredEvents.length === 0 && <p className="no-events">No tech events found.</p>}

        <div className="events-grid">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-img-container">
                <img src={imagesMap[event.id]} alt={event.title} className="event-img" />
              </div>
              
              <span className="event-category-tag">{event.category}</span>
              <h3>{event.title}</h3>
              <p>{event.date} · {event.venue}</p>
              <p>{event.seats}</p>
              <Link 
                   to="/register" 
                   className="view-details-btn"
                   onClick={() => localStorage.setItem('selectedEventId', event.id)}
              >
                View details
            </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="steps-section">
        <div className="step-card">
          <h4>1. Browse</h4>
          <p>Search and filter tech events by category and date.</p>
        </div>
        <div className="step-card">
          <h4>2. Register</h4>
          <p>Reserve your tickets with a quick form.</p>
        </div>
        <div className="step-card">
          <h4>3. Host</h4>
          <p>Create your own tech events and manage them.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;