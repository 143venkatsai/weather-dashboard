import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay.jsx";
import "./App.css";

const App = () => {
  return (
    <WeatherProvider>
      <div className="container">
        <h1>Weather Dashboard</h1>
        <Search />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  );
};

export default App;
