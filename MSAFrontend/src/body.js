import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "./body.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const { customer, addToCart } = useOutletContext(); // Get customer and addToCart from context
  const [medicines, setMedicines] = useState([]); // Store medicines from API
  const [searchText, setSearchText] = useState(""); // Search text for filtering
  const defaultQuantity = 1; // Set a default quantity
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8080";
  console.log(BASE_URL);

  useEffect(() => {
    // Fetch medicines from backend
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/medicine`);
        setMedicines(response.data);
      } catch (error) {
        console.error("There was an error fetching the medicines data!", error);
      }
    };

    fetchMedicines();
  }, []);

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.tradeName.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (e) => setSearchText(e.target.value);

const handleAddToCart = async (medicine) => {
  console.log("🧪 customer in addToCart:", customer); // 👈 add this

  if (!customer || !customer.id) {
    alert("Your session has expired. Please log in again.");
    navigate("/login");
    return;
  }

  const customerId = customer.id;
  const medicineId = medicine.id;
  const quantity = 1;

  try {
    console.log("🛒 Adding to cart:", { customerId, medicineId, quantity });

    const response = await axios.post(
      `http://localhost:8080/cart/add?customerId=${customerId}&medicineId=${medicineId}&quantity=${quantity}`
    );

    if (response.status === 201 || response.status === 200) {
      console.log("✅ Medicine added to cart:", response.data);
      addToCart(medicine);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("❌ Error adding to cart:", error);
    alert("There was an error adding the medicine. Please try again.");
  }
};


  return (
    <div className="body">
      <div className="body-search-cart">
        <input
          type="text"
          placeholder="Search for medicines..."
          className="search-input form-control"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      <div className="Card-container">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine, index) => (
            <div className="card" key={index}>
              <img
                src={medicine.imageUrl}
                alt={medicine.tradeName}
                className="card-image"
              />
              <div className="card-content">
                <h3 className="card-title">{medicine.tradeName}</h3>
                <p className="card-price">₹{medicine.unitSellingPrice}</p>
                <p className="card-description">{medicine.genericName}</p>
                <div className="card-buttons">
                  <button
                    className="cart-button"
                    onClick={() => handleAddToCart(medicine)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No medicines found for "{searchText}"</p>
        )}
      </div>
    </div>
  );
};

export default Body;
