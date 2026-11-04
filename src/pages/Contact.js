
import React, { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
    const [values, setValues] = useState({
        fname: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = [];

        if (!values.fname.trim())
            errors.push("Full name is required.");

        if (!values.email.trim())
            errors.push("Email is required.");
        else if (!/^\S+@\S+\.\S+$/.test(values.email))
            errors.push("Email is not valid.");

        if (!values.message.trim())
            errors.push("Message is required.");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        alert(
            `Form submitted successfully!\n Name: ${values.fname}\nEmail: ${values.email}\nMessage: ${values.message}`
        );
    };

    return (
        <div>
            <section className="contact py-5" id="contact">
                <div className="container">

                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold text-uppercase heading-style">
                            Contact <span className="heading-style-us">Us</span>
                        </h1>

                        <p className="text-muted fs-4 pt-4 mt-3">
                            We'd love to hear from you. Send us a message or find our details below.
                        </p>
                    </div>

                    <div className="row g-5">

                        <div className="col-md-5">
                            <h2 className="fw-bold mb-4">Get In Touch</h2>

                            <div className="d-flex align-items-center mb-4 contact-item">
                                <div className="icon-box me-3 rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>

                                <div>
                                    <h6 className="fw-bold fs-4 mb-0">Address</h6>
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
                                    <h6 className="fw-bold fs-4 mb-0">Phone Number</h6>
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
                                    <h6 className="fw-bold fs-4 mb-0">E-Mail</h6>
                                    <a
                                        href="mailto:info@eventhub.com"
                                        className="text-muted text-decoration-none fs-5">
                                        info@eventhub.com
                                    </a>
                                </div>
                            </div>

                            <div className="follow-us-section mt-5 border-top border-warning pt-4">
                                <h5 className="fw-bold fs-4 mb-3">Follow Us:</h5>

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

                                <label htmlFor="fname">Full Name</label>
                                <input
                                    name="fname"
                                    placeholder="Enter full name..."
                                    required
                                    type="text"
                                    onChange={(e) =>
                                        setValues({ ...values, fname: e.target.value })
                                    }
                                />

                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    placeholder="Enter email..."
                                    required
                                    type="email"
                                    onChange={(e) =>
                                        setValues({ ...values, email: e.target.value })
                                    }
                                />

                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows="6"
                                    placeholder="Enter message..."
                                    name="message"
                                    required
                                    onChange={(e) =>
                                        setValues({ ...values, message: e.target.value })
                                    }
                                ></textarea>

                                <button type="submit">
                                    Send Message
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
