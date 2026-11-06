
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Footer.css";

function Footer() {
  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  return (
    <footer className="footer-section py-5">
      <div className="container">

        <div className="row mb-5 pb-5 border-bottom-dotted text-center text-md-start">

          <div className="col-md-4 d-flex flex-column flex-md-row align-items-center justify-content-center mb-4 mb-md-0 text-center text-md-start">
            <div className="contact-top-icon mb-2 mb-md-0 me-md-3">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h6 className="fw-bold fs-5 mb-0">
                {isEnglish ? "Phone" : "Téléphone"}
              </h6>
              <small className="text-muted fs-6">(+961) 76 005 456</small>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column flex-md-row align-items-center justify-content-center mb-4 mb-md-0 text-center text-md-start">
            <div className="contact-top-icon mb-2 mb-md-0 me-md-3">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h6 className="fw-bold fs-5 mb-0">Email</h6>
              <small className="text-muted fs-6">info@eventhub.com</small>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column flex-md-row align-items-center justify-content-center mb-4 mb-md-0 text-center text-md-start">
            <div className="contact-top-icon mb-2 mb-md-0 me-md-3">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h6 className="fw-bold fs-5 mb-0">
                {isEnglish ? "Address" : "Adresse"}
              </h6>
              <small className="text-muted fs-6">Baalbek, Beqaa, Lebanon</small>
            </div>
          </div>

        </div>

        <div className="row g-5 text-center text-md-start">

          <div className="col-md-3">
            <div className="footer-logo mb-3">
              <h3 className="fw-bold logo-text">EventHub</h3>
            </div>

            <p className="text-muted fs-6 small">
              {isEnglish
                ? "Your ultimate platform for discovering, managing, and joining events seamlessly."
                : "Votre plateforme idéale pour découvrir, organiser et participer facilement à des événements."}
            </p>

            <div className="footer-social d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href="https://facebook.com"
                className="social-icon-footer"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://instagram.com"
                className="social-icon-footer"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://x.com"
                className="social-icon-footer"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold fs-4 footer-heading">
              {isEnglish ? "Navigation" : "Navigation"}
            </h6>

            <ul className="list-unstyled footer-links fs-5 mt-4">
              <li><Link to="/">{isEnglish ? "Home" : "Accueil"}</Link></li>
              <li><Link to="/about">{isEnglish ? "About" : "À propos"}</Link></li>
              <li><Link to="/events">{isEnglish ? "Events" : "Événements"}</Link></li>
              <li><Link to="/contact">{isEnglish ? "Contact" : "Contact"}</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold fs-4 footer-heading">
              {isEnglish ? "Quick Links" : "Liens rapides"}
            </h6>

            <ul className="list-unstyled footer-links fs-5 mt-4">
              <li><a href="#">{isEnglish ? "Privacy Policy" : "Politique de confidentialité"}</a></li>
              <li><a href="#">{isEnglish ? "Terms & Conditions" : "Conditions générales"}</a></li>
              <li><a href="#">{isEnglish ? "Support Center" : "Centre d'assistance"}</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold fs-4 footer-heading">
              {isEnglish ? "Work Hours" : "Heures de travail"}
            </h6>

            <ul className="list-unstyled small text-muted mt-4">
              <li className="mb-3">
                <i className="far fa-clock me-2 palette-icon fs-5"></i>
                {isEnglish ? "Mon - Fri : 8AM - 6PM" : "Lun - Ven : 8h - 18h"}
              </li>
              <li>
                <i className="far fa-clock me-2 palette-icon fs-5"></i>
                {isEnglish ? "Saturday : 9AM - 2PM" : "Samedi : 9h - 14h"}
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center small text-muted mt-5 fs-6 pt-4 border-top">
          &copy; EventHub • {isEnglish
            ? "Event Management System"
            : "Système de gestion d'événements"} • CSCI426 Project Phase 1
        </div>

      </div>
    </footer>
  );
}

export default Footer;
