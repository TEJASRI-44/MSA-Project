import React, { useEffect, useState } from "react";
import axios from "axios";
import "./salesList.css";
import { useNavigate } from "react-router-dom";

const SalesList = () => {
  const [sales, setSales] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    // Fetch the sales data from the backend
    axios
      .get(`${BASE_URL}/sales`)
      .then((response) => {
        setSales(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });
  }, []);

  // Calculate total of all totalAmount fields
  const calculateTotalAmount = () => {
    const total = sales.reduce((sum, sale) => sum + sale.totalAmount, 0);
    setTotalAmount(total.toFixed(2));
  };

  // Calculate total profit generated
  const calculateTotalProfit = () => {
    const profit = sales.reduce(
      (sum, sale) =>
        sum +
        (sale.totalAmount -
          sale.quantitySold * sale.medicine.unitPurchasePrice),
      0
    );
    setTotalProfit(profit.toFixed(2));
  };

  // Print table function
  const printTable = () => {
    window.print();
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <div className="cont">
      <button onClick={handleHome} className="owner-home-button">
        Home
      </button>
      <h2 className="title">Sales List</h2>

      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Trade Name</th>
            <th>Sale Date</th>
            <th>Sold Quantity</th>
            <th>Total Amount</th>
            <th>Profit Generated</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={sale.id} className="table-row">
              <td className="table-cell">{index + 1}</td>
              <td className="table-cell">{sale.medicine.tradeName}</td>
              <td className="table-cell">
                {new Date(sale.saleDate).toLocaleDateString()}
              </td>
              <td className="table-cell">{sale.quantitySold}</td>
              <td className="table-cell">₹{sale.totalAmount.toFixed(2)}</td>
              <td className="table-cell">
                ₹
                {(
                  sale.totalAmount -
                  sale.quantitySold * sale.medicine.unitPurchasePrice
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={calculateTotalAmount} className="button">
          Calculate Total Amount
        </button>
        <button onClick={calculateTotalProfit} className="button">
          Calculate Total Profit
        </button>
        <button onClick={printTable} className="button">
          Print Table
        </button>
      </div>

      <div className="result-container">
        <p>
          <strong>Total Amount: </strong>₹{totalAmount}
        </p>
        <p>
          <strong>Total Profit: </strong>₹{totalProfit}
        </p>
      </div>
    </div>
  );
};

export default SalesList;
