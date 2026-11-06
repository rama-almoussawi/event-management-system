
import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { lang } = useLanguage();
  const isEnglish = lang === "en";

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    if (isLoggedIn) {
      localStorage.setItem("userEmail", email);
    }
  }, [isLoggedIn, email]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.trim() && password.trim()) {
      setIsLoggedIn(true);
      alert(isEnglish ? "Login successful!" : "Connexion réussie !");
      window.location.href = "/";
    } else {
      alert(
        isEnglish
          ? "Please fill in all fields."
          : "Veuillez remplir tous les champs."
      );
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="login-box">
          <h1>{isEnglish ? "Welcome" : "Bienvenue"}</h1>

          <h3>{isEnglish ? "Login" : "Connexion"}</h3>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder={isEnglish ? "Email" : "E-mail"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder={isEnglish ? "Password" : "Mot de passe"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn-login" type="submit">
              {isEnglish ? "Login" : "Se connecter"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
