import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css";

const Cart = () => {
  const { removeFromCart, setCartCount, customer, checkout, cartItems } = useOutletContext();
  const navigate = useNavigate();
  const [cartDetails, setCartDetails] = useState([]);
  const [quantities, setQuantities] = useState({});
  const BASE_URL = "http://localhost:8080";

  // Fetch cart details from the server
  useEffect(() => {
    const fetchCartDetails = async () => {
      if (!customer || !customer.id) {
        console.warn("Customer is not logged in. Redirecting...");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/cart?customerId=${customer.id}`);
        setCartDetails(response.data);

        const initialQuantities = response.data.reduce((acc, item) => {
          acc[item.medicine.id] = item.quantity || 1;
          return acc;
        }, {});
        setQuantities(initialQuantities);
      } catch (error) {
        console.error("Error fetching cart details!", error);
      }
    };

    fetchCartDetails();
  }, [customer, navigate]);

  const handleQuantityChange = async (medicineId, newQuantity) => {
    setQuantities({ ...quantities, [medicineId]: newQuantity });

    try {
      await axios.put(`${BASE_URL}/cart/updateQuantity`, null, {
        params: {
          customerId: customer.id,
          medicineId,
          quantity: newQuantity,
        },
      });
    } catch (error) {
      console.error("Error updating quantity!", error);
    }
  };

  const handleRemoveFromCart = async (cartId) => {
    try {
      await axios.delete(`${BASE_URL}/cart/${cartId}`);
      setCartDetails(cartDetails.filter((item) => item.id !== cartId));
      removeFromCart(cartId);
      setCartCount((prevCount) => prevCount - 1);
    } catch (error) {
      console.error("Error removing item from cart!", error);
    }
  };

  const handleCheckout = () => {
    if (!customer || !customer.id) {
      alert("You must be logged in to checkout.");
      navigate("/login");
      return;
    }

    checkout(quantities);
    navigate("/body/shipping", { state: { quantities, cartItems } });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {customer && <p>Welcome, {customer.name}!</p>}

      {cartDetails.length === 0 ? (
        <>
          <p>No items in the cart</p>
          <button className="confirm-order-button" onClick={() => navigate("/body")}>
            Return Back To Shop
          </button>
        </>
      ) : (
        cartDetails.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.medicine.imageUrl}
              alt={item.medicine.tradeName}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3>{item.medicine.tradeName}</h3>
              <p>{item.medicine.genericName}</p>
              <p>Price: ₹{item.medicine.unitSellingPrice}</p>
              <div className="quantity-container">
                <label htmlFor={`quantity-${item.medicine.id}`}>Quantity:</label>
                <input
                  type="number"
                  id={`quantity-${item.medicine.id}`}
                  value={quantities[item.medicine.id] || 1}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.medicine.id, parseInt(e.target.value))
                  }
                  className="quantity-input"
                />
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cartDetails.length > 0 && (
        <button onClick={handleCheckout} className="checkout-button">
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
