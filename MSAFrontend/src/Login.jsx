import React, { useState } from "react";
import axios from "axios";
import "./login.css";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCustomer } = useOutletContext(); // Access setCustomer from context
  const BASE_URL = "http://localhost:8080";

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const verifyResponse = await axios.post(
          `${BASE_URL}/customer/verify?email=${email}&password=${password}`
        );

        console.log("✅ Login response:", verifyResponse.data);

        if (
          verifyResponse.data.success === "true" &&
          verifyResponse.data.customer
        ) {
          // 🔄 Get full customer (with ID) using email
          const getResponse = await axios.get(`${BASE_URL}/customer/byemail/${email}`);
          console.log("🧩 Full customer with ID:", getResponse.data);

          const fullCustomer = getResponse.data;

          setCustomer({
            id: fullCustomer.id,
            name: fullCustomer.name,
            email: fullCustomer.email,
            password: fullCustomer.password,
          });
          localStorage.setItem("customer", JSON.stringify(fullCustomer));
          navigate("/body");
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        console.error("❌ Login error:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="Container-fluid">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="clogin-form">
          <div className="cform-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="cform-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="clogin-button">
            Login
          </button>
          <label className="account">
            If you have an account: <Link to="/register">Register</Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
