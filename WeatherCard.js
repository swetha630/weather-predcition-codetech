import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
      <p>🌡 Temp: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
