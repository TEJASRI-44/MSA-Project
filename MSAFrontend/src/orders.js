import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import "./orders.css";

const Order = () => {
  const { customer } = useOutletContext();
  const [orders, setOrders] = useState([]);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/orders/customer/${customer.id}`
        );
        setOrders(response.data);
      } catch (error) {}
    };

    if (customer && customer.id) {
      fetchOrders();
    }
  }, [customer]);

  return (
    <div className="orders">
      <h2 className="orders-title">Your Orders</h2>
      <div className="orders-items">
        {orders && orders.length > 0 ? (
          orders.map((order, index) => (
            <div className="order-item" key={index}>
              <img
                src={order.medicine.imageUrl}
                alt={order.medicine.tradeName}
                className="order-item-image"
              />
              <div className="order-item-details">
                <h3>{order.medicine.tradeName}</h3>
                <p>{order.medicine.genericName}</p>
                <p className="price">
                  Price: ₹{order.medicine.unitSellingPrice}
                </p>
                <p>Quantity: {order.quantity}</p>
                <p>Order Date: {order.orderDate}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-orders">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
