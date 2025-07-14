import React from "react";
import { useNavigate } from "react-router-dom";
import "./pharmacistPage.css";

function PharmacistPage() {
  const navigate = useNavigate();

  const handleAddMedicines = () => {
    navigate("/ownerLogin/addmedicine");
  };

  const handleAddVendors = () => {
    navigate("/ownerLogin/addvendor");
  };

  return (
    <div className="pharmacist-page">
      <h2 style={{ color: "white" }}>Pharmacist Dashboard</h2>
      <div className="card-container">
        <div className="card" onClick={handleAddMedicines}>
          <img
            src="https://www.shutterstock.com/image-illustration/online-consultation-doctor-on-smartphone-600nw-2150820867.jpg" // Replace with actual image URL
            alt="Medicines"
            className="card-image"
          />
          <h3>Add Medicines</h3>
          <p>Click here to add new medicines to the inventory.</p>
        </div>
        <div className="card" onClick={handleAddVendors}>
          <img
            src="https://img.freepik.com/free-vector/sales-representative-abstract-concept_335657-3002.jpg?t=st=1731393458~exp=1731397058~hmac=e25c24bf31baaf76f77e0eaa21103557fad3bdc8e8fcb791e70777e58dfd29d0&w=740" // Replace with actual image URL
            alt="Vendors"
            className="card-image"
          />
          <h3>Add Vendors</h3>
          <p>Click here to add new vendors to the system.</p>
        </div>
      </div>
    </div>
  );
}

export default PharmacistPage;
