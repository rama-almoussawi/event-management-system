import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import '../styles/NavBar.css';

const NavBar = () => {

  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="navbar">

      <Link to="/">
        Event Hub
      </Link>

      <div className="hiddenLinks">
        <Link to="/">{lang === 'en' ? 'Home' : 'Accueil'}</Link>
        <Link to="/About">{lang === 'en' ? 'About' : 'À propos'}</Link>
        <Link to="/Events">{lang === 'en' ? 'Events' : 'Événements'}</Link>
        <Link to="/Contact">{lang === 'en' ? 'Contact' : 'Contact'}</Link>
        <Link to="/Login" className="login-btn-mobile">
          {lang === 'en' ? 'Login' : 'Connexion'}
        </Link>
      </div>

      <div className="rightSide">
        <Link to="/">{lang === 'en' ? 'Home' : 'Accueil'}</Link>
        <Link to="/About">{lang === 'en' ? 'About' : 'À propos'}</Link>
        <Link to="/Events">{lang === 'en' ? 'Events' : 'Événements'}</Link>
        <Link to="/contact">{lang === 'en' ? 'Contact' : 'Contact'}</Link>
        <Link to="/Login" className="login-btn">
          {lang === 'en' ? 'Login' : 'Connexion'}
        </Link>

        <button onClick={toggleLanguage} className="language-btn">
          {lang === 'en' ? 'FR' : 'EN'}
        </button>

      </div>
    </div>
  );
};

export default NavBar;