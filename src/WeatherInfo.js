import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {" "}
        <strong>{props.data.city}</strong>
      </h1>

      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          {" "}
          <ul>
             <li>Pressure:{props.data.pressure} hPa</li>{" "}
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{Math.round(props.data.wind)} km/h</li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}
