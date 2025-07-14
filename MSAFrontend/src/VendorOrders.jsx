import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentCheck from "./PaymentCheck"; // Import the PaymentCheck component
import "./VendorOrders.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const VendorOrders = () => {
  const [orders, setOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [recentlyCompletedOrders, setRecentlyCompletedOrders] = useState([]);
  const [vendorId, setVendorId] = useState(); // Initial Vendor ID for the GET request
  const [inputVendorId, setInputVendorId] = useState(); // Vendor ID from input
  const BASE_URL =  "http://localhost:8080";

  // Function to fetch vendor orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/vendor-order/${vendorId}`);
      const allOrders = response.data;
      console.log("Fetched all orders:", allOrders);

      // Filter out orders with 'Pending' status
      const pending = allOrders.filter(
        (order) => order.status.toLowerCase() === "pending"
      );
      console.log("Filtered pending orders:", pending);

      setOrders(allOrders);
      setPendingOrders(pending);
    } catch (error) {
      console.error("Error fetching vendor orders:", error);
    }
  };

  // Fetch orders on component mount or when vendorId changes
  useEffect(() => {
    fetchOrders();
  }, [vendorId]);

  // Handle the refill orders action
  const handleRefillOrders = async () => {
    try {
      // Save the original list of pending orders
      const originalPendingOrders = [...pendingOrders];
      console.log(
        "Original pending orders before refill:",
        originalPendingOrders
      );

      // Send request to update (refill) pending orders
      await axios.put(`${BASE_URL}/update-pending-orders/${vendorId}`);
      alert("Orders refilled successfully!");

      // Fetch the updated orders
      const response = await axios.get(`${BASE_URL}/vendor-order/${vendorId}`);
      const allOrders = response.data;
      console.log("Fetched all orders after refill:", allOrders);

      // Update the state with the new orders
      const updatedPendingOrders = allOrders.filter(
        (order) => order.status.toLowerCase() === "pending"
      );
      console.log("Updated pending orders after refill:", updatedPendingOrders);

      // Identify recently completed orders (those that were previously pending but are no longer pending)
      const completedOrders = originalPendingOrders.filter(
        (order) =>
          !updatedPendingOrders.some(
            (updatedOrder) => updatedOrder.medicine.id === order.medicine.id
          )
      );
      console.log("Recently completed orders:", completedOrders);

      // Update the state
      setOrders(allOrders);
      setPendingOrders(updatedPendingOrders);
      setRecentlyCompletedOrders(completedOrders);
    } catch (error) {
      console.error("Error refilling orders:", error);
      alert("Failed to refill orders. Please try again.");
    }
  };

  // Handle vendor ID input change
  const handleVendorIdChange = (e) => {
    setInputVendorId(e.target.value);
  };

  // Set vendor ID from input
  const setVendorIdFromInput = () => {
    setVendorId(inputVendorId);
    console.log("Set vendor ID:", inputVendorId);
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/vendorPage");
  };

  return (
    <div className="vendor-orders-container">
      <button onClick={handleHome} className="owner-home-button">
        Home
      </button>
      <h2>Vendor Received Orders</h2>
      <div className="vendor-id-input">
        <input
          type="number"
          value={inputVendorId}
          onChange={handleVendorIdChange}
          placeholder="Enter Vendor ID"
        />
        <button className="set-vendor-id-button" onClick={setVendorIdFromInput}>
          Set Vendor ID
        </button>
      </div>

      {/* Pass only the recently completed orders to the PaymentCheck component */}

      <table className="vendor-orders-table">
        <thead>
          <tr>
            <th>Medicine ID</th>
            <th>Quantity Ordered</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="order-row"
              style={{
                backgroundColor:
                  order.status.toLowerCase() === "pending" ? "red" : "green",
              }}
            >
              <td>{order.medicine.id}</td>
              <td>{order.quantity}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="refill-orders-button" onClick={handleRefillOrders}>
        Refill Orders
      </button>
      <PaymentCheck paymentData={recentlyCompletedOrders} />
    </div>
  );
};

export default VendorOrders;
