import React from "react";
import "./ohome.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OnlinePharmacyStore = () => {
  const navigate = useNavigate();
  const handleTabChangeMedicine = () => {
    navigate("/ownerLogin/addmedicine");
  };
  const handleTabChangeVendor = () => {
    navigate("/ownerLogin/addvendor");
  };
  const handleTabChangeLogout = () => {
    navigate("/role");
  };
  const handleTabChangeReport = () => {
    navigate("/ownerLogin/sales");
  };
  const handleTabChangeSales = () => {
    navigate("/ownerLogin/salesList");
  };
  const handleTabChangeLow = () => {
    navigate("/ownerLogin/lowStockMedicines");
  };
  const handleTabChangePurchase = () => {
    navigate("/ownerLogin/vendorOrderHistory");
  };
  const handleTabChangePaymentHistory = () => {
    navigate("/ownerLogin/paymentHistory");
  };

  return (
    <div>
      <div className="App">
        <div className="owner-header">
          <nav>
            <button onClick={() => handleTabChangeMedicine()}>
              Add Medicines
            </button>
            <button onClick={() => handleTabChangeVendor()}>Add Vendors</button>
            <button onClick={() => handleTabChangeReport()}>Get Report</button>
            <button onClick={() => handleTabChangeSales()}>Get Sales</button>
            <button onClick={() => handleTabChangeLow()}>
              Low Stock Medicines
            </button>
            <button onClick={() => handleTabChangePurchase()}>
              Purchase History
            </button>
            <button onClick={() => handleTabChangePaymentHistory()}>
              Payment History
            </button>
            <button onClick={() => handleTabChangeLogout()}>Logout</button>
          </nav>
        </div>
      </div>
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to the Owner Dashboard!</h2>
          <p>
            As the owner, you can manage all aspects of your medical store. Use
            the navigation options below to add new medicines and vendors,
            ensuring your store is always stocked and ready to meet customer
            needs. <br></br>
            <br></br>
            <b>Actions</b>:<br></br> <b>Add Medicines</b>: Add detailed
            information about each new medicine, including trade and generic
            names, expiry dates, pricing, and stock levels. <br></br>
            <br></br>
            <b>Add Vendors</b>: Maintain an updated list of vendors for
            streamlined ordering and inventory management.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/dsdcaxwpg/image/upload/v1731761507/dreamscope_k9yvvj.webp"
            alt="Pharmacy App on Smartphone"
          />
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img
            src="https://www.shutterstock.com/image-illustration/online-consultation-doctor-on-smartphone-600nw-2150820867.jpg"
            alt="Icon"
          />
          <h3>
            <Link to="/ownerLogin/addmedicine">Add Medicines</Link>
          </h3>
          <p>Explore a variety of health and wellness products.</p>
        </div>
        <div className="feature">
          <img
            src="https://img.freepik.com/free-vector/sales-representative-abstract-concept_335657-3002.jpg?t=st=1731393458~exp=1731397058~hmac=e25c24bf31baaf76f77e0eaa21103557fad3bdc8e8fcb791e70777e58dfd29d0&w=740"
            alt="Icon"
          />
          <h3>
            <Link to="/ownerLogin/addvendor">Add Vendors</Link>
          </h3>
          <p>Get your medications delivered quickly and safely.</p>
        </div>
        <div className="feature">
          <img
            src="https://img.freepik.com/premium-vector/doctor-writing-prescription-vector-illustration-design_996560-582.jpg?w=740"
            alt="Icon"
          />
          <h3>
            <Link to="/ownerLogin/sales">Get Report</Link>
          </h3>
          <p>Your health and safety are our top priority.</p>
        </div>
        <div className="feature">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2115248813/display_1500/stock-photo--d-shopping-list-and-shopping-basket-online-ordering-and-buying-groceries-from-a-list-completed-2115248813.jpg"
            alt="Icon"
          />
          <h3>
            <Link to="/ownerLogin/salesList">Get SalesList</Link>
          </h3>
          <p>Your health and safety are our top priority.</p>
        </div>
        <div className="feature">
          <img
            src="https://img.freepik.com/premium-photo/stacks-white-pills-blue-background-form-bar-chart-white-open-jar_541160-297.jpg?w=740"
            alt="Icon"
          />
          <h3>
            <Link to="/ownerLogin/lowStockMedicines">Low Stock Medicines</Link>
          </h3>
          <p>Your health and safety are our top priority.</p>
        </div>
        <div className="feature">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2541404523/display_1500/stock-vector-customer-profile-analysis-customer-database-customer-behavioral-data-analytics-purchase-history-2541404523.jpg"
            alt="Icon"
          />
          <h3>
            <Link to="/ownerLogin/vendorOrderHistory">Purchase History</Link>
          </h3>
          <p>Your health and safety are our top priority.</p>
        </div>
        <div className="feature">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2250298003/display_1500/stock-photo-higher-interest-rates-and-dividends-pile-of-coins-and-percentage-of-company-profits-saving-money-2250298003.jpg"
            alt="Icon"
          />
          <h3>
            <Link to="/ownerLogin/paymentHistory">Payment History</Link>
          </h3>
          <p>Your health and safety are our top priority.</p>
        </div>
      </section>
    </div>
  );
};

export default OnlinePharmacyStore;
