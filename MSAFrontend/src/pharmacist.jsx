import React, { useState } from "react";
import "./phar_vend.css";
import { useNavigate } from "react-router-dom";

function PharmacistLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "pharma@gmail.com" && password === "Pharma@123")
      navigate("/ownerLogin/pharmacistPage");
    else {
      alert("Enter the details correctly");
    }
  };

  return (
    <div className="pharm-back">
      <div className="pharma_vend-container">
        <h2>Pharmacist Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default PharmacistLogin;
