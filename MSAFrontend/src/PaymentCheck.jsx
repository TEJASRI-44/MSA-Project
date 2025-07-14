import React, { useState, useRef } from "react";
import axios from "axios";
import "./PaymentCheck.css";

const PaymentCheck = ({ paymentData }) => {
  const [paymentResponse, setPaymentResponse] = useState(null);
  const chequeRef = useRef();
  const BASE_URL = "http://localhost:8080";

  const handleCreatePayment = async () => {
    try {
      // Send only required fields
      const cleanedData = paymentData.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        orderDate: item.orderDate,
        medicine: {
          id: item.medicine.id,
          tradeName: item.medicine.tradeName,
          unitPurchasePrice: item.medicine.unitPurchasePrice,
        },
        vendor: {
          id: item.vendor.id,
        },
      }));

      const response = await axios.put(`${BASE_URL}/payment/create-payment`, cleanedData);
      setPaymentResponse(response.data);
    } catch (error) {
      console.error("Error creating payment:", error);
      alert("Payment creation failed. Check backend for details.");
    }
  };

  const handlePrintCheque = () => {
    const printContent = chequeRef.current;
    const newWindow = window.open("", "_blank", "width=800,height=600");
    newWindow.document.write("<html><head><title>Print Cheque</title>");
    newWindow.document.write("<style>");
    newWindow.document.write(`
      body { font-family: Arial, sans-serif; margin: 20px; }
      .payment-title { font-size: 24px; margin-bottom: 10px; }
      .cheque-container { border: 1px solid #ddd; padding: 20px; }
      table { width: 100%; border-collapse: collapse; margin-top: 10px; }
      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      th { background-color: #f2f2f2; }
    `);
    newWindow.document.write("</style></head><body>");
    newWindow.document.write(printContent.innerHTML);
    newWindow.document.write("</body></html>");
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="payment-check-container">
      <h1 className="payment-title">Payment Check Details</h1>
      {paymentData.map((item) => (
        <div className="payment-check" key={item.id}>
          <h2>Order ID: {item.id}</h2>
          <div className="medicine-details">
            <img className="medicine-image" src={item.medicine.imageUrl} alt={item.medicine.tradeName} />
            <div className="medicine-info">
              <p><strong>Trade Name:</strong> {item.medicine.tradeName}</p>
              <p><strong>Generic Name:</strong> {item.medicine.genericName}</p>
              <p><strong>Unit Purchase Price:</strong> ₹{item.medicine.unitPurchasePrice}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Expiry Date:</strong> {new Date(item.medicine.expiryDate).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="vendor-details">
            <p><strong>Vendor Name:</strong> {item.vendor.name}</p>
            <p><strong>Address:</strong> {item.vendor.address}</p>
            <p><strong>Contact Number:</strong> {item.vendor.contactNumber}</p>
          </div>
          <p><strong>Order Date:</strong> {new Date(item.orderDate).toLocaleString()}</p>
          <p><strong>Status:</strong> {item.status}</p>
        </div>
      ))}

      <button className="create-payment-button" onClick={handleCreatePayment}>
        Create Payment
      </button>

      {paymentResponse && (
        <div ref={chequeRef} className="cheque-container">
          <h2>Payment Cheque</h2>
          <p><strong>Vendor ID:</strong> {paymentResponse.vendorId}</p>
          <p><strong>Status:</strong> {paymentResponse.status}</p>
          <p><strong>Total Amount:</strong> ₹{paymentResponse.totalAmount}</p>
          <h3>Medicine Details</h3>
          <table>
            <thead>
              <tr>
                <th>Medicine ID</th>
                <th>Trade Name</th>
                <th>Quantity Ordered</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {paymentResponse.medicineDetails.map((medicine) => (
                <tr key={medicine.medicineId}>
                  <td>{medicine.medicineId}</td>
                  <td>{medicine.tradeName}</td>
                  <td>{medicine.quantityOrdered}</td>
                  <td>₹{medicine.unitSellingPrice}</td>
                  <td>₹{medicine.totalAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {paymentResponse && (
        <button className="print-cheque-button" onClick={handlePrintCheque}>
          Print Cheque
        </button>
      )}
    </div>
  );
};

export default PaymentCheck;
