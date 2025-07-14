import React, { useState } from "react";
import axios from "axios";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8080";

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
    } else {
      setError("");

      try {
        // Send the form data to the Spring Boot backend
        const response = await axios.post(`${BASE_URL}/customer`, formData);

        // Handle successful registration
        console.log("Registration successful:", response.data);
        navigate("/login");
      } catch (error) {
        // Handle registration error
        console.error("There was an error registering the customer!", error);
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="Container-register">
      <div className="register-container">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>
          <label className="account">
            Already have an account? <Link to="/login">Login</Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Register;
