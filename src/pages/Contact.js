
import React, { useState } from "react";
import '../styles/Contact.css';
import Footer from '../Components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {

    const [values, setValues] = useState({
        fname: "",
        email: "",
        message: ""
    });

    const { lang } = useLanguage();
    const isEnglish = lang === 'en';

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = [];

        if (!values.fname.trim())
            errors.push(isEnglish
                ? "Full name is required."
                : "Le nom complet est obligatoire.");

        if (!values.email.trim())
            errors.push(isEnglish
                ? "Email is required."
                : "L'adresse e-mail est obligatoire.");
        else if (!/^\S+@\S+\.\S+$/.test(values.email))
            errors.push(isEnglish
                ? "Email is not valid."
                : "L'adresse e-mail n'est pas valide.");

        if (!values.message.trim())
            errors.push(isEnglish
                ? "Message is required."
                : "Le message est obligatoire.");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        alert(
            isEnglish
                ? `Form submitted successfully!\nName: ${values.fname}\nEmail: ${values.email}\nMessage: ${values.message}`
                : `Formulaire envoyé avec succès !\nNom : ${values.fname}\nE-mail : ${values.email}\nMessage : ${values.message}`
        );
    };

    return (
        <div>
            <section className="contact py-5" id="contact">
                <div className="container">

                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold text-uppercase heading-style">
                            {isEnglish ? 'Contact' : 'Contact'}
                            <span className="heading-style-us">
                                {isEnglish ? ' Us' : 'ez-nous'}
                            </span>
                        </h1>

                        <p className="text-muted fs-4 pt-4 mt-3">
                            {isEnglish
                                ? "We'd love to hear from you. Send us a message or find our details below."
                                : "Nous aimerions avoir de vos nouvelles. Envoyez-nous un message ou consultez nos coordonnées ci-dessous."}
                        </p>
                    </div>

                    <div className="row g-5">

                        <div className="col-md-5">
                            <h2 className="fw-bold mb-4">
                                {isEnglish ? "Get In Touch" : "Contactez-nous"}
                            </h2>

                            <div className="d-flex align-items-center mb-4 contact-item">
                                <div className="icon-box me-3 rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>

                                <div>
                                    <h6 className="fw-bold fs-4 mb-0">
                                        {isEnglish ? "Address" : "Adresse"}
                                    </h6>
                                    <p className="text-muted fs-5 mb-0">
                                        Baalbek, Beqaa, Lebanon
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4 contact-item">
                                <div className="icon-box me-3 rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="fas fa-phone"></i>
                                </div>

                                <div>
                                    <h6 className="fw-bold fs-4 mb-0">
                                        {isEnglish ? "Phone Number" : "Numéro de téléphone"}
                                    </h6>
                                    <p className="text-muted fs-5 mb-0">
                                        (+961) 76 005 456
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-5 contact-item">
                                <div className="icon-box me-3 rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="fas fa-envelope"></i>
                                </div>

                                <div>
                                    <h6 className="fw-bold fs-4 mb-0">
                                        E-Mail
                                    </h6>
                                    <a
                                        href="mailto:info@eventhub.com"
                                        className="text-muted text-decoration-none fs-5">
                                        info@eventhub.com
                                    </a>
                                </div>
                            </div>

                            <div className="follow-us-section mt-5 border-top pt-4">
                                <h5 className="fw-bold fs-4 mb-3">
                                    {isEnglish ? "Follow Us:" : "Suivez-nous :"}
                                </h5>

                                <div className="d-flex gap-3">
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-icon rounded-circle d-flex align-items-center fs-4 justify-content-center"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>

                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-icon rounded-circle d-flex align-items-center fs-4 justify-content-center"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>

                                    <a
                                        href="https://x.com"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-icon rounded-circle d-flex align-items-center fs-4 justify-content-center"
                                    >
                                        <i className="fab fa-x-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <form id="contact-form" onSubmit={handleSubmit}>

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

                                <label htmlFor="message">
                                    {isEnglish ? "Message" : "Message"}
                                </label>

                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder={isEnglish ? "Enter message..." : "Écrivez votre message..."}
                                    name="message"
                                    required
                                    value={values.message}
                                    onChange={(e) =>
                                        setValues({ ...values, message: e.target.value })
                                    }
                                ></textarea>

                                <button type="submit">
                                    {isEnglish ? "Send Message" : "Envoyer le message"}
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
