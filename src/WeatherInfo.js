import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <ul className="row col-6">
        <li class="col-6">
          Humidity: <span className="highlighted">{props.data.humidity}%</span>
        </li>
        <li class="col-6">
          Wind: <span className="highlighted">{props.data.wind} km/h</span>
        </li>
      </ul>
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
  );
}
