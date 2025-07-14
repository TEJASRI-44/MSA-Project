import React from "react";
import { useNavigate } from "react-router-dom";
import "./role.css";

function RolesPage() {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    switch (role) {
      case "owner":
        navigate("/ownerLogin");
        break;
      case "customer":
        navigate("/login");
        break;
      case "vendor":
        navigate("/vendor");
        break;
      case "pharmacist":
        navigate("/pharmacist");
        break;
      default:
        break;
    }
  };

  return (
    <div className="roles-container">
      <h1>Select Your Role</h1>
      <div className="roles-grid">
        <div
          className="role-card owner"
          onClick={() => handleRoleClick("owner")}
        >
          <h2>Owner</h2>
        </div>
        <div
          className="role-card customer"
          onClick={() => handleRoleClick("customer")}
        >
          <h2>Customer</h2>
        </div>
        <div
          className="role-card vendor"
          onClick={() => handleRoleClick("vendor")}
        >
          <h2>Vendor</h2>
        </div>
        <div
          className="role-card pharmacist"
          onClick={() => handleRoleClick("pharmacist")}
        >
          <h2>Pharmacist</h2>
        </div>
      </div>
    </div>
  );
}

export default RolesPage;
