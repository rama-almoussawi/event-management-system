import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import "../styles/About.css";
import techImg from '../Assets/Tech Conference.jpg';
import roboticsImg from '../Assets/Robotics Bootcamp.jpg';
import aiImg from '../Assets/AI & Data Science Hackathon.jpg';

function About() {
  const steps = [
    { title: "Discover", description: "Browse the catalogue of events." },
    { title: "Register", description: "Book seats and get a confirmation." }
  ];

  const pastEvents = [
    { 
      id: 1, 
      title: "Tech Workshop 2026", 
      desc: "Hands-on coding labs covering full-stack web development and scalable architectures.", 
      color: "photo-blue",
      image: techImg
    },
    { 
      id: 2, 
      title: "Robotics Bootcamp", 
      desc: "Building autonomous hardware systems and scripting advanced microcontrollers.", 
      color: "photo-teal" ,
      image: roboticsImg
    },
    { 
      id: 3, 
      title: "AI & Data Science Hackathon", 
      desc: "Developing predictive machine learning models and parsing complex algorithmic problems.", 
      color: "photo-indigo" ,
      image: aiImg
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevIndex) => 
        prevIndex === pastEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(slideTimer);
  }, [pastEvents.length]);

  return (
    <div className="about-page">
      
      <main className="about-main">
        
        <section className="about-section">
          <h1 className="about-title">About EventHub</h1>
          <p className="about-mission">
            EventHub exists to make discovering, booking, and organizing events simple.
            We serve attendees who want an easy way to find and register for events,
            and organizers who need one place to create, edit, and manage theirs.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-heading">How it works</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="info-card">
                <h3 className="card-title">{step.title}</h3>
                <p className="card-text">{step.description}</p>
              </div>
            ))}
          </div>
        </section>


        <section className="about-section">
          <h2 className="section-heading">Our Past Tech Events</h2>
          <div className="carousel-container">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={`carousel-slide ${event.color} ${index === currentSlide ? 'slide-active' : ''}`}
                style={{ backgroundImage: `url("${event.image}")` }}

              >
                <div className="slide-content-overlay">
                  <span className="slide-tag">Learning Session</span>
                  <h3 className="slide-title">{event.title}</h3>
                  <p className="slide-desc">{event.desc}</p>
                </div>
              </div>
            ))}

            <div className="carousel-dots">
              {pastEvents.map((_, index) => (
                <button 
                  key={index}
                  className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to tech slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer/>

    </div>
  );
}

export default About;
