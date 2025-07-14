import React, { useState } from "react";
import axios from "axios";
import "./LowStockMedicines.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const LowStockMedicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [threshold, setThreshold] = useState();
  const [vendorId, setVendorId] = useState(""); // State for vendor ID
  const BASE_URL = "http://localhost:8080";

  const fetchMedicines = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/medicines/low-stock?thresholdQuantity=${threshold}`
      );
      setMedicines(response.data);
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  const orderStock = async () => {
    // Check if vendorId is provided
    if (!vendorId) {
      alert("Please enter a valid vendor ID.");
      return;
    }

    // Prepare the payload from low stock medicines
    const payload = medicines.map((medicine) => ({
      medicine: { id: medicine.id },
      vendor: { id: parseInt(vendorId) }, // Convert vendorId to integer
      quantity: 30, // Replace with required quantity or make it dynamic
    }));

    try {
      const response = await axios.post(
        `${BASE_URL}/vendor-order/bulk`,
        payload
      );
      console.log("Order placed successfully:", response.data);
      alert("Stock order placed successfully!");
    } catch (error) {
      console.error("Error placing stock order:", error);
      alert("Failed to place stock order. Please try again.");
    }
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="medicines-container">
      <button onClick={handleHome} className="owner-home-button">
        Home
      </button>
      <h2>Low Stock Medicines</h2>
      <div className="input-container">
        <label htmlFor="threshold">Threshold Quantity: </label>
        <input
          type="number"
          id="threshold"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />
        <label htmlFor="vendorId">Vendor ID: </label>
        <input
          type="number"
          id="vendorId"
          value={vendorId}
          onChange={(e) => setVendorId(e.target.value)}
        />
        <button onClick={fetchMedicines}>Fetch Medicines</button>
      </div>
      <table className="medicines-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Trade Name</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id} className="medicine-row">
              <td>
                <img
                  src={medicine.imageUrl}
                  alt={medicine.tradeName}
                  className="medicine-image"
                />
              </td>
              <td>{medicine.tradeName}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="order-stock-button" onClick={orderStock}>
        Order Stock
      </button>
    </div>
  );
};

export default LowStockMedicines;
