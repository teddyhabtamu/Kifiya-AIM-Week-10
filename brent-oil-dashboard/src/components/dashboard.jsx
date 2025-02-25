import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function App() {
  const [data, setData] = useState([]);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));

    axios
      .get("http://localhost:5000/api/metrics")
      .then((response) => setMetrics(response.data))
      .catch((error) => console.error("Error fetching metrics:", error));
  }, []);

  return (
    <div className="App">
      <h1>Brent Oil Prices Dashboard</h1>
      <div>
        <h2>Model Performance Metrics</h2>
        <p>Train RMSE: {metrics.train_rmse}</p>
        <p>Test RMSE: {metrics.test_rmse}</p>
        <p>Train MAE: {metrics.train_mae}</p>
        <p>Test MAE: {metrics.test_mae}</p>
        <p>Train R-squared: {metrics.train_r2}</p>
        <p>Test R-squared: {metrics.test_r2}</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Price"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
