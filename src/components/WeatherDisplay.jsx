import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { WeatherContext } from "../context/WeatherContext";

import "./style.css";

const WeatherDisplay = () => {
  const { weather, error, unit, setUnit } = useContext(WeatherContext);
  if (error) return <p className="error">{error}</p>;
  if (!weather)
    return (
      <ClipLoader
        color="#36d7b7"
        loading={true}
        size={50}
        className="loading"
      />
    );

  const toggleUnit = () => {
    setUnit(unit === "Celsius" ? "Fahrenheit" : "Celsius");
  };

  return (
    <div className="weather-container">
      <div>
        <h2>{weather.name}</h2>
      </div>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="weather icon"
      />
      <div className="weather-type">
        <img
          className="weather"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="weather icon"
        />
        <span>{weather.weather[0].main}</span>
      </div>

      <div className="weather-info">
        <p>
          <strong>Temperature:</strong> {weather.main.temp}°
          {unit === "metric" ? "C" : "F"}
        </p>
        <p>
          <strong>Feels Like:</strong> {weather.main.feels_like}°
          {unit === "metric" ? "C" : "F"}
        </p>
        <p>
          <strong>Humidity:</strong> {weather.main.humidity}%
        </p>
        <p>
          <strong>Wind Speed:</strong> {weather.wind.speed} m/s
        </p>
        <p>
          <strong>Condition:</strong> {weather.weather[0].description}
        </p>
        <p>
          <strong>Pressure:</strong> {weather.main.pressure} hPa
        </p>
        <button onClick={toggleUnit}>
          Switch to {unit === "metric" ? "Fahrenheit (°F)" : "Celsius (°C)"}
        </button>
      </div>
    </div>
  );
};

export default WeatherDisplay;
