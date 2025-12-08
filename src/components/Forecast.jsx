import React from "react";

export default function Forecast({ data }) {
  if (!data || !data.list) return <p>No forecast available.</p>;

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-list">
        {data.list
          .filter((_, i) => i % 8 === 0) // show 1 forecast per day
          .map((item, index) => (
            <div key={index} className="forecast-item">
              <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
              <p style={{ textTransform: "capitalize" }}>
                {item.weather[0].description}
              </p>
              <p>🌡️ {item.main.temp}°C</p>
            </div>
          ))}
      </div>
    </div>
  );
}
