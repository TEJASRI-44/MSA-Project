// ShippingPage.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./shipping.css";

const ShippingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { quantities, cartItems } = location.state || {};

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateField, setStateField] = useState("");
  const [zip, setZip] = useState("");

  const handlePlaceOrder = () => {
    if (address && city && stateField && zip) {
      // You can process the order here (e.g., send data to backend)

      // Navigate to BillPage with all necessary data
      navigate("/body/bill", {
        state: { quantities, cartItems, address, city, stateField, zip },
      });
    } else {
      alert("Please fill in all the fields");
    }
  };

  // Redirect to Cart if no data is available
  if (!quantities || !cartItems) {
    return (
      <div className="shipping-page">
        <h2>No items to ship.</h2>
        <button onClick={() => navigate("/body/cart")} className="back-button">
          Go to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="shipping-page">
      <h2>Shipping Address</h2>
      <form className="shipping-form" onSubmit={(e) => e.preventDefault()}>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
        />
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter your city"
        />
        <label>State:</label>
        <input
          type="text"
          value={stateField}
          onChange={(e) => setStateField(e.target.value)}
          placeholder="Enter your state"
        />
        <label>ZIP Code:</label>
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Enter ZIP code"
        />
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="submit-button"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default ShippingPage;
