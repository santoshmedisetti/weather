import React from "react";

export default function CurrentWeather({ data }) {
  if (!data) return null;
  if (!data.weather || !data.main) return <p>No weather data available.</p>;

  return (
    <div className="current-weather">
      <h2>{data.name}</h2>
      <h3 style={{ textTransform: "capitalize" }}>
        {data.weather[0].description}
      </h3>
      <p>🌡️ Temp: {data.main.temp}°C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>🌬️ Wind: {data.wind.speed} m/s</p>
    </div>
  );
}
