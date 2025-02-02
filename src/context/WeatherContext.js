import React, { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

const API_KEY = "6d3a9db9b323038e5a026f3e4d198448";
const POLLING_INTERVAL = 3000; // 3 seconds

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "London"
  );
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName, units) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
      console.log(data.weather[0]);
      setError(null);
      localStorage.setItem("lastCity", cityName);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather(city, unit);
    }, POLLING_INTERVAL);

    return () => clearInterval(interval);
  }, [city, unit]);

  return (
    <WeatherContext.Provider
      value={{ weather, city, setCity, fetchWeather, error, unit, setUnit }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
