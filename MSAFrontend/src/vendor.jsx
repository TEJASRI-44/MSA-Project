import React, { useState } from "react";
import "./phar_vend.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VendorLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const BASE_URL = "http://localhost:8080";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${BASE_URL}/vendor/verify`, {
        params: { name, phoneNumber },
      });
      if (response.data) {
        navigate("/vendorPage");
        console.log("Vendor Login:", { name, phoneNumber });
      } else {
        setErrorMessage("Invalid name or phone number.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="vendor-back">
      <div className="pharma_vend-container">
        <h2>Vendor Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default VendorLogin;
