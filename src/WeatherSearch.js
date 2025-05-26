import React, { useState } from "react";

import { getWeatherInfo } from "./WeatherEngine";
import "./WeatherSearch.css";

export const WeatherSearchEngine = () => {
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitted(() => (city ? true : false));
    if (city) {
      try {
        const info = await getWeatherInfo(city);
        setWeatherInfo(info);
      } catch (error) {
        console.error("Something went wrong");
      }
    }
  };
  const changeHandler = (event) => {
    setIsSubmitted(false);
    setCity(event.target.value);
  };

  return (
    <div className="weather-search-box">
      <h1>Weather Search Engine</h1>
      <form onSubmit={submitHandler}>
        <input type="search" onChange={changeHandler} />
        <input type="submit" value="Search" />
      </form>
      {isSubmitted && weatherInfo && weatherInfo.city !== "City not found" && (
        <ul>
          <li>Temperature: {weatherInfo.temperature}°C</li>
          <li>Description: {weatherInfo.description}</li>
          <li>Humidity: {weatherInfo.humidity}%</li>
          <li>Wind: {weatherInfo.wind}km/h</li>
          <li>
            <img src={weatherInfo.icon} alt="icon" />
          </li>
        </ul>
      )}
      {isSubmitted && weatherInfo && weatherInfo.city === "City not found" && (
        <p>City not found</p>
      )}
    </div>
  );
};
