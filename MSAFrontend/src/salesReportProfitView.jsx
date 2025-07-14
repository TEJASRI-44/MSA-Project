import React, { useState } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";
import { useNavigate } from "react-router-dom";

const SalesReportProfitView = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState(null);
  const [profitData, setProfitData] = useState(null);
  const [medicineReportData, setMedicineReportData] = useState(null);
  const BASE_URL = "http://localhost:8080";

  const handleGenerateReportAndProfit = async (e) => {
    e.preventDefault();
    try {
      // Fetch total sales
      const reportResponse = await axios.put(
        `${BASE_URL}/sale/report/${startDate}/${endDate}`,
        null,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const totalSales = reportResponse.data;

      // Fetch profit
      const profitResponse = await axios.put(`${BASE_URL}/sale/profit`, null, {
        params: { startDate, endDate },
        headers: { "Content-Type": "application/json" },
      });
      const profit = profitResponse.data;

      // Fetch medicine report
      const medicineReportResponse = await axios.get(
        `${BASE_URL}/sales/medicineReport?startDate=${startDate}&endDate=${endDate}`
      );
      const medicineReport = medicineReportResponse.data;

      // Set data to state
      setReportData(totalSales);
      setProfitData(profit);
      setMedicineReportData(medicineReport);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Calculate profit percentage
  const profitPercentage =
    reportData && profitData ? (profitData / reportData) * 100 : 0;

  // Prepare data for the first bar chart (total sales and profit)
  const chartData = {
    labels: ["Total Sales", "Profit Generated"],
    datasets: [
      {
        label: "Amount (in currency)",
        data: reportData && profitData ? [reportData, profitData] : [0, 0],
        backgroundColor: ["#4caf50", "#2196f3"],
        borderColor: ["#388e3c", "#1976d2"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Amount: ${context.dataset.data[context.dataIndex]}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount (in currency)",
        },
      },
    },
  };

  // Prepare data for the second bar chart (medicine report)
  const medicineChartData = {
    labels: medicineReportData
      ? medicineReportData.map((item) => item.medicineName)
      : [],
    datasets: [
      {
        label: "Total Amount",
        data: medicineReportData
          ? medicineReportData.map((item) => item.totalAmount)
          : [],
        backgroundColor: "#ff9800", // Enhanced color for total amount
        borderColor: "#f57c00",
        borderWidth: 1,
      },
      {
        label: "Total Profit",
        data: medicineReportData
          ? medicineReportData.map((item) => item.totalProfit)
          : [],
        backgroundColor: "#3f51b5", // Enhanced color for total profit
        borderColor: "#303f9f",
        borderWidth: 1,
      },
    ],
  };

  // Prepare data for the line graph (using total profit as an example)
  const lineChartData = {
    labels: medicineReportData
      ? medicineReportData.map((item) => item.medicineName)
      : [],
    datasets: [
      {
        label: "Profit Trend",
        data: medicineReportData
          ? medicineReportData.map((item) => item.totalProfit)
          : [],
        fill: false,
        borderColor: "#e91e63", // Line color
        tension: 0.1,
      },
    ],
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <button onClick={handleHome} className="owner-home-button">
        Home
      </button>

      <h2 style={{ textAlign: "center", color: "#333" }}>
        Sales and Profit Reports
      </h2>
      <form
        onSubmit={handleGenerateReportAndProfit}
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
          style={{ padding: "8px" }}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
          style={{ padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 15px",
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Generate Report
        </button>
      </form>
      {reportData !== null && profitData !== null && (
        <div style={{ marginTop: "20px" }}>
          <Bar data={chartData} options={options} />
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p>Total Sales: {reportData}</p>
            <p>Profit Generated: {profitData}</p>
            <p>Profit Percentage: {profitPercentage.toFixed(2)}%</p>
          </div>
          {/* Horizontal progress bar for profit percentage */}
          <div
            style={{
              marginTop: "20px",
              width: "100%",
              backgroundColor: "#ddd",
              borderRadius: "8px",
              height: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${profitPercentage}%`,
                height: "100%",
                backgroundColor: "#4caf50",
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                lineHeight: "20px", // vertically center the text
              }}
            >
              {profitPercentage.toFixed(2)}%
            </div>
          </div>
        </div>
      )}

      {/* New Bar Chart and Line Chart for Medicine Report */}
      {medicineReportData !== null && (
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ textAlign: "center", color: "#333" }}>
            Medicine Report
          </h3>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", height: "300px" }}>
              <Bar
                data={medicineChartData}
                options={{ ...options, maintainAspectRatio: false }}
              />
            </div>
            <div style={{ width: "100%", height: "300px", marginTop: "20px" }}>
              <Line
                data={lineChartData}
                options={{
                  ...options,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      ...options.scales.y,
                      title: { display: true, text: "Profit" },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesReportProfitView;
