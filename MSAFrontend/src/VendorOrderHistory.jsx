import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VendorOrderHistory.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const VendorOrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const BASE_URL = "http://localhost:8080";

  // Function to fetch all orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/vendor-order`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching order history:", error);
    }
  };

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="order-history-container">
      <button onClick={handleHome} className="owner-home-button">
        Home
      </button>
      <h2>Vendor Order History</h2>
      <table className="order-history-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Medicine</th>
            <th>Quantity Ordered</th>
            <th>Order Date</th>
            <th>Vendor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.medicine.tradeName}</td>
              <td>{order.quantity}</td>
              <td>{new Date(order.orderDate).toLocaleString()}</td>
              <td>{order.vendor.name}</td>
              <td className={`status ${order.status.toLowerCase()}`}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorOrderHistory;
