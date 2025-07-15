import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      alert("Error fetching weather data.");
    }
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>
      <input
        type="text"
        value={city}
        placeholder="Enter city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
