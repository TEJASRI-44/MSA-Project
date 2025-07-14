import React, { useState } from "react";
import "./ownerLogin.css";
import { useNavigate, Link } from "react-router-dom";

const OwnerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle the login logic
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    if (email === "msa@gmail.com" && password === "Msa@123") {
      alert("Login Successful");
      navigate("/home"); // Redirect to the Owner Dashboard
    } else {
      alert("Enter the details correctly");
    }
  };

  return (
    <div className="owner-container">
      <div className="owner-login">
        <h2>Owner Login</h2>
        <form onSubmit={handleLogin} className="wlogin-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">
            Login
          </button>
          <label className="account">
            User Login: <Link to="/login">Login</Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default OwnerLogin;
