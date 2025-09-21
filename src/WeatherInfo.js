import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row mb-2">
      <div className="col-6">
        <h1>{props.data.city}</h1>
        <ul className="row">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>{props.data.description}</li>
        </ul>
        <ul className="row">
          <li className="col-6">
            Humidity:{" "}
            <span className="highlighted">{props.data.humidity}%</span>
          </li>
          <li className="col-6">
            Wind: <span className="highlighted">{props.data.wind} km/h</span>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <div>
                <WeatherIcon code={props.data.icon} size={52} />
              </div>
              <div>
                <WeatherTemperature
                  celsius={Math.round(props.data.temperature)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
