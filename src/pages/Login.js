import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
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
      alert("Login success");
      window.location.href = "/"; 
    } else {
      alert("Please fill in all inputs");
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="login-box">
          <h1>Welcome</h1>
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-login" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;