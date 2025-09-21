import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature({ celsius }) {
  return (
    <>
      <span className="temperatureTxt">{celsius}</span>
      <span className="unitsTxt">°C</span>
    </>
  );
}
