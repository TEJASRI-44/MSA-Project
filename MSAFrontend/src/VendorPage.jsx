import React from "react";
import "./VendorPage.css";
import { useNavigate } from "react-router-dom";
const VendorPage = () => {
  const navigate = useNavigate();
  // Handle Grant Check button click
  const handleGrantCheck = () => {
    alert("Request Check clicked!");
    // Add your logic for grant check here
  };

  // Handle Refill Medicines button click
  const handleRefillMedicines = () => {
    navigate("/vendorOrders");
  };

  return (
    <div className="vendor-page-back">
      <div className="vendor-page-container">
        <h1 className="vendor-page-title">Vendor Dashboard</h1>
        <div className="vendor-cards-container">
          <div className="vendor-card" onClick={handleGrantCheck}>
            <div className="card-content">
              <h2 className="card-title">Request Check</h2>
              <p className="card-description">
                Review and approve vendor orders with ease.
              </p>
            </div>
          </div>
          <div className="vendor-card" onClick={handleRefillMedicines}>
            <div className="card-content">
              <h2 className="card-title">Refill Medicines</h2>
              <p className="card-description">
                Manage and refill medicine stock efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPage;
