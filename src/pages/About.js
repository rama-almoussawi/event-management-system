
import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import { useLanguage } from '../context/LanguageContext';
import "../styles/About.css";

import techImg from '../Assets/Tech Conference.jpg';
import roboticsImg from '../Assets/Robotics Bootcamp.jpg';
import aiImg from '../Assets/AI & Data Science Hackathon.jpg';

function About() {

  const { lang } = useLanguage();
  const isEnglish = lang === 'en';

  const steps = [
    {
      title: isEnglish ? "Discover" : "Découvrir",
      description: isEnglish
        ? "Browse the catalogue of events."
        : "Parcourez le catalogue des événements."
    },
    {
      title: isEnglish ? "Register" : "S'inscrire",
      description: isEnglish
        ? "Book seats and get a confirmation."
        : "Réservez vos places et recevez une confirmation."
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Tech Workshop 2026",
      desc: isEnglish
        ? "Hands-on coding labs covering full-stack web development and scalable architectures."
        : "Des ateliers pratiques de programmation sur le développement web full-stack et les architectures évolutives.",
      color: "photo-blue",
      image: techImg
    },
    {
      id: 2,
      title: "Robotics Bootcamp",
      desc: isEnglish
        ? "Building autonomous hardware systems and scripting advanced microcontrollers."
        : "Création de systèmes matériels autonomes et programmation de microcontrôleurs avancés.",
      color: "photo-teal",
      image: roboticsImg
    },
    {
      id: 3,
      title: "AI & Data Science Hackathon",
      desc: isEnglish
        ? "Developing predictive machine learning models and parsing complex algorithmic problems."
        : "Développement de modèles prédictifs d'apprentissage automatique et résolution de problèmes algorithmiques complexes.",
      color: "photo-indigo",
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
          <h1 className="about-title">
            {isEnglish ? "About EventHub" : "À propos d'EventHub"}
          </h1>

          <p className="about-mission">
            {isEnglish
              ? "EventHub exists to make discovering, booking, and organizing events simple. We serve attendees who want an easy way to find and register for events, and organizers who need one place to create, edit, and manage theirs."
              : "EventHub a pour objectif de faciliter la découverte, la réservation et l'organisation d'événements. Nous aidons les participants à trouver et à s'inscrire facilement aux événements, et les organisateurs à créer, modifier et gérer leurs événements au même endroit."}
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-heading">
            {isEnglish ? "How it works" : "Comment ça marche"}
          </h2>

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
          <h2 className="section-heading">
            {isEnglish ? "Our Past Tech Events" : "Nos événements technologiques passés"}
          </h2>

          <div className="carousel-container">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className={`carousel-slide ${event.color} ${index === currentSlide ? 'slide-active' : ''}`}
                style={{ backgroundImage: `url("${event.image}")` }}
              >
                <div className="slide-content-overlay">

                  <span className="slide-tag">
                    {isEnglish ? "Learning Session" : "Session d'apprentissage"}
                  </span>

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
                  aria-label={
                    isEnglish
                      ? `Go to tech slide ${index + 1}`
                      : `Aller à la diapositive ${index + 1}`
                  }
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default About;
