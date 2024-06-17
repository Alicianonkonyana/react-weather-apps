import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }
  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  return (
    <div className="ForecastDay">
      <div className="Forecast-day">{forecastDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="Forecast-temperatures">
        {" "}
        <span className="Forecast-max"> {maxTemperature()}</span>{" "}
        <span className="Forecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
