import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PaymentHistory.css";
import { useNavigate } from "react-router-dom";

const PaymentHistory = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [vendorId, setVendorId] = useState("");
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    fetchPaymentData();
  }, []);

  const fetchPaymentData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/payments`);
      setPaymentData(response.data);
    } catch (error) {
      console.error("Error fetching payment data:", error);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return { color: "green" };
      case "Pending":
        return { color: "orange" };
      default:
        return { color: "red" };
    }
  };

  const grantCheck = async () => {
    if (!vendorId) {
      alert("Please enter a Vendor ID");
      return;
    }

    try {
      await axios.put(`${BASE_URL}/update-status/${vendorId}`);
      alert(`Check granted successfully for Vendor ID: ${vendorId}`);
      fetchPaymentData(); // Update table after granting the check
      setVendorId(""); // Clear vendorId after submission
    } catch (error) {
      console.error("Error granting check:", error);
      alert("Failed to grant check. Please try again.");
    }
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };

  return (
    <div className="payment-history-container">
      <button onClick={handleHome} className="owner-home-button">
        Home
      </button>
      <h1 className="payment-title">Payment History</h1>

      <table className="payment-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Vendor ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total Amount ($)</th>
            <th>Medicine Details</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.vendorId}</td>
              <td>{new Date(payment.date).toLocaleString()}</td>
              <td style={getStatusStyle(payment.status)}>{payment.status}</td>
              <td>{payment.totalAmount.toFixed(2)}</td>
              <td>
                <table className="medicine-table">
                  <thead>
                    <tr>
                      <th>Medicine ID</th>
                      <th>Trade Name</th>
                      <th>Quantity Ordered</th>
                      <th>Unit Selling Price ($)</th>
                      <th>Total Amount ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payment.medicineDetails.map((medicine) => (
                      <tr key={medicine.medicineId}>
                        <td>{medicine.medicineId}</td>
                        <td>{medicine.tradeName}</td>
                        <td>{medicine.quantityOrdered}</td>
                        <td>{medicine.unitSellingPrice.toFixed(2)}</td>
                        <td>{medicine.totalAmount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }} className="grant-check-section">
        <input
          type="text"
          placeholder="Enter Vendor ID"
          value={vendorId}
          onChange={(e) => setVendorId(e.target.value)}
          className="vendor-id-input"
        />
        <button onClick={grantCheck} className="grant-check-button">
          Grant Check
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;
