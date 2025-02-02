import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

import "./style.css";

const Search = () => {
  const { setCity, fetchWeather } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setCity(input);
      fetchWeather(input);
      setInput("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Enter City name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
